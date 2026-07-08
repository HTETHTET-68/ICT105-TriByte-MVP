# HallPass System Requirements

## Project Scope

HallPass is a student-developed campus survival guide designed for first-year, international, and exchange students. The system helps students quickly find useful campus information through dormitory reviews, cafeteria reviews, campus survival guides, and student-contributed experiences.

The final prototype is implemented as a clickable web prototype using HTML, CSS, and JavaScript.

The prototype files are located in:

`prototype/`

Prototype pages included in the current scope:

- `index.html`
- `login.html`
- `signup.html`
- `guide.html`
- `dorms.html`
- `cafeteria.html`
- `review-details.html`
- `write-review.html`
- `dashboard.html`

HallPass does not include real-time chat, AI recommendations, online booking, payment systems, or a production database in the current MVP.

---

# Functional Requirements

| Req ID | Functional Requirement | HallPass Implementation / Final Prototype Must Show |
|---|---|---|
| **FR-01** | The system shall provide a clear homepage or landing screen. | The homepage introduces **HallPass – Your Campus Survival Guide**, explains the purpose of the platform, and provides navigation to the main features. Prototype file: `prototype/index.html` |
| **FR-02** | The system shall provide intuitive navigation. | Students can navigate between the Homepage, Dorm Reviews, Cafeteria Reviews, Survival Guide, Write Review, Login, and Signup pages. |
| **FR-03** | The system shall support user registration and login. | Users can access simulated Login and Signup pages. Prototype files: `prototype/login.html`, `prototype/signup.html` |
| **FR-04** | The system shall allow students to browse dormitory reviews. | Students can browse available dormitory review cards. Prototype file: `prototype/dorms.html` |
| **FR-05** | The system shall allow students to browse cafeteria reviews. | Students can browse available cafeteria review cards. Prototype file: `prototype/cafeteria.html` |
| **FR-06** | The system shall provide search and filtering. | Students can search and filter reviews by category or keyword. |
| **FR-07** | The system shall provide a review detail page. | Students can view detailed information about a selected review. Prototype file: `prototype/review-details.html` |
| **FR-08** | The system shall allow students to submit reviews. | Students can submit dormitory or cafeteria reviews through the review form. Prototype file: `prototype/write-review.html` |
| **FR-09** | The system shall provide campus survival guide information. | Students can browse helpful campus survival topics. Prototype file: `prototype/guide.html` |
| **FR-10** | The system shall validate review submission fields. | The review form includes required fields such as category, title, rating, and review content. |
| **FR-11** | The system shall provide an administrative dashboard. | The dashboard displays review statistics and moderation-related information. Prototype file: `prototype/dashboard.html` |
| **FR-12** | The system shall maintain a consistent user interface. | All pages use consistent navigation, typography, layout, buttons, cards, and color palette. |
| **FR-13** | The system shall support responsive layouts. | Pages are designed to display appropriately on desktop and smaller screen sizes. |
| **FR-14** | The system shall support student privacy. | Review submission collects only limited user information and avoids displaying sensitive personal data publicly. |
| **FR-15** | The prototype shall maintain traceability. | Prototype screens correspond directly to documented user stories, MVP features, and documentation. |

---

# Non-Functional Requirements

| Req ID | Non-Functional Requirement | Description |
|---|---|---|
| **NFR-01** | Usability | The interface should be simple and easy for first-year, international, and exchange students to use. |
| **NFR-02** | Performance | Prototype pages should load quickly under normal browser conditions. |
| **NFR-03** | Responsiveness | The interface should adapt to desktop, tablet, and mobile screen sizes. |
| **NFR-04** | Consistency | All pages should use the same navigation, layout, typography, button styles, and color palette. |
| **NFR-05** | Accessibility | The interface should use readable fonts, clear labels, and appropriate spacing. |
| **NFR-06** | Compatibility | The prototype should function correctly on Chrome, Edge, Firefox, and Safari. |
| **NFR-07** | Maintainability | The prototype should be easy for the development team to update and extend. |
| **NFR-08** | Privacy | The system should avoid collecting unnecessary personal or sensitive information. |
| **NFR-09** | Reliability | Navigation, review cards, dashboard information, and guide content should display consistently. |
| **NFR-10** | Scalability | The design should support future expansion such as additional review categories, guide topics, and administrative functions. |

---

# Minimum Technical Requirement

HallPass is an interactive clickable web prototype where users can:

- navigate between pages;
- create an account through the signup page;
- log in through the login page;
- browse dormitory reviews;
- browse cafeteria reviews;
- search and filter reviews;
- view detailed review information;
- submit reviews using a review form;
- browse campus survival guides;
- view an administrative dashboard.

The prototype is implemented using:

| Platform Type | HallPass Prototype Form |
|---|---|
| Web Application Prototype | HTML, CSS, and JavaScript |
| Prototype Location | `prototype/` |
| Main Files | `index.html`, `login.html`, `signup.html`, `guide.html`, `dorms.html`, `cafeteria.html`, `review-details.html`, `write-review.html`, `dashboard.html` |

---

# Out of Scope for MVP

The following features are intentionally excluded from the current HallPass MVP:

- Real-time chat or messaging
- AI-powered recommendations
- Online dormitory booking
- Online payment system
- Live database integration
- Production authentication
- Mobile application (Android/iOS)
- Multi-language translation
- Interactive GPS or live campus navigation
- Gamification and reward system

These features may be considered in future versions after validating the core HallPass concept.
