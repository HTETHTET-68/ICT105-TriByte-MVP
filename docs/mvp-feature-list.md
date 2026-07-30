# HallPass — Updated MVP Feature List

## Scope and decision rule

HallPass is a frontend classroom MVP for first-year, international, and exchange students. It helps them find, compare, and contribute trustworthy dormitory, cafeteria, and campus-survival information. The final prototype uses HTML5, CSS3, JavaScript, seed data, and browser `localStorage`; it is not a production system.

## Updated MoSCoW prioritization

| ID | Feature | Priority | Final status | Main prototype evidence |
|---|---|---|---|---|
| F01 | Homepage and recent activity | Must | Completed | `prototype/index.html`, `js/main.js` |
| F02 | Connected student and administrator workflow | Must | Completed | `diagram/final-demo-flow.mmd` |
| F03 | Signup, login, profile, and review submission | Must | Completed | `signup.html`, `login.html`, `write-review.html`, student profile |
| F04 | Simulated persistent data storage | Must | Completed | `js/data.js`, `js/reviews.js`, browser `localStorage` |
| F05 | Dormitory and cafeteria review lists | Must | Completed | `dorms.html`, `cafeteria.html` |
| F06 | Search, filters, categories, and sorting | Must | Completed | `js/main.js`, review-list controls |
| F07 | Review and guide detail views | Must | Completed | `review-details.html`, `guide-details.html` |
| F08 | Campus Survival Guide | Should | Completed | `guide.html`, `guide-details.html` |
| F09 | Student dashboard, status tracking, and removal workflow | Must | Completed | `student-dashboard.html`, `js/student-dashboard.js` |
| F10 | Admin moderation, reports, user management, and audit activity | Must | Completed | `dashboard.html`, `js/admin-dashboard.js`, `js/platform-admin.js` |
| F11 | Validation, privacy consent, and action feedback | Must | Completed | `js/auth.js`, `js/reviews.js`, `js/privacy-notice.js`, `js/report-review.js` |
| F12 | Dashboard summaries and prototype metrics | Should | Completed | Student/Admin dashboards; Lab 11 Power BI package |
| F13 | Saved Places / favourites | Should | Completed | Homepage and Student Dashboard |
| F14 | Place comparison and quick recommendations | Should | Completed | Saved Places comparison workflow |
| F15 | Recently viewed places | Could | Completed | Student experience / browser storage |
| F16 | Helpful voting and verification labels | Should | Completed | Review detail views |
| F17 | Google Maps location links | Could | Completed | Place detail views |
| F18 | Mobile responsiveness and accessibility support | Must | Completed | `prototype/css/style.css` |
| F19 | Image optimisation using WebP | Could | Completed | `prototype/images/` |
| F20 | Live backend database and production authentication | Won't | Not included | Future scope |
| F21 | Real-time chat, payment, booking, native mobile app, and AI recommendations | Won't | Not included | Future scope |

## Final MVP functionality

### Student experience

- Browse dormitory and cafeteria reviews.
- Search by keyword and filter by category and minimum rating.
- Sort by recommendation, rating, price, or distance.
- Open detailed place and guide pages.
- Register, log in, update a profile, and submit reviews with consent.
- View submission statuses: Pending, Approved, Rejected, and Removal Requested.
- Remove pending reviews or request removal of approved reviews.
- Save places, compare two or three options, and view quick recommendations.
- View recently opened places, helpful-vote reviews, and see verification labels.
- Open place locations in Google Maps.

### Administrator experience

- Moderate reviews and process removal requests.
- Investigate reported content and prevent duplicate open reports.
- Manage demonstration users and inspect audit activity.
- View operational, moderation, and activity summaries.

### Responsible-design and quality features

- Password confirmation, minimum length, complexity rules, show/hide control, and email validation.
- Privacy notice and consent, including the use of browser `localStorage` and classroom-prototype limitations.
- Required-field validation, optional-image rules, error/confirmation messages, and toast feedback.
- Keyboard-focus indicators, reduced-motion support, and responsive layout.

## Final prototype pages and modules

| Area | Primary files |
|---|---|
| Home and browsing | `prototype/index.html`, `dorms.html`, `cafeteria.html`, `js/main.js` |
| Authentication and profile | `login.html`, `signup.html`, `js/auth.js`, `js/profile-picture.js` |
| Reviews and details | `write-review.html`, `review-details.html`, `js/reviews.js`, `js/data.js` |
| Guide | `guide.html`, `guide-details.html`, `js/guide-details.js` |
| Student operations | `student-dashboard.html`, `js/student-dashboard.js` |
| Administrator operations | `dashboard.html`, `js/admin-dashboard.js`, `js/platform-admin.js` |
| Reporting and privacy | `js/report-review.js`, `js/privacy-notice.js` |
| Styling and assets | `css/style.css`, `images/` |

## Explicit limitations

- Data persists only in the current browser through `localStorage`; it is not synchronized across devices.
- Authentication and authorization are simulated for demonstration purposes.
- Accounts, reviews, metrics, and activity data are fictional classroom data.
- A secure backend, server-side validation, real role-based access control, and live database are required before production release.

## MVP conclusion

The final HallPass MVP completes the original core review, submission, guide, dashboard, privacy, and moderation scope. It also adds saved places, comparison, recently viewed places, helpful voting, verification labels, Google Maps links, stronger validation, accessibility improvements, and optimized images. These additions improve the prototype without changing its stated frontend-only classroom-MVP boundary.
