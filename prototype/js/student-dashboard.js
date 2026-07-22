document.addEventListener("DOMContentLoaded", () => {
  /* =====================================================
     STUDENT ACCESS
  ===================================================== */

  const user = getCurrentStudentUser();

  if (!user || user.role !== "student") {
    window.location.href = "login.html";
    return;
  }

  const studentEmail = document.getElementById("studentEmail");
  const profileEmail = document.getElementById("profileEmail");

  if (studentEmail) {
    studentEmail.textContent =
      `${user.email} · Manage your profile and track every review you submit.`;
  }

  if (profileEmail) {
    profileEmail.value = user.email;
  }

  /* =====================================================
     DEMO SUBMISSIONS
  ===================================================== */

  const samples = [
    {
      id: "demo-1",
      title: "Lak Hok Garden Residence",
      type: "Dorm",
      rating: 4,
      status: "Approved",
      submittedAt: new Date(
        Date.now() - 86400000 * 5
      ).toISOString(),
      text:
        "Quiet rooms, helpful staff, and convenient access to local shops.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "demo-2",
      title: "Building 6 Food Court",
      type: "Cafeteria",
      rating: 4.5,
      status: "Pending",
      submittedAt: new Date(
        Date.now() - 86400000
      ).toISOString(),
      text: "Affordable lunch with many choices.",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80"
    }
  ];

  let savedReviews = getSubmittedReviews();
  let myReviews = getMyReviews();

  /*
   * Show demo entries only when the student has not
   * submitted any real reviews.
   */
  if (!myReviews.length) {
    myReviews = samples;
  }

  /* =====================================================
     REVIEW HELPERS
  ===================================================== */

  function getMyReviews() {
    return savedReviews.filter(review => {
      return (
        !review.author ||
        review.author === user.email
      );
    });
  }

  function refreshStudentReviews() {
    savedReviews = getSubmittedReviews();
    myReviews = getMyReviews();

    updateCounts();
    renderSubmissions();
  }

  /* =====================================================
     COUNTS
  ===================================================== */

  function setText(id, value) {
    const element = document.getElementById(id);

    if (element) {
      element.textContent = value;
    }
  }

  function updateCounts() {
    setText("myTotal", myReviews.length);

    setText(
      "myPending",
      myReviews.filter(
        review =>
          (review.status || "Pending") === "Pending"
      ).length
    );

    setText(
      "myApproved",
      myReviews.filter(
        review => review.status === "Approved"
      ).length
    );

    setText(
      "myRejected",
      myReviews.filter(
        review => review.status === "Rejected"
      ).length
    );
  }

  /* =====================================================
     SUBMISSION RENDERING
  ===================================================== */

  function renderSubmissions() {
    const filter = document.getElementById(
      "submissionFilter"
    );

    const container = document.getElementById(
      "mySubmissions"
    );

    if (!container) return;

    const selectedStatus = filter?.value || "All";

    const items = myReviews.filter(review => {
      const reviewStatus =
        review.status || "Pending";

      return (
        selectedStatus === "All" ||
        reviewStatus === selectedStatus
      );
    });

    if (!items.length) {
      container.innerHTML = `
        <div class="empty-state">
          <span>📝</span>

          <h3>No submissions here</h3>

          <p class="muted">
            Try another filter or write your first review.
          </p>

          <a
            class="btn primary"
            href="write-review.html"
          >
            Write a review
          </a>
        </div>
      `;

      return;
    }

    container.innerHTML = items
      .map(review => {
        const status =
          review.status || "Pending";

        return `
          <article class="submission-row">
            <div class="submission-media">
              ${renderSubmissionImage(review)}
            </div>

            <div class="submission-content">
              <div class="meta">
                <span>
                  ${escapeHtml(review.type || "")}
                </span>

                <span>
                  ${formatDate(review.submittedAt)}
                </span>
              </div>

              <h3>
                ${escapeHtml(
                  review.title || "Untitled Review"
                )}
              </h3>

              <p class="stars">
                ★★★★★
                <strong>
                  ${escapeHtml(
                    String(review.rating || 0)
                  )}
                </strong>
              </p>

              <p class="muted">
                ${escapeHtml(
                  review.text ||
                    "Your review is waiting for moderation."
                )}
              </p>
            </div>

            <div class="submission-status">
              <span
                class="
                  badge
                  status-${status.toLowerCase()}
                "
              >
                ${escapeHtml(status)}
              </span>

              ${
                status === "Pending" &&
                !String(review.id).startsWith("demo-")
                  ? `
                    <button
                      class="text-button"
                      type="button"
                      data-delete="${escapeHtml(
                        String(review.id)
                      )}"
                    >
                      Remove
                    </button>
                  `
                  : ""
              }
            </div>
          </article>
        `;
      })
      .join("");

    document
      .querySelectorAll("[data-delete]")
      .forEach(button => {
        button.addEventListener("click", () => {
          removePendingSubmission(
            button.dataset.delete
          );
        });
      });
  }

  function renderSubmissionImage(review) {
    if (hasReviewImage(review)) {
      return `
        <img
          class="submission-photo"
          src="${escapeHtml(review.image)}"
          alt="${escapeHtml(
            review.title || "Review photo"
          )}"
        >
      `;
    }

    return `
      <div class="submission-emoji">
        ${review.type === "Dorm" ? "🏢" : "🍽️"}
      </div>
    `;
  }

  /* =====================================================
     REMOVE PENDING REVIEW
  ===================================================== */

  function removePendingSubmission(reviewId) {
    const review = savedReviews.find(
      item =>
        String(item.id) === String(reviewId)
    );

    if (!review) {
      toast("Submission could not be found");
      return;
    }

    if (
      (review.status || "Pending") !== "Pending"
    ) {
      toast(
        "Only pending submissions can be removed"
      );
      return;
    }

    const confirmed = window.confirm(
      "Remove this pending review?"
    );

    if (!confirmed) return;

    const removed = deleteReview(reviewId);

    if (!removed) {
      toast("Submission could not be removed");
      return;
    }

    refreshStudentReviews();
    toast("Submission removed");
  }

  /* =====================================================
     FILTER
  ===================================================== */

  const submissionFilter =
    document.getElementById("submissionFilter");

  if (submissionFilter) {
    submissionFilter.addEventListener(
      "change",
      renderSubmissions
    );
  }

  /* =====================================================
     DASHBOARD TABS
  ===================================================== */

  document
    .querySelectorAll("[data-student-tab]")
    .forEach(button => {
      button.addEventListener("click", () => {
        document
          .querySelectorAll(".tab-button")
          .forEach(tabButton => {
            tabButton.classList.toggle(
              "active",
              tabButton === button
            );
          });

        document
          .querySelectorAll(".student-panel")
          .forEach(panel => {
            panel.classList.toggle(
              "active",
              panel.dataset.studentPanel ===
                button.dataset.studentTab
            );
          });
      });
    });

  /* =====================================================
     PROFILE SETTINGS
  ===================================================== */

  const profileForm =
    document.getElementById("profileForm");

  loadProfileSettings();

  if (profileForm) {
    profileForm.addEventListener(
      "submit",
      event => {
        event.preventDefault();

        const profile = {
          name:
            document
              .getElementById("displayName")
              ?.value.trim() || "",
          language:
            document.getElementById("language")
              ?.value || "",
          notifications:
            document.getElementById(
              "notifications"
            )?.value || ""
        };

        try {
          localStorage.setItem(
            "hallpassProfile",
            JSON.stringify(profile)
          );

          toast("Profile settings saved");
        } catch (error) {
          console.error(
            "Could not save profile settings:",
            error
          );

          toast(
            "Profile settings could not be saved"
          );
        }
      }
    );
  }

  function loadProfileSettings() {
    try {
      const profile = JSON.parse(
        localStorage.getItem(
          "hallpassProfile"
        ) || "null"
      );

      if (!profile) return;

      const displayName =
        document.getElementById("displayName");

      const language =
        document.getElementById("language");

      const notifications =
        document.getElementById(
          "notifications"
        );

      if (displayName) {
        displayName.value = profile.name || "";
      }

      if (language) {
        language.value =
          profile.language || "";
      }

      if (notifications) {
        notifications.value =
          profile.notifications || "";
      }
    } catch (error) {
      console.error(
        "Could not load profile settings:",
        error
      );
    }
  }

  /* =====================================================
     SECURITY HELPERS
  ===================================================== */

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function formatDate(value) {
    if (!value) {
      return new Date().toLocaleDateString();
    }

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return "Unknown date";
    }

    return date.toLocaleDateString();
  }

  /* =====================================================
     INITIAL RENDER
  ===================================================== */

  updateCounts();
  renderSubmissions();
});

/* =====================================================
   STUDENT SESSION HELPER
===================================================== */

function getCurrentStudentUser() {
  try {
    return JSON.parse(
      localStorage.getItem("hallpassUser") ||
      sessionStorage.getItem("hallpassUser") ||
      "null"
    );
  } catch (error) {
    console.error(
      "Could not read student session:",
      error
    );

    return null;
  }
}