# Lab 10 - Implementation Plan

## 1. Project Information

* **Group name:** TriByte
* **Project title:** HallPass – Dormitory and Cafeteria Review Platform
* **Repository link:** https://github.com/HTETHTET-68/ICT105-TriByte-MVP
* **Selected platform/tools:** HTML5, CSS3, JavaScript, Visual Studio Code, GitHub, and browser localStorage
* **Backend status:** Simulated backend using JavaScript and browser localStorage

## 2. Prototype Scope for Sprint 1

The following features are included in the HallPass Prototype 15 implementation for Lab 10.

| Feature                        | Requirement ID | User Story ID | Screen/Module                               | Sprint 1 Status     |
| ------------------------------ | -------------- | ------------- | ------------------------------------------- | ------------------- |
| Homepage / landing screen      | FR-01          | US-01         | `index.html`                                | Completed           |
| User signup and login          | FR-03          | US-02         | `signup.html` and `login.html`              | Completed           |
| Input / review submission form | FR-10, FR-11   | US-08         | `submit-review.html`                        | Completed           |
| Dormitory record list          | FR-05          | US-03         | `dormitories.html`                          | Completed           |
| Cafeteria record list          | FR-05          | US-04         | `cafeterias.html`                           | Completed           |
| Search, filter, and sort       | FR-06          | US-05         | Dormitory and cafeteria review lists        | Completed           |
| Review detail view             | FR-07          | US-06         | `review-detail.html`                        | Completed           |
| Review status tracking         | FR-08          | US-09         | `student-dashboard.html`                    | Completed           |
| Student dashboard              | FR-12          | US-09         | `student-dashboard.html`                    | Completed           |
| Admin moderation function      | FR-09, FR-16   | US-10         | `admin-dashboard.html`                      | Completed           |
| Privacy notice and consent     | FR-17          | US-11         | Signup and review submission consent modals | Completed           |
| Campus guide                   | FR-02          | US-07         | `guide.html`                                | Completed           |
| Admin audit log                | FR-18          | US-12         | Admin dashboard audit-log module            | Completed           |
| User management interface      | FR-19          | US-13         | Admin dashboard user-management module      | Partially Completed |
| Report management interface    | FR-20          | US-14         | Admin dashboard report-management module    | Partially Completed |

## 3. Implementation Approach

* **Frontend:**
  The HallPass prototype is built using HTML5, CSS3, and JavaScript. Separate HTML pages are used for the homepage, login, signup, dormitory reviews, cafeteria reviews, campus guide, review detail view, review submission form, student dashboard, and admin dashboard. Shared CSS and JavaScript files are used to maintain consistent styling, navigation, and behaviour across the prototype.

* **Data source/storage:**
  Sample dormitory, cafeteria, user, review, submission, report, and moderation data are stored in JavaScript objects and browser localStorage. LocalStorage is used as a simulated backend so that selected information can remain available after the page is refreshed. The current prototype does not use a real database or server.

* **Admin/status handling:**
  Newly submitted reviews are assigned a `Pending` status. The admin dashboard provides a moderation queue where administrators can simulate approving or rejecting submitted reviews. Review status changes are saved in localStorage. Administrative actions are also recorded in a simulated audit log.

* **Search/filter approach:**
  JavaScript is used to search review titles, locations, categories, and descriptions. Users can filter dormitory and cafeteria records by category and minimum rating. Sorting controls can arrange records based on rating or other available criteria. The displayed review cards update dynamically without reloading the page.

* **Validation approach:**
  HTML form validation is used for required fields, email input, password fields, rating selection, review category, review content, and consent confirmation. JavaScript performs additional checks before signup information or review submissions are stored. Because this is a frontend prototype, validation is client-side only and would need server-side validation and sanitization in a production system.

* **Screenshots/evidence approach:**
  Screenshots of Prototype 15 pages and completed workflows will be stored in the `screenshots/` folder. GitHub issues, commits, repository files, and screenshots will be used as evidence of each member’s contribution. Evidence should include the homepage, review lists, search and filtering, review detail page, submission form, student dashboard, privacy consent, admin dashboard, moderation actions, and status tracking.

