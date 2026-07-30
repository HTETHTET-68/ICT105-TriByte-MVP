# Final Prototype Report

## 1. Project Title

**HallPass — Student Reviews and Campus Survival Guide**

HallPass is a frontend classroom MVP for first-year, international, and exchange students. It brings together Dormitory and Cafeteria reviews, practical campus guidance, student contribution workflows, status tracking, and administrator moderation.

## 2. Group Members and Roles

| Name | Role | Main Contribution | GitHub Evidence |
|---|---|---|---|
| Htet Htet Myint Zaw | Product Lead; Documentation Lead | Product direction, README, final demo script, pitch outline, submission checklist, weekly logbook | `https://github.com/HTETHTET-68/ICT105-TriByte-MVP/commits/main/` |
| Khaing Zin Thet | Technical Lead | Prototype HTML, JavaScript modules, CSS, final prototype link, implementation and integration | `https://github.com/HTETHTET-68/ICT105-TriByte-MVP/commits/main/` |
| Yousel Zangmo | UX/UI Lead; Validation Lead | Wireframes, final screenshots, validation datasets, analytics insights, and testing evidence | `https://github.com/HTETHTET-68/ICT105-TriByte-MVP/commits/main/` |


## 3. Problem Background

New, international, and exchange students at Rangsit University often make accommodation, food, and campus-life decisions using fragmented information from social media, informal conversations, and promotional listings. This makes it difficult to compare trustworthy student experiences, understand distance and price, or find practical campus guidance in one place.

HallPass addresses this problem by organizing student-oriented Dormitory and Cafeteria reviews together with a new-student Survival Guide. The team validated the concept through user testing and refined the interface around repeated confusion points such as navigation labels, search controls, rating presentation, login guidance, required fields, submission confirmation, and administrator dashboard discoverability.

## 4. Target Users

- First-year students who are unfamiliar with campus services and nearby living or food options
- International and exchange students who need clear, practical information before and after arrival
- Senior students who contribute experience-based reviews
- Student or staff administrators who moderate submissions, investigate reports, and manage demonstration records

These users need an interface that is understandable without training, works on common screen sizes, and clearly distinguishes student opinions from verified or administrator-reviewed information.

## 5. Evidence Summary

The final user-testing dataset contains **200 task attempts** across first-year, international, exchange, senior, student-administrator, and staff-administrator participants. **170 attempts were completed**, producing an overall completion rate of **85.0%**. The average completion time was **1.89 minutes**, and the average feedback score was **3.99 out of 5**.

| Tested Task | Attempts | Completion Rate | Average Time | Average Score |
|---|---:|---:|---:|---:|
| Understand HallPass homepage | 29 | 79.3% | 0.99 min | 3.72 |
| Browse Dormitory reviews | 29 | 89.7% | 1.91 min | 4.07 |
| Browse Cafeteria reviews | 29 | 89.7% | 1.69 min | 4.03 |
| Create an account or sign in | 29 | 82.8% | 2.08 min | 3.97 |
| Submit a Dormitory or Cafeteria review | 28 | 82.1% | 3.26 min | 4.07 |
| Read the Campus Survival Guide | 28 | 92.9% | 1.35 min | 4.14 |
| View the administrator dashboard | 28 | 78.6% | 1.98 min | 3.89 |

The most repeated confusion points included navigation labels, opening review details, login/signup navigation, search labels, rating display, statistic labels, password guidance, submission confirmation, guide navigation, feature-card wording, topic headings, and rating selection.

## 6. Final Prototype Overview

The final prototype supports a complete classroom demonstration:

1. Open the homepage and navigate to core features.
2. Browse Dormitory or Cafeteria review cards.
3. Search, filter, and sort listings.
4. Open a detailed place view with ratings, reviews, labels, helpful voting, and a Google Maps link.
5. Save places, revisit them, and compare two or three choices.
6. Read detailed Survival Guide topics.
7. Sign up or log in through the simulated account workflow.
8. Submit a validated review with consent.
9. Use the Student Dashboard to track statuses, notifications, recently viewed places, Saved Places, and profile settings.
10. Remove Pending reviews or request removal of Approved reviews.
11. Log in as an administrator.
12. Moderate reviews, process removal requests, investigate reports, manage demonstration users, and inspect the audit log.

The implementation uses HTML5, CSS3, modular JavaScript, fictional seed records, optimized WebP images, and browser `localStorage`.

## 7. Requirement Traceability Summary

