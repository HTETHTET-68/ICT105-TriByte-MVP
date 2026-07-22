document.addEventListener("DOMContentLoaded", () => {
  updateNavbarAuth();
  setupLoginForm();
  setupSignupForm();
  protectWriteReviewPage();
});

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

/* =====================================================
   LOGIN
===================================================== */

function setupLoginForm() {
  const form = document.getElementById("loginForm");

  if (!form) return;

  form.addEventListener("submit", event => {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const email = emailInput?.value.trim() || "";
    const password = passwordInput?.value || "";

    let user = null;
    let destination = "";

    if (
      email === "admin@hallpass.com" &&
      password === "Admin123!"
    ) {
      user = {
        email,
        role: "admin"
      };

      destination = "dashboard.html";
    } else if (
      email === "student@hallpass.com" &&
      password === "Student123!"
    ) {
      user = {
        email,
        role: "student"
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

    if (!name || !studentId || !email || !password) {
      if (typeof toast === "function") {
        toast("Please complete all required fields");
      }

      return;
    }

    if (password.length < 6) {
      if (typeof toast === "function") {
        toast("Password must contain at least 6 characters");
      }

      document.getElementById("signupPassword")?.focus();
      return;
    }

    const user = {
      email,
      role: "student"
    };

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
      email,
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