# Lab 10 - Implementation Plan

## 1. Project Information

* **Group name:** TriByte
* **Project title:** HallPass – Dormitory and Cafeteria Review Platform
* **Repository link:** https://github.com/HTETHTET-68/ICT105-TriByte-MVP
* **Selected platform/tools:** HTML5, CSS3, JavaScript, Visual Studio Code, GitHub, and browser localStorage
* **Backend status:** Simulated backend using JavaScript and browser localStorage

## 2. Prototype Scope for Sprint 1

The following features are included in HallPass Prototype 15 for Lab 10.

| Feature                          | Requirement ID | User Story ID | Screen/Module                               | Sprint 1 Status     |
| -------------------------------- | -------------- | ------------- | ------------------------------------------- | ------------------- |
| Homepage / landing screen        | FR-01          | US-01         | `index.html`                                | Completed           |
| Shared navigation                | FR-02          | US-01         | Navigation across all prototype pages       | Completed           |
| User signup and login            | FR-03          | US-02         | `signup.html` and `login.html`              | Completed           |
| Dormitory review list            | FR-04          | US-03         | `dorms.html`                                | Completed           |
| Cafeteria review list            | FR-05          | US-04         | `cafeteria.html`                            | Completed           |
| Search and minimum-rating filter | FR-06          | US-05         | Dormitory and cafeteria review lists        | Completed           |
| Review detail view               | FR-07          | US-06         | `review-details.html`                       | Completed           |
| Authenticated review submission  | FR-08          | US-07         | `write-review.html`                         | Completed           |
| Campus survival guide            | FR-09          | US-08         | `guide.html`                                | Completed           |
| Required-field validation        | FR-10          | US-07         | Signup, login, and review submission forms  | Completed           |
| Student dashboard                | FR-11          | US-09         | `student-dashboard.html`                    | Completed           |
| Administrator dashboard          | FR-12          | US-10         | `dashboard.html`                            | Completed           |
| Review approval and rejection    | FR-13          | US-10         | Moderation section in `dashboard.html`      | Completed           |
| Submission status tracking       | FR-14          | US-09         | `student-dashboard.html`                    | Completed           |
| Privacy notice and consent       | FR-15          | US-11         | Signup and review submission consent modals | Completed           |
| Review ownership                 | FR-16          | US-09         | Student submission records                  | Completed           |
| Remove pending submissions       | FR-17          | US-09         | `student-dashboard.html`                    | Completed           |
| Toast and action feedback        | FR-18          | US-12         | Shared JavaScript feedback messages         | Completed           |
| Reported-content examples        | FR-19          | US-13         | Reports section in `dashboard.html`         | Partially Completed |
| User-management examples         | FR-20          | US-14         | User-management section in `dashboard.html` | Partially Completed |
| Administrator audit log          | FR-21          | US-15         | Audit-log section in `dashboard.html`       | Completed           |
| Responsive interface             | FR-22          | US-16         | Shared CSS across all prototype pages       | Completed           |

## 3. Implementation Approach

* **Frontend:**
  HallPass Prototype 15 is built using HTML5, CSS3, and JavaScript. Separate HTML pages are used for the homepage, authentication, dormitory reviews, cafeteria reviews, review details, review submission, campus guide, student dashboard, and administrator dashboard. Shared CSS and JavaScript files maintain consistent styling, navigation, responsiveness, and behaviour throughout the prototype.

* **Data source/storage:**
  Sample users, dormitory reviews, cafeteria reviews, review submissions, moderation records, reports, and audit-log entries are stored in JavaScript objects and browser localStorage. LocalStorage acts as a simulated backend so that selected data can remain available after page refreshes. The current prototype does not use a real database or server.

* **Admin/status handling:**
  Newly submitted reviews receive a `Pending` status. Administrators can view pending reviews in the moderation section of `dashboard.html` and simulate approving or rejecting them. Updated statuses are saved in localStorage. Administrative actions are also recorded in a simulated audit log.

* **Search/filter approach:**
  JavaScript is used to search review content and filter dormitory and cafeteria records by minimum rating. The displayed review cards update dynamically without requiring the page to reload.

