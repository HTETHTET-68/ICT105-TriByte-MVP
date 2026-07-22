# HallPass Updated System Requirements

## 1. Project Scope

HallPass is a student-developed campus survival guide for first-year, international, and exchange students at Rangsit University. The Prototype 15 MVP helps users browse dormitory and cafeteria reviews, read campus guidance, submit reviews, track their submissions, and demonstrate administrator moderation.

The current version is a frontend-only clickable prototype implemented with HTML5, CSS3, JavaScript, fictional seed data, and browser `localStorage`. It does not use a live server, production authentication, or a database.

### Current Prototype Pages

- `prototype/index.html` — homepage and latest reviews
- `prototype/login.html` — simulated student/admin login
- `prototype/signup.html` — account creation with privacy consent
- `prototype/dorms.html` — dormitory review list
- `prototype/cafeteria.html` — cafeteria review list
- `prototype/review-details.html` — selected review details
- `prototype/write-review.html` — logged-in review submission
- `prototype/guide.html` — new-student survival guide
- `prototype/student-dashboard.html` — submissions, status tracking, profile and settings
- `prototype/dashboard.html` — role-protected administrator dashboard

Privacy information is displayed through an accessible modal on Signup and Write Review. Student-owned submissions are managed inside `student-dashboard.html`; they are not separate pages.

---

## 2. Functional Requirements

| Req ID | Functional Requirement | Prototype 15 Implementation |
|---|---|---|
| **FR-01** | The system shall provide a clear landing page. | `index.html` introduces HallPass, presents core categories, and shows student review cards. |
| **FR-02** | The system shall provide consistent navigation between major features. | Shared navigation links connect Home, Dorm Reviews, Cafeteria Reviews, Survival Guide, Write Review, Login/Logout, and the appropriate dashboard. |
| **FR-03** | The system shall support simulated registration and login. | `signup.html` creates a student session; `login.html` supports fixed student and administrator demonstration accounts. |
| **FR-04** | The system shall allow users to browse dormitory reviews. | `dorms.html` renders Dorm records from seed data and saved prototype records. |
| **FR-05** | The system shall allow users to browse cafeteria reviews. | `cafeteria.html` renders Cafeteria records from seed data and saved prototype records. |
| **FR-06** | The system shall provide keyword search and minimum-rating filtering. | Dorm and cafeteria pages filter visible cards by title keyword and selected minimum rating. |
| **FR-07** | The system shall provide a review-detail view. | `review-details.html` displays the selected review’s title, category, rating, description, price, and location/distance. |
| **FR-08** | The system shall allow authenticated students to submit a review. | `write-review.html` requires login and stores a new Dorm or Cafeteria review in `localStorage`. |
| **FR-09** | The system shall provide campus survival-guide information. | `guide.html` presents practical guidance for new, international, and exchange students. |
| **FR-10** | The system shall validate required review fields. | HTML controls require category, rating, title, comment, and consent; fixed select options restrict category and rating values. |
| **FR-11** | The system shall provide a student dashboard. | `student-dashboard.html` shows submission totals, status counts, status filtering, pending-item removal, and profile settings. |
| **FR-12** | The system shall provide an administrator-only dashboard. | `dashboard.html` redirects non-admin users and includes Overview, Moderation, Reports, Users, and Audit Log panels. |
| **FR-13** | The system shall support review moderation. | Administrators can approve or reject queued reviews, with the status persisted to `localStorage`. |
| **FR-14** | The system shall display review submission status. | The student dashboard displays Pending, Approved, and Rejected totals and badges. |
| **FR-15** | The system shall provide privacy notice and consent controls. | Signup and review submission require consent; `privacy-notice.js` displays what is collected, why, storage limitations, and user responsibilities. |
| **FR-16** | The system shall associate submitted reviews with the current user. | Saved reviews include the logged-in email as the prototype owner/author and are shown in the student dashboard. |
| **FR-17** | The system shall allow students to remove their pending submissions. | Pending submissions include a Remove action in `student-dashboard.html`. |
| **FR-18** | The system shall provide clear action feedback. | Toast messages confirm login, logout, signup, profile saving, review submission, moderation, and prototype admin actions. |
| **FR-19** | The administrator dashboard shall display reported-content examples. | The Reports panel displays sample reported items and provides simulated Investigate actions for demonstration. |
| **FR-20** | The administrator dashboard shall display user-management examples. | The Users panel displays sample accounts and simulated View Account actions. |
| **FR-21** | The system shall record administrator activity. | Moderation and simulated admin actions are stored in `hallpassAudit` and displayed in the Audit Log panel. |
| **FR-22** | The system shall maintain a consistent responsive interface. | Shared `css/style.css` provides reusable navigation, cards, forms, dashboards, buttons, tables, and responsive layouts. |

