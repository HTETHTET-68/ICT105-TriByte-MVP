# Lab 10 - Implementation Plan

## 1. Project Information

- **Group name:** TriByte
- **Project title:** HallPass – Your Campus Survival Guide
- **Repository link:** https://github.com/HTETHTET-68/ICT105-TriByte-MVP
- **Selected platform/tools:** HTML5, CSS3, JavaScript, GitHub, browser `localStorage`, Visual Studio Code, and browser developer tools
- **Backend status:** Simulated backend using browser `localStorage` and JavaScript sample data

## 2. Prototype Scope for Sprint 1

The following features will be implemented or improved during Lab 10. The requirement IDs are aligned with the updated HallPass system requirements.

| Feature | Requirement ID | User Story ID | Screen/Module | Sprint 1 Status |
|---|---|---|---|---|
| Homepage / landing screen | FR-01 | US-01 | `prototype/index.html` | Working Draft |
| User registration and login | FR-03 | US-07, US-08 | `prototype/signup.html`, `prototype/login.html` | Working Draft |
| Dormitory review list | FR-04 | US-02 | `prototype/dorms.html` | Working Draft |
| Cafeteria review list | FR-05 | US-03 | `prototype/cafeteria.html` | Working Draft |
| Search and filtering | FR-06 | US-02, US-03 | Dorm and cafeteria list/search modules | Working Draft |
| Review detail view | FR-07 | US-04 | `prototype/review-details.html` | Needs Fix |
| Review input/submission form | FR-08, FR-10 | US-05 | `prototype/write-review.html` | Needs Fix |
| Campus survival guide | FR-09 | US-06 | `prototype/guide.html` | Working Draft |
| Administrator-only dashboard | FR-11 | US-09 | `prototype/dashboard.html` | Needs Fix |
| Review moderation and status handling | FR-16, FR-21 | US-05, US-09 | Dashboard, My Reviews, and local-storage modules | Needs Fix |
| Privacy notice and user consent | FR-17 | New user story required | `prototype/privacy-consent.html` | Not Started |
| Record ownership and My Reviews | FR-18 | New user story required | `prototype/my-reviews.html` | Not Started |
| Inappropriate-content reporting | FR-19 | New user story required | `prototype/report-review.html` | Not Started |
| Responsible content confirmation | FR-20 | US-05 must be updated | Write Review form | Not Started |
| Submission confirmation feedback | FR-22 | US-05 | Review/report submission messages | Working Draft |

## 3. Implementation Approach

- **Frontend:** Build the prototype as linked HTML pages styled through the shared `prototype/css/style.css` file. JavaScript modules will manage navigation, authentication simulation, review rendering, forms, and the administrative dashboard. Shared navigation, typography, buttons, cards, colours, and responsive layouts will be used across all screens.
- **Data source/storage:** Use seed review data from `prototype/js/data.js` and browser `localStorage` to simulate users, submitted reviews, ownership, moderation status, reports, and privacy consent. Only fictional demonstration data will be used because the prototype has no secure production backend.
- **Admin/status handling:** Store every new review with a `Pending` status. Add an administrator-role check before displaying the dashboard. Approve and Reject actions will update the saved review status, and rejection will include a brief reason. Only `Approved` reviews will appear on public review lists. `Pending`, `Approved`, and `Rejected` statuses will be visible to the review owner through My Reviews.
- **Search/filter approach:** Use JavaScript array filtering to search review titles, text, and tags by keyword. Apply the selected category and minimum-rating filters before rendering matching review cards. When no results match, display a clear empty-state message.
- **Validation approach:** Use HTML validation for required fields and JavaScript checks for allowed categories and ratings, title and review-text length, content-ownership confirmation, file type and size, and privacy consent. Trim and safely render text to reduce unsafe or unexpected input. Production deployment would additionally require server-side validation and sanitization.
- **Screenshots/evidence approach:** Capture the Homepage, Login/Signup, Dorm Reviews, Cafeteria Reviews, Review Details, Write Review, Survival Guide, Privacy Consent, My Reviews, Report Review, and Admin Dashboard after implementation. Save screenshots in `screenshots/` with clear lowercase filenames. Reference the related source file, screenshot, GitHub issue, and commit in `docs/feature-implementation-status.md`.

