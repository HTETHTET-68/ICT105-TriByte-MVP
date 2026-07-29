document.addEventListener("DOMContentLoaded", () => {
  const all = getReviews();

  const totalReviews = document.getElementById("totalReviews");
  const dormCount = document.getElementById("dormCount");
  const foodCount = document.getElementById("foodCount");
  const body = document.getElementById("pendingBody");

  if (totalReviews) {
    totalReviews.textContent = all.length;
  }

  if (dormCount) {
    dormCount.textContent = all.filter(r => r.type === "Dorm").length;
  }

  if (foodCount) {
    foodCount.textContent = all.filter(r => r.type === "Cafeteria").length;
  }

  if (body) {
    const saved = JSON.parse(localStorage.getItem("hallpassReviews") || "[]");

    const reviewsToShow = saved.length ? saved : all.slice(0, 4);

    body.innerHTML = reviewsToShow
      .map(r => `
        <tr>
          <td>${r.title}</td>
          <td>${r.type}</td>
          <td>${r.rating}</td>
          <td>
            <span class="badge">${r.status || "Pending"}</span>
          </td>
          <td>
            <button class="btn dark" onclick="toast('Review approved')">
              Approve
            </button>

            <button class="btn outline" onclick="toast('Review rejected')">
              Reject
            </button>
          </td>
        </tr>
      `)
      .join("");
  }
});