| Requirement ID | Implemented Feature/Screen | User Story ID | Evidence Source | Status |
|---|---|---|---|---|
| FR-01 | Homepage and primary navigation | US-01 | `prototype/index.html`, `prototype/js/main.js` | Completed |
| FR-02 | Complete student/admin pathway | US-01 / US-02 / US-03 / US-04 / US-05 / US-09 | `diagram/final-demo-flow.mmd` | Completed |
| FR-03 | Signup, login, profile, and review submission | US-05 / US-07 / US-08 | `prototype/signup.html`, `login.html`, `write-review.html`, `js/auth.js`, `js/reviews.js`, `js/profile-picture.js` | Completed |
| FR-04 | Browser `localStorage` persistence | US-05 / US-09 / US-12 | `prototype/js/data.js`, `js/reviews.js`, `js/student-dashboard.js`, `js/admin-dashboard.js` | Completed |
| FR-05 | Review lists, Saved Places, and comparison | US-02 / US-03 / US-14 | `prototype/dorms.html`, `cafeteria.html`, `student-dashboard.html`, `js/main.js`, `js/data.js` | Completed |
| FR-06 | Search, category/rating filters, and sorting | US-02 / US-03 | `prototype/dorms.html`, `cafeteria.html`, `js/main.js` | Completed |
| FR-07 | Place and guide detail views | US-04 / US-06 | `prototype/review-details.html`, `guide-details.html`, `js/reviews.js`, `js/guide-details.js` | Completed |
| FR-08 | Submission status and removal tracking | US-11 / US-12 | `prototype/student-dashboard.html`, `js/student-dashboard.js`, `js/data.js` | Completed |
| FR-09 | Moderation, reports, users, removal requests, audit | US-09 / US-13 | `prototype/dashboard.html`, `js/admin-dashboard.js`, `js/platform-admin.js`, `js/report-review.js` | Completed |
| FR-10 | Validation, privacy, and feedback | US-05 / US-07 / US-08 / US-10 | `prototype/js/auth.js`, `js/reviews.js`, `js/privacy-notice.js`, `js/report-review.js`, `js/profile-picture.js` | Completed |
| FR-11 | Student/admin dashboards and metrics | US-09 / US-12 | `prototype/student-dashboard.html`, `dashboard.html`, `js/student-dashboard.js`, `js/admin-dashboard.js`, `js/platform-admin.js` | Completed |
| FR-12 | Final prototype traceability | US-01 through US-13 | `prototype/README.md`, `prototype/final-prototype-link.md` | Completed |

## 8. Data Handling

HallPass collects or simulates only the data needed to demonstrate its workflows:

- Account email, name, password simulation, role, and consent
- Review category, place, title, rating, text, optional local image, author, date, and status
- Saved Places, recently viewed place identifiers, helpful votes, and profile settings
- Reports, moderation decisions, removal requests, demonstration user actions, and audit entries

Seed records are defined in JavaScript and user-generated demonstration records are stored in browser `localStorage`. Lists can be displayed, searched, filtered, sorted, saved, compared, updated through moderation, or removed through controlled actions. Data is not sent to a server or synchronized across browsers. The privacy notice explains these limitations and the use of fictional classroom data.

## 9. Validation and User Testing Results

Testing showed that the central concept was useful: browsing tasks achieved 89.7% completion, and the Survival Guide achieved the highest completion rate at 92.9%. Review submission received an average score above 4.0, even though it took the longest time and produced feedback about category/rating guidance, required-field visibility, and confirmation messages.

The administrator dashboard produced the lowest completion rate at 78.6%, supporting the need for clearer dashboard navigation, section labels, statistics, and routes back to public HallPass pages. Homepage understanding was also below the overall average at 79.3%, which led to clearer entry points and shorter feature messaging.

The final implementation added or strengthened:

- clearer navigation and calls to action;
- more descriptive search, filter, category, and rating controls;
- password, email, consent, and required-field validation;
- visible confirmations and toast feedback;
- richer guide topics and detail pages;
- Saved Places, place comparison, and recently viewed places;
- status notifications and removal-request handling;
- report investigation, user management, and audit evidence;
- responsive, keyboard-focus, reduced-motion, and image-performance improvements.

## 10. Startup/Product Metrics

The Student and Administrator dashboards display prototype summaries such as submission counts, Pending/Approved/Rejected/Removal Requested states, moderation workload, reports, user information, helpful votes, and activity notifications. The Lab 11 Power BI package provides a separate startup-metrics demonstration based on HallPass records and activity events.

The testing dataset supplies additional product evidence:

- Overall task completion: 85.0%
- Average feedback: 3.99/5
- Strongest tested flow: Survival Guide, 92.9% completion
- Weakest tested flow: Administrator Dashboard, 78.6% completion
- Review submission: 82.1% completion and 4.07/5 average score

These metrics indicate that the value proposition is understandable and useful, while onboarding, administrator discoverability, and form guidance remain priority improvement areas.

## 11. Business Value and Venture Direction

HallPass creates value by reducing uncertainty for students making early campus decisions. It delivers value through organized peer reviews, practical guidance, comparison tools, transparent status information, and moderated content. A future production version could capture value through university partnerships, verified service listings, sponsored but clearly labeled placements, or premium analytics for approved campus partners.

Any venture model must protect student trust. Paid content should never change review scores, private information should be minimized, and moderation and verification rules should remain transparent.

## 12. Limitations and Future Improvements

Current limitations:

- No server, shared database, encrypted password storage, or production authentication
- Client-side roles and fixed demonstration credentials
- Data restricted to one browser and vulnerable to clearing or quota limits
- No cross-device synchronization, recovery, email, or push notification
- Permanent delete operations and local images are not production-safe
- Limited browser/device testing and incomplete accessibility audit
- No structured rejection reason or recoverable archive
- Google Maps requires internet access; there is no embedded live navigation

Recommended next steps:

1. Build a secure backend with authenticated sessions and server-side authorization.
2. Add a shared database, validation, sanitization, backups, and recoverable deletion.
3. Complete multi-browser, mobile-device, keyboard, screen-reader, contrast, and performance testing.
4. Improve onboarding, dashboard labels, no-results guidance, and form instructions.
5. Add structured moderation reasons and transparent appeals.
6. Pilot with a small real student community under university privacy and moderation rules.