## 4. Member Responsibilities

| Member | Responsibility | Evidence of Contribution |
|---|---|---|
| Htet Htet Myint Zaw (Member 1) | Develop the HallPass frontend and core screens: create the main HTML and CSS, build the Homepage, Review Submission Form, Record List, and Detail View, connect navigation, and make the interface responsive and user-friendly. | [GitHub Issue #55 – Member 1: Frontend Development & Core Screens](https://github.com/HTETHTET-68/ICT105-TriByte-MVP/issues/55); deliverables: `prototype/index.html` and `prototype/style.css` |
| Khaing Zin Thet (Member 2) | Implement prototype functionality and screenshot evidence: create JavaScript, add sample review data, implement form validation, search/filter, review details, simulated admin status updates, and `localStorage`; capture Homepage, Input Form, Record List, Detail View, and Admin View screenshots. | [GitHub Issue #56 – Member 2: Functionality & Screenshots](https://github.com/HTETHTET-68/ICT105-TriByte-MVP/issues/56); deliverables: `prototype/script.js` and required files in `screenshots/` |
| Yousel Zangmo (Member 3) | Complete Sprint 1 documentation and repository updates: create the prototype link, implementation plan, and feature implementation status; update the weekly logbook and README; verify all required files and review the repository structure before submission. | [GitHub Issue #57 – Member 3: Documentation & GitHub Management](https://github.com/HTETHTET-68/ICT105-TriByte-MVP/issues/57); deliverables: `prototype/prototype-link.md`, `docs/implementation-plan.md`, `docs/feature-implementation-status.md`, `docs/weekly-logbook.md`, and `README.md` |

## 5. Risks or Blockers

| Risk or Blocker | Impact | Planned Solution |
|---|---|---|
| No real backend or production database | Authentication, permissions, and moderation are simulations and data remains only in one browser. | Use clearly labelled `localStorage` simulation with fictional data for Lab 10; document that a secure backend is required before production. |
| Updated requirements and old documents use different scopes | The prototype and traceability files may refer only to FR-01–FR-15 instead of FR-01–FR-22. | Replace the older requirement list in `docs/system-requirements.md` and update user stories, feature mapping, screen inventory, implementation status, issues, and commits. |
| Missing Privacy Consent, My Reviews, and Report Review pages | FR-17, FR-18, FR-19, and FR-21 cannot be demonstrated. | Create the three pages, connect them to navigation and storage logic, and capture screenshots. |
| Dashboard is not protected | A normal user can open the dashboard URL and access simulated admin actions. | Add a JavaScript role guard for the prototype and explain that production requires server-side role-based authorization. |
| Approve and Reject buttons do not change stored status | Review moderation cannot be demonstrated accurately. | Implement saved status updates, rejection reasons, public-list filtering, and dashboard re-rendering. |
| Unsafe or excessive form input | Invalid or harmful content may be stored and displayed. | Add length limits, allowlists, file checks, safe text rendering, and content-ownership/privacy confirmations; require server-side sanitization in production. |
| Responsive dashboard table may overflow on small screens | Mobile users may not be able to read or use moderation actions. | Test at common mobile and tablet sizes; use a scrollable table or responsive card layout. |
| Team merge conflicts or inconsistent files | Parallel work may overwrite pages or produce inconsistent navigation. | Assign files through GitHub issues, use small commits and separate branches, review changes before merging, and test the combined prototype. |

## Sprint 1 Completion Target

Sprint 1 will be considered complete when the primary student pathway and administrator pathway are clickable, the revised FR-01–FR-22 requirements are traceable to prototype evidence, missing responsible-IT screens are implemented, and every required screen has a corresponding screenshot and GitHub contribution record.
