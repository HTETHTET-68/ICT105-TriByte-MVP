# HallPass System Requirements

## Project Scope

HallPass is a student-made campus survival guide for first-year, international, and exchange students. The system focuses on helping students find useful campus-related information through dormitory reviews, cafeteria reviews, student tips, and a first-week survival guide.

The final prototype is implemented as a clickable web prototype using HTML and CSS. The existing prototype files are located in:

`prototype/wireframe-html/`

Prototype pages included in the current scope:

- `index.html`
- `reviews.html`
- `detail.html`
- `submit.html`
- `guide.html`
- `dashboard.html`
- `admin.html`

HallPass does not include real-time chat, AI recommendations, online booking, payment, or live map features in the MVP.

---

## Functional Requirements

| Req ID | Functional Requirement | HallPass Implementation / Final Prototype Must Show |
|---|---|---|
| **FR-01** | The system shall provide a clear homepage or landing screen. | The homepage shall introduce **HallPass – Your Campus Survival Guide**, explain the target users, and provide main actions such as Browse Reviews, Submit Review, and Open Survival Guide. Prototype file: `prototype/wireframe-html/index.html` |
| **FR-02** | The system shall provide a clear primary user pathway. | Students shall be able to move from the homepage to browse reviews, open a review detail page, submit a review, or read the survival guide. |
| **FR-03** | The system shall allow students to submit information. | Students shall be able to submit dormitory, cafeteria, or campus guide reviews using the review submission form. Prototype file: `prototype/wireframe-html/submit.html` |
| **FR-04** | The system shall support simulated data storage or record management. | Submitted or sample review data shall be represented through the prototype using review cards, status labels, and dashboard statistics. |
| **FR-05** | The system shall allow users to view existing records or information lists. | Students shall be able to view dormitory and cafeteria review listings. Prototype file: `prototype/wireframe-html/reviews.html` |
| **FR-06** | The system shall include search, filter, or category browsing. | Students shall be able to search reviews by keyword and filter reviews by category such as Dormitory or Cafeteria. |
| **FR-07** | The system shall provide a detail view for each record. | Students shall be able to open a review detail page showing category, rating, status, and full review information. Prototype file: `prototype/wireframe-html/detail.html` |
| **FR-08** | The system shall show status or progress tracking. | Reviews shall display status labels such as Published, Verified Student, or Pending Review. |
| **FR-09** | The system shall include an admin or manager function. | Admins shall be able to review submitted content and simulate moderation actions such as approve, flag, or delete. Prototype file: `prototype/wireframe-html/admin.html` |
| **FR-10** | The system shall include basic validation and error prevention. | The review submission form shall include required fields such as category, place name, rating, title, and comment. |
| **FR-11** | The system shall provide confirmation or feedback messages. | After submission or moderation, the system shall show messages such as “Review submitted successfully” or “Status updated successfully.” |
| **FR-12** | The system shall include a dashboard or summary view. | The dashboard shall show summary information such as total reviews, pending reviews, top dormitory, and top cafeteria. Prototype file: `prototype/wireframe-html/dashboard.html` |
| **FR-13** | The system shall maintain basic user interface consistency. | All pages shall use consistent navigation, layout, typography, buttons, cards, and colors. |
| **FR-14** | The system shall consider mobile-friendly or responsive design. | The interface shall use responsive layout elements so students can reasonably view the prototype on laptop or mobile screens. |
| **FR-15** | The system shall show basic privacy and responsible data handling. | The review form shall collect only limited display information and include a privacy note explaining that full personal details are not shown publicly. |
| **FR-16** | The final prototype shall maintain traceability. | Every major screen and feature shall connect back to HallPass user stories, MVP features, and prototype pages. |

---

## Non-Functional Requirements

| Req ID | Non-Functional Requirement | Description |
|---|---|---|
| **NFR-01** | Usability | The system should be simple and easy for first-year, international, and exchange students to understand without training. |
| **NFR-02** | Performance | Prototype pages should load quickly under normal browser conditions. |
| **NFR-03** | Responsiveness | The interface should adapt reasonably to desktop, tablet, and mobile screen sizes. |
| **NFR-04** | Consistency | All pages should use the same navigation style, layout structure, visual design, button style, and card format. |
| **NFR-05** | Accessibility | The interface should use readable text, clear labels, visible buttons, and sufficient spacing. |
| **NFR-06** | Compatibility | The prototype should work properly on modern browsers such as Chrome, Edge, Firefox, and Safari. |
| **NFR-07** | Maintainability | The prototype structure should allow the team to update review content, guide content, and dashboard information easily. |
| **NFR-08** | Privacy | The system should avoid collecting unnecessary sensitive information from students. |
| **NFR-09** | Reliability | The prototype should consistently display the intended review cards, guide content, status labels, and navigation links. |
| **NFR-10** | Scalability | The design should allow future expansion, such as more review categories, more campus guide topics, or more admin tools, without changing the core concept. |

---

## Minimum Technical Requirement

HallPass is not only a static idea or presentation. The final prototype is an interactive clickable web prototype where users can:

- navigate between pages;
- browse reviews;
- search and filter review categories;
- open review details;
- submit a review through a form-like screen;
- view review status labels;
- view dashboard summary information;
- simulate admin moderation actions.

The prototype is implemented using:

| Platform Type | HallPass Prototype Form |
|---|---|
| Web App Prototype | HTML and CSS clickable prototype |
| Prototype Location | `prototype/wireframe-html/` |
| Main Files | `index.html`, `reviews.html`, `detail.html`, `submit.html`, `guide.html`, `dashboard.html`, `admin.html` |

---

## Out of Scope for MVP

The following features are not included in the current HallPass MVP:

- real-time chat;
- AI recommendation system;
- online dormitory booking;
- payment system;
- interactive campus map;
- user account login system;
- live database integration;
- mobile application version.

These features may be considered for future development after validating the core review and campus guide concept.
