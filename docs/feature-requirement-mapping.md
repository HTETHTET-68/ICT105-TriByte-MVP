# Feature-Requirement Mapping

This document demonstrates that every feature implemented in the HallPass prototype is directly linked to the system requirements, user stories, and the corresponding prototype pages.

The current prototype files are located in:

`prototype/`

---

# Feature Mapping Table

| Feature ID | Feature / Screen | Requirement ID | User Story ID | Purpose | Prototype File | Final Prototype Module |
|---|---|---|---|---|---|---|
| **F01** | Homepage / Landing Screen | FR-01, FR-02, FR-12 | US-01 | Introduce HallPass, explain its purpose, and provide navigation to the main features. | `prototype/index.html` | Homepage |
| **F02** | Login | FR-03, FR-12, FR-14 | US-08 | Allow student/admin access through fictional demonstration accounts. | `prototype/login.html` | Authentication |
| **F03** | Signup | FR-03, FR-12, FR-17 | US-07, US-10 | Create a simulated student account after required privacy consent. | `prototype/signup.html` | Authentication |
| **F04** | Dormitory Reviews | FR-04, FR-06, FR-12, FR-16 | US-02 | Display only Approved dormitory reviews with search, filtering, and sorting. | `prototype/dorms.html` | Dorm Reviews |
| **F05** | Cafeteria Reviews | FR-05, FR-06, FR-12, FR-16 | US-03 | Display only Approved cafeteria reviews with search, filtering, and sorting. | `prototype/cafeteria.html` | Cafeteria Reviews |
| **F06** | Search and Filter Reviews | FR-06, FR-12 | US-02, US-03 | Search title, text, tags, and location; filter by rating and sort results. | `prototype/dorms.html`, `prototype/cafeteria.html` | Review Discovery |
| **F07** | Review Detail View | FR-07, FR-12, FR-19 | US-04, US-13 | Display complete approved-review information and a reporting action. | `prototype/review-details.html` | Review Details |
| **F08** | Write Review | FR-08, FR-10, FR-14, FR-20, FR-22 | US-05 | Validate and submit responsible content with Pending status and confirmation. | `prototype/write-review.html` | Review Submission |
| **F09** | Campus Survival Guide | FR-09, FR-12 | US-06 | Provide useful campus survival information for new students. | `prototype/guide.html` | Survival Guide |
| **F10** | Protected Dashboard and Moderation | FR-11, FR-16 | US-09 | Restrict admin access and save moderation/report decisions. | `prototype/dashboard.html` | Dashboard |
| **F11** | Privacy Notice and Consent | FR-14, FR-17 | US-10 | Explain data use, moderation, choices, and prototype limitations. | `prototype/privacy-consent.html` | Privacy |
| **F12** | My Reviews and Ownership | FR-18, FR-21 | US-11, US-12 | Display owner-filtered records with edit/delete and status information. | `prototype/my-reviews.html` | Student Records |
| **F13** | Report Review | FR-19, FR-22 | US-13 | Store a report reason/explanation and confirm the next step. | `prototype/report-review.html` | Content Safety |
| **F14** | Moderation and Status Feedback | FR-16, FR-21, FR-22 | US-09, US-12, US-13 | Connect Pending, Approved, Rejected, Reported, and Resolved feedback. | Dashboard, My Reviews, report flow | Status Handling |

---

# Requirement Coverage Table

