/* =====================================================
   SAMPLE REVIEW DATA
===================================================== */

const seedReviews = [
  {
    id: 1,
    type: "Dorm",
    title: "RSU Residence",
    rating: 4.7,
    price: "8,500 THB/mo",
    distance: "5 min walk",
    tag: "Near Campus",
    emoji: "🏢",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    text:
      "Clean rooms, safe entry, and very convenient for first-year students.",
    status: "Approved"
  },
  {
    id: 2,
    type: "Dorm",
    title: "Muang Ake Apartment",
    rating: 4.4,
    price: "6,500 THB/mo",
    distance: "10 min walk",
    tag: "Budget Friendly",
    emoji: "🏬",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    text:
      "Good value with many food shops nearby. Best for students on a budget.",
    status: "Approved"
  },
  {
    id: 3,
    type: "Dorm",
    title: "The Campus Place",
    rating: 4.8,
    price: "9,000 THB/mo",
    distance: "3 min walk",
    tag: "Top Rated",
    emoji: "🏙️",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
    text:
      "Modern rooms, quiet study area, and strong Wi-Fi.",
    status: "Approved"
  },
  {
    id: 4,
    type: "Cafeteria",
    title: "RSU Food Court",
    rating: 4.6,
    price: "45-80 THB",
    distance: "Main campus",
    tag: "Popular Lunch",
    emoji: "🍛",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    text:
      "Many choices, affordable meals, and fast service during class breaks.",
    status: "Approved"
  },
  {
    id: 5,
    type: "Cafeteria",
    title: "International Canteen",
    rating: 4.5,
    price: "60-120 THB",
    distance: "Student center",
    tag: "Halal Options",
    emoji: "🍜",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80",
    text:
      "Good for international students because there are familiar dishes and clear signs.",
    status: "Approved"
  },
  {
    id: 6,
    type: "Cafeteria",
    title: "Cafe Blue",
    rating: 4.3,
    price: "50-100 THB",
    distance: "Library area",
    tag: "Study Cafe",
    emoji: "☕",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    text:
      "Nice coffee and quiet seating for studying between classes.",
    status: "Approved"
  }
];

/* =====================================================
   STORAGE HELPERS
===================================================== */

const REVIEW_STORAGE_KEY = "hallpassReviews";

function readSavedReviews() {
  try {
    const raw = localStorage.getItem(REVIEW_STORAGE_KEY);
    const parsed = JSON.parse(raw || "[]");

    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Could not read saved HallPass reviews:", error);
    return [];
  }
}

function writeSavedReviews(reviews) {
  try {
    localStorage.setItem(
      REVIEW_STORAGE_KEY,
      JSON.stringify(reviews)
    );

    return true;
  } catch (error) {
    console.error("Could not save HallPass reviews:", error);

    if (
      error?.name === "QuotaExceededError" ||
      error?.code === 22
    ) {
      if (typeof toast === "function") {
        toast(
          "Browser storage is full. Remove old reviews or use a smaller photo."
        );
      }
    }

    return false;
  }
}

/* =====================================================
   LEGACY DATA MIGRATION
===================================================== */

/*
 * Earlier prototype versions could save a duplicate
 * RSU Residence submission. This updates that legacy
 * student-submitted record without changing the seed data.
 */
function migrateDuplicateRsuResidence() {
  const saved = readSavedReviews();
  let changed = false;

  const migrated = saved.map(review => {
    const reviewTitle = String(review.title || "")
      .trim()
      .toLowerCase();

    if (reviewTitle !== "rsu residence") {
      return review;
    }

    changed = true;

    return {
      ...review,
      title: "Rangsit Campus View Apartment",
      price: "7,200 THB/mo",
      distance: "8 min walk",
      tag: "Student Friendly",
      emoji: "🏬",
      text:
        "Comfortable rooms, useful nearby services, and a convenient route to Rangsit University."
    };
  });

  if (changed) {
    writeSavedReviews(migrated);
  }
}

migrateDuplicateRsuResidence();

/* =====================================================
   REVIEW RETRIEVAL
===================================================== */

/*
 * Returns every review for admin and student dashboards.
 * This includes Pending, Approved, and Rejected records.
 */
function getAllReviews() {
  const saved = readSavedReviews();

  return [...saved, ...seedReviews];
}

/*
 * Public pages should show:
 * 1. All approved seed reviews.
 * 2. Only student reviews approved by the admin.
 */
function getReviews() {
  const approvedSavedReviews = readSavedReviews().filter(
    review => review.status === "Approved"
  );

  return [...approvedSavedReviews, ...seedReviews];
}

/*
 * Returns reviews submitted through the form.
 * Useful for the admin moderation queue.
 */
function getSubmittedReviews() {
  return readSavedReviews();
}

/*
 * Returns only reviews waiting for moderation.
 */
function getPendingReviews() {
  return readSavedReviews().filter(
    review => (review.status || "Pending") === "Pending"
  );
}

/*
 * Find one review by ID.
 * Works for seed reviews and student submissions,
 * including pending records when an admin opens details.
 */
function getReviewById(id, includeUnapproved = false) {
  const source = includeUnapproved
    ? getAllReviews()
    : getReviews();

  return source.find(
    review => String(review.id) === String(id)
  );
}

/* =====================================================
   SAVE AND UPDATE REVIEWS
===================================================== */

function saveReview(review) {
  const saved = readSavedReviews();

  const newReview = {
    ...review,
    id: review.id || Date.now(),
    status: review.status || "Pending",
    submittedAt:
      review.submittedAt || new Date().toISOString(),
    image: review.image || ""
  };

  saved.unshift(newReview);

  const savedSuccessfully = writeSavedReviews(saved);

  if (!savedSuccessfully) {
    throw new Error("Review storage failed");
  }

  return newReview;
}

function updateReviewStatus(reviewId, newStatus) {
  const allowedStatuses = [
    "Pending",
    "Approved",
    "Rejected"
  ];

  if (!allowedStatuses.includes(newStatus)) {
    console.error("Invalid review status:", newStatus);
    return false;
  }

  const saved = readSavedReviews();

  const reviewIndex = saved.findIndex(
    review => String(review.id) === String(reviewId)
  );

  if (reviewIndex === -1) {
    return false;
  }

  saved[reviewIndex] = {
    ...saved[reviewIndex],
    status: newStatus,
    moderatedAt: new Date().toISOString()
  };

  return writeSavedReviews(saved);
}

function deleteReview(reviewId) {
  const saved = readSavedReviews();

  const updated = saved.filter(
    review => String(review.id) !== String(reviewId)
  );

  return writeSavedReviews(updated);
}

/* =====================================================
   IMAGE HELPERS
===================================================== */

function getReviewImage(review) {
  return review?.image || "";
}

function hasReviewImage(review) {
  return Boolean(
    review?.image &&
    String(review.image).trim()
  );
}

/* =====================================================
   TOAST NOTIFICATION
===================================================== */

function toast(message) {
  let toastElement = document.querySelector(".toast");

  if (!toastElement) {
    toastElement = document.createElement("div");
    toastElement.className = "toast";
    document.body.appendChild(toastElement);
  }

  toastElement.textContent = message;
  toastElement.style.display = "block";

  clearTimeout(toastElement.hideTimer);

  toastElement.hideTimer = setTimeout(() => {
    toastElement.style.display = "none";
  }, 2600);
}