---

## 3. Non-Functional Requirements

| Req ID | Requirement | Description |
|---|---|---|
| **NFR-01** | Usability | Main student tasks should be understandable without training. |
| **NFR-02** | Responsiveness | Pages should adapt to desktop, tablet, and mobile screen widths. |
| **NFR-03** | Consistency | Common components should use the same visual language across pages. |
| **NFR-04** | Accessibility | Forms should use labels, controls should be keyboard usable, and the privacy modal should support Escape and focus restoration. |
| **NFR-05** | Performance | Static pages and local data should load promptly in a modern browser. |
| **NFR-06** | Compatibility | The prototype should work in current Chrome, Edge, Firefox, and Safari versions. |
| **NFR-07** | Maintainability | CSS and JavaScript should be separated into shared, purpose-specific modules. |
| **NFR-08** | Privacy | Only limited demonstration data should be stored, and the user should be informed that it is kept in the browser. |
| **NFR-09** | Security Transparency | Client-side role checks and fixed demo credentials must be identified as simulations, not production security. |
| **NFR-10** | Input Safety | Required controls and fixed options should reduce invalid input; production deployment would require server-side validation and sanitization. |
| **NFR-11** | Reliability | Saved prototype reviews, consent records, profile settings, moderation status, and audit actions should persist after refresh in the same browser. |
| **NFR-12** | Traceability | Requirements, implementation-plan entries, feature status, source files, and screenshots should use matching feature names and paths. |
| **NFR-13** | Ethical Content | The interface should identify reviews as student opinions and discourage submission of private or harmful content. |
| **NFR-14** | Data Limitation | Fictional/sample data should be used for classroom demonstration. |

---

## 4. Minimum Technical Requirements

Prototype 15 must demonstrate that a user can:

1. navigate through the main pages;
2. browse dormitory and cafeteria reviews;
3. search review titles and filter by rating;
4. open a detailed review;
5. read the survival guide;
6. sign up or log in using the prototype workflow;
7. consent to the privacy notice;
8. submit a review while logged in;
9. view and filter personal submissions;
10. remove a pending submission;
11. log in as an administrator;
12. approve or reject a review; and
13. view example reports, users, and audit activity.

### Technical Stack

| Area | Current Implementation |
|---|---|
| Frontend | HTML5, CSS3, JavaScript |
| Data | JavaScript seed records and browser `localStorage` |
| Authentication | Fixed demo credentials and client-side session simulation |
| Repository Location | `prototype/` |
| Backend | Not implemented |

---

## 5. Out of Scope for the Current MVP

- Production authentication, encrypted passwords, and secure sessions
- Server-side role-based authorization
- Live database or cloud synchronization
- Real user-report submission workflow
- Full administrator account editing, suspension, or approval workflow
- Editing an existing student review
- Image upload and permanent image storage
- Email or push notifications
- Real-time chat
- AI recommendations
- Booking or payment functions
- GPS navigation and live maps
- Native Android or iOS application
- Multi-language content translation

These may be considered after the core concept is validated and a secure backend architecture is introduced.
