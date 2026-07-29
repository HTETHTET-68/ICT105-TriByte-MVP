const guideTopics = {
  accommodation: {
    category: "Housing",
    title: "Accommodation",
    icon: "fa-building-user",
    summary: "Choose student housing confidently and avoid common contract surprises.",
    overview: "Compare more than the monthly rent. Check the full move-in cost, contract length, utilities, transport time, safety, internet quality, and rules before paying a deposit.",
    steps: [
      "Shortlist dormitories that match your budget and daily route.",
      "Visit the room and shared areas in person when possible.",
      "Ask for a written breakdown of rent, deposit, utilities, and other fees.",
      "Read the contract before paying and keep a signed copy."
    ],
    tips: [
      ["Inspect carefully", "Photograph existing damage and test locks, water, Wi-Fi, and air conditioning."],
      ["Check the route", "Travel from the dorm to campus at the time you normally attend class."],
      ["Plan the budget", "Include electricity, water, laundry, transport, and internet in your monthly estimate."]
    ],
    checklist: ["Identification documents", "Written contract", "Payment receipt", "Room-condition photos"],
    related: ["dorms.html", "Compare dorm reviews"]
  },
  transportation: {
    category: "Getting around",
    title: "Transportation",
    icon: "fa-bus-simple",
    summary: "Build a reliable daily route between your accommodation, campus, and Bangkok.",
    overview: "Travel time can change significantly during busy periods. Learn more than one route, keep your destination available in Thai, and leave extra time for important classes or appointments.",
    steps: [
      "Map your accommodation-to-campus route before your first class.",
      "Identify a backup option such as a taxi or alternate pickup point.",
      "Confirm operating times and expected fares locally.",
      "Share your route with someone when travelling late."
    ],
    tips: [
      ["Prepare the destination", "Save the address and a map pin on your phone."],
      ["Carry options", "Keep sufficient phone battery and a small amount of cash."],
      ["Allow extra time", "Traffic and waiting times can be unpredictable."]
    ],
    checklist: ["Saved map pin", "Destination in Thai", "Backup route", "Charged phone"]
  },
  banking: {
    category: "Money",
    title: "Banking & Budget",
    icon: "fa-wallet",
    summary: "Prepare your documents and manage student expenses more clearly.",
    overview: "Bank requirements can vary, especially for international students. Confirm current requirements directly with the bank and keep a simple monthly budget for essential spending.",
    steps: [
      "Ask the bank which identification and university documents are required.",
      "Compare account fees, ATM access, and mobile banking options.",
      "Create a monthly budget for rent, food, transport, study, and emergencies.",
      "Keep receipts and review your spending each week."
    ],
    tips: [
      ["Verify requirements", "Use current information from the bank rather than relying only on older student advice."],
      ["Protect access", "Never share verification codes, PINs, or banking passwords."],
      ["Keep a buffer", "Reserve some money for unexpected travel, health, or study costs."]
    ],
    checklist: ["Passport or ID", "Student documents", "Address information", "Monthly budget"]
  },
  emergency: {
    category: "Safety",
    title: "Emergency & Health",
    icon: "fa-kit-medical",
    summary: "Prepare essential information before you need urgent assistance.",
    overview: "Use official university and government sources for current emergency contacts. Keep your address, identification, insurance information, and a trusted contact easy to access.",
    steps: [
      "Save current campus security, student services, and local emergency contacts.",
      "Identify a nearby clinic or hospital and learn how to reach it.",
      "Keep your address available in both English and Thai.",
      "Tell a trusted person about important health needs."
    ],
    tips: [
      ["Use official contacts", "Emergency numbers can change, so verify them with the university."],
      ["Prepare information", "Keep medication, allergy, insurance, and identification details available."],
      ["Ask for help early", "Contact student services when you are unsure where to get support."]
    ],
    checklist: ["Official contacts", "Address in Thai", "Insurance details", "Trusted contact"]
  },
  printing: {
    category: "Study essentials",
    title: "Printing & Study",
    icon: "fa-print",
    summary: "Avoid last-minute problems when preparing assignments and presentations.",
    overview: "Prepare files in a common format, check submission requirements, and keep backups. Confirm printing locations and opening times before an important deadline.",
    steps: [
      "Review the assignment format and submission instructions.",
      "Export the final document as a PDF and check every page.",
      "Keep copies in cloud storage and on another device.",
      "Print early enough to correct formatting problems."
    ],
    tips: [
      ["Check the PDF", "Fonts, margins, and images may change when exported."],
      ["Name files clearly", "Include the course, assignment, and your identifier."],
      ["Prepare a backup", "Carry a digital copy even when submitting on paper."]
    ],
    checklist: ["Final PDF", "Backup copy", "Submission details", "Printing budget"]
  },
  food: {
    category: "Eating well",
    title: "Food & Cafeterias",
    icon: "fa-utensils",
    summary: "Find affordable meals that suit your schedule and dietary needs.",
    overview: "Compare price, cleanliness, opening hours, waiting time, and dietary options. Keep a few dependable meal choices for busy days and ask staff directly about ingredients when necessary.",
    steps: [
      "Identify food options near your usual classrooms.",
      "Check prices and opening times before busy class days.",
      "Ask clearly about allergies or dietary requirements.",
      "Keep water and a backup snack available."
    ],
    tips: [
      ["Beat the queue", "Lunch areas are often busiest immediately after classes."],
      ["Ask about ingredients", "Do not rely only on appearance when you have dietary restrictions."],
      ["Balance the budget", "Mix convenient meals with lower-cost everyday choices."]
    ],
    checklist: ["Meal budget", "Dietary notes", "Reusable water bottle", "Backup snack"],
    related: ["cafeteria.html", "Browse cafeteria reviews"]
  },
  laundry: {
    category: "Daily life",
    title: "Laundry & Essentials",
    icon: "fa-shirt",
    summary: "Create a simple weekly routine for clothing and everyday supplies.",
    overview: "Learn whether your accommodation offers machines or requires a nearby shop. Check payment methods, detergent requirements, drying options, and operating hours.",
    steps: [
      "Locate the nearest reliable laundry option.",
      "Check machine instructions and accepted payment.",
      "Separate delicate or color-sensitive clothing.",
      "Set a weekly schedule and collect laundry promptly."
    ],
    tips: [
      ["Read instructions", "Machine sizes and detergent requirements may differ."],
      ["Protect clothing", "Use a laundry bag for delicate items and check pockets."],
      ["Plan for weather", "Allow extra drying time during humid or rainy periods."]
    ],
    checklist: ["Laundry bag", "Detergent", "Payment method", "Weekly schedule"]
  },
  campus: {
    category: "Campus",
    title: "Map & Student Services",
    icon: "fa-map-location-dot",
    summary: "Find classrooms, support offices, and essential campus services.",
    overview: "Visit important locations before your schedule becomes busy. Save building names, room numbers, and office hours, and ask student services when information is unclear.",
    steps: [
      "Walk your class route before the first day.",
      "Locate the library, student services, clinic, and security office.",
      "Save building names and room numbers with your schedule.",
      "Check current office hours before visiting."
    ],
    tips: [
      ["Use landmarks", "Entrances and nearby facilities are often easier to remember than building numbers alone."],
      ["Ask early", "Student services can direct you to the correct office."],
      ["Keep a screenshot", "A saved map is useful when mobile data is unavailable."]
    ],
    checklist: ["Class schedule", "Campus map", "Office hours", "Important locations"]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const topicId = new URLSearchParams(window.location.search).get("topic");
  const topic = guideTopics[topicId] || guideTopics.accommodation;

  document.title = `${topic.title} Guide | HallPass`;
  document.getElementById("guideDetailIcon").innerHTML =
    `<i class="fa-solid ${escapeHtml(topic.icon)}" aria-hidden="true"></i>`;
  document.getElementById("guideDetailCategory").textContent = topic.category;
  document.getElementById("guideDetailTitle").textContent = topic.title;
  document.getElementById("guideDetailSummary").textContent = topic.summary;
  document.getElementById("guideDetailOverview").textContent = topic.overview;

  document.getElementById("guideDetailSteps").innerHTML = topic.steps
    .map(step => `<li>${escapeHtml(step)}</li>`)
    .join("");

  document.getElementById("guideDetailTips").innerHTML = topic.tips
    .map(([title, text]) => `
      <div class="guide-tip">
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(text)}</p>
      </div>
    `)
    .join("");

  document.getElementById("guideDetailChecklist").innerHTML = topic.checklist
    .map(item => `<li>${escapeHtml(item)}</li>`)
    .join("");

  const related = document.getElementById("guideDetailRelated");
  related.innerHTML = topic.related
    ? `<a class="btn dark" href="${escapeHtml(topic.related[0])}">${escapeHtml(topic.related[1])}</a>`
    : `<a class="btn outline" href="guide.html">Explore other topics</a>`;
});
