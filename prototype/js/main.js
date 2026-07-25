document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menu");
  const links = document.querySelector(".links");

  if (btn && links) {
    btn.type = "button";
    btn.setAttribute("aria-label", "Toggle navigation");
    btn.setAttribute("aria-expanded", "false");

    btn.onclick = () => {
      links.classList.toggle("show");
      btn.setAttribute(
        "aria-expanded",
        String(links.classList.contains("show"))
      );
    };

    links.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        links.classList.remove("show");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll("[data-year]").forEach(element => {
    element.textContent = new Date().getFullYear();
  });

  enhanceFooter();
});

function enhanceFooter() {
  const footer = document.querySelector(".footer");

  if (!footer) return;

  footer.innerHTML = `
    <div class="container footer-grid">
      <div>
        <h3><a href="index.html">HallPass</a></h3>
        <p>
          Student reviews and campus survival guide for
          Rangsit University students.
        </p>
      </div>

      <nav class="footer-simple-links" aria-label="Features">
        <h4>Features</h4>
        <a href="dorms.html">Dorms</a>
        <a href="cafeteria.html">Cafeterias</a>
        <a href="guide.html">Guides</a>
      </nav>

      <div class="footer-simple-links">
        <h4>Contact</h4>
        <a href="mailto:hello@hallpass.com">Email: hello@hallpass.com</a>
        <a href="tel:+66123456789">Phone: +66 123 456 789</a>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Rangsit+University+Thailand"
          target="_blank"
          rel="noopener noreferrer"
        >Rangsit University, Thailand</a>
      </div>
    </div>
    <div class="container footer-copyright">
      <span>© ${new Date().getFullYear()} HallPass. All rights reserved.</span>
    </div>
  `;
}

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
        src="${escapeHtml(review.image)}"
        alt="${escapeHtml(review.title || "Review location")}"
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
  const sort = document.getElementById("sortFilter");

  if (search) {
    search.value =
      new URLSearchParams(window.location.search).get("search") || "";
  }

  function draw() {
    let items = getPlaceListings(type);

    const query = (search?.value || "").trim().toLowerCase();
    const minimumRating = Number(rating?.value || 0);

    items = items.filter(review => {
      const searchableText = [
        review.title,
        review.tag,
        review.text
      ].join(" ").toLowerCase();

      return (
        searchableText.includes(query) &&
        Number(review.rating) >= minimumRating
      );
    });

    const sortMode = sort?.value || "recommended";

    items.sort((a, b) => {
      if (sortMode === "price") {
        return numericValue(a.price) - numericValue(b.price);
      }

      if (sortMode === "distance") {
        return distanceValue(a.distance) - distanceValue(b.distance);
      }

      return Number(b.rating) - Number(a.rating);
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
                <div class="review-labels">
                  <span class="badge">
                    ${escapeHtml(review.type)}
                  </span>
                  <span class="review-tag">
                    ${escapeHtml(review.tag || "")}
                  </span>
                </div>

                <h3>${escapeHtml(review.title)}</h3>

                <p class="stars">
                  ★★★★★
                  <b style="color:#14213d;">
                    ${escapeHtml(review.rating)}
                  </b>
                  <span class="review-count">
                    ${escapeHtml(review.reviewCount)}
                    ${review.reviewCount === 1 ? "review" : "reviews"}
                  </span>
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
                  href="review-details.html?place=${encodeURIComponent(review.placeId)}"
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
  sort?.addEventListener("change", draw);

  draw();
}

function numericValue(value) {
  const number = String(value || "")
    .replaceAll(",", "")
    .match(/\d+(?:\.\d+)?/);

  return number ? Number(number[0]) : Number.POSITIVE_INFINITY;
}

function distanceValue(value) {
  const text = String(value || "").toLowerCase();

  if (text.includes("main campus")) return 0;
  if (text.includes("student center")) return 1;
  if (text.includes("library")) return 1;

  return numericValue(text);
}
