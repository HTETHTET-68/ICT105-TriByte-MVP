document.addEventListener("DOMContentLoaded", () => {
  updateNavbarAuth();
  setupLoginForm();
  setupSignupForm();
  protectWriteReviewPage();
  setupPasswordToggles();
});

function setupPasswordToggles() {
  document.querySelectorAll("[data-toggle-password]").forEach(button => {
    button.addEventListener("click", () => {
      const input = document.getElementById(button.dataset.togglePassword);
      if (!input) return;
      const showing = input.type === "text";
      input.type = showing ? "password" : "text";
      button.setAttribute("aria-label", showing ? "Show password" : "Hide password");
      button.innerHTML = `<i class="fa-regular fa-eye${showing ? "" : "-slash"}"></i>`;
    });
  });
}

/* =====================================================
   STORAGE HELPERS
===================================================== */

function getStoredUser() {
  const localUser = localStorage.getItem("hallpassUser");
  const sessionUser = sessionStorage.getItem("hallpassUser");

  try {
    return JSON.parse(localUser || sessionUser || "null");
  } catch (error) {
    console.error("Could not read HallPass user data:", error);
    return null;
  }
}

function saveStoredUser(user) {
  const value = JSON.stringify(user);

  try {
    localStorage.setItem("hallpassUser", value);
    sessionStorage.removeItem("hallpassUser");
    return true;
  } catch (error) {
    console.warn(
      "Local Storage is unavailable or full. Using Session Storage instead.",
      error
    );

    try {
      sessionStorage.setItem("hallpassUser", value);
      return true;
    } catch (sessionError) {
      console.error("Could not save login session:", sessionError);
      return false;
    }
  }
}

function removeStoredUser() {
  localStorage.removeItem("hallpassUser");
  sessionStorage.removeItem("hallpassUser");
}

function saveConsentRecord(key, record) {
  const value = JSON.stringify(record);

  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.warn(`Could not save ${key} in Local Storage.`, error);

    try {
      sessionStorage.setItem(key, value);
      return true;
    } catch (sessionError) {
      console.error(`Could not save ${key}.`, sessionError);
      return false;
    }
  }
}

/* =====================================================
   NAVBAR AUTHENTICATION
===================================================== */

function updateNavbarAuth() {
  const user = getStoredUser();
  const links = document.querySelector(".links");

  if (!links) return;

  const loginLink = [...links.querySelectorAll("a")].find(link =>
    link.getAttribute("href") === "login.html"
  );

  if (!user || !loginLink) return;

  const existingAccountLink = links.querySelector("[data-account-link]");

  if (!existingAccountLink) {
    const accountLink = document.createElement("a");

    accountLink.dataset.accountLink = "true";
    accountLink.href =
      user.role === "admin"
        ? "dashboard.html"
        : "student-dashboard.html";

    accountLink.textContent =
      user.role === "admin"
        ? "Admin Dashboard"
        : "My Dashboard";

    links.insertBefore(accountLink, loginLink);
  }

  loginLink.textContent = "Logout";
  loginLink.href = "#";
  loginLink.classList.add("btn-nav");

  loginLink.addEventListener("click", event => {
    event.preventDefault();

    removeStoredUser();

    if (typeof toast === "function") {
      toast("Logged out successfully");
    }

    setTimeout(() => {
      window.location.href = "index.html";
    }, 600);
  });
}

function normalizeAccountEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function validateSignupEmail(email) {
  const normalized = normalizeAccountEmail(email);
  const emailPattern = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i;
  const blockedDomains = new Set([
    "example.com", "example.net", "example.org", "test.com", "invalid.com",
    "mailinator.com", "guerrillamail.com", "guerrillamail.net", "10minutemail.com",
    "tempmail.com", "temp-mail.org", "yopmail.com", "throwawaymail.com",
    "getnada.com", "sharklasers.com", "dispostable.com", "maildrop.cc"
  ]);
  const placeholderLocalParts = /^(test|fake|dummy|sample|example|email|user|asdf|qwerty)([._+-]?\d+)?$/i;

  if (!normalized || normalized.length > 254 || !emailPattern.test(normalized)) {
    return { valid: false, message: "Enter a complete email address, such as name@example.edu" };
  }

  const [localPart, domain] = normalized.split("@");
  const isBlockedDomain = blockedDomains.has(domain) ||
    [...blockedDomains].some(blocked => domain.endsWith(`.${blocked}`));

  if (isBlockedDomain || placeholderLocalParts.test(localPart)) {
    return { valid: false, message: "Use your real email address; temporary or placeholder emails are not accepted" };
  }

  return { valid: true, email: normalized };
}

