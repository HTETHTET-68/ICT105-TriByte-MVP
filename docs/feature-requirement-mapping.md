# Feature-Requirement Mapping

This file proves that the HallPass prototype screens are not random pages. Every planned feature connects to the system requirements, user stories, and actual prototype files.

The current prototype files are located in:

`prototype/wireframe-html/`

---

## Feature Mapping Table

| Feature ID | Feature / Screen | Requirement ID | User Story ID | Purpose | Wireframe / Prototype File | Final Prototype Module |
|---|---|---|---|---|---|---|
| **F01** | Homepage / Landing Screen | FR-01, FR-02, FR-13, FR-16 | US-01 | Introduce HallPass, explain its purpose, identify target users, and guide students to the main actions. | `prototype/wireframe-html/index.html` | Homepage |
| **F02** | Browse Dormitory and Cafeteria Reviews | FR-05, FR-08, FR-13, FR-16 | US-02 | Display dormitory and cafeteria reviews with rating, category, short description, and status label. | `prototype/wireframe-html/reviews.html` | Reviews List |
| **F03** | Search and Filter Reviews | FR-06, FR-13, FR-16 | US-03 | Help students quickly find relevant reviews by keyword or category. | `prototype/wireframe-html/reviews.html` | Search and Filter |
| **F04** | Review Detail View | FR-07, FR-08, FR-13, FR-16 | US-04 | Show complete review information including category, rating, status, and review description. | `prototype/wireframe-html/detail.html` | Review Detail |
| **F05** | Submit Review Form | FR-03, FR-10, FR-11, FR-15, FR-16 | US-05 | Allow students to submit dormitory, cafeteria, or campus guide reviews with required fields and a privacy note. | `prototype/wireframe-html/submit.html` | Submit Review |
| **F06** | Campus Survival Guide | FR-02, FR-05, FR-13, FR-16 | US-06 | Provide first-week campus survival information such as move-in checklist and food spots. | `prototype/wireframe-html/guide.html` | Survival Guide |
| **F07** | Dashboard Summary | FR-12, FR-13, FR-16 | US-07 | Display simple summary statistics such as total reviews, pending reviews, top dormitory, and top cafeteria. | `prototype/wireframe-html/dashboard.html` | Dashboard |
| **F08** | Admin Review Moderation | FR-09, FR-11, FR-13, FR-16 | US-08 | Allow admin users to simulate moderation actions such as approve, flag, delete, and view status updates. | `prototype/wireframe-html/admin.html` | Admin Moderation |

---

## Requirement Coverage Table

| Requirement ID | Requirement Summary | Covered by Feature(s) | Prototype Evidence |
|---|---|---|---|
| **FR-01** | Clear homepage or landing screen | F01 | `index.html` |
| **FR-02** | Primary user pathway | F01, F06 | `index.html`, `guide.html` |
| **FR-03** | User input or data submission | F05 | `submit.html` |
| **FR-04** | Simulated data storage / record management | F02, F05, F07 | `reviews.html`, `submit.html`, `dashboard.html` |
| **FR-05** | View records / information list | F02, F06 | `reviews.html`, `guide.html` |
| **FR-06** | Search, filter, or category function | F03 | `reviews.html` |
| **FR-07** | Detail view for each record | F04 | `detail.html` |
| **FR-08** | Status or progress tracking | F02, F04, F05, F08 | `reviews.html`, `detail.html`, `submit.html`, `admin.html` |
| **FR-09** | Admin or manager function | F08 | `admin.html` |
| **FR-10** | Validation and error prevention | F05 | `submit.html` |
| **FR-11** | Confirmation or feedback message | F05, F08 | `submit.html`, `admin.html` |
| **FR-12** | Dashboard or summary view | F07 | `dashboard.html` |
| **FR-13** | UI consistency | F01-F08 | All prototype pages |
| **FR-14** | Mobile-friendly / responsive design | F01-F08 | Shared HTML/CSS layout |
| **FR-15** | Privacy and responsible data handling | F05 | `submit.html` |
| **FR-16** | Final prototype traceability | F01-F08 | This mapping table |

---

## User Story Coverage Table

| User Story ID | User Story Summary | Covered by Feature(s) | Prototype Evidence |
|---|---|---|---|
| **US-01** | Understand HallPass from the homepage | F01 | `index.html` |
| **US-02** | Browse dormitory and cafeteria reviews | F02 | `reviews.html` |
| **US-03** | Search and filter reviews | F03 | `reviews.html` |
| **US-04** | Open and read review details | F04 | `detail.html` |
| **US-05** | Submit a review | F05 | `submit.html` |
| **US-06** | Read campus survival guide | F06 | `guide.html` |
| **US-07** | View dashboard summary | F07 | `dashboard.html` |
| **US-08** | Moderate submitted reviews | F08 | `admin.html` |

---

## Final Prototype Page List

| Page | Purpose |
|---|---|
| `prototype/wireframe-html/index.html` | Homepage and main navigation |
| `prototype/wireframe-html/reviews.html` | Browse, search, and filter reviews |
| `prototype/wireframe-html/detail.html` | View detailed review information |
| `prototype/wireframe-html/submit.html` | Submit a new review |
| `prototype/wireframe-html/guide.html` | View campus survival guide content |
| `prototype/wireframe-html/dashboard.html` | View summary statistics |
| `prototype/wireframe-html/admin.html` | Simulate admin moderation |

---

## Scope Alignment

The current HallPass prototype focuses only on:

- dormitory reviews;
- cafeteria reviews;
- review search and filtering;
- review detail viewing;
- review submission;
- first-week survival guide content;
- dashboard summary;
- admin moderation simulation.

The prototype does not include login, payment, booking, real-time chat, AI recommendations, or an interactive map. These are outside the MVP scope.
