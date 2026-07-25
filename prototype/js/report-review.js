document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", event => {
    const button = event.target.closest("[data-report-review]");
    if (!button) return;
    const user = typeof getStoredUser === "function" ? getStoredUser() : null;
    if (!user || user.role !== "student") {
      localStorage.setItem("hallpassRedirectAfterLogin", location.href);
      toast("Please log in as a student to submit a report");
      setTimeout(() => location.href = "login.html", 700);
      return;
    }
    openReportDialog(button.dataset.reportReview, user);
  });

  function openReportDialog(reviewId, user) {
    const review = getReviews().find(item => String(item.id) === String(reviewId));
    if (!review) return toast("This review could not be found");
    const wrapper = document.createElement("div");
    wrapper.className = "admin-review-modal";
    wrapper.innerHTML = `<div class="admin-review-modal-backdrop" data-close-report></div>
      <div class="admin-review-dialog report-dialog" role="dialog" aria-modal="true" aria-labelledby="reportTitle">
        <div class="admin-review-dialog-header"><div><span class="badge">Student report</span><h2 id="reportTitle">Report incorrect information</h2></div><button class="icon-button" data-close-report aria-label="Close">×</button></div>
        <p class="muted">Tell the admin team what appears wrong in “${escapeHtml(review.title)}”.</p>
        <form id="reportForm" class="form-grid">
          <div class="full-row"><label for="reportReason">What is incorrect?</label><select id="reportReason" required><option value="">Select a reason</option><option>Incorrect price</option><option>Incorrect location or distance</option><option>Outdated facilities or services</option><option>Misleading review details</option><option>Other misinformation</option></select></div>
          <div class="full-row"><label for="reportDetails">Details</label><textarea id="reportDetails" rows="5" minlength="10" required placeholder="Explain what is wrong and, if possible, provide the correct information."></textarea></div>
          <div class="admin-review-modal-actions"><button type="button" class="btn outline" data-close-report>Cancel</button><button class="btn primary">Send report to admin</button></div>
        </form>
      </div>`;
    document.body.appendChild(wrapper);
    wrapper.querySelectorAll("[data-close-report]").forEach(el => el.addEventListener("click", () => wrapper.remove()));
    wrapper.querySelector("#reportForm").addEventListener("submit", event => {
      event.preventDefault();
      const reports = JSON.parse(localStorage.getItem("hallpassReports") || "[]");
      reports.unshift({
        id: `RPT-${Date.now()}`, reviewId: review.id, placeId: review.placeId,
        title: review.title, category: review.type,
        reason: wrapper.querySelector("#reportReason").value,
        details: wrapper.querySelector("#reportDetails").value.trim(),
        reportedBy: user.email, createdAt: new Date().toISOString(), status: "Open"
      });
      localStorage.setItem("hallpassReports", JSON.stringify(reports));
      wrapper.remove();
      toast("Report sent to the admin team");
    });
  }
});
