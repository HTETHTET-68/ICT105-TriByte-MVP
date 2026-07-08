# Technical Architecture

## Project Title

**HallPass – Student Reviews & Campus Survival Guide**

---

## 1. Selected Prototype Platform

**Frontend-only: HTML/CSS/JavaScript**

HallPass will be implemented as a clickable web prototype using static HTML pages, shared CSS styling, and JavaScript for simple interaction such as navigation, form validation, search, filtering, and simulated dashboard behavior.

---

## 2. Architecture Decision

A frontend-only architecture is suitable for HallPass because the current MVP focuses on demonstrating user flow, interface design, review browsing, review submission, search/filtering, and dashboard display rather than building a full production system.

This platform is appropriate because:

- The group can build and update HTML, CSS, and JavaScript files within the semester timeline.
- GitHub Pages can host the prototype without extra backend setup.
- The prototype can clearly show the required screens and interactions.
- Review data, login behavior, and dashboard statistics can be simulated using sample data and JavaScript.
- It matches the MVP scope, which excludes production authentication, live databases, AI recommendations, chat, payments, and booking systems.

---

## 3. Main Components

| Component | Description | Tool / Technology | Related Requirement |
|---|---|---|---|
| User Interface | Provides the main HallPass pages, navigation menu, consistent layout, cards, buttons, typography, and responsive design. | HTML, CSS, JavaScript | FR-01, FR-02, FR-12, FR-13 |
| Data Input Form | Allows students to submit dormitory or cafeteria reviews through a structured review form with required fields. | HTML Form, JavaScript Validation | FR-08, FR-10, FR-14 |
| Data Storage | Uses sample/static review data and simulated local prototype data instead of a production database. | JavaScript arrays / static sample records | FR-04, FR-05, FR-06, FR-07 |
| Record List | Displays dormitory and cafeteria review cards for students to browse. | HTML, CSS, JavaScript | FR-04, FR-05, FR-06 |
| Detail View | Shows detailed information for a selected review. | `review-details.html`, HTML, CSS, JavaScript | FR-07, FR-12 |
| Admin Function | Simulates administrator monitoring and moderation through dashboard information. | Static dashboard page, JavaScript | FR-11, FR-12 |
| Dashboard / Summary | Displays review statistics, review counts, and moderation-related summary information. | `dashboard.html`, HTML, CSS, JavaScript | FR-11, FR-12 |

---

## 4. What Will Be Fully Implemented?

The final prototype will fully implement the following frontend features:

- Homepage / landing page
- Navigation between all prototype pages
- Login page
- Signup page
- Dormitory review list
- Cafeteria review list
- Search and filter functions
- Review detail page
- Write review form
- Required field validation for review submission
- Campus survival guide page
- Admin dashboard / summary page
- Consistent interface design across all pages
- Responsive layout for desktop and smaller screens

Prototype files:

- `prototype/index.html`
- `prototype/login.html`
- `prototype/signup.html`
- `prototype/dorms.html`
- `prototype/cafeteria.html`
- `prototype/review-details.html`
- `prototype/write-review.html`
- `prototype/guide.html`
- `prototype/dashboard.html`

---

## 5. What Will Be Simulated?

Because HallPass is a frontend-only MVP, the following features will be simulated:

- User registration and login
- Review submission saving
- Review database
- Admin moderation actions
- Dashboard statistics
- User account/session behavior
- Review approval or rejection status
- Data updates after form submission

The prototype will use static sample data and JavaScript behavior to demonstrate how these features would work in a full system.

---

## 6. Final Prototype Risk

The biggest technical risk is that the prototype may not show realistic data flow because it does not use a real backend or live database.

The group will reduce this risk by:

- Using clear sample review records.
- Showing all required pages and user pathways.
- Adding JavaScript validation and search/filter behavior.
- Keeping the interface consistent across all pages.
- Documenting which features are fully implemented and which are simulated.
- Aligning every screen with the system requirements, user stories, and feature mapping.
