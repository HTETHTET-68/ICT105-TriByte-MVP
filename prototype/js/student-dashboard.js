document.addEventListener("DOMContentLoaded", () => {
  /* =====================================================
     STUDENT ACCESS
  ===================================================== */

  const user = getCurrentStudentUser();

  if (!user || user.role !== "student") {
    window.location.href = "login.html";
    return;
  }

  const normalizedUserEmail = String(user.email || "").trim().toLowerCase();
  const profileStorageKey = `hallpassProfile:${normalizedUserEmail}`;

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
    }
  ];

  let savedReviews = getSubmittedReviews();
  let myReviews = getMyReviews();

  /*
   * Show demo entries only when the student has not
   * submitted any real reviews.
   */
  if (!myReviews.length && normalizedUserEmail === "student@hallpass.com") {
    myReviews = samples;
  }

  /* =====================================================
     REVIEW HELPERS
  ===================================================== */

  function getMyReviews() {
    return savedReviews.filter(review => {
      const reviewOwner = String(
        review.ownerEmail || review.author || ""
      ).trim().toLowerCase();

      return reviewOwner === normalizedUserEmail;
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
                      class="remove-review-button"
                      type="button"
                      aria-label="Remove pending review ${escapeHtml(
                        review.title || "submission"
                      )}"
                      data-delete="${escapeHtml(
                        String(review.id)
                      )}"
                    >
                      <i class="fa-solid fa-trash-can" aria-hidden="true"></i>
                      <span>Remove</span>
                    </button>
                  `
                  : ""
              }

              ${
                status === "Approved" &&
                !String(review.id).startsWith("demo-")
                  ? review.removalRequest?.status === "Pending"
                    ? `
                      <span class="badge removal-requested">
                        <i class="fa-solid fa-clock" aria-hidden="true"></i>
                        Removal requested
                      </span>
                    `
                    : `
                      <button
                        class="request-removal-button"
                        type="button"
                        data-request-removal="${escapeHtml(
                          String(review.id)
                        )}"
                      >
                        <i class="fa-solid fa-ellipsis" aria-hidden="true"></i>
                        <span>Request removal</span>
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

    document
      .querySelectorAll("[data-request-removal]")
      .forEach(button => {
        button.addEventListener("click", () => {
          openRemovalRequestModal(
            button.dataset.requestRemoval
          );
        });
      });
  }

  function renderSubmissionImage(review) {
    if (review.image) {
      return `
        <img
          class="submission-photo"
          src="${escapeHtml(review.image)}"
          alt="${escapeHtml(review.title || "Review photo")}"
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
     REQUEST REMOVAL OF AN APPROVED REVIEW
  ===================================================== */

  function openRemovalRequestModal(reviewId) {
    const review = savedReviews.find(
      item => String(item.id) === String(reviewId)
    );

    if (!review || review.status !== "Approved") {
      toast("Only approved reviews can use a removal request");
      return;
    }

    let modal = document.getElementById(
      "studentRemovalRequestModal"
    );

    if (!modal) {
      modal = document.createElement("div");
      modal.id = "studentRemovalRequestModal";
      modal.className = "admin-review-modal";
      modal.hidden = true;
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="admin-review-modal-backdrop" data-close-removal-request></div>
      <div class="admin-review-dialog removal-request-dialog" role="dialog" aria-modal="true" aria-labelledby="removalRequestTitle">
        <div class="admin-review-dialog-header">
          <div>
            <span class="badge">Approved review</span>
            <h2 id="removalRequestTitle">Request review removal</h2>
          </div>
          <button class="modal-close" type="button" aria-label="Close removal request" data-close-removal-request>×</button>
        </div>
        <p class="muted">
          The review will remain published until an administrator approves your request.
        </p>
        <form id="removalRequestForm" class="removal-request-form">
          <div>
            <label for="removalReason">Why should this review be removed?</label>
            <select id="removalReason" required>
              <option value="">Choose a reason</option>
              <option>Uploaded by mistake</option>
              <option>Outdated information</option>
              <option>Privacy concern</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label for="removalDetails">Additional details <span class="optional-label">(optional)</span></label>
            <textarea id="removalDetails" rows="4" placeholder="Give the administrator any helpful context."></textarea>
          </div>
          <div class="admin-review-modal-actions">
            <button class="btn outline" type="button" data-close-removal-request>Cancel</button>
            <button class="btn dark" type="submit">Send Request</button>
          </div>
        </form>
      </div>
    `;

    const closeModal = () => {
      modal.hidden = true;
      document.body.classList.remove("modal-open");
    };

    modal
      .querySelectorAll("[data-close-removal-request]")
      .forEach(element => {
        element.addEventListener("click", closeModal);
      });

    modal
      .querySelector("#removalRequestForm")
      .addEventListener("submit", event => {
        event.preventDefault();

        const reason = modal
          .querySelector("#removalReason")
          .value;
        const details = modal
          .querySelector("#removalDetails")
          .value
          .trim();

        const requested = requestReviewRemoval(
          reviewId,
          reason,
          details
        );

        if (!requested) {
          toast("Removal request could not be submitted");
          return;
        }

        closeModal();
        refreshStudentReviews();
        toast("Removal request sent to an administrator");
      });

    modal.hidden = false;
    document.body.classList.add("modal-open");
    modal.querySelector("#removalReason").focus();
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
              ?.value || ""
        };

        try {
          localStorage.setItem(
            profileStorageKey,
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
        localStorage.getItem(profileStorageKey) || "null"
      );

      const displayName =
        document.getElementById("displayName");

      const language =
        document.getElementById("language");

      if (!profile) {
        if (displayName) {
          displayName.value = user.name || "Student";
        }
        return;
      }

      if (displayName) {
        displayName.value = profile.name || "";
      }

      if (language) {
        language.value =
          profile.language || "";
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
