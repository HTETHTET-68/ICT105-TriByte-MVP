/* =====================================================
   SAMPLE REVIEW DATA
===================================================== */

const seedReviews = [
  {
    id: 1,
    listingProfile: true,
    placeId: "dorm-rsu-residence",
    type: "Dorm",
    title: "RSU Residence",
    rating: 4.7,
    price: "8,500 THB/mo",
    distance: "5 min walk",
    tag: "Near Campus",
    emoji: "🏢",
    image: "images/reviews/rsu-residence.png",
    text:
      "Clean rooms, safe entry, and very convenient for first-year students.",
    status: "Approved"
  },
  {
    id: 2,
    listingProfile: true,
    placeId: "dorm-muang-ake-apartment",
    type: "Dorm",
    title: "Muang Ake Apartment",
    rating: 4.4,
    price: "6,500 THB/mo",
    distance: "10 min walk",
    tag: "Budget Friendly",
    emoji: "🏬",
    image: "images/reviews/muang-ake-apartment.png",
    text:
      "Good value with many food shops nearby. Best for students on a budget.",
    status: "Approved"
  },
  {
    id: 3,
    listingProfile: true,
    placeId: "dorm-the-campus-place",
    type: "Dorm",
    title: "The Campus Place",
    rating: 4.8,
    price: "9,000 THB/mo",
    distance: "3 min walk",
    tag: "Top Rated",
    emoji: "🏙️",
    image: "images/reviews/the-campus-place.png",
    text:
      "Modern rooms, quiet study area, and strong Wi-Fi.",
    status: "Approved"
  },
  {
    id: 4,
    listingProfile: true,
    placeId: "food-rsu-food-court",
    type: "Cafeteria",
    title: "RSU Food Court",
    rating: 4.6,
    price: "45-80 THB",
    distance: "Main campus",
    tag: "Lunch Spot",
    emoji: "🍛",
    image: "images/reviews/rsu-food-court.png",
    text:
      "Many choices, affordable meals, and fast service during class breaks.",
    status: "Approved"
  },
  {
    id: 5,
    listingProfile: true,
    placeId: "food-international-canteen",
    type: "Cafeteria",
    title: "International Canteen",
    rating: 4.5,
    price: "60-120 THB",
    distance: "Student center",
    tag: "Halal Friendly",
    emoji: "🍜",
    image: "images/reviews/international-canteen.png",
    text:
      "Good for international students because there are familiar dishes and clear signs.",
    status: "Approved"
  },
  {
    id: 6,
    listingProfile: true,
    placeId: "food-cafe-blue",
    type: "Cafeteria",
    title: "Cafe Blue",
    rating: 4.3,
    price: "50-100 THB",
    distance: "Library area",
    tag: "Study Cafe",
    emoji: "☕",
    image: "images/reviews/cafe-blue.png",
    text:
      "Nice coffee and quiet seating for studying between classes.",
    status: "Approved"
  },
  {
    id: 7,
    listingProfile: true,
    placeId: "dorm-lak-hok-garden-residence",
    type: "Dorm",
    title: "Lak Hok Garden Residence",
    rating: 4.2,
    price: "5,800 THB/mo",
    distance: "12 min walk",
    tag: "Quiet Area",
    emoji: "🏢",
    image: "images/reviews/lak-hok-garden-residence.png",
    text:
      "A calm, practical residence with shaded outdoor areas and useful shops nearby.",
    author: "Second-year student",
    submittedAt: "2026-07-12T08:30:00.000Z",
    status: "Approved"
  },
  {
    id: 8,
    listingProfile: true,
    placeId: "dorm-rangsit-campus-view-apartment",
    type: "Dorm",
    title: "Rangsit Campus View Apartment",
    rating: 4.5,
    price: "7,200 THB/mo",
    distance: "8 min walk",
    tag: "Student Friendly",
    emoji: "🏬",
    image: "images/reviews/rangsit-campus-view-apartment.png",
    text:
      "Comfortable rooms, useful nearby services, and a convenient route to campus.",
    author: "International student",
    submittedAt: "2026-07-15T09:15:00.000Z",
    status: "Approved"
  },
  {
    id: 9,
    listingProfile: true,
    placeId: "food-building-6-food-court",
    type: "Cafeteria",
    title: "Building 6 Food Court",
    rating: 4.4,
    price: "40-75 THB",
    distance: "Building 6",
    tag: "Quick Lunch",
    emoji: "🍱",
    image: "images/reviews/building-6-food-court.png",
    text:
      "Quick service, generous portions, and enough variety for everyday lunches.",
    author: "First-year student",
    submittedAt: "2026-07-17T05:45:00.000Z",
    status: "Approved"
  },
  {
    id: 10,
    listingProfile: true,
    placeId: "food-green-corner-cafe",
    type: "Cafeteria",
    title: "Green Corner Café",
    rating: 4.6,
    price: "55-110 THB",
    distance: "Near campus walkway",
    tag: "Study Friendly",
    emoji: "☕",
    image: "images/reviews/green-corner-cafe.png",
    text:
      "A relaxed place for drinks, light meals, and quiet study sessions between classes.",
    author: "Exchange student",
    submittedAt: "2026-07-18T07:20:00.000Z",
    status: "Approved"
  },
  {
    id: 101,
    placeId: "food-rsu-food-court",
    type: "Cafeteria",
    title: "RSU Food Court",
    rating: 4.2,
    text:
      "The noodle and rice stalls are fast, but lunchtime becomes crowded after noon.",
    author: "Business student",
    submittedAt: "2026-07-19T06:10:00.000Z",
    status: "Approved"
  },
  {
    id: 102,
    placeId: "food-rsu-food-court",
    type: "Cafeteria",
    title: "RSU Food Court",
    rating: 4.8,
    text:
      "Good daily value and plenty of choices when friends want different meals.",
    author: "International student",
    submittedAt: "2026-07-21T04:20:00.000Z",
    status: "Approved"
  },
  {
    id: 103,
    placeId: "food-international-canteen",
    type: "Cafeteria",
    title: "International Canteen",
    rating: 4.7,
    text:
      "Clear menu choices and friendly staff make ordering easier for new international students.",
    author: "Exchange student",
    submittedAt: "2026-07-20T05:05:00.000Z",
    status: "Approved"
  },
  {
    id: 104,
    placeId: "dorm-rsu-residence",
    type: "Dorm",
    title: "RSU Residence",
    rating: 4.5,
    text:
      "The short walk is the biggest advantage, and the entry area feels secure at night.",
    author: "First-year student",
    submittedAt: "2026-07-16T12:00:00.000Z",
    status: "Approved"
  },
  {
    id: 105,
    placeId: "dorm-the-campus-place",
    type: "Dorm",
    title: "The Campus Place",
    rating: 4.6,
    text:
      "Reliable Wi-Fi and quiet hallways helped during examination week.",
    author: "Engineering student",
    submittedAt: "2026-07-22T10:40:00.000Z",
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
          "Browser storage is full. Remove old reviews."
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

function getReviewPlaceKey(review) {
  if (review.placeId) {
    return String(review.placeId);
  }

  return `${review.type || "Review"}-${review.title || "Untitled"}`
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getPlaceListings(type) {
  const groups = new Map();

  getReviews()
    .filter(review => !type || review.type === type)
    .forEach(review => {
      const placeKey = getReviewPlaceKey(review);

      if (!groups.has(placeKey)) {
        groups.set(placeKey, []);
      }

      groups.get(placeKey).push(review);
    });

  return [...groups.entries()].map(([placeId, reviews]) => {
    const canonical =
      reviews.find(review => review.listingProfile) ||
      reviews.find(review => review.image && review.price) ||
      reviews.find(review => review.image) ||
      reviews[0];

    const averageRating =
      reviews.reduce(
        (total, review) => total + Number(review.rating || 0),
        0
      ) / reviews.length;

    return {
      ...canonical,
      id: canonical.id,
      placeId,
      rating: Number(averageRating.toFixed(1)),
      reviewCount: reviews.length,
      studentReviews: [...reviews].sort((a, b) => {
        return new Date(b.submittedAt || 0) -
          new Date(a.submittedAt || 0);
      })
    };
  });
}

function getPlaceByKey(placeId) {
  return getPlaceListings().find(
    place => String(place.placeId) === String(placeId)
  );
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
      review.submittedAt || new Date().toISOString()
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

function removeReviewPhoto(reviewId, removedBy = "Admin") {
  const saved = readSavedReviews();

  const reviewIndex = saved.findIndex(
    review => String(review.id) === String(reviewId)
  );

  if (reviewIndex === -1 || !saved[reviewIndex].image) {
    return false;
  }

  saved[reviewIndex] = {
    ...saved[reviewIndex],
    image: "",
    photoRemovedAt: new Date().toISOString(),
    photoRemovedBy: removedBy
  };

  return writeSavedReviews(saved);
}

function requestReviewRemoval(reviewId, reason, details = "") {
  const saved = readSavedReviews();
  const reviewIndex = saved.findIndex(
    review => String(review.id) === String(reviewId)
  );

  if (
    reviewIndex === -1 ||
    saved[reviewIndex].status !== "Approved"
  ) {
    return false;
  }

  saved[reviewIndex] = {
    ...saved[reviewIndex],
    removalRequest: {
      status: "Pending",
      reason,
      details,
      requestedAt: new Date().toISOString()
    }
  };

  return writeSavedReviews(saved);
}

function declineReviewRemoval(reviewId, adminEmail = "Admin") {
  const saved = readSavedReviews();
  const reviewIndex = saved.findIndex(
    review => String(review.id) === String(reviewId)
  );

  if (
    reviewIndex === -1 ||
    saved[reviewIndex].removalRequest?.status !== "Pending"
  ) {
    return false;
  }

  saved[reviewIndex] = {
    ...saved[reviewIndex],
    removalRequest: {
      ...saved[reviewIndex].removalRequest,
      status: "Declined",
      resolvedAt: new Date().toISOString(),
      resolvedBy: adminEmail
    }
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
