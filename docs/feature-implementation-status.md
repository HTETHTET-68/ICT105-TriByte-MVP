# Lab 10 - Feature Implementation Status

## Purpose

This file shows how the current HallPass prototype implementation is connected to the revised functional requirements in `updated-requirements-note.md`.

| Req ID | Required Functionality | Prototype Screen/Module | Current Status | Evidence | Original Sprint Fix / Final Verification |
|---|---|---|---|---|---|
| FR-01 | Clear homepage or landing screen | Homepage | Implemented | `prototype/index.html`; `screenshots/home.png` | Add the required disclaimer that reviews represent student opinions. |
| FR-02 | Intuitive navigation | Shared navigation menu | Implemented | Navigation in the existing prototype pages; mobile-menu logic in `prototype/js/main.js` | Add links to Privacy Consent, My Reviews, and Report Review after those pages are created; test every link. |
| FR-03 | User registration and login | Login and Signup pages | Implemented | `prototype/login.html`; `prototype/signup.html`; `prototype/js/auth.js`; `screenshots/login page.png` | Add privacy links, registration consent, and a visible notice that authentication is simulated. |
| FR-04 | Browse dormitory reviews | Dorm Reviews page | Implemented | `prototype/dorms.html`; `prototype/js/main.js`; `prototype/js/data.js`; `screenshots/dorm review.png` | Show review dates and ensure only Approved reviews appear publicly. |
| FR-05 | Browse cafeteria reviews | Cafeteria Reviews page | Implemented | `prototype/cafeteria.html`; `prototype/js/main.js`; `prototype/js/data.js`; `screenshots/cafeteria reviews.png` | Show review dates and ensure only Approved reviews appear publicly. |
| FR-06 | Search and filtering | Search field and minimum-rating filter | Implemented | `searchInput` and `ratingFilter` in `prototype/dorms.html` and `prototype/cafeteria.html`; filtering logic in `prototype/js/main.js` | Extend keyword search to review text and tags; add a category filter if required. |
| FR-07 | Review detail page | Review Details page | Implemented | `prototype/review-details.html`; review links in `prototype/js/main.js`; `screenshots/review-details page.png` | Add username or anonymous author, date, personal-opinion disclaimer, and Report Review button. |
| FR-08 | Submit dormitory or cafeteria reviews | Write Review page and review-saving script | Implemented | `prototype/write-review.html`; `prototype/js/reviews.js`; `prototype/js/data.js`; `screenshots/write review page.png` | Complete the revised validation, privacy, and content-ownership requirements. |
| FR-09 | Campus survival guide information | Survival Guide page | Implemented | `prototype/guide.html`; `screenshots/new student survival guide.png` | Complete a final content, navigation, and responsive-layout check. |
| FR-10 | Validate review submissions | Required form fields and fixed category/rating options | Implemented | HTML `required` attributes in `prototype/write-review.html`; form handling in `prototype/js/reviews.js` | Add text-length limits, unexpected-input rejection, sanitization, file size/type checks, and safe output rendering. |
| FR-11 | Administrator-only dashboard | Admin Dashboard | Implemented | `prototype/dashboard.html`; `prototype/js/dashboard.js`; `screenshots/admin dashboard.png` | Add an admin-role route guard; implement saved Approve, Reject, Edit, and Remove actions with rejection reasons. |
| FR-12 | Consistent user interface | Shared CSS and interface components | Implemented | `prototype/css/style.css`; shared navigation, cards, buttons, forms, typography, and colours across all pages | Complete a final cross-page visual check. |
| FR-13 | Responsive layouts | Responsive CSS and mobile navigation | Implemented | Media queries at 900px and 560px in `prototype/css/style.css`; menu toggle in `prototype/js/main.js` | Test all screens on desktop, tablet, and mobile, especially the dashboard table and forms. |
| FR-14 | Protect student privacy | Review form, simulated account storage, and privacy documentation | Implemented | `prototype/write-review.html`; `prototype/js/auth.js`; `docs/privacy-and-data-protection.md`; `docs/data-handling-policy.md` | Display usernames instead of emails; warn users not to share personal information; do not store real credentials in `localStorage`; sanitize public content. |
| FR-15 | Prototype traceability | Requirements, feature mapping, screens, and project documentation | Implemented | `updated-requirements-note.md`; `docs/system-requirements.md`; `docs/feature-requirement-mapping.md`; `docs/screen-inventory-checklist.md`; this file | Confirm final GitHub paths and screenshots. |
| FR-16 | Review moderation | Pending review status and Admin Dashboard | Implemented | `prototype/js/data.js` assigns status; `prototype/js/dashboard.js` persists moderation; public lists use Approved reviews | Test Pending, Approved, Rejected, Reported, and Resolved states. |
| FR-17 | Privacy notice and user consent | Privacy Consent page | Implemented | `prototype/privacy-consent.html`; signup consent in `prototype/signup.html` | Verify the notice and consent links on desktop/mobile. |
| FR-18 | Record ownership | My Reviews page and ownership logic | Implemented | `prototype/my-reviews.html`; owner stored in `prototype/js/data.js` | Test owner-only view, edit, and delete behavior. |
| FR-19 | Report inappropriate content | Report Review page and report storage | Implemented | `prototype/report-review.html`; Report Review link in `prototype/review-details.html` | Test report submission and dashboard resolution. |
| FR-20 | Responsible content submission | Write Review form | Implemented | Required ownership checkbox, privacy warning, and privacy link in `prototype/write-review.html` | Verify invalid submissions are blocked. |
| FR-21 | Display review status information | My Reviews page and review status data | Implemented | `prototype/my-reviews.html` displays Pending, Approved, Rejected, and rejection reason | Test each status with the student demo account. |
| FR-22 | Clear submission feedback | Toast feedback after review submission | Implemented | `prototype/js/reviews.js` displays: “Review submitted. It is now pending admin approval.”; `toast()` in `prototype/js/data.js` | Add equivalent report-submission confirmation and improve accessibility with an announced status region. |

## Summary

- **Features implemented:** Homepage; authentication simulation; approved dormitory/cafeteria lists; expanded search/filter/sort; review details; validated submission; Survival Guide; protected dashboard; persistent moderation; Privacy Consent; My Reviews/ownership/status; reporting; responsible-content confirmation; accessible feedback.
- **Final verification still required:** Test the full student/admin flows on desktop and mobile, refresh screenshots, and confirm GitHub evidence accurately reflects team contributions.
- **Prototype limitation:** `localStorage` and client-side role checks are classroom simulations, not production security.

## Overall Implementation Decision

**Aligned and ready for final QA.** FR-01–FR-22 are connected to current prototype evidence while production security remains out of scope.
