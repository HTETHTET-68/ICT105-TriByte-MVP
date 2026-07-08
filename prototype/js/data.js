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
    text: "Clean rooms, safe entry, and very convenient for first-year students."
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
    text: "Good value with many food shops nearby. Best for students on a budget."
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
    text: "Modern rooms, quiet study area, and strong Wi-Fi."
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
    text: "Many choices, affordable meals, and fast service during class breaks."
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
    text: "Good for international students because there are familiar dishes and clear signs."
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
    text: "Nice coffee and quiet seating for studying between classes."
  }
];

function getReviews() {
  const saved = JSON.parse(localStorage.getItem("hallpassReviews") || "[]");
  return [...saved, ...seedReviews];
}

function saveReview(r) {
  const saved = JSON.parse(localStorage.getItem("hallpassReviews") || "[]");

  saved.unshift({
    ...r,
    id: Date.now(),
    status: "Pending"
  });

  localStorage.setItem("hallpassReviews", JSON.stringify(saved));
}

function toast(msg) {
  const t =
    document.querySelector(".toast") ||
    document.body.appendChild(
      Object.assign(document.createElement("div"), {
        className: "toast"
      })
    );

  t.textContent = msg;
  t.style.display = "block";

  setTimeout(() => {
    t.style.display = "none";
  }, 2600);
}