| Requirement ID | Requirement Summary | Covered by Feature(s) | Prototype Evidence |
|---|---|---|---|
| **FR-01** | Clear homepage | F01 | `index.html` |
| **FR-02** | Navigation between prototype pages | F01 | Navigation bar throughout the prototype |
| **FR-03** | User registration and login | F02, F03 | `login.html`, `signup.html` |
| **FR-04** | Browse dormitory reviews | F04 | `dorms.html` |
| **FR-05** | Browse cafeteria reviews | F05 | `cafeteria.html` |
| **FR-06** | Search, filtering, and sorting | F04, F05, F06 | `dorms.html`, `cafeteria.html` |
| **FR-07** | Review detail page | F07 | `review-details.html` |
| **FR-08** | Review submission | F08 | `write-review.html` |
| **FR-09** | Campus survival guide | F09 | `guide.html` |
| **FR-10** | Form validation | F08 | Required and JavaScript-validated review fields |
| **FR-11** | Administrator-only dashboard | F10 | `dashboard.html` |
| **FR-12** | Consistent user interface | F01–F14 | All prototype pages |
| **FR-13** | Responsive design | F01–F14 | Shared HTML/CSS layout |
| **FR-14** | Student privacy | F02, F03, F08, F11 | Limited data and privacy guidance |
| **FR-15** | Documentation traceability | F01–F14 | Feature mapping and user stories |
| **FR-16** | Review moderation | F04, F05, F10, F14 | Public approval filter and dashboard |
| **FR-17** | Privacy notice and consent | F03, F11 | `privacy-consent.html`, `signup.html` |
| **FR-18** | Record ownership | F12 | `my-reviews.html` |
| **FR-19** | Inappropriate-content reporting | F07, F13 | Review detail/report pages |
| **FR-20** | Responsible content submission | F08 | Ownership confirmation |
| **FR-21** | Review status information | F12, F14 | `my-reviews.html` |
| **FR-22** | Submission feedback | F08, F13, F14 | Review/report confirmation messages |

---

# User Story Coverage Table

| User Story ID | User Story Summary | Covered by Feature(s) | Prototype Evidence |
|---|---|---|---|
| **US-01** | Understand HallPass from the homepage | F01 | `index.html` |
| **US-02** | Browse dormitory reviews | F04 | `dorms.html` |
| **US-03** | Browse cafeteria reviews | F05 | `cafeteria.html` |
| **US-04** | View review details | F06 | `review-details.html` |
| **US-05** | Submit a review | F07 | `write-review.html` |
| **US-06** | Read the campus survival guide | F08 | `guide.html` |
| **US-07** | Create an account | F03 | `signup.html` |
| **US-08** | Log into the platform | F02 | `login.html` |
| **US-09** | Moderate reviews and reports | F10, F14 | `dashboard.html` |
| **US-10** | Understand and consent to data use | F03, F11 | `privacy-consent.html`, `signup.html` |
| **US-11** | Manage owned reviews | F12 | `my-reviews.html` |
| **US-12** | View review status | F12, F14 | `my-reviews.html` |
| **US-13** | Report inappropriate content | F07, F13 | `report-review.html` |

---

# Final Prototype Page List

| Page | Purpose |
|---|---|
| `prototype/index.html` | Homepage and main navigation |
| `prototype/login.html` | User login |
| `prototype/signup.html` | User registration |
| `prototype/dorms.html` | Browse dormitory reviews |
| `prototype/cafeteria.html` | Browse cafeteria reviews |
| `prototype/review-details.html` | View detailed review information |
| `prototype/write-review.html` | Submit a review |
| `prototype/guide.html` | Browse campus survival guide |
| `prototype/dashboard.html` | View dashboard statistics and moderation summary |
| `prototype/privacy-consent.html` | Read privacy information and record consent |
| `prototype/my-reviews.html` | Manage owned reviews and view moderation status |
| `prototype/report-review.html` | Report inappropriate review content |

---

# Scope Alignment

The current HallPass prototype focuses on:

- Homepage and navigation
- User login
- User signup
- Dormitory reviews
- Cafeteria reviews
- Search and filtering
- Review detail viewing
- Review submission
- Campus survival guide
- Dashboard statistics

The current MVP does **not** include:

- AI-powered recommendations
- Online dormitory booking
- Payment system
- Real-time chat
- Live database integration
- Production authentication
- Mobile application
- Multi-language translation
- Interactive campus navigation

These features are reserved for future development after validating the core HallPass concept.