* **Validation approach:**
  HTML validation is used for required fields, email input, passwords, review categories, ratings, review content, and consent confirmation. JavaScript performs additional checks before user or review data is saved. Since this is a frontend prototype, validation is client-side only and would need server-side validation and sanitization in a production system.

* **Screenshots/evidence approach:**
  Screenshots of Prototype  pages and completed workflows will be stored in the `screenshots/` folder. GitHub issues, commits, repository files, and screenshots will be used as contribution evidence. Evidence should include the homepage, dormitory and cafeteria lists, search and rating filters, review details, review submission, student dashboard, privacy consent, administrator dashboard, moderation actions, reports, user-management examples, and audit-log records.

## 4. Member Responsibilities

| Member                             | Responsibility                                                                                                                                                                                                                                                                                             | Evidence of Contribution                                                                                                                                                                                                                                              |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Htet Htet Myint Zaw (Member 1)** | Develop the HallPass frontend and core screens. Create the main HTML structure, build the homepage, review submission form, record lists, and review detail view, connect navigation, and make the interface responsive and user-friendly.                                                                 | **GitHub Issue #55 – Member 1: Frontend Development & Core Screens.** Deliverables include `prototype/index.html`, the core HTML screens, and related frontend files.                                                                                                 |
| **Khaing Zin Thet (Member 2)**     | Implement prototype functionality and screenshot evidence. Add sample data, validation, search and filtering, review-detail functionality, saved moderation and status actions, and localStorage persistence. Capture the required screen evidence.                                                        | **GitHub Issue #56 – Member 2: Functionality & Screenshots.** Deliverables include files in `prototype/js/` and evidence stored in `screenshots/`.                                                                                                                    |
| **Yousel Zangmo (Member 3)**       | Complete Sprint 1 documentation, styling, and repository updates. Create and update the prototype link, implementation plan, feature implementation status, weekly logbook, and README. Create and maintain `style.css`, verify all required files, and review the repository structure before submission. | **GitHub Issue #57 – Member 3: Documentation & GitHub Management.** Deliverables include `prototype/prototype-link.md`, `prototype/css/style.css`, `docs/implementation-plan.md`, `docs/feature-implementation-status.md`, `docs/weekly-logbook.md`, and `README.md`. |

## 5. Risks or Blockers

| Risk or Blocker                                           | Current Impact                                                                        | Planned Solution                                                                            |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| The prototype does not have a real backend or database.   | Data is stored only in the browser and may be lost when localStorage is cleared.      | Develop a backend API and database in a future implementation phase.                        |
| Authentication is simulated on the frontend.              | Login credentials and user roles are not securely verified.                           | Add server-side authentication, password hashing, sessions, and role-based authorization.   |
| Admin access is mainly controlled through frontend logic. | A user may access the admin page directly if they know the URL.                       | Protect admin routes using backend role checks in the production system.                    |
| Input validation is client-side only.                     | Users may bypass validation or submit unsafe content.                                 | Add server-side validation, sanitization, content-length restrictions, and file validation. |
| Review approval and rejection are simulated.              | Moderation changes are stored only in localStorage.                                   | Connect moderation actions to authenticated administrator accounts and a database.          |
| Report-management features are partially implemented.     | Reports are shown as examples and are not connected to a complete reporting workflow. | Add student report submission and database-backed report resolution.                        |
| User-management features are partially implemented.       | User actions do not update real accounts or permissions.                              | Add a real user database and secure role-management controls.                               |
| Data is available only on the same browser and device.    | Different users cannot access synchronized information.                               | Use centralized server-side or cloud storage.                                               |
| Browser localStorage can be manually modified.            | Prototype roles, statuses, and records are not secure.                                | Move sensitive data and permission checks to a protected backend.                           |
| Screenshots may become outdated after prototype changes.  | Evidence may not match the latest Prototype 15 interface.                             | Capture new screenshots after final testing and before submission.                          |
| Team contribution evidence may be incomplete.             | It may be difficult to verify each member’s work.                                     | Use individual GitHub issues, commits, assigned files, and screenshots.                     |
| Responsive layouts may behave differently across devices. | Some content may overlap or become difficult to use.                                  | Test desktop, tablet, and mobile layouts and correct CSS breakpoints.                       |

