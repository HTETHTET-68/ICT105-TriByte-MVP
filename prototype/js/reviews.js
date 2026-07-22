document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reviewForm");

  const getCurrentUser = () => {
    try {
      return JSON.parse(
        localStorage.getItem("hallpassUser") ||
        sessionStorage.getItem("hallpassUser") ||
        "null"
      );
    } catch (error) {
      console.error("Could not read the logged-in user:", error);
      return null;
    }
  };

  const currentUser = getCurrentUser();

  /*
   * Everyone can read reviews.
   * Only logged-in users can submit reviews.
   */
  if (form && !currentUser) {
    try {
      localStorage.setItem(
        "hallpassRedirectAfterLogin",
        "write-review.html"
      );
    } catch (error) {
      sessionStorage.setItem(
        "hallpassRedirectAfterLogin",
        "write-review.html"
      );
    }

    const main = document.querySelector("main");

    if (main) {
      main.innerHTML = `
        <div class="container">
          <div
            class="auth-card"
            style="
              width: min(620px, 100%);
              margin: auto;
              text-align: center;
            "
          >
            <span class="badge">Login Required</span>

            <h2>Please login to write a review</h2>

            <p class="muted">
              You can read dorm reviews, cafeteria reviews,
              and survival guides without logging in.
              Login is only required when you want to submit a review.
            </p>

            <div
              style="
                display: flex;
                justify-content: center;
                gap: 0.75rem;
                flex-wrap: wrap;
              "
            >
              <a class="btn primary" href="login.html">
                Login to Continue
              </a>

              <a class="btn outline" href="dorms.html">
                Read Reviews
              </a>
            </div>
          </div>
        </div>
      `;
    }

    return;
  }

  if (!form) return;

  const submitButton = form.querySelector(
    'button[type="submit"], button:not([type])'
  );

  form.addEventListener("submit", async event => {
    event.preventDefault();

    const consent = document.getElementById(
      "reviewPrivacyConsent"
    );

    if (!consent?.checked) {
      toast("Please accept the privacy consent before submitting");
      consent?.focus();
      return;
    }

    const photoInput = document.getElementById("photo");
    const selectedPhoto = photoInput?.files?.[0] || null;

    if (
      selectedPhoto &&
      !selectedPhoto.type.startsWith("image/")
    ) {
      toast("Please select a valid image file");
      photoInput.value = "";
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Submitting...";
    }

    try {
      let image = "";

      if (selectedPhoto) {
        image = await compressReviewImage(selectedPhoto);
      }

      const user = getCurrentUser();

      if (!user) {
        toast("Your login session has expired. Please log in again.");

        setTimeout(() => {
          window.location.href = "login.html";
        }, 800);

        return;
      }

      const type = document.getElementById("type").value;

      const review = {
        id: Date.now(),
        author: user.email || "Student contributor",
        submittedAt: new Date().toISOString(),
        status: "Pending",

        consentAccepted: true,
        consentNoticeVersion: "prototype-1.0",
        consentAcceptedAt: new Date().toISOString(),

        type,
        title: document.getElementById("title").value.trim(),
        rating: Number(
          document.getElementById("rating").value
        ),
        price:
          document.getElementById("price").value.trim() ||
          "Not specified",
        distance:
          document.getElementById("location").value.trim() ||
          "Not specified",
        tag: "Student Review",
        emoji: type === "Dorm" ? "🏢" : "🍽️",
        text: document.getElementById("comment").value.trim(),

        /*
         * Compressed Base64 image.
         * It remains attached to the review through
         * Pending, Approved, or Rejected status.
         */
        image
      };

      saveReview(review);

      form.reset();

      toast(
        "Review submitted. It is now pending admin approval."
      );

      setTimeout(() => {
        window.location.href = "student-dashboard.html";
      }, 900);
    } catch (error) {
      console.error("Review submission failed:", error);

      if (
        error?.name === "QuotaExceededError" ||
        error?.code === 22
      ) {
        toast(
          "Browser storage is full. Try a smaller photo or clear old review data."
        );
      } else {
        toast("The review could not be submitted. Please try again.");
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Submit Review";
      }
    }
  });
});

/*
 * Resize and compress a selected image before saving it.
 * This reduces the risk of filling browser localStorage.
 */
function compressReviewImage(
  file,
  maxWidth = 1200,
  maxHeight = 900,
  quality = 0.72
) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onerror = () => {
      reject(new Error("The selected image could not be read."));
    };

    reader.onload = event => {
      const image = new Image();

      image.onerror = () => {
        reject(new Error("The selected image is invalid."));
      };

      image.onload = () => {
        let width = image.naturalWidth;
        let height = image.naturalHeight;

        const scale = Math.min(
          maxWidth / width,
          maxHeight / height,
          1
        );

        width = Math.round(width * scale);
        height = Math.round(height * scale);

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        canvas.width = width;
        canvas.height = height;

        context.drawImage(image, 0, 0, width, height);

        const compressedImage = canvas.toDataURL(
          "image/jpeg",
          quality
        );

        /*
         * Prevent unusually large images from filling storage.
         * Approximately 1.5 MB as a Base64 string.
         */
        if (compressedImage.length > 1_500_000) {
          reject(
            new Error(
              "The compressed image is still too large. Please select a smaller photo."
            )
          );
          return;
        }

        resolve(compressedImage);
      };

      image.src = event.target.result;
    };

    reader.readAsDataURL(file);
  });
}