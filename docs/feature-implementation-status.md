# Lab 10 - Feature Implementation Status

## Purpose

This document maps the updated Prototype 15 implementation to `docs/system-requirements.md`. Status labels are based on verified source files rather than visual appearance alone.

| Req ID | Functionality | Prototype Evidence | Status | Verification / Remaining Work |
|---|---|---|---|---|
| FR-01 | Landing page | `prototype/index.html` | **Implemented** | Verify latest-review cards and calls to action on mobile. |
| FR-02 | Shared navigation | All HTML pages; `prototype/js/main.js` | **Implemented** | Run a final broken-link check across all ten pages. |
| FR-03 | Registration and login simulation | `login.html`, `signup.html`, `js/auth.js` | **Implemented (prototype)** | Fixed credentials and client-side sessions are not production security. |
| FR-04 | Dormitory review browsing | `dorms.html`, `js/data.js`, `js/main.js` | **Implemented** | Confirm seeded and saved Dorm records render correctly. |
| FR-05 | Cafeteria review browsing | `cafeteria.html`, `js/data.js`, `js/main.js` | **Implemented** | Confirm seeded and saved Cafeteria records render correctly. |
| FR-06 | Search and rating filter | `searchInput`, `ratingFilter`, `renderCards()` | **Implemented** | Current keyword search matches titles only; text/tag search is future work. |
| FR-07 | Review details | `review-details.html`, `js/dashboard.js` | **Implemented** | Verify every card opens the correct record. |
| FR-08 | Authenticated review submission | `write-review.html`, `js/reviews.js`, `js/auth.js` | **Implemented** | Review is saved with author, timestamp, consent, and Pending status. |
| FR-09 | Survival guide | `guide.html` | **Implemented** | Final content and responsive-layout review required. |
| FR-10 | Required-field validation | Write Review form controls and fixed options | **Implemented (basic)** | Advanced length checks, file validation, and sanitization remain future work. |
| FR-11 | Student dashboard | `student-dashboard.html`, `js/student-dashboard.js` | **Implemented** | Includes metrics, status filter, pending removal, profile, and settings. |
| FR-12 | Administrator-only dashboard | `dashboard.html`, `js/admin-dashboard.js` | **Implemented (prototype)** | Non-admin users are redirected; production needs server-side authorization. |
| FR-13 | Approve/reject moderation | Moderation Queue in `js/admin-dashboard.js` | **Implemented** | Status is saved to `hallpassReviews`; rejection reasons are not collected. |
| FR-14 | Submission status display | Student metrics, badges, and status filter | **Implemented** | Pending, Approved, and Rejected states are visible. |
| FR-15 | Privacy notice and consent | `signup.html`, `write-review.html`, `js/privacy-notice.js` | **Implemented** | Consent records are saved locally; no standalone privacy page is used. |
| FR-16 | Review ownership association | `author` value in `js/reviews.js`; student filtering | **Implemented (basic)** | Ownership uses the logged-in email; fallback demo items may appear for empty accounts. |
| FR-17 | Remove pending submission | `data-delete` action in `js/student-dashboard.js` | **Implemented** | Only Pending rows display the Remove control. |
| FR-18 | User feedback messages | `toast()` in `js/data.js` and action handlers | **Implemented** | Consider adding an ARIA live region for stronger accessibility. |
| FR-19 | Reported-content handling | Reports panel in `dashboard.html` | **Partially Implemented** | Items and Investigate buttons are demonstrations; users cannot submit reports end to end. |
| FR-20 | User management | Users panel in `dashboard.html` | **Partially Implemented** | Sample accounts and View Account actions are present, but no account modification occurs. |
| FR-21 | Administrator audit log | `hallpassAudit`, `renderAudit()` | **Implemented** | Moderation and prototype actions persist in the current browser. |
| FR-22 | Consistent responsive UI | `prototype/css/style.css` | **Implemented** | Complete final testing at desktop, tablet, and mobile sizes. |

## Prototype File Inventory

### HTML
`index.html`, `login.html`, `signup.html`, `dorms.html`, `cafeteria.html`, `review-details.html`, `write-review.html`, `guide.html`, `student-dashboard.html`, `dashboard.html`

### CSS
`css/style.css`

### JavaScript
`js/data.js`, `js/main.js`, `js/auth.js`, `js/reviews.js`, `js/dashboard.js`, `js/student-dashboard.js`, `js/admin-dashboard.js`, `js/privacy-notice.js`

## Summary

- **Implemented:** 19 requirements, including core browsing, authentication simulation, review submission, consent, student status tracking, moderation, audit history, and responsive interface.
- **Partially implemented:** FR-19 reported-content handling and FR-20 user management.
- **Important limitations:** no backend, title-only search, no rejection reason, no real report submission, no real account management, and client-side security only.
- **Overall decision:** Prototype 15 is aligned with the revised documentation and is suitable for Lab 10 demonstration after final manual QA and screenshot refresh.
| FR-20 | Responsible content submission | Write Review form | Implemented | Required ownership checkbox, privacy warning, and privacy link in `prototype/write-review.html` | Verify invalid submissions are blocked. |
| FR-21 | Display review status information | My Reviews page and review status data | Implemented | `prototype/my-reviews.html` displays Pending, Approved, Rejected, and rejection reason | Test each status with the student demo account. |
| FR-22 | Clear submission feedback | Toast feedback after review submission | Implemented | `prototype/js/reviews.js` displays: “Review submitted. It is now pending admin approval.”; `toast()` in `prototype/js/data.js` | Add equivalent report-submission confirmation and improve accessibility with an announced status region. |

## Summary

- **Features implemented:** Homepage; authentication simulation; approved dormitory/cafeteria lists; expanded search/filter/sort; review details; validated submission; Survival Guide; protected dashboard; persistent moderation; Privacy Consent; My Reviews/ownership/status; reporting; responsible-content confirmation; accessible feedback.
- **Final verification still required:** Test the full student/admin flows on desktop and mobile, refresh screenshots, and confirm GitHub evidence accurately reflects team contributions.
- **Prototype limitation:** `localStorage` and client-side role checks are classroom simulations, not production security.


