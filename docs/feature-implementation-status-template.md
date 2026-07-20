# Lab 10 - Feature Implementation Status

## Purpose

This file shows how the current HallPass prototype implementation is connected to the revised functional requirements in `updated-requirements-note.md`.

| Req ID | Required Functionality | Prototype Screen/Module | Current Status | Evidence | Next Fix Needed |
|---|---|---|---|---|---|
| FR-01 | Clear homepage or landing screen | Homepage | Working Draft | `prototype/index.html`; `screenshots/home.png` | Add the required disclaimer that reviews represent student opinions. |
| FR-02 | Intuitive navigation | Shared navigation menu | Needs Fix | Navigation in the existing prototype pages; mobile-menu logic in `prototype/js/main.js` | Add links to Privacy Consent, My Reviews, and Report Review after those pages are created; test every link. |
| FR-03 | User registration and login | Login and Signup pages | Working Draft | `prototype/login.html`; `prototype/signup.html`; `prototype/js/auth.js`; `screenshots/login page.png` | Add privacy links, registration consent, and a visible notice that authentication is simulated. |
| FR-04 | Browse dormitory reviews | Dorm Reviews page | Working Draft | `prototype/dorms.html`; `prototype/js/main.js`; `prototype/js/data.js`; `screenshots/dorm review.png` | Show review dates and ensure only Approved reviews appear publicly. |
| FR-05 | Browse cafeteria reviews | Cafeteria Reviews page | Working Draft | `prototype/cafeteria.html`; `prototype/js/main.js`; `prototype/js/data.js`; `screenshots/cafeteria reviews.png` | Show review dates and ensure only Approved reviews appear publicly. |
| FR-06 | Search and filtering | Search field and minimum-rating filter | Working Draft | `searchInput` and `ratingFilter` in `prototype/dorms.html` and `prototype/cafeteria.html`; filtering logic in `prototype/js/main.js` | Extend keyword search to review text and tags; add a category filter if required. |
| FR-07 | Review detail page | Review Details page | Needs Fix | `prototype/review-details.html`; review links in `prototype/js/main.js`; `screenshots/review-details page.png` | Add username or anonymous author, date, personal-opinion disclaimer, and Report Review button. |
| FR-08 | Submit dormitory or cafeteria reviews | Write Review page and review-saving script | Working Draft | `prototype/write-review.html`; `prototype/js/reviews.js`; `prototype/js/data.js`; `screenshots/write review page.png` | Complete the revised validation, privacy, and content-ownership requirements. |
| FR-09 | Campus survival guide information | Survival Guide page | Working Draft | `prototype/guide.html`; `screenshots/new student survival guide.png` | Complete a final content, navigation, and responsive-layout check. |
| FR-10 | Validate review submissions | Required form fields and fixed category/rating options | Needs Fix | HTML `required` attributes in `prototype/write-review.html`; form handling in `prototype/js/reviews.js` | Add text-length limits, unexpected-input rejection, sanitization, file size/type checks, and safe output rendering. |
| FR-11 | Administrator-only dashboard | Admin Dashboard | Needs Fix | `prototype/dashboard.html`; `prototype/js/dashboard.js`; `screenshots/admin dashboard.png` | Add an admin-role route guard; implement saved Approve, Reject, Edit, and Remove actions with rejection reasons. |
| FR-12 | Consistent user interface | Shared CSS and interface components | Working Draft | `prototype/css/style.css`; shared navigation, cards, buttons, forms, typography, and colours across existing pages | Apply the same interface to the three missing pages and complete a cross-page consistency check. |
| FR-13 | Responsive layouts | Responsive CSS and mobile navigation | Working Draft | Media queries at 900px and 560px in `prototype/css/style.css`; menu toggle in `prototype/js/main.js` | Test all screens on desktop, tablet, and mobile, especially the dashboard table and forms. |
| FR-14 | Protect student privacy | Review form, simulated account storage, and privacy documentation | Needs Fix | `prototype/write-review.html`; `prototype/js/auth.js`; `docs/privacy-and-data-protection.md`; `docs/data-handling-policy.md` | Display usernames instead of emails; warn users not to share personal information; do not store real credentials in `localStorage`; sanitize public content. |
| FR-15 | Prototype traceability | Requirements, feature mapping, screens, and project documentation | Needs Fix | `updated-requirements-note.md`; `docs/system-requirements.md`; `docs/feature-requirement-mapping.md`; `docs/screen-inventory-checklist.md`; this file | Replace the older FR-01–FR-15 list in `docs/system-requirements.md` with the approved FR-01–FR-22 requirements and update all mappings. |
| FR-16 | Review moderation | Pending review status and Admin Dashboard | Needs Fix | `prototype/js/data.js` assigns `Pending`; `prototype/js/dashboard.js` displays status and simulated buttons | Prevent Pending reviews from appearing publicly; save Approved and Rejected changes; add Reported status and status-specific dashboard sections. |
| FR-17 | Privacy notice and user consent | Privacy Consent page | Not Started | Required `prototype/privacy-consent.html` is not present in the supplied repository | Create the page with data-use information, moderation explanation, required consent checkbox, Agree and Continue button, and return option; connect it to Signup and Write Review. |
| FR-18 | Record ownership | My Reviews page and ownership logic | Not Started | Required `prototype/my-reviews.html` is not present; reviews do not store an owner identifier | Store review ownership; create My Reviews; allow students to view, edit, and delete only their own reviews; allow admins to manage all reviews. |
| FR-19 | Report inappropriate content | Report Review page and report storage | Not Started | Required `prototype/report-review.html` is not present; Review Details has no report action | Add the Report Review button, report reasons, explanation field, report submission storage, and confirmation feedback. |
| FR-20 | Responsible content submission | Write Review form | Not Started | `prototype/write-review.html` has no content-ownership confirmation | Add a required checkbox confirming that submitted text and images are original or shared with permission; include a privacy-notice link and personal-information warning. |
| FR-21 | Display review status information | My Reviews page and review status data | Needs Fix | Submitted reviews receive `Pending` in `prototype/js/data.js`, but there is no user-facing My Reviews status screen | Create My Reviews; display Pending, Approved, or Rejected for each owned review and show a rejection reason when appropriate. |
| FR-22 | Clear submission feedback | Toast feedback after review submission | Working Draft | `prototype/js/reviews.js` displays: “Review submitted. It is now pending admin approval.”; `toast()` in `prototype/js/data.js` | Add equivalent report-submission confirmation and improve accessibility with an announced status region. |

## Summary

- **Features working today:** Homepage; dormitory and cafeteria review lists; search and rating filtering; review submission; survival guide; simulated login and signup; shared styling; responsive CSS; review-submission confirmation.
- **Features partially working:** Navigation; review details; validation; administrator dashboard; privacy protection; traceability; review moderation; review-status display.
- **Features not yet started:** Privacy Consent page and consent flow (FR-17); My Reviews and record-ownership controls (FR-18); Report Review flow (FR-19); required content-ownership confirmation (FR-20).
- **Features requiring instructor feedback:** Confirm that `updated-requirements-note.md` is the approved source for FR-01–FR-22 and should replace the older requirements currently stored in `docs/system-requirements.md`.

## Overall Implementation Decision

**Continue with required fixes.** The core HallPass browsing and submission pathway is a working draft, but the revised responsible-IT features must be implemented before the prototype can be considered fully connected to FR-01–FR-22.
