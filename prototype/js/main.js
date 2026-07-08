document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menu");
  const links = document.querySelector(".links");

  if (btn) {
    btn.onclick = () => {
      links.classList.toggle("show");
    };
  }

  document.querySelectorAll("[data-year]").forEach(e => {
    e.textContent = new Date().getFullYear();
  });
});

function renderCards(containerId, type) {
  const el = document.getElementById(containerId);

  if (!el) return;

  const search = document.getElementById("searchInput");
  const rating = document.getElementById("ratingFilter");

  function draw() {
    let items = getReviews().filter(r => r.type === type);

    const q = (search?.value || "").toLowerCase();
    const min = Number(rating?.value || 0);

    items = items.filter(r =>
      r.title.toLowerCase().includes(q) &&
      Number(r.rating) >= min
    );

    el.innerHTML = items
      .map(r => `
        <article class="card review-card">
          <div class="review-img">
            ${r.emoji || "⭐"}
          </div>

          <div class="review-body">
            <span class="badge">${r.tag || r.type}</span>

            <h3>${r.title}</h3>

            <p class="stars">
              ★★★★★ <b style="color: #14213d;">${r.rating}</b>
            </p>

            <p class="muted">${r.text}</p>

            <div class="meta">
              <span>${r.price || ""}</span>
              <span>${r.distance || ""}</span>
            </div>

            <br>

            <a class="btn outline" href="review-details.html?id=${r.id}">
              Read More
            </a>
          </div>
        </article>
      `)
      .join("") || '<p class="muted">No matching reviews found.</p>';
  }

  search?.addEventListener("input", draw);
  rating?.addEventListener("change", draw);

  draw();
}