# Feature Implementation Status — Lab 11


## Sprint 2 Status

| Req ID | Required Functionality | Screen / Module | Lab 10 Status | Lab 11 Status | Owner | Evidence | Notes / Next Action |
|---|---|---|---|---|---|---|---|
| FR-01 | Clear landing page | `prototype/index.html` | Completed | Completed | Htet Htet Myint Zaw | `screenshots/homepage.png` | Refresh the screenshot using the Lab 11 build. |
| FR-02 | Consistent navigation | All prototype pages; `js/main.js` | Completed | Completed | Khaing Zin Thet | Shared navigation and footer links | Complete a final broken-link check. |
| FR-03 | Simulated registration and login | `login.html`, `signup.html`, `js/auth.js` | Completed (prototype) | Completed (prototype) | Yousel Zangmo | Demo student/admin accounts and locally stored accounts | Replace fixed credentials and client-side sessions in a production build. |
| FR-04 | Browse dormitory reviews | `dorms.html`, `js/data.js`, `js/main.js` | Completed | Improved | Htet Htet Myint Zaw | Dorm cards now use expanded keyword search, rating filter, and sorting | Verify saved approved reviews appear with seeded listings. |
| FR-05 | Browse cafeteria reviews | `cafeteria.html`, `js/data.js`, `js/main.js` | Completed | Improved | Khaing Zin Thet | Cafeteria cards now use expanded keyword search, rating filter, and sorting | Run mobile and keyboard checks. |
| FR-06 | Keyword search and rating filtering | `js/main.js` | Completed (title search) | Improved | Yousel Zangmo | Search covers title, description, type, price, distance, and tags; sort supports recommended, rating, price, and distance | Add an explicit result-count indicator if time permits. |
| FR-07 | Review-detail view | `review-details.html`, `js/dashboard.js`, `js/report-review.js` | Completed | Improved | Htet Htet Myint Zaw | Detail page includes place information, student reviews, sorting, and report action | Verify every card opens the correct place and test reporting after login. |
| FR-08 | Authenticated review submission | `write-review.html`, `js/reviews.js`, `js/data.js` | Completed | Improved | Khaing Zin Thet | Saved review includes place, rating, text, author, timestamp, consent, status, and optional compressed image | Validate image size/type and localStorage quota limits. |
| FR-09 | Campus survival guide | `guide.html`, `guide-details.html`, `js/guide-details.js` | Completed (summary) | Improved | Yousel Zangmo | Six detailed guide topics include steps, tips, checklists, and related content | Review guidance wording with students. |
| FR-10 | Required-field validation | `write-review.html`, `js/reviews.js` | Completed (basic) | Improved | Htet Htet Myint Zaw | Required controls, fixed options, new/existing place logic, consent, and image validation | Production still requires server-side validation and sanitization. |
| FR-11 | Student dashboard | `student-dashboard.html`, `js/student-dashboard.js`, `js/profile-picture.js` | Completed | Improved | Khaing Zin Thet | Status totals/filter, removal workflow, profile settings, and profile-picture preview/storage | Check large-image handling and screen-reader announcements. |
| FR-12 | Administrator-only dashboard | `dashboard.html`, `js/admin-dashboard.js`, `js/platform-admin.js` | Completed (prototype) | Improved | Yousel Zangmo | Overview, Moderation, Removal Requests, Reports, Users, and Audit Log panels | Production requires server-side authorization. |
| FR-13 | Review moderation | `js/admin-dashboard.js`, `js/data.js` | Completed | Improved | Htet Htet Myint Zaw | Approve/reject review, review detail modal, photo removal, and approve/decline removal request | Add structured rejection reasons and test all transitions. |
| FR-14 | Submission status display | Student dashboard | Completed | Completed | Khaing Zin Thet | Pending, Approved, Rejected, and Removal Requested states and totals | Verify each state using test records HPT201–HPT204. |
| FR-15 | Privacy notice and consent | Signup, Write Review, `js/privacy-notice.js` | Completed | Completed | Yousel Zangmo | Accessible privacy modal and stored consent records | Add retention/deletion controls before production. |
| FR-16 | Associate reviews with current user | `js/reviews.js`, `js/student-dashboard.js` | Completed (basic) | Improved | Htet Htet Myint Zaw | Review ownership uses normalized account email; profile data uses an account-specific key | Replace email identity with a server-issued user ID in production. |
| FR-17 | Remove pending submissions | Student dashboard; `js/data.js` | Completed | Improved / Revised | Khaing Zin Thet | Pending reviews can be removed; approved reviews can send a removal request for admin decision | Confirm wording clearly distinguishes immediate removal from a request. |
| FR-18 | Clear action feedback | `toast()` and action handlers | Completed | Completed | Yousel Zangmo | Toasts cover authentication, submission, moderation, profile, report, and admin actions | Add or verify an ARIA live region. |
| FR-19 | Reported-content handling | `js/report-review.js`, Reports panel in `dashboard.html`, `js/platform-admin.js` | Partially Completed | Completed (prototype) | Htet Htet Myint Zaw | Logged-in students submit reports; admins inspect the original review and save Confirmed/Incorrect decisions | Add report categories and escalation rules for production. |
| FR-20 | User-management examples | Users panel; `js/platform-admin.js` | Partially Completed | Completed (prototype) | Khaing Zin Thet | User search plus report, suspend/restore, and delete demonstrations persist locally | Add role-based permissions, confirmations, and recovery rules before production. |
| FR-21 | Administrator audit activity | Audit Log; `js/admin-dashboard.js` | Completed | Improved | Yousel Zangmo | Moderation, removal, report, and prototype admin actions are written to localStorage | Export audit events or connect them to a backend later. |
| FR-22 | Consistent responsive interface | `css/style.css` and all HTML pages | Completed | Improved | Htet Htet Myint Zaw | Shared responsive cards, forms, tables, dashboards, dialogs, and navigation | Complete desktop, tablet, and mobile visual QA. |

## Non-Functional Requirement Check

| Req ID | Lab 11 Assessment | Evidence / Limitation |
|---|---|---|
| NFR-01–03 | Addressed | Main flows and shared styling are present; formal usability re-test remains. |
| NFR-04 | Partially addressed | Labels, keyboard-oriented controls, dialog roles, and privacy-modal focus handling exist; full accessibility audit remains. |
| NFR-05–07 | Addressed for a static prototype | HTML/CSS/JS modules are separated; browser compatibility testing is still required. |
| NFR-08–10 | Addressed as a classroom simulation | Privacy wording and limited sample data are present; client-only security and validation are explicitly disclosed. |
| NFR-11 | Addressed in source | Reviews, accounts, consent, profiles, reports, moderation state, and audit activity use `localStorage`; persistence needs live-browser verification. |
| NFR-12–14 | Addressed | Requirements, source paths, sample/test data labels, and responsible-content controls are documented. |

## Sprint 2 Summary

- **Completed or improved:** all 22 functional requirements have a visible or source-level prototype implementation.
- **Most important Lab 11 improvements:** richer discovery filters, detailed guide pages, profile management, end-to-end content reporting, expanded administrator user controls, review-removal decisions, and a Power BI startup-metrics package.
- **Remaining verification:** run the complete student/admin journey in a current browser, capture new Lab 11 screenshots, check responsive breakpoints and accessibility, and attach final GitHub commit links.
- **Production limitations:** no backend, secure authentication, server-side authorization, cloud synchronization, or server-side input validation.
