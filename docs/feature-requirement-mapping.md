# Feature-Requirement Mapping

This document demonstrates that every feature implemented in the HallPass prototype is directly linked to the system requirements, user stories, and the corresponding prototype pages.

The current prototype files are located in:

`prototype/`

---

# Feature Mapping Table

| Feature ID | Feature / Screen | Requirement ID | User Story ID | Purpose | Prototype File | Final Prototype Module |
|---|---|---|---|---|---|---|
| **F01** | Homepage / Landing Screen | FR-01, FR-02, FR-12 | US-01 | Introduce HallPass, explain its purpose, and provide navigation to the main features. | `prototype/index.html` | Homepage |
| **F02** | Login | FR-03, FR-12 | US-08 | Allow users to access the simulated account flow. | `prototype/login.html` | Authentication |
| **F03** | Signup | FR-03, FR-12 | US-07 | Allow new users to create a simulated account. | `prototype/signup.html` | Authentication |
| **F04** | Dormitory Reviews | FR-04, FR-06, FR-12 | US-02 | Display dormitory review cards with search and filtering capabilities. | `prototype/dorms.html` | Dorm Reviews |
| **F05** | Cafeteria Reviews | FR-05, FR-06, FR-12 | US-03 | Display cafeteria review cards with search and filtering capabilities. | `prototype/cafeteria.html` | Cafeteria Reviews |
| **F06** | Review Detail View | FR-07, FR-12 | US-04 | Display complete review information for a selected dormitory or cafeteria. | `prototype/review-details.html` | Review Details |
| **F07** | Write Review | FR-08, FR-10, FR-14 | US-05 | Allow students to submit reviews through a structured form. | `prototype/write-review.html` | Review Submission |
| **F08** | Campus Survival Guide | FR-09, FR-12 | US-06 | Provide useful campus survival information for new students. | `prototype/guide.html` | Survival Guide |
| **F09** | Admin Dashboard | FR-11, FR-12 | US-09 | Display review statistics and moderation-related information. | `prototype/dashboard.html` | Dashboard |

---

# Requirement Coverage Table

| Requirement ID | Requirement Summary | Covered by Feature(s) | Prototype Evidence |
|---|---|---|---|
| **FR-01** | Clear homepage | F01 | `index.html` |
| **FR-02** | Navigation between prototype pages | F01 | Navigation bar throughout the prototype |
| **FR-03** | User registration and login | F02, F03 | `login.html`, `signup.html` |
| **FR-04** | Browse dormitory reviews | F04 | `dorms.html` |
| **FR-05** | Browse cafeteria reviews | F05 | `cafeteria.html` |
| **FR-06** | Search and filtering | F04, F05 | `dorms.html`, `cafeteria.html` |
| **FR-07** | Review detail page | F06 | `review-details.html` |
| **FR-08** | Review submission | F07 | `write-review.html` |
| **FR-09** | Campus survival guide | F08 | `guide.html` |
| **FR-10** | Form validation | F07 | Required review fields |
| **FR-11** | Administrative dashboard | F09 | `dashboard.html` |
| **FR-12** | Consistent user interface | F01–F09 | All prototype pages |
| **FR-13** | Responsive design | F01–F09 | Shared HTML/CSS layout |
| **FR-14** | Student privacy | F07 | Limited user information collected |
| **FR-15** | Documentation traceability | F01–F09 | Feature mapping and user stories |

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
| **US-09** | View dashboard information | F09 | `dashboard.html` |

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
