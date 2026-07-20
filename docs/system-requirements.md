# HallPass System Requirements

## Project Scope

HallPass is a responsive campus-survival prototype for first-year, international, and exchange students at Rangsit University. It supports dormitory and cafeteria reviews, campus guidance, simulated accounts, responsible review submission, ownership, moderation, status tracking, privacy consent, and content reporting. HTML, CSS, JavaScript, fictional seed data, and browser `localStorage` simulate the MVP; production authentication and security are out of scope.

## Functional Requirements

| ID | Requirement | Prototype evidence |
|---|---|---|
| FR-01 | Provide a clear HallPass homepage, purpose, audience, main actions, and student-opinion disclaimer. | `prototype/index.html` |
| FR-02 | Provide intuitive and consistent navigation among all relevant screens. | Shared navigation |
| FR-03 | Support simulated student registration and student/admin login. | `login.html`, `signup.html`, `js/auth.js` |
| FR-04 | Allow users to browse approved dormitory reviews. | `dorms.html` |
| FR-05 | Allow users to browse approved cafeteria reviews. | `cafeteria.html` |
| FR-06 | Search review titles, text, tags, and locations; filter by rating; sort results. | Review list controls, `js/main.js` |
| FR-07 | Display a selected review's complete details, author label, date, disclaimer, and report action. | `review-details.html` |
| FR-08 | Allow an authenticated student to submit a dormitory or cafeteria review. | `write-review.html`, `js/reviews.js` |
| FR-09 | Provide organized campus-survival information. | `guide.html` |
| FR-10 | Validate required fields, allowed values, text lengths, image type/size, privacy, and ownership confirmation. | Review form and JavaScript validation |
| FR-11 | Provide an administrator-only moderation dashboard. | `dashboard.html`, role guard |
| FR-12 | Maintain consistent layout, colors, typography, navigation, cards, controls, and feedback. | Shared CSS/components |
| FR-13 | Adapt the interface to desktop, tablet, and mobile layouts. | Responsive CSS and mobile menu |
| FR-14 | Limit personal information and prevent public display of credentials/contact details. | Privacy notice and safe rendering |
| FR-15 | Maintain traceability from requirements to user stories, features, screens, tests, and evidence. | Documentation set |
| FR-16 | Assign new reviews Pending status; allow admins to approve, reject with a reason, or remove; publish only Approved reviews. | `js/data.js`, `js/dashboard.js` |
| FR-17 | Explain data use and obtain consent before registration or responsible submission. | `privacy-consent.html`, signup consent |
| FR-18 | Store record ownership and allow students to view, edit, or delete only their own reviews; admins manage all submitted reviews. | `my-reviews.html` and owner IDs |
| FR-19 | Allow users to report inaccurate, offensive, discriminatory, harmful, copyrighted, private, or misleading content. | `report-review.html` |
| FR-20 | Require confirmation that submitted content is original or shared with permission. | Ownership checkbox on review form |
| FR-21 | Show owners Pending, Approved, or Rejected status and any rejection reason. | `my-reviews.html` |
| FR-22 | Confirm review/report submission and explain the next moderation step. | Accessible toast/status messages |

## Non-Functional Requirements

| ID | Category | Requirement |
|---|---|---|
| NFR-01 | Usability | Tasks and wording should be understandable to new and international students. |
| NFR-02 | Performance | Static prototype pages and interactions should respond quickly in a normal browser. |
| NFR-03 | Responsiveness | Pages must remain usable on desktop, tablet, and mobile screens. |
| NFR-04 | Consistency | Shared visual and interaction patterns must be used across all screens. |
| NFR-05 | Accessibility | Use semantic labels, keyboard-operable controls, readable contrast, focus states, and announced feedback. |
| NFR-06 | Compatibility | Support current Chrome, Edge, Firefox, and Safari. |
| NFR-07 | Maintainability | Separate shared data, authentication, review, dashboard, and presentation logic. |
| NFR-08 | Privacy | Collect only data needed for the demonstration and never publicly display sensitive details. |
| NFR-09 | Reliability | Navigation, records, statuses, and feedback must remain consistent during a browser session. |
| NFR-10 | Scalability | The structure should permit more review categories, guide topics, and moderation functions. |
| NFR-11 | Security | Client-side access controls are demonstrations only; production requires server-side authentication and authorization. |
| NFR-12 | Validation | Client input must be constrained and safely rendered; production must also validate server-side. |
| NFR-13 | Accountability | Moderation and reporting statuses must be visible to relevant users. |
| NFR-14 | Transparency | Clearly identify student opinions, moderation, and prototype limitations. |
| NFR-15 | Intellectual Property | Users confirm ownership or permission for submitted content. |
| NFR-16 | Data Retention | Prototype data should be removable and retained only as necessary. |
| NFR-17 | Content Safety | Public reviews must not reveal email, password, student ID, phone, address, or private information. |
| NFR-18 | Prototype Limitation | Use fictional/masked data and clearly distinguish simulations from production security. |

## Out of Scope

Production accounts, server databases, real university integration, live email verification, cloud image storage, AI recommendations, real-time chat, payments, and a production moderation service are outside the classroom MVP.