function createAccountId(email) {
  return `user-${normalizeAccountEmail(email).replace(/[^a-z0-9]+/g, "-")}`;
}

function readAccounts() {
  let accounts = [];

  try {
    accounts = JSON.parse(
      localStorage.getItem("hallpassAccounts") || "[]"
    );
  } catch (error) {
    console.error("Could not read HallPass accounts:", error);
  }

  if (!Array.isArray(accounts)) accounts = [];

  let changed = false;
  accounts = accounts.map(account => {
    const normalizedEmail = normalizeAccountEmail(account.email);
    const updated = {
      ...account,
      email: normalizedEmail,
      id: account.id || createAccountId(normalizedEmail)
    };

    if (updated.id !== account.id || updated.email !== account.email) {
      changed = true;
    }

    return updated;
  });

  if (changed) {
    localStorage.setItem("hallpassAccounts", JSON.stringify(accounts));
  }

  return accounts;
}

/* =====================================================
   LOGIN
===================================================== */

function setupLoginForm() {
  const form = document.getElementById("loginForm");

  if (!form) return;

  if (!localStorage.getItem("hallpassAccounts")) {
    localStorage.setItem("hallpassAccounts", JSON.stringify([
      { id: "user-admin-hallpass-com", name: "Primary Administrator", email: "admin@hallpass.com", password: "Admin123!", role: "super_admin", status: "Active", reports: [] },
      { id: "user-student-hallpass-com", name: "Student", studentId: "DEMO001", email: "student@hallpass.com", password: "Student123!", role: "student", status: "Active", reports: [] }
    ]));
  }

  form.addEventListener("submit", event => {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const email = emailInput?.value.trim() || "";
    const password = passwordInput?.value || "";

    let user = null;
    let destination = "";

    const accounts = readAccounts();
    const normalizedEmail = normalizeAccountEmail(email);
    const savedAccount = accounts.find(
      account =>
        normalizeAccountEmail(account.email) === normalizedEmail &&
        account.password === password
    );

    if (
      (savedAccount &&
        savedAccount.role !== "student" &&
        savedAccount.status !== "Suspended")
    ) {
      user = {
        id: savedAccount.id,
        email: savedAccount.email,
        role: "admin",
        adminRole: savedAccount.role || "super_admin",
        name: savedAccount.name || "Primary Administrator"
      };

      destination = "dashboard.html";
    } else if (
      (savedAccount &&
        savedAccount.role === "student" &&
        savedAccount.status !== "Suspended")
    ) {
      user = {
        id: savedAccount.id,
        email: savedAccount.email,
        role: "student",
        name: savedAccount.name || "Student",
        studentId: savedAccount.studentId || ""
      };

      destination =
        localStorage.getItem("hallpassRedirectAfterLogin") ||
        sessionStorage.getItem("hallpassRedirectAfterLogin") ||
        "student-dashboard.html";
    } else {
      if (typeof toast === "function") {
        toast("Invalid email or password");
      }

      passwordInput?.focus();
      return;
    }

    const saved = saveStoredUser(user);

    if (!saved) {
      if (typeof toast === "function") {
        toast("Login could not be saved. Please clear browser storage.");
      }

      return;
    }

    localStorage.removeItem("hallpassRedirectAfterLogin");
    sessionStorage.removeItem("hallpassRedirectAfterLogin");

    if (typeof toast === "function") {
      toast(
        user.role === "admin"
          ? "Admin login successful"
          : "Student login successful"
      );
    }

    setTimeout(() => {
      window.location.href = destination;
    }, 600);
  });
}

/* =====================================================
   SIGNUP
===================================================== */

