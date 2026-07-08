document.addEventListener("DOMContentLoaded", () => {
  updateNavbarAuth();
  setupLoginForm();
  setupSignupForm();
  protectWriteReviewPage();
});

/* Update Navbar After Login */
function updateNavbarAuth() {
  const user = JSON.parse(localStorage.getItem("hallpassUser") || "null");
  const links = document.querySelector(".links");

  if (!links) return;

  const loginLink = [...links.querySelectorAll("a")].find(a =>
    a.getAttribute("href") === "login.html"
  );

  if (user && loginLink) {
    loginLink.textContent = "Logout";
    loginLink.href = "#";

    loginLink.addEventListener("click", e => {
      e.preventDefault();

      localStorage.removeItem("hallpassUser");
      toast("Logged out successfully");

      setTimeout(() => {
        window.location.href = "index.html";
      }, 800);
    });
  }
}

/* Login Logic */
function setupLoginForm() {
  const form = document.getElementById("loginForm");

  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "admin@hallpass.com" && password === "Admin123!") {
      localStorage.setItem(
        "hallpassUser",
        JSON.stringify({
          email: email,
          role: "admin"
        })
      );

      toast("Admin login successful");

      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 800);

      return;
    }

    if (email === "student@hallpass.com" && password === "Student123!") {
      localStorage.setItem(
        "hallpassUser",
        JSON.stringify({
          email: email,
          role: "student"
        })
      );

      toast("Student login successful");

      setTimeout(() => {
        window.location.href = "index.html";
      }, 800);

      return;
    }

    toast("Invalid email or password");
  });
}

/* Signup Logic */
function setupSignupForm() {
  const form = document.getElementById("signupForm");

  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();

    localStorage.setItem(
      "hallpassUser",
      JSON.stringify({
        email: "newstudent@hallpass.com",
        role: "student"
      })
    );

    toast("Account created successfully");

    setTimeout(() => {
      window.location.href = "index.html";
    }, 800);
  });
}

/* Protect Write Review Page */
function protectWriteReviewPage() {
  const isWriteReviewPage = window.location.pathname.includes("write-review.html");
  const user = JSON.parse(localStorage.getItem("hallpassUser") || "null");

  if (isWriteReviewPage && !user) {
    document.querySelector("main").innerHTML = `
      <div class="container">
        <div class="auth-card" style="margin: auto;">
          <span class="badge">Login Required</span>
          <h2>Please login first</h2>
          <p class="muted">
            You can read dorm and cafeteria reviews without login,
            but you must login before writing a review.
          </p>
          <a class="btn primary" href="login.html">Go to Login</a>
        </div>
      </div>
    `;
  }
}