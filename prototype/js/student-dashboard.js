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
  const comparisonSelections = {
    Dorm: new Set(),
    Cafeteria: new Set()
  };

  const studentEmail = document.getElementById("studentEmail");
  const profileEmail = document.getElementById("profileEmail");

  if (studentEmail) {
    studentEmail.textContent =
      `${user.email} · Manage your profile and track every review you submit.`;
  }

  if (profileEmail) {
    profileEmail.value = user.email;
  }

  let savedReviews = getSubmittedReviews();
  let myReviews = getMyReviews();

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

  function renderSavedPlaces() {
    const container = document.getElementById("savedPlaces");
    const count = document.getElementById("savedPlaceCount");
    if (!container) return;
    const favorites = getFavorites();
    const places = getPlaceListings().filter(place =>
      favorites.includes(String(place.placeId))
    );
    if (count) count.textContent = places.length;
    const categorySection = (type, icon, label) => {
      const categoryPlaces = places.filter(place => place.type === type);
      const selectedCount = comparisonSelections[type].size;
      const singularLabel = type === "Dorm" ? "dormitory" : "cafeteria";
      const cards = categoryPlaces.map(place => `
        <article class="saved-selection-card ${comparisonSelections[type].has(String(place.placeId)) ? "selected" : ""}">
          <label class="saved-selection-control">
            <input type="checkbox" data-compare-place="${escapeHtml(place.placeId)}" data-place-type="${type}" ${comparisonSelections[type].has(String(place.placeId)) ? "checked" : ""}>
            <span><i class="fa-solid fa-check" aria-hidden="true"></i><span class="sr-only">Select ${escapeHtml(place.title)} for comparison</span></span>
          </label>
          <a class="saved-selection-image" href="review-details.html?place=${encodeURIComponent(place.placeId)}">${renderSubmissionImage(place)}</a>
          <div class="saved-selection-copy">
            <div><span>${singularLabel}</span><h4>${escapeHtml(place.title)}</h4></div>
            <div class="saved-selection-actions">
              <a href="review-details.html?place=${encodeURIComponent(place.placeId)}">View place</a>
              <button type="button" data-remove-favorite="${escapeHtml(place.placeId)}" data-place-type="${type}" aria-label="Remove ${escapeHtml(place.title)} from saved places"><i class="fa-regular fa-bookmark"></i></button>
            </div>
          </div>
        </article>`).join("");
      return `
        <section class="saved-category" aria-labelledby="saved-${type.toLowerCase()}-title">
          <div class="saved-category-header">
            <div><span class="saved-category-icon"><i class="fa-solid ${icon}" aria-hidden="true"></i></span><h3 id="saved-${type.toLowerCase()}-title">${label}</h3></div>
            <span>${categoryPlaces.length} saved</span>
          </div>
          ${categoryPlaces.length ? `
            <div class="saved-selection-grid">${cards}</div>
            <div class="category-compare-bar">
              <p class="selection-help" data-comparison-status="${type}" aria-live="polite">${selectedCount < 2 ? `Select ${2 - selectedCount} more ${singularLabel}${2 - selectedCount === 1 ? "" : "s"} to compare.` : `${selectedCount} selected.`}</p>
              <button class="btn primary category-compare-button" type="button" data-compare-category="${type}" ${selectedCount < 2 ? "disabled" : ""}><span class="compare-button-icon"><i class="fa-solid fa-code-compare"></i></span><span class="compare-button-copy"><strong>Compare selected ${label}</strong><small>View features side by side</small></span><span class="compare-button-count" data-compare-count="${type}">${selectedCount}</span><i class="fa-solid fa-arrow-right compare-button-arrow" aria-hidden="true"></i></button>
            </div>
            <section class="comparison-panel" data-comparison-panel="${type}" hidden aria-labelledby="comparison-${type.toLowerCase()}-title">
              <div class="section-head"><div><span class="badge">Side-by-side</span><h3 id="comparison-${type.toLowerCase()}-title">${label} Feature Comparison</h3></div><button class="icon-text-button" type="button" data-close-comparison="${type}"><i class="fa-solid fa-xmark"></i> Close</button></div>
              <div class="comparison-table-wrap" data-comparison-table="${type}"></div>
            </section>`
            : `<p class="saved-category-empty">No saved ${label.toLowerCase()} yet.</p>`}
        </section>`;
    };
    container.innerHTML = places.length
      ? categorySection("Dorm", "fa-building", "Dormitories") +
        categorySection("Cafeteria", "fa-utensils", "Cafeterias")
      : `<div class="empty-state saved-empty"><i class="fa-regular fa-bookmark"></i><strong>No saved places yet</strong><span>Browse dorms or cafeterias and select Save.</span><a class="btn primary" href="dorms.html">Explore places</a></div>`;
  }

  document.getElementById("savedPlaces")?.addEventListener("click", event => {
    const button = event.target.closest("[data-remove-favorite]");
    if (button) {
      comparisonSelections[button.dataset.placeType]?.delete(String(button.dataset.removeFavorite));
      toggleFavorite(button.dataset.removeFavorite);
      renderSavedPlaces();
      toast("Place removed from saved items");
      return;
    }
    const checkbox = event.target.closest("[data-compare-place]");
    if (!checkbox) return;
    const placeId = String(checkbox.dataset.comparePlace);
    const type = checkbox.dataset.placeType;
    const selection = comparisonSelections[type];
    if (checkbox.checked && selection.size >= 3) {
      checkbox.checked = false;
      toast("Compare up to three places at a time");
      return;
    }
    checkbox.checked
      ? selection.add(placeId)
      : selection.delete(placeId);
    checkbox.closest(".saved-selection-card")?.classList.toggle("selected", checkbox.checked);
    updateComparisonControls(type);
  });

  function updateComparisonControls(type) {
    const button = document.querySelector(`[data-compare-category="${type}"]`);
    const status = document.querySelector(`[data-comparison-status="${type}"]`);
    const countBadge = document.querySelector(`[data-compare-count="${type}"]`);
    const count = comparisonSelections[type].size;
    if (button) button.disabled = count < 2;
    if (countBadge) countBadge.textContent = count;
    if (status) {
      status.textContent = count < 2
        ? count === 1
          ? "Select one more place to compare."
          : "Select two or three places to compare."
        : `${count} places selected.`;
    }
  }

  function renderComparison(type) {
    const panel = document.querySelector(`[data-comparison-panel="${type}"]`);
    const container = document.querySelector(`[data-comparison-table="${type}"]`);
    const places = getPlaceListings().filter(place =>
      comparisonSelections[type].has(String(place.placeId))
    );
    if (!panel || !container || places.length < 2) return;
    const numericValue = value => Number(String(value || "").replace(/,/g, "").match(/\d+(?:\.\d+)?/)?.[0] || 0);
    const highestRating = Math.max(...places.map(place => Number(place.rating)));
    const lowestPrice = Math.min(...places.map(place => numericValue(place.price)).filter(Boolean));
    const walkingDistances = places.map(place => /min walk/i.test(place.distance || "") ? numericValue(place.distance) : null);
    const validDistances = walkingDistances.filter(value => value !== null);
    const shortestDistance = validDistances.length ? Math.min(...validDistances) : null;
    const bestClass = isBest => isBest ? `<span class="comparison-best"><i class="fa-solid fa-crown"></i> Best</span>` : "";
    const row = (label, render, icon) => `
      <tr><th scope="row"><i class="fa-solid ${icon}" aria-hidden="true"></i>${label}</th>${places.map((place, index) => `<td>${render(place, index)}</td>`).join("")}</tr>`;
    const topRated = places.find(place => Number(place.rating) === highestRating);
    const bestValue = places.find(place => numericValue(place.price) === lowestPrice);
    const summary = type === "Dorm"
      ? `${escapeHtml(topRated.title)} is the highest rated, while ${escapeHtml(bestValue.title)} has the lowest monthly price.`
      : `${escapeHtml(topRated.title)} is the highest rated, while ${escapeHtml(bestValue.title)} has the lowest starting meal price.`;
    container.innerHTML = `
      <div class="comparison-summary"><span><i class="fa-solid fa-wand-magic-sparkles"></i></span><div><strong>Quick recommendation</strong><p>${summary}</p></div></div>
      <table class="comparison-table">
        <thead><tr><th scope="col">Feature</th>${places.map(place => `<th scope="col"><span class="comparison-place-image">${renderSubmissionImage(place)}</span>${escapeHtml(place.title)}<button type="button" data-remove-comparison="${escapeHtml(place.placeId)}" data-place-type="${type}">Remove</button></th>`).join("")}</tr></thead>
        <tbody>
          ${row("Rating", place => `★ ${escapeHtml(place.rating)} <small>(${escapeHtml(place.reviewCount)} reviews)</small>${bestClass(Number(place.rating) === highestRating)}`, "fa-star")}
          ${row(type === "Dorm" ? "Monthly rent" : "Meal price", place => `${escapeHtml(place.price || "Not provided")}${bestClass(numericValue(place.price) === lowestPrice)}`, "fa-wallet")}
          ${row(type === "Dorm" ? "Walk to campus" : "Location", (place, index) => `${escapeHtml(place.distance || "Not provided")}${bestClass(shortestDistance !== null && walkingDistances[index] === shortestDistance)}`, "fa-person-walking")}
          ${row("Good for", place => `<span class="comparison-tag">${escapeHtml(place.tag || "Students")}</span>`, "fa-thumbs-up")}
          ${row("Verified", place => `<span class="verification-badge"><i class="fa-solid fa-circle-check"></i> ${escapeHtml(getVerificationLabel(place))}</span>`, "fa-shield-halved")}
          ${row("Details", place => `<a class="btn outline" href="review-details.html?place=${encodeURIComponent(place.placeId)}">View full details</a>`, "fa-arrow-up-right-from-square")}
        </tbody>
      </table>`;
    panel.hidden = false;
    panel.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.getElementById("savedPlaces")?.addEventListener("click", event => {
    const compareButton = event.target.closest("[data-compare-category]");
    if (compareButton) renderComparison(compareButton.dataset.compareCategory);
    const closeButton = event.target.closest("[data-close-comparison]");
    if (closeButton) {
      document.querySelector(`[data-comparison-panel="${closeButton.dataset.closeComparison}"]`).hidden = true;
    }
    const removeButton = event.target.closest("[data-remove-comparison]");
    if (removeButton) {
      const type = removeButton.dataset.placeType;
      comparisonSelections[type].delete(String(removeButton.dataset.removeComparison));
      renderSavedPlaces();
      if (comparisonSelections[type].size >= 2) renderComparison(type);
    }
  });

  function renderRecentlyViewed() {
    const container = document.getElementById("recentlyViewed");
    if (!container) return;
    const keys = getRecentlyViewed();
    const places = getPlaceListings().filter(place =>
      keys.includes(String(place.placeId))
    ).sort((a, b) =>
      keys.indexOf(String(a.placeId)) - keys.indexOf(String(b.placeId))
    );
    container.innerHTML = places.length
      ? places.map(place => `<a class="recent-place-card" href="review-details.html?place=${encodeURIComponent(place.placeId)}"><span>${escapeHtml(place.type)}</span><strong>${escapeHtml(place.title)}</strong><small>★ ${escapeHtml(place.rating)} · ${escapeHtml(place.distance || "")}</small></a>`).join("")
      : `<p class="muted">Places you open will appear here.</p>`;
  }

  function renderNotifications() {
    const container = document.getElementById("notificationList");
    const section = document.getElementById("dashboardNotifications");
    if (!container || !section) return;
    const meaningful = getMyReviews().slice(0, 3);
    if (!meaningful.length) {
      section.hidden = true;
      return;
    }
    container.innerHTML = meaningful.map(review => {
      const status = review.status || "Pending";
      const icon = status === "Approved" ? "circle-check" : status === "Rejected" ? "circle-xmark" : "clock";
      return `<div class="notification-item status-${status.toLowerCase()}"><i class="fa-solid fa-${icon}" aria-hidden="true"></i><div><strong>${escapeHtml(review.title)}</strong><span>Your review is ${escapeHtml(status.toLowerCase())}${review.moderatedAt ? ` · Updated ${formatDate(review.moderatedAt)}` : ""}</span></div></div>`;
    }).join("");
    section.hidden = false;
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
                status === "Pending"
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
                status === "Approved"
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
  renderSavedPlaces();
  renderRecentlyViewed();
  renderNotifications();

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
    const saveProfileButton = document.getElementById("saveProfileButton");
    const saveProfileHint = document.getElementById("profileSaveButtonHint");
    const saveStatus = document.getElementById("profileSaveStatus");
    const setProfileDirty = () => {
      profileForm.classList.add("profile-dirty");
      if (saveProfileHint) saveProfileHint.textContent = "Ready to save";
      if (saveStatus) saveStatus.innerHTML = `<i class="fa-solid fa-circle"></i> Unsaved changes`;
    };
    profileForm.querySelectorAll("input:not([disabled]), select").forEach(control => {
      control.addEventListener("input", setProfileDirty);
      control.addEventListener("change", setProfileDirty);
    });
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

          profileForm.classList.remove("profile-dirty");
          saveProfileButton?.classList.add("saved");
          if (saveProfileHint) saveProfileHint.textContent = "All changes saved";
          if (saveStatus) saveStatus.innerHTML = `<i class="fa-solid fa-circle-check"></i> Saved`;
          toast("Profile settings saved");
          setTimeout(() => saveProfileButton?.classList.remove("saved"), 1200);
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
