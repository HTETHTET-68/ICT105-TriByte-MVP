# Feature Implementation Status — Lab 11


| Req ID | Required Functionality | Screen / Module | Lab 10 Status | Lab 11 Status | Owner | Evidence | Notes / Next Action |
|---|---|---|---|---|---|---|---|
| FR-01 | Clear landing page | Homepage | Completed | Completed | Htet Htet Myint Zaw | `prototype/index.html`, `screenshots/homepage.png` | Updated hero artwork, review cards, and calls to action. |
| FR-02 | Consistent navigation | Shared navigation | Completed | Completed | Htet Htet Myint Zaw | All prototype HTML pages; `prototype/js/main.js` | Navigation connects browsing, guide, submission, authentication, and dashboards. |
| FR-03 | Simulated registration and login | Login / Signup | Completed | Completed (prototype) | Khaing Zin Thet | `prototype/login.html`, `prototype/signup.html`, `prototype/js/auth.js` | Fixed demonstration accounts and client-side sessions; production authentication remains out of scope. |
| FR-04 | Browse dormitory reviews | Dorm record list | Completed | Completed | Htet Htet Myint Zaw | `prototype/dorms.html`, `prototype/js/data.js` | Updated records include richer images, prices, distances, and review counts. |
| FR-05 | Browse cafeteria reviews | Cafeteria record list | Completed | Completed | Htet Htet Myint Zaw | `prototype/cafeteria.html`, `prototype/js/data.js` | Updated record cards and supporting images are included. |
| FR-06 | Keyword search and minimum-rating filter | Dorm / Cafeteria lists | Completed | Completed and improved | Khaing Zin Thet | Search, rating, and sort controls; `prototype/js/main.js` | Sprint 2 adds sorting; keyword matching remains primarily title-based. |
| FR-07 | Review-detail view | Review detail | Completed | Completed and improved | Htet Htet Myint Zaw | `prototype/review-details.html` | Expanded detail presentation, rating data, review content, and related actions. |
| FR-08 | Authenticated review submission | Write Review | Completed | Completed and improved | Khaing Zin Thet | `prototype/write-review.html`, `prototype/js/reviews.js` | Supports existing/new places, optional compressed image, consent, ownership, and Pending status. |
| FR-09 | Campus survival guide | Guide | Completed | Completed and improved | Htet Htet Myint Zaw | `prototype/guide.html`, `prototype/guide-details.html`, `prototype/js/guide-details.js` | Searchable guide cards and individual guide-detail pages were added. |
| FR-10 | Required-field validation | Signup / Write Review forms | Completed (basic) | Completed (prototype) | Khaing Zin Thet | HTML `required` controls; `auth.js`; `reviews.js` | Consent, place, password length, image type, and 8 MB image-size checks are present. Server-side validation is still required for production. |
| FR-11 | Student dashboard | Student dashboard | Completed | Completed and improved | Khaing Zin Thet | `prototype/student-dashboard.html`, `prototype/js/student-dashboard.js` | Shows total, Pending, Approved, and Rejected counts, filtering, profile settings, and submission actions. |
| FR-12 | Administrator-only dashboard | Admin dashboard | Completed (prototype) | Completed and improved (prototype) | Khaing Zin Thet | `prototype/dashboard.html`, `prototype/js/admin-dashboard.js` | Overview metrics, moderation, removal requests, reports, users, and audit panels are included. Access control remains client-side. |
| FR-13 | Review moderation | Moderation queue | Completed | Completed and improved | Khaing Zin Thet | Approve/Reject actions and review-detail modal in `admin-dashboard.js` | Status changes persist locally and update dashboard counts. |
| FR-14 | Submission-status display | Student dashboard | Completed | Completed | Khaing Zin Thet | Status badges, filters, and metric cards in `student-dashboard.js` | Pending, Approved, and Rejected states are displayed. |
| FR-15 | Privacy notice and consent | Signup / Write Review | Completed | Completed and improved | Yousel Zangmo | `prototype/js/privacy-notice.js`; consent controls | Notice explains collected data, purpose, browser-only storage, limitations, and removal choices. |
| FR-16 | Associate reviews with current user | Data layer / Student dashboard | Completed (basic) | Completed (prototype) | Khaing Zin Thet | `author` field in `reviews.js`; user filtering in `student-dashboard.js` | Uses the locally stored account email as the prototype owner. |
| FR-17 | Remove pending submissions | Student dashboard | Completed | Completed | Khaing Zin Thet | Pending Remove action in `student-dashboard.js` | Approved reviews use a removal-request workflow rather than immediate deletion. |
| FR-18 | Clear action feedback | Shared interface | Completed | Completed | Khaing Zin Thet | Toast messages in action handlers | Login, signup, submission, moderation, profile, and admin actions provide feedback. |
| FR-19 | Reported-content examples | Admin Reports | Partially Completed | Partially Completed | Khaing Zin Thet | Reports panel in `dashboard.html` | Example records and Investigate actions are simulated; end-to-end user reporting is pending. |
| FR-20 | User-management examples | Admin Users | Partially Completed | Partially Completed | Khaing Zin Thet | Users panel in `dashboard.html` | Example accounts and View Account actions are demonstrations; account editing/suspension is pending. |
| FR-21 | Administrator activity log | Audit Log | Completed | Completed | Khaing Zin Thet | `hallpassAudit` and `renderAudit()` in `admin-dashboard.js` | Moderation and prototype admin actions persist in the current browser. |
| FR-22 | Consistent responsive interface | All screens | Completed | Completed and improved | Yousel Zangmo | `prototype/css/style.css`, updated page layouts and image assets | Final multi-browser/mobile visual regression testing is still recommended. |

## Sprint 2 Issues Addressed

1. Review cards and detail pages needed richer, more realistic content and imagery.
2. Record lists needed an additional sorting option alongside search and rating filters.
3. The survival guide needed searchable topics and individual detail pages.
4. Review submission needed clearer place selection, image validation, and better privacy guidance.
5. Admin moderation needed a detailed review modal and approved-review removal-request handling.
6. Dashboard activity needed clearer product and operational metrics.

## Status Summary

- **Completed or completed as a prototype:** 20 requirements.
- **Partially completed:** FR-19 reported-content workflow and FR-20 user management.
- **Main limitations:** browser-only `localStorage`, fixed demonstration credentials, client-side role checks, title-focused search, simulated reports/users, and no backend or shared database.
- **Sprint 2 decision:** HallPass is ready for a Lab 11 classroom demonstration after final manual browser, responsive, and screenshot verification.
