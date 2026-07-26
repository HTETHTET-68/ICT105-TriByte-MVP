# Prototype Testing Notes

## Test Environment

- Prototype link or folder: `prototype/`
- Browser/device used: Google Chrome on a laptop; responsive layout reviewed for desktop and mobile screen sizes
- Tester role: Student user and administrator
- Test date: 25 July 2026
- Testing limitation: Testing used fictional sample data and a limited number of devices. Performance with large datasets, simultaneous users, shared data across devices, and additional browsers still requires further testing.

## Main Test Cases

| Test ID | User Flow / Feature | Steps to Test | Expected Result | Actual Result / Evidence | Status | Issue Found | Fix / Next Action |
|---|---|---|---|---|---|---|---|
| T-01 | Open homepage | Open `prototype/index.html`; inspect navigation and calls to action | HallPass purpose, target content, latest reviews, and main navigation appear | Required page, shared scripts, review-card rendering, and navigation links are present in source | Source Verified; Live Test Pending | Lab 11 screenshot not yet captured | Open in Chrome/Edge and capture `screenshots/lab11-homepage.png`. |
| T-02 | Browse, search, filter, and sort | Open Dorms and Cafeterias; search title/description/tag; change minimum rating and sort | Only matching records remain and order changes correctly | `js/main.js` filters title, text, type, price, distance, and tags and supports rating/price/distance sorting | Source Verified; Live Test Pending | No visible result-count text | Test several queries; consider adding a result count and no-results recovery link. |
| T-03 | Open review details | Select a review card and sort its student reviews | Correct place details and review list appear | Stable place keys, `review-details.html`, and detail rendering functions are present | Source Verified; Live Test Pending | Every seeded/saved place route must be exercised | Test one Dorm, one Cafeteria, and one newly approved review. |
| T-04 | Submit a review | Log in as student; open Write Review; complete fields, consent, optional photo; submit | Review is stored with current user and Pending status; confirmation appears | `js/reviews.js` validates fields, saves the record to `hallpassReviews`, and calls a confirmation toast | Source Verified; Live Test Pending | localStorage quota/image edge cases are browser-dependent | Test valid, missing-field, invalid-image, and new-place submissions. |
| T-05 | Track and remove/request removal | Open student dashboard; filter statuses; remove Pending item; request removal of Approved item | Counts and rows update; Pending is removed; Approved changes to Removal Requested | `js/student-dashboard.js` and `js/data.js` implement both paths; HPT201–HPT204 cover status scenarios | Source/Data Verified; Live Test Pending | Wording must prevent confusion between deletion and request | Verify confirmation dialogs, counts after refresh, and all four statuses. |
| T-06 | Moderate review | Log in as admin; open Moderation; view item; Approve/Reject | Status persists, public/student views update, and audit event is added | `js/admin-dashboard.js` updates status and audit storage; HPT202/HPT203 show approved/rejected outcomes | Source/Data Verified; Live Test Pending | Rejection reason is not structured | Add a reason field if required; test refresh persistence. |
| T-07 | Process removal request | Admin opens Removal Requests and approves or declines | Approved request deletes the review; declined request returns it to Approved; audit updates | Both decision branches exist in `js/admin-dashboard.js` | Source Verified; Live Test Pending | Deletion is irreversible in the prototype | Confirm deletion warning; consider a recoverable archive state. |
| T-08 | Report incorrect information | Student opens detail page, reports a review, then admin investigates and decides | Report is saved, visible to admin, and marked Confirmed or Incorrect | `js/report-review.js` creates `hallpassReports`; `js/platform-admin.js` saves decisions; three report events exist in the activity log | Source/Data Verified; Live Test Pending | Uses prompt-based decision note and client-only identity | Test login redirect, validation, cancellation, both decisions, and persistence. |
| T-09 | User management | Admin searches a user, reports behavior, suspends/restores, and deletes a test user | Filtered result and account status change; confirmation/feedback appears | User search/report/suspend/restore/delete handlers persist in `hallpassAccounts` | Source Verified; Live Test Pending | Permanent delete and client-side roles are not production-safe | Use only a test account; verify suspended-login behavior and add recovery rules. |
| T-10 | Guide details | Open Survival Guide; select each topic | Detail page shows overview, steps, tips, checklist, and related topic | Six topic objects and detail renderer are present in `js/guide-details.js` | Source Verified; Live Test Pending | Content has not been usability-tested | Check all topic links, readability, and mobile wrapping. |
| T-11 | Dashboard metrics | Open student/admin dashboards and Power BI report; compare values with CSVs | Metrics are visible and formulas match source data | CSV check produced 19 records, 54 events, 1 Pending, 16 Approved overall, 1 Rejected, and 1 Removal Requested | Data Verified; PBIX Visual Test Pending | Supplied DAX text includes generic lost-and-found labels | Correct HallPass DAX labels and refresh Power BI before screenshots. |
| T-12 | Responsive and accessibility check | Test keyboard, focus, labels, dialogs, 375 px mobile, tablet, and desktop | No clipping; controls remain usable; focus and announcements are clear | Responsive CSS and several accessibility attributes exist in source | Pending | Full visual/keyboard audit has not been completed | Run on Chrome/Edge plus one mobile device; record defects and screenshots. |

## Summary of Issues

1. A complete live-browser execution is still required before marking the functional test cases Passed.
2. Updated Lab 11 screenshots for the homepage, input form, list, detail view, student/admin dashboards, and Power BI metrics are not included in the uploaded Lab 11 archives.
3. The supplied DAX measure text still uses some lost-and-found sample action/status names rather than HallPass names.
4. Security remains a frontend simulation: credentials, roles, accounts, reviews, reports, profiles, and audit entries are stored in the browser.
5. Accessibility needs a final keyboard, focus, ARIA-live, contrast, and mobile-layout audit.
6. Rejection reasons, destructive account deletion, image/localStorage limits, and recovery behavior require stronger handling.

## Improvements Completed During Lab 11

- Expanded keyword search and added sorting by recommendation, rating, price, and distance.
- Added detailed Survival Guide topics with steps, tips, and checklists.
- Improved review submission and optional local image handling.
- Expanded the student profile, profile-picture, submission-status, and removal-request experience.
- Completed the student-to-admin incorrect-information reporting workflow.
- Added administrator user search, behavior reporting, suspend/restore, and delete demonstrations.
- Expanded review moderation, removal-request handling, and audit evidence.
- Added a Power BI startup-metrics package with a documented 19-record dataset and 54-event activity log.

