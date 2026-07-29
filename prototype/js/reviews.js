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
  const photoInput = document.getElementById("photo");
  const photoPreview = document.getElementById("photoPreview");
  const photoPreviewImage =
    document.getElementById("photoPreviewImage");
  const photoFileName =
    document.getElementById("photoFileName");
  const removePhoto =
    document.getElementById("removePhoto");
  const typeSelect = document.getElementById("type");
  const placeSelect = document.getElementById("place");
  const newPlaceFields = document.querySelectorAll(
    ".new-place-field"
  );
  const titleInput = document.getElementById("title");

  function populatePlaceOptions() {
    if (!typeSelect || !placeSelect) return;

    const listings = getPlaceListings(typeSelect.value)
      .sort((a, b) => a.title.localeCompare(b.title));

    placeSelect.innerHTML = `
      <option value="">Choose an existing place</option>
      ${listings.map(place => `
        <option value="${escapeHtml(place.placeId)}">
          ${escapeHtml(place.title)}
        </option>
      `).join("")}
      <option value="new">＋ Add a new place</option>
    `;

    const requestedPlace =
      new URLSearchParams(location.search).get("place");

    if (
      requestedPlace &&
      listings.some(place => place.placeId === requestedPlace)
    ) {
      placeSelect.value = requestedPlace;
    }

    updateNewPlaceFields();
  }

  function updateNewPlaceFields() {
    const isNewPlace = placeSelect?.value === "new";

    newPlaceFields.forEach(field => {
      field.hidden = !isNewPlace;
    });

    if (titleInput) {
      titleInput.required = isNewPlace;
    }
  }

  typeSelect?.addEventListener("change", populatePlaceOptions);
  placeSelect?.addEventListener("change", updateNewPlaceFields);

  const requestedPlaceParam =
    new URLSearchParams(location.search).get("place");
  const requestedListing = requestedPlaceParam
    ? getPlaceByKey(requestedPlaceParam)
    : null;

  if (requestedListing && typeSelect) {
    typeSelect.value = requestedListing.type;
  }

  populatePlaceOptions();

  function resetPhotoPreview() {
    if (photoInput) photoInput.value = "";
    if (photoPreviewImage) photoPreviewImage.removeAttribute("src");
    if (photoFileName) photoFileName.textContent = "";
    if (photoPreview) photoPreview.hidden = true;
  }

  photoInput?.addEventListener("change", () => {
    const file = photoInput.files?.[0];

    if (!file) {
      resetPhotoPreview();
      return;
    }

    if (!file.type.startsWith("image/")) {
      toast("Please choose a JPG, PNG, or WebP image");
      resetPhotoPreview();
      return;
    }

    if (file.size > 8 * 1024 * 1024) {
      toast("Please choose an image smaller than 8 MB");
      resetPhotoPreview();
      return;
    }

    const previewUrl = URL.createObjectURL(file);

    if (photoPreviewImage) {
      photoPreviewImage.src = previewUrl;
      photoPreviewImage.onload = () => URL.revokeObjectURL(previewUrl);
    }

    if (photoFileName) photoFileName.textContent = file.name;
    if (photoPreview) photoPreview.hidden = false;
  });

  removePhoto?.addEventListener("click", resetPhotoPreview);

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

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Submitting...";
    }

    try {
      const selectedPhoto = photoInput?.files?.[0] || null;
      const image = selectedPhoto
        ? await compressReviewImage(selectedPhoto)
        : "";

      const user = getCurrentUser();

      if (!user) {
        toast("Your login session has expired. Please log in again.");

        setTimeout(() => {
          window.location.href = "login.html";
        }, 800);

        return;
      }

      const type = document.getElementById("type").value;
      const selectedPlaceId = placeSelect?.value;
      const selectedPlace = getPlaceListings(type).find(
        place => place.placeId === selectedPlaceId
      );
      const isNewPlace = selectedPlaceId === "new";
      const newTitle = titleInput?.value.trim() || "";

      if (!selectedPlace && !isNewPlace) {
        toast("Please choose a place to review");
        placeSelect?.focus();
        return;
      }

      const review = {
        id: Date.now(),
        author: user.email || "Student contributor",
        ownerEmail: String(user.email || "").trim().toLowerCase(),
        submittedAt: new Date().toISOString(),
        status: "Pending",

        consentAccepted: true,
        consentNoticeVersion: "prototype-1.0",
        consentAcceptedAt: new Date().toISOString(),

        type,
        placeId: isNewPlace
          ? `${type === "Dorm" ? "dorm" : "food"}-${newTitle
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-|-$/g, "")}-${Date.now()}`
          : selectedPlace.placeId,
        title: isNewPlace ? newTitle : selectedPlace.title,
        rating: Number(
          document.getElementById("rating").value
        ),
        price: isNewPlace
          ? document.getElementById("price").value.trim() ||
            "Not specified"
          : selectedPlace.price,
        distance: isNewPlace
          ? document.getElementById("location").value.trim() ||
            "Not specified"
          : selectedPlace.distance,
        tag: "Student Review",
        emoji: type === "Dorm" ? "🏢" : "🍽️",
        text: document.getElementById("comment").value.trim(),
        image
      };

      saveReview(review);

      form.reset();
      resetPhotoPreview();

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
        toast("Browser storage is full. Remove old reviews or choose a smaller photo.");
      } else if (error?.message?.includes("photo") || error?.message?.includes("image")) {
        toast(error.message);
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

function compressReviewImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onerror = () =>
      reject(new Error("The selected image could not be read."));

    reader.onload = event => {
      const image = new Image();

      image.onerror = () =>
        reject(new Error("The selected image is invalid."));

      image.onload = () => {
        const maxWidth = 1200;
        const maxHeight = 900;
        const scale = Math.min(
          maxWidth / image.naturalWidth,
          maxHeight / image.naturalHeight,
          1
        );
        const width = Math.round(image.naturalWidth * scale);
        const height = Math.round(image.naturalHeight * scale);
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        canvas.width = width;
        canvas.height = height;
        context.drawImage(image, 0, 0, width, height);

        const compressed = canvas.toDataURL("image/jpeg", 0.76);

        if (compressed.length > 1_500_000) {
          reject(
            new Error(
              "The photo is still too large after resizing. Please choose a smaller image."
            )
          );
          return;
        }

        resolve(compressed);
      };

      image.src = event.target.result;
    };

    reader.readAsDataURL(file);
  });
}
