# Feature Implementation Status

| Requirement ID | Requirement Summary | Prototype Screen/Module | Status | Evidence/Screenshot | Notes |
|---|---|---|---|---|---|
| FR-01 | Homepage or landing screen | `prototype/index.html`, `prototype/js/main.js` | Completed | `screenshots/final-home.png` | Introduces HallPass, shows recent review activity and core categories, links the main pathways, and lets students save places from the homepage. |
| FR-02 | Primary user pathway | `diagram/final-demo-flow.mmd` | Completed | `screenshots/final-home.png`, `screenshots/final-dorm-reviews.png`, `screenshots/final-dorm-reviews-details.png`, `screenshots/final-login.png`, `screenshots/final-write-review.png`, `screenshots/final-student-dashboard.png`, `screenshots/final-admin-dashboard.png` | The complete student and administrator demonstration flow is connected through shared navigation and role-aware dashboard links. |
| FR-03 | User input or data submission | `signup.html`, `login.html`, `write-review.html`, student profile | Completed | `screenshots/final-signup.png`, `screenshots/final-write-review.png`, `screenshots/final-student-profile.png` | Students can register, log in, update a profile, and submit Dormitory or Cafeteria reviews with consent and ownership data. |
| FR-04 | Data storage or simulated storage | `prototype/js/data.js`, `reviews.js`, browser `localStorage` | Completed | `screenshots/final-student-dashboard.png` | Stores fictional accounts, reviews, saved places, recently viewed places, helpful votes, consent, profiles, notifications, reports, moderation states, and audit actions in the current browser. |
| FR-05 | View records/list | Homepage, `dorms.html`, `cafeteria.html`, Saved Places | Completed | `screenshots/final-dorm-reviews.png`, `screenshots/final-cafeteria-reviews.png`, `screenshots/final-student-saved-places.png` | Users can browse review cards, bookmark places, revisit saved records, and compare selected Dormitory and Cafeteria options. |
| FR-06 | Search/filter/category | `prototype/js/main.js`, Dormitory and Cafeteria lists | Completed | `screenshots/final-dorm-reviews.png`, `screenshots/final-cafeteria-reviews.png` | Provides keyword search, category and minimum-rating filters, and sorting by recommendation, rating, price, or distance. |
| FR-07 | Detail view | `review-details.html`, `guide-details.html` | Completed | `screenshots/final-dorm-reviews-details.png`, `screenshots/final-cafeteria-reviews-details.png`, `screenshots/final-survival-guide.png` | Detail views show complete place or guide information, student reviews, verification labels, helpful voting, and Google Maps links. |
| FR-08 | Status/progress tracking | `student-dashboard.html`, `prototype/js/student-dashboard.js` | Completed | `screenshots/final-student-dashboard.png` | Students can filter Pending, Approved, Rejected, and Removal Requested submissions, remove Pending items, request removal, and see activity notifications. |
| FR-09 | Admin/manager function | `dashboard.html`, `admin-dashboard.js`, `platform-admin.js` | Completed | `screenshots/final-admin-dashboard-moderation-queue.png`, `screenshots/final-admin-dashboard-report.png`, `screenshots/final-admin-dashboard-user-management.png`, `screenshots/final-admin-dashboard-audit-log.png` | Administrators can moderate reviews, process removal requests, investigate reports, manage demonstration users, and inspect audit activity. |
| FR-10 | Validation and feedback | Authentication, review, report, consent, and profile controls | Completed | `screenshots/final-signup.png`, `screenshots/final-write-review.png` | Implements required fields, password complexity, email checks, privacy consent, optional-image rules, duplicate-report prevention, confirmations, errors, and toast feedback. |
| FR-11 | Dashboard/summary/metrics | Student Dashboard, Admin Dashboard, Lab 11 Power BI package | Completed | `screenshots/final-student-dashboard.png`, `screenshots/final-admin-dashboard.png`, `screenshots/lab11-powerbi-dashboard.png` | Summarizes submission states, moderation work, reports, users, helpful votes, notifications, student information, and prototype activity metrics. |
| FR-12 | Final prototype traceability | Entire HallPass repository and Lab 14 deliverables | Completed | `screenshots/final-home.png`, `screenshots/final-student-dashboard.png`, `screenshots/final-admin-dashboard.png` | Requirements, user stories, MVP features, source modules, testing evidence, final screenshots, status, report, and reflection use matching identifiers and filenames. |


---

# Final Prototype Enhancements

The HallPass Final Prototype includes several usability, security, accessibility, and performance improvements beyond the original MVP requirements.

## Student Experience

- **Saved Places** allowing students to bookmark dormitories and cafeterias for quick access.
- **Place Comparison** enabling comparison of two or three saved places side by side.
- **Quick Recommendations** highlighting the highest-rated, lowest-priced, and nearest options during comparison.
- **Recently Viewed** section displaying the last four places opened by the student.
- **Activity Notifications** showing whether submitted reviews are Pending, Approved, or Rejected.
- **Helpful Voting** allowing users to mark reviews as helpful or remove their vote.
- **Verification Labels** displaying indicators such as **HallPass Verified**, **Admin Reviewed**, and **Student Submitted**.
- **Google Maps Integration** allowing users to open the selected location directly from the place details page.

## Security Improvements

The authentication and account management workflow has been strengthened with:

- Show/Hide password button
- Confirm password field
- Minimum password length of eight characters
- Password complexity requirements (uppercase, lowercase, and numeric characters)
- Improved email validation
- Temporary and disposable email addresses are rejected

## System Improvements

- Prevent duplicate reports for the same review while an existing report remains open.
- Improved storage error handling.
- Better profile editing with clearer photo upload/removal controls.
- Unsaved-change warnings before leaving the profile page.
- Confirmation messages after successfully saving profile changes.

## Homepage Improvements

The homepage now:

- Displays listings based on recent review activity.
- Allows students to save places directly from the homepage.
- Provides quicker access to important campus information.

## Privacy Improvements

The privacy notice has been expanded to explain:

- Browser `localStorage`
- Prototype demonstration accounts
- Saved Places
- Helpful Votes
- Data removal options
- Classroom prototype limitations

## Accessibility Improvements

The final prototype includes:

- Visible keyboard focus indicators
- Reduced-motion support
- Improved mobile responsiveness
- More consistent form controls
- Better accessibility across different devices

## Performance Improvements

Large PNG images were converted into optimized **WebP** images, significantly reducing page size and improving loading performance.

---

# Final Prototype Summary

The HallPass Final Prototype successfully implements all required functional requirements together with several additional enhancements that improve usability, security, accessibility, responsiveness, and overall user experience.

The prototype supports a complete student and administrator workflow, including browsing reviews, searching and filtering, submitting reviews, monitoring submission status, content moderation, reporting, user management, dashboards, place comparison, saved places, and activity notifications.

---

# Prototype Platform

- **Technology:** HTML5, CSS3, JavaScript
- **Hosting Platform:** GitHub Pages
- **Data Storage:** Browser `localStorage`
- **Prototype Type:** Frontend classroom MVP (no production backend)

---

# Prototype Limitations

- Data is stored only in the current browser using `localStorage`.
- Information is not synchronized across browsers or devices.
- Authentication and authorization are simulated for demonstration purposes.
- Internet access is recommended for loading Font Awesome icons and Google Maps links.
- All accounts, reviews, and records are fictional and intended solely for classroom demonstration.
- The prototype is not intended for production deployment without a secure backend database and authentication system.