function setupSignupForm() {
  const form = document.getElementById("signupForm");

  if (!form) return;

  const signupEmailInput = document.getElementById("signupEmail");
  signupEmailInput?.addEventListener("input", () => signupEmailInput.setCustomValidity(""));

  form.addEventListener("submit", event => {
    event.preventDefault();

    const consent = document.getElementById(
      "signupPrivacyConsent"
    );

    if (!consent?.checked) {
      if (typeof toast === "function") {
        toast(
          "Please accept the privacy consent to create an account"
        );
      }

      consent?.focus();
      return;
    }

    const name =
      document.getElementById("signupName")?.value.trim() || "";

    const studentId =
      document
        .getElementById("signupStudentId")
        ?.value.trim() || "";

    const email =
      document.getElementById("signupEmail")?.value.trim() ||
      "";

    const password =
      document.getElementById("signupPassword")?.value || "";
    const confirmPassword =
      document.getElementById("signupConfirmPassword")?.value || "";

    if (!name || !studentId || !email || !password) {
      if (typeof toast === "function") {
        toast("Please complete all required fields");
      }

      return;
    }

    if (password.length < 8 ||
        !/[A-Z]/.test(password) ||
        !/[a-z]/.test(password) ||
        !/[0-9]/.test(password)) {
      if (typeof toast === "function") {
        toast("Use 8+ characters with uppercase, lowercase, and a number");
      }

      document.getElementById("signupPassword")?.focus();
      return;
    }
    if (password !== confirmPassword) {
      toast("Passwords do not match");
      document.getElementById("signupConfirmPassword")?.focus();
      return;
    }

    const emailValidation = validateSignupEmail(email);
    if (!emailValidation.valid) {
      if (typeof toast === "function") {
        toast(emailValidation.message);
      }
      signupEmailInput?.setCustomValidity(emailValidation.message);
      signupEmailInput?.reportValidity();
      signupEmailInput?.focus();
      return;
    }

    const normalizedEmail = emailValidation.email;
    const accountId = createAccountId(normalizedEmail);
    const user = {
      id: accountId,
      email: normalizedEmail,
      role: "student",
      name,
      studentId
    };

    const accounts = readAccounts();

    if (accounts.some(account => normalizeAccountEmail(account.email) === normalizedEmail)) {
      if (typeof toast === "function") {
        toast("An account already uses this email");
      }
      return;
    }

    accounts.push({
      id: accountId,
      name,
      studentId,
      email: normalizedEmail,
      password,
      role: "student",
      status: "Active",
      reports: []
    });

    localStorage.setItem(
      "hallpassAccounts",
      JSON.stringify(accounts)
    );

    const userSaved = saveStoredUser(user);

    if (!userSaved) {
      if (typeof toast === "function") {
        toast(
          "Account session could not be saved. Please clear browser storage."
        );
      }

      return;
    }

    saveConsentRecord("hallpassSignupConsent", {
      accepted: true,
      email: normalizedEmail,
      noticeVersion: "prototype-1.0",
      acceptedAt: new Date().toISOString()
    });

    if (typeof toast === "function") {
      toast("Account created successfully");
    }

    setTimeout(() => {
      window.location.href = "student-dashboard.html";
    }, 600);
  });
}

/* =====================================================
   PROTECT WRITE REVIEW PAGE
===================================================== */

function protectWriteReviewPage() {
  const currentPage =
    window.location.pathname.split("/").pop() || "";

  const isWriteReviewPage =
    currentPage === "write-review.html";

  const user = getStoredUser();

  if (!isWriteReviewPage || user) return;

  try {
    localStorage.setItem(
      "hallpassRedirectAfterLogin",
      "write-review.html"
    );
  } catch (error) {
    sessionStorage.setItem(
      "hallpassRedirectAfterLogin",
      "write-review.html"
    );
  }

  const main = document.querySelector("main");

  if (!main) return;

  main.innerHTML = `
    <div class="container">
      <div
        class="auth-card"
        style="
          width: min(620px, 92%);
          margin: 3rem auto;
          text-align: center;
        "
      >
        <span class="badge">Login Required</span>

        <h2>Please login first</h2>

        <p class="muted">
          You can read dormitory reviews, cafeteria reviews,
          and campus guides without logging in. Login is only
          required when you want to submit a review.
        </p>

        <div
          style="
            display: flex;
            justify-content: center;
            gap: 0.75rem;
            flex-wrap: wrap;
          "
        >
          <a class="btn primary" href="login.html">
            Go to Login
          </a>

          <a class="btn outline" href="dorms.html">
            Read Reviews
          </a>
        </div>
      </div>
    </div>
  `;
}