## 4. Member Responsibilities

| Member                             | Responsibility                                                                                                                                                                                                                                                                                                                   | Evidence of Contribution                                                                                                                                                                                                                                              |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Htet Htet Myint Zaw (Member 1)** | Develop the HallPass frontend and core screens. Create the main HTML structure, build the homepage, review submission form, record lists, and review detail view, connect the navigation between pages, and ensure the interface is responsive and user-friendly.                                                                | **GitHub Issue #55 – Member 1: Frontend Development & Core Screens**. Deliverables include `prototype/index.html`, the core HTML pages, and related frontend files.                                                                                                   |
| **Khaing Zin Thet (Member 2)**     | Implement the prototype functionality and prepare screenshot evidence. Add sample data, form validation, search, filtering and sorting, review detail functionality, moderation and status actions, and browser localStorage persistence. Capture the required screenshots of completed features and workflows.                  | **GitHub Issue #56 – Member 2: Functionality & Screenshots**. Deliverables include files in `prototype/js/` and evidence stored in `screenshots/`.                                                                                                                    |
| **Yousel Zangmo (Member 3)**       | Complete the Sprint 1 documentation, styling, and repository updates. Create and update the prototype link, implementation plan, feature implementation status, weekly logbook, and README. Create and maintain `style.css`, verify that all required files are included, and review the repository structure before submission. | **GitHub Issue #57 – Member 3: Documentation & GitHub Management**. Deliverables include `prototype/prototype-link.md`, `prototype/css/style.css`, `docs/implementation-plan.md`, `docs/feature-implementation-status.md`, `docs/weekly-logbook.md`, and `README.md`. |

## 5. Risks or Blockers

| Risk or Blocker                                           | Current Impact                                                                   | Planned Solution                                                                                  |
| --------------------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| The prototype does not have a real backend or database.   | Data is stored only in the browser and may be lost when localStorage is cleared. | Develop a backend API and database in a future implementation phase.                              |
| Authentication is simulated on the frontend.              | Login details and user roles are not securely verified.                          | Add secure server-side authentication, password hashing, sessions, and role-based authorization.  |
| Admin access is controlled mainly through frontend logic. | A user may access the admin page directly if they know the page URL.             | Protect admin routes through backend role checks in the production system.                        |
| Input validation is client-side only.                     | Users may bypass browser validation or submit unsafe content.                    | Add server-side validation, input sanitization, content-length restrictions, and file validation. |
| Review approval and rejection are simulated.              | Moderation changes are stored only in localStorage.                              | Connect the moderation workflow to authenticated administrator accounts and a database.           |
| User-management features are partially implemented.       | Some user actions do not update real accounts or permissions.                    | Add a real user database and role-based account management.                                       |
| Report-management features are partially implemented.     | Reports and report resolution actions are not fully connected to permanent data. | Add a report submission workflow and database-backed report management.                           |
| Data is available only on the same browser and device.    | Different users cannot access synchronized information.                          | Use centralized server-side or cloud-based storage.                                               |
| Screenshots may become outdated after prototype changes.  | Submitted evidence may not match the latest Prototype 15 design.                 | Capture new screenshots after final testing and before submission.                                |
| Team contribution evidence may be incomplete.             | It may be difficult to identify each member’s work.                              | Use individual GitHub issues, commits, assigned files, and screenshots as contribution evidence.  |
| Responsive layouts may behave differently across devices. | Some content may overlap or become difficult to use on smaller screens.          | Test the prototype on desktop, tablet, and mobile screen sizes and correct CSS breakpoints.       |
| Browser localStorage can be manually changed by users.    | Prototype data and role information are not secure.                              | Move sensitive data and permission checks to a protected backend in future development.           |



## Sprint 1 Completion Target

Sprint 1 implementation is complete when the final student and administrator pathways pass manual QA, FR-01–FR-22 remain traceable, updated screenshots are captured, and GitHub contribution evidence is confirmed.
