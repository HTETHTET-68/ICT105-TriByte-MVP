document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menu");
  const links = document.querySelector(".links");

  if (btn && links) {
    btn.onclick = () => {
      links.classList.toggle("show");
    };
  }

  document.querySelectorAll("[data-year]").forEach(element => {
    element.textContent = new Date().getFullYear();
  });
});

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderReviewPhoto(review) {
  if (review.image) {
    return `
      <img
        class="review-card-image"
        src="${review.image}"
        alt="${escapeHtml(review.title || "Review photo")}"
      >
    `;
  }

  return `
    <span class="review-emoji">
      ${review.emoji || "⭐"}
    </span>
  `;
}

function renderCards(containerId, type) {
  const element = document.getElementById(containerId);

  if (!element) return;

  const search = document.getElementById("searchInput");
  const rating = document.getElementById("ratingFilter");

  if (search) {
    search.value =
      new URLSearchParams(window.location.search).get("search") || "";
  }

  function draw() {
    let items = getReviews().filter(review => review.type === type);

    const query = (search?.value || "").trim().toLowerCase();
    const minimumRating = Number(rating?.value || 0);

    items = items.filter(review => {
      const title = String(review.title || "").toLowerCase();

      return (
        title.includes(query) &&
        Number(review.rating) >= minimumRating
      );
    });

    element.innerHTML =
      items
        .map(
          review => `
            <article class="card review-card">
              <div class="review-img">
                ${renderReviewPhoto(review)}
              </div>

              <div class="review-body">
                <span class="badge">
                  ${escapeHtml(review.tag || review.type)}
                </span>

                <h3>${escapeHtml(review.title)}</h3>

                <p class="stars">
                  ★★★★★
                  <b style="color:#14213d;">
                    ${escapeHtml(review.rating)}
                  </b>
                </p>

                <p class="muted">
                  ${escapeHtml(review.text)}
                </p>

                <div class="meta">
                  <span>${escapeHtml(review.price || "")}</span>
                  <span>${escapeHtml(review.distance || "")}</span>
                </div>

                <br>

                <a
                  class="btn outline"
                  href="review-details.html?id=${encodeURIComponent(review.id)}"
                >
                  Read More
                </a>
              </div>
            </article>
          `
        )
        .join("") ||
      '<p class="muted">No matching reviews found.</p>';
  }

  search?.addEventListener("input", draw);
  rating?.addEventListener("change", draw);

  draw();
}
