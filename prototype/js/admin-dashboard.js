document.addEventListener("DOMContentLoaded", () => {
  /* =====================================================
     ADMIN ACCESS
  ===================================================== */

  const user = getCurrentAdminUser();

  if (!user || user.role !== "admin") {
    window.location.href = "login.html";
    return;
  }

  /* =====================================================
     PANEL NAVIGATION
  ===================================================== */

  const descriptions = {
    overview: "Monitor HallPass activity and moderation work.",
    moderation: "Review student submissions before they appear publicly.",
    reports: "Investigate content reported by the community.",
    users: "Manage student and contributor accounts.",
    audit: "See a transparent history of administrator actions."
  };

  function showPanel(name) {
    document.querySelectorAll(".admin-panel").forEach(panel => {
      panel.classList.toggle(
        "active",
        panel.dataset.panel === name
      );
    });

    document
      .querySelectorAll(".side-link[data-panel-target]")
      .forEach(button => {
        button.classList.toggle(
          "active",
          button.dataset.panelTarget === name
        );
      });

    const title = document.getElementById("panelTitle");
    const description = document.getElementById(
      "panelDescription"
    );

    if (title) {
      title.textContent =
        name === "moderation"
          ? "Moderation Queue"
          : name.charAt(0).toUpperCase() + name.slice(1);
    }

    if (description) {
      description.textContent =
        descriptions[name] || "";
    }
  }

  document
    .querySelectorAll("[data-panel-target]")
    .forEach(button => {
      button.addEventListener("click", () => {
        showPanel(button.dataset.panelTarget);
      });
    });

  /* =====================================================
     REVIEW DATA
  ===================================================== */

  let submittedReviews = getSubmittedReviews();
  let audit = readAuditLog();

  function refreshData() {
    submittedReviews = getSubmittedReviews();
  }

  /* =====================================================
     DASHBOARD COUNTS
  ===================================================== */

  function setText(id, value) {
    const element = document.getElementById(id);

    if (element) {
      element.textContent = value;
    }
  }

  function updateDashboardCounts() {
    const publicReviews = getReviews();
    const allReviews = getAllReviews();

    const pendingReviews = submittedReviews.filter(
      review =>
        (review.status || "Pending") === "Pending"
    );

    setText("totalReviews", allReviews.length);

    setText(
      "dormCount",
      publicReviews.filter(
        review => review.type === "Dorm"
      ).length
    );

    setText(
      "foodCount",
      publicReviews.filter(
        review => review.type === "Cafeteria"
      ).length
    );

    setText("pendingCount", pendingReviews.length);
    setText("queueCount", pendingReviews.length);
  }

  /* =====================================================
     AUDIT LOG
  ===================================================== */

  function readAuditLog() {
    try {
      const raw =
        localStorage.getItem("hallpassAudit") || "[]";

      const parsed = JSON.parse(raw);

      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error("Could not read audit log:", error);
      return [];
    }
  }

  function saveAuditLog() {
    try {
      localStorage.setItem(
        "hallpassAudit",
        JSON.stringify(audit)
      );
    } catch (error) {
      console.error("Could not save audit log:", error);
    }
  }

  function recordAction(action, target) {
    audit.unshift({
      time: new Date().toLocaleString(),
      admin: user.email || "admin@hallpass.com",
      action,
      target
    });

    saveAuditLog();
    renderAudit();

    if (typeof toast === "function") {
      toast(`${action} saved`);
    }
  }

  function renderAudit() {
    const body = document.getElementById("auditBody");

    if (!body) return;

    const rows = audit.length
      ? audit
      : [
          {
            time: "Today",
            admin: user.email || "admin@hallpass.com",
            action: "Signed in",
            target: "Admin dashboard"
          }
        ];

    body.innerHTML = rows
      .map(
        item => `
          <tr>
            <td>${escapeHtml(item.time)}</td>
            <td>${escapeHtml(
              item.admin || "admin@hallpass.com"
            )}</td>
            <td>${escapeHtml(item.action)}</td>
            <td>${escapeHtml(item.target)}</td>
          </tr>
        `
      )
      .join("");
  }

  /* =====================================================
     MODERATION QUEUE
  ===================================================== */

  function renderQueue() {
    const body = document.getElementById("pendingBody");

    if (!body) return;

    const pending = submittedReviews.filter(
      review =>
        (review.status || "Pending") === "Pending"
    );

    if (!pending.length) {
      body.innerHTML = `
        <tr>
          <td colspan="5">
            No submissions waiting for moderation.
          </td>
        </tr>
      `;

      updateDashboardCounts();
      renderRecentActivity();
      return;
    }

    body.innerHTML = pending
      .map(
        review => `
          <tr>
            <td>
              <div class="moderation-review-cell">
                ${renderSmallReviewImage(review)}

                <div>
                  <strong>${escapeHtml(
                    review.title || "Untitled Review"
                  )}</strong>

                  <br>

                  <small class="muted">
                    ${escapeHtml(
                      review.author ||
                        "Student contributor"
                    )}
                  </small>
                </div>
              </div>
            </td>

            <td>${escapeHtml(review.type || "")}</td>

            <td>
              ${escapeHtml(String(review.rating || 0))} ★
            </td>

            <td>
              <span class="badge status-pending">
                ${escapeHtml(
                  review.status || "Pending"
                )}
              </span>
            </td>

            <td>
              <div class="moderation-buttons">
                <button
                  class="btn outline review-details-button"
                  type="button"
                  data-review-id="${escapeHtml(
                    String(review.id)
                  )}"
                >
                  Details
                </button>

                <button
                  class="btn dark moderation-action"
                  type="button"
                  data-review-id="${escapeHtml(
                    String(review.id)
                  )}"
                  data-action="Approved"
                >
                  Approve
                </button>

                <button
                  class="btn outline moderation-action"
                  type="button"
                  data-review-id="${escapeHtml(
                    String(review.id)
                  )}"
                  data-action="Rejected"
                >
                  Reject
                </button>
              </div>
            </td>
          </tr>
        `
      )
      .join("");

    document
      .querySelectorAll(".review-details-button")
      .forEach(button => {
        button.addEventListener("click", () => {
          openReviewDetails(button.dataset.reviewId);
        });
      });

    document
      .querySelectorAll(".moderation-action")
      .forEach(button => {
        button.addEventListener("click", () => {
          moderateReview(
            button.dataset.reviewId,
            button.dataset.action
          );
        });
      });

    updateDashboardCounts();
    renderRecentActivity();
  }

  function moderateReview(reviewId, newStatus) {
    const review = submittedReviews.find(
      item =>
        String(item.id) === String(reviewId)
    );

    if (!review) {
      toast("Review could not be found");
      return;
    }

    const updated = updateReviewStatus(
      reviewId,
      newStatus
    );

    if (!updated) {
      toast("Review status could not be updated");
      return;
    }

    recordAction(newStatus, review.title);

    closeReviewDetails();
    refreshData();
    renderQueue();

    toast(
      newStatus === "Approved"
        ? "Review approved and published"
        : "Review rejected"
    );
  }

  /* =====================================================
     REVIEW DETAILS MODAL
  ===================================================== */

  function createReviewModal() {
    if (document.getElementById("adminReviewModal")) {
      return;
    }

    const modal = document.createElement("div");

    modal.id = "adminReviewModal";
    modal.className = "admin-review-modal";
    modal.hidden = true;

    modal.innerHTML = `
      <div
        class="admin-review-modal-backdrop"
        data-close-review-modal
      ></div>

      <div
        class="admin-review-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="adminReviewModalTitle"
      >
        <div class="admin-review-dialog-header">
          <div>
            <span class="badge">
              Student Submission
            </span>

            <h2 id="adminReviewModalTitle">
              Review Details
            </h2>
          </div>

          <button
            class="modal-close"
            type="button"
            aria-label="Close review details"
            data-close-review-modal
          >
            ×
          </button>
        </div>

        <div id="adminReviewModalContent"></div>
      </div>
    `;

    document.body.appendChild(modal);

    modal
      .querySelectorAll("[data-close-review-modal]")
      .forEach(element => {
        element.addEventListener(
          "click",
          closeReviewDetails
        );
      });

    document.addEventListener("keydown", event => {
      if (
        event.key === "Escape" &&
        !modal.hidden
      ) {
        closeReviewDetails();
      }
    });
  }

  function openReviewDetails(reviewId) {
    const review = submittedReviews.find(
      item =>
        String(item.id) === String(reviewId)
    );

    if (!review) {
      toast("Review details could not be found");
      return;
    }

    createReviewModal();

    const modal = document.getElementById(
      "adminReviewModal"
    );

    const content = document.getElementById(
      "adminReviewModalContent"
    );

    content.innerHTML = `
      <div class="admin-review-detail-grid">
        <div class="admin-review-photo-area">
          ${renderFullReviewImage(review)}
        </div>

        <div class="admin-review-information">
          <span class="badge">
            ${escapeHtml(
              review.type || "Review"
            )}
          </span>

          <h2>
            ${escapeHtml(
              review.title || "Untitled Review"
            )}
          </h2>

          <p class="stars">
            ★★★★★
            <strong>
              ${escapeHtml(
                String(review.rating || 0)
              )}
            </strong>
          </p>

          <div class="review-information-list">
            <p>
              <strong>Submitted by:</strong>
              ${escapeHtml(
                review.author ||
                  "Student contributor"
              )}
            </p>

            <p>
              <strong>Submitted:</strong>
              ${formatDate(review.submittedAt)}
            </p>

            <p>
              <strong>Category:</strong>
              ${escapeHtml(review.type || "")}
            </p>

            <p>
              <strong>Price:</strong>
              ${escapeHtml(
                review.price || "Not specified"
              )}
            </p>

            <p>
              <strong>Location:</strong>
              ${escapeHtml(
                review.distance ||
                  "Not specified"
              )}
            </p>

            <p>
              <strong>Status:</strong>
              <span class="badge">
                ${escapeHtml(
                  review.status || "Pending"
                )}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div class="admin-review-comment">
        <h3>Student Review</h3>

        <p>
          ${escapeHtml(
            review.text ||
              "No review comment was provided."
          )}
        </p>
      </div>

      <div class="admin-review-modal-actions">
        <button
          class="btn dark"
          type="button"
          id="modalApproveReview"
        >
          Approve Review
        </button>

        <button
          class="btn outline"
          type="button"
          id="modalRejectReview"
        >
          Reject Review
        </button>

        <button
          class="btn outline"
          type="button"
          data-close-review-modal
        >
          Close
        </button>
      </div>
    `;

    content
      .querySelector("#modalApproveReview")
      .addEventListener("click", () => {
        moderateReview(review.id, "Approved");
      });

    content
      .querySelector("#modalRejectReview")
      .addEventListener("click", () => {
        moderateReview(review.id, "Rejected");
      });

    content
      .querySelectorAll("[data-close-review-modal]")
      .forEach(button => {
        button.addEventListener(
          "click",
          closeReviewDetails
        );
      });

    modal.hidden = false;
    document.body.classList.add("modal-open");
  }

  function closeReviewDetails() {
    const modal = document.getElementById(
      "adminReviewModal"
    );

    if (modal) {
      modal.hidden = true;
    }

    document.body.classList.remove("modal-open");
  }

  /* =====================================================
     RECENT ACTIVITY
  ===================================================== */

  function renderRecentActivity() {
    const container = document.getElementById(
      "recentActivity"
    );

    if (!container) return;

    const latest = submittedReviews.slice(0, 4);

    if (!latest.length) {
      container.innerHTML = `
        <p class="muted">
          No student submissions yet.
        </p>
      `;

      return;
    }

    container.innerHTML = latest
      .map(
        review => `
          <div class="activity-item">
            <span class="activity-icon">
              ${review.type === "Dorm"
                ? "🏢"
                : "🍽️"}
            </span>

            <div>
              <strong>
                ${escapeHtml(
                  review.title ||
                    "Untitled Review"
                )}
              </strong>

              <br>

              <small class="muted">
                ${escapeHtml(
                  review.status || "Pending"
                )} moderation
              </small>
            </div>
          </div>
        `
      )
      .join("");
  }

  /* =====================================================
     IMAGE RENDERING
  ===================================================== */

  function renderSmallReviewImage(review) {
    if (hasReviewImage(review)) {
      return `
        <img
          class="moderation-thumbnail"
          src="${escapeHtml(review.image)}"
          alt="${escapeHtml(
            review.title || "Review photo"
          )}"
        >
      `;
    }

    return `
      <div class="moderation-thumbnail-placeholder">
        ${review.type === "Dorm" ? "🏢" : "🍽️"}
      </div>
    `;
  }

  function renderFullReviewImage(review) {
    if (hasReviewImage(review)) {
      return `
        <img
          class="admin-review-full-image"
          src="${escapeHtml(review.image)}"
          alt="${escapeHtml(
            review.title || "Review photo"
          )}"
        >
      `;
    }

    return `
      <div class="admin-review-image-placeholder">
        <span>
          ${review.type === "Dorm" ? "🏢" : "🍽️"}
        </span>

        <p>No photo was uploaded.</p>
      </div>
    `;
  }

  /* =====================================================
     OTHER ACTIONS
  ===================================================== */

  document
    .querySelectorAll(".prototype-action")
    .forEach(button => {
      button.addEventListener("click", () => {
        recordAction(
          button.textContent.trim(),
          "Prototype record"
        );
      });
    });

  const logoutButton = document.getElementById(
    "adminLogout"
  );

  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      localStorage.removeItem("hallpassUser");
      sessionStorage.removeItem("hallpassUser");
      window.location.href = "index.html";
    });
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
    if (!value) return "Not available";

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return "Not available";
    }

    return date.toLocaleString();
  }

  /* =====================================================
     INITIAL RENDER
  ===================================================== */

  createReviewModal();
  updateDashboardCounts();
  renderQueue();
  renderAudit();
  renderRecentActivity();
});

/* =====================================================
   ADMIN USER HELPER
===================================================== */

function getCurrentAdminUser() {
  try {
    return JSON.parse(
      localStorage.getItem("hallpassUser") ||
      sessionStorage.getItem("hallpassUser") ||
      "null"
    );
  } catch (error) {
    console.error("Could not read admin session:", error);
    return null;
  }
}