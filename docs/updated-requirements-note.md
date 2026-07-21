# HallPass System Requirements

## Project Scope

HallPass is a student-developed campus survival guide designed for first-year, international, and exchange students. The system helps students quickly find useful campus information through dormitory reviews, cafeteria reviews, campus survival guides, and student-contributed experiences.

The final MVP is implemented as an interactive clickable web prototype using HTML, CSS, and JavaScript.

The prototype files are located in:

`prototype/`

Prototype pages included in the updated scope:

- `index.html`
- `login.html`
- `signup.html`
- `privacy-consent.html`
- `guide.html`
- `dorms.html`
- `cafeteria.html`
- `review-details.html`
- `write-review.html`
- `my-reviews.html`
- `report-review.html`
- `dashboard.html`

The current prototype uses simulated authentication and browser-based local storage for educational demonstration. It is not approved for production deployment or the collection of real sensitive personal data.

HallPass does not include real-time chat, AI recommendations, online booking, payment systems, a live production database, or production-level authentication in the current MVP.

---

# Functional Requirements

| Req ID | Functional Requirement | HallPass Implementation / Final Prototype Must Show |
|---|---|---|
| **FR-01** | The system shall provide a clear homepage or landing screen. | The homepage introduces **HallPass – Your Campus Survival Guide**, explains the purpose of the platform, and provides navigation to the main features. Prototype file: `prototype/index.html` |
| **FR-02** | The system shall provide intuitive navigation. | Students can navigate between the Homepage, Dorm Reviews, Cafeteria Reviews, Survival Guide, Write Review, My Reviews, Login, and Signup pages. |
| **FR-03** | The system shall support user registration and login. | Users can access simulated Login and Signup pages. Prototype files: `prototype/login.html` and `prototype/signup.html` |
| **FR-04** | The system shall allow students to browse dormitory reviews. | Students can browse available dormitory review cards. Prototype file: `prototype/dorms.html` |
| **FR-05** | The system shall allow students to browse cafeteria reviews. | Students can browse available cafeteria review cards. Prototype file: `prototype/cafeteria.html` |
| **FR-06** | The system shall provide search and filtering. | Students can search and filter reviews by category or keyword. |
| **FR-07** | The system shall provide a review detail page. | Students can view detailed information about a selected review and access the option to report inappropriate content. Prototype file: `prototype/review-details.html` |
| **FR-08** | The system shall allow students to submit reviews. | Students can submit dormitory or cafeteria reviews through the review form. Prototype file: `prototype/write-review.html` |
| **FR-09** | The system shall provide campus survival guide information. | Students can browse helpful campus survival topics. Prototype file: `prototype/guide.html` |
| **FR-10** | The system shall validate review submissions. | Required fields must be completed, ratings and categories must use valid values, text length must be limited, and unsafe or unexpected input must be rejected or sanitized. |
| **FR-11** | The system shall provide an administrator-only dashboard. | Only authorized administrators can access moderation functions and approve, reject, edit, or remove submitted reviews. Prototype file: `prototype/dashboard.html` |
| **FR-12** | The system shall maintain a consistent user interface. | All pages use consistent navigation, typography, layouts, buttons, cards, colours, and interface components. |
| **FR-13** | The system shall support responsive layouts. | Pages are designed to display appropriately on desktop, tablet, and smaller mobile screens. |
| **FR-14** | The system shall protect student privacy. | The system collects only necessary information, displays usernames instead of email addresses, does not publicly display sensitive information, and warns users not to include personal information in reviews. |
| **FR-15** | The prototype shall maintain traceability. | Prototype screens correspond directly to documented user stories, MVP features, system requirements, and supporting project documentation. |
| **FR-16** | The system shall support review moderation. | New reviews receive a `Pending` status and must be approved by an authorized administrator before public display. The dashboard shows Pending, Approved, Rejected, and Reported reviews. |
| **FR-17** | The system shall provide a privacy notice and obtain user consent. | Users are informed about what information is collected, why it is needed, and how it will be used before registration or review submission. Prototype file: `prototype/privacy-consent.html` |
| **FR-18** | The system shall enforce record ownership. | Students can view, edit, or delete only their own reviews, while authorized administrators can manage all reviews for moderation purposes. Prototype file: `prototype/my-reviews.html` |
| **FR-19** | The system shall allow inappropriate content to be reported. | Users can report reviews containing inaccurate, offensive, discriminatory, harmful, copyrighted, or private information. Prototype file: `prototype/report-review.html` |
| **FR-20** | The system shall support responsible content submission. | Users must confirm that their submitted reviews and images are original or that they have permission to share them. The review form must include a required content-ownership confirmation. |
| **FR-21** | The system shall display review status information. | Users can view whether their submitted review is `Pending`, `Approved`, or `Rejected`. If rejected, the prototype should display a brief reason where appropriate. |
| **FR-22** | The system shall provide clear submission feedback. | After submitting a review or report, the system displays a confirmation message explaining what happens next, including the moderation process. |

---

# Non-Functional Requirements

| Req ID | Non-Functional Requirement | Description |
|---|---|---|
| **NFR-01** | Usability | The interface should be simple and easy for first-year, international, and exchange students to understand and use. |
| **NFR-02** | Performance | Prototype pages should load quickly under normal browser conditions. |
| **NFR-03** | Responsiveness | The interface should adapt to desktop, tablet, and mobile screen sizes. |
| **NFR-04** | Consistency | All pages should use the same navigation, layouts, typography, button styles, colours, and interface patterns. |
| **NFR-05** | Accessibility | The interface should use readable fonts, clear labels, suitable colour contrast, descriptive form instructions, and appropriate spacing. |
| **NFR-06** | Compatibility | The prototype should function correctly on current versions of Chrome, Edge, Firefox, and Safari. |
| **NFR-07** | Maintainability | The prototype should be organised so that the development team can update and extend its HTML, CSS, JavaScript, content, and data easily. |
| **NFR-08** | Privacy and Data Protection | The system should minimise personal-data collection, provide a privacy notice, protect account information from public exposure, and define procedures for correcting or deleting personal data. |
| **NFR-09** | Reliability | Navigation, review cards, review status, dashboard information, moderation results, and guide content should display consistently. |
| **NFR-10** | Scalability | The design should support future expansion such as additional review categories, guide topics, users, and administrative functions. |
| **NFR-11** | Security | A real implementation shall use secure authentication, password hashing, protected sessions, role-based authorization, server-side validation, and input sanitization. Plain-text passwords and hard-coded production credentials shall not be used. |
| **NFR-12** | Ethical Content | Reviews should follow community guidelines and be moderated to reduce offensive, discriminatory, misleading, retaliatory, or harmful content. |
| **NFR-13** | Intellectual Property | Images, fonts, icons, written content, datasets, and other assets must be original, appropriately licensed, or properly attributed. |
| **NFR-14** | Transparency | The interface should clearly state that reviews represent individual student opinions and are not official university recommendations or verified facts. |
| **NFR-15** | Data Minimization | The system should collect only information necessary for account management, review submission, and moderation. It should not collect student ID numbers, national ID numbers, home addresses, financial information, health information, or other unnecessary sensitive data. |
| **NFR-16** | Data Retention | Personal information and user-generated content should be retained only for as long as necessary. Users should have a way to request correction or deletion of their information. |
| **NFR-17** | Content Safety | Public reviews should not display email addresses, passwords, phone numbers, student ID numbers, home addresses, or other private information. |
| **NFR-18** | Prototype Limitation | The prototype must clearly distinguish simulated security features from production-ready security and must use fictional, masked, or test data during classroom demonstration. |

---

# Updated Screen Requirements

## 1. Homepage

**Prototype file:** `prototype/index.html`

The homepage should include:

- HallPass title and purpose
- Main navigation
- Dormitory review section
- Cafeteria review section
- Campus survival guide link
- Login and Signup links
- Disclaimer that reviews represent student opinions

## 2. Login and Signup

**Prototype files:**

- `prototype/login.html`
- `prototype/signup.html`

These screens should include:

- Clearly labelled account fields
- Required-field validation
- Link to the privacy notice
- Consent confirmation during registration
- Clear success or error feedback
- Statement that authentication is simulated in the prototype

## 3. Privacy and Consent

**Prototype file:** `prototype/privacy-consent.html`

This screen should include:

- Information collected by HallPass
- Purpose of collecting the information
- Explanation of how information is used
- Explanation of review moderation
- Statement that email addresses are not publicly displayed
- Required consent checkbox
- Agree and Continue button
- Option to return without agreeing

## 4. Dormitory and Cafeteria Reviews

**Prototype files:**

- `prototype/dorms.html`
- `prototype/cafeteria.html`

These screens should include:

- Review cards
- Search and filtering
- Rating information
- Review dates
- Links to review details
- Only approved reviews in the public list

## 5. Review Details

**Prototype file:** `prototype/review-details.html`

This screen should include:

- Review title
- Review category
- Rating
- Review content
- Username or anonymous author label
- Submission date
- Disclaimer that the review represents personal opinion
- Report Review button

## 6. Write Review

**Prototype file:** `prototype/write-review.html`

This screen should include:

- Category field
- Review title
- Rating
- Review content
- Input validation
- Warning not to include personal information
- Required content-ownership confirmation
- Privacy notice link
- Submit Review button
- Message explaining that the review will be moderated

## 7. My Reviews

**Prototype file:** `prototype/my-reviews.html`

This screen should include:

- Current user’s submitted reviews
- Review title and category
- Submission date
- `Pending`, `Approved`, or `Rejected` status
- Edit button
- Delete button
- Rejection reason where appropriate

## 8. Report Review

**Prototype file:** `prototype/report-review.html`

This screen should include:

- Reported review title or ID
- Report-reason selection
- Additional explanation field
- Submit Report button
- Confirmation message

Possible report reasons include:

- False or misleading information
- Offensive or discriminatory content
- Personal information
- Copyright violation
- Spam
- Other

## 9. Administrative Dashboard

**Prototype file:** `prototype/dashboard.html`

The dashboard should include:

- Administrator-only access
- Review statistics
- Pending reviews
- Approved reviews
- Rejected reviews
- Reported reviews
- Review details
- Approve button
- Reject button
- Rejection-reason field
- Simulated moderation feedback

---

# Minimum Technical Requirements

HallPass is an interactive clickable web prototype where users can:

- Navigate between prototype pages
- Create an account through the Signup page
- Log in through the Login page
- View and accept the privacy notice
- Browse dormitory reviews
- Browse cafeteria reviews
- Search and filter reviews
- View detailed review information
- Submit reviews through a validated form
- Confirm ownership of submitted content
- View their submitted reviews
- View review moderation status
- Edit or delete their own simulated reviews
- Report inappropriate reviews
- Browse campus survival guides
- Access a simulated administrative dashboard
- Approve or reject reviews as a simulated administrator

The prototype is implemented using:

| Platform Type | HallPass Prototype Form |
|---|---|
| Web Application Prototype | HTML, CSS, and JavaScript |
| Data Storage | Browser `localStorage` and sample data for demonstration |
| Prototype Location | `prototype/` |
| Main Files | `index.html`, `login.html`, `signup.html`, `privacy-consent.html`, `guide.html`, `dorms.html`, `cafeteria.html`, `review-details.html`, `write-review.html`, `my-reviews.html`, `report-review.html`, `dashboard.html` |

---

# Security and Privacy Limitations

The current HallPass MVP is a classroom prototype and does not provide production-level security.

The prototype may simulate:

- User registration and login
- User roles
- Review ownership
- Privacy consent
- Review moderation
- Reporting
- Review status changes

Before HallPass is deployed with real users, the system would require:

- A secure backend
- A production database
- Server-side validation and sanitization
- Secure authentication
- Password hashing
- Protected sessions
- Role-based authorization
- Protected administrator routes
- Moderation audit records
- Secure data storage
- Data-retention and deletion procedures
- Safe file-upload processing

---

# Out of Scope for MVP

The following features are intentionally excluded from the current HallPass MVP:

- Real-time chat or messaging
- AI-powered recommendations
- Online dormitory booking
- Online payment systems
- Live production database integration
- Production-level authentication
- Real email verification
- Password recovery by email
- Mobile application for Android or iOS
- Multi-language translation
- Interactive GPS or live campus navigation
- Gamification and reward systems
- Production image hosting
- Automated content moderation
- Connection to official university systems
- Collection of real sensitive personal data

These features may be considered in future versions after validating the core HallPass concept and completing appropriate privacy, ethical, intellectual-property, and security reviews.

---

# Lab 09 Requirement Update Decision

The Lab 09 responsible IT review required changes to the HallPass system requirements.

The following existing requirements were clarified:

- **FR-10:** Stronger review-input validation
- **FR-11:** Administrator-only dashboard access
- **FR-14:** Clearer student privacy protection
- **NFR-08:** Expanded privacy and data-protection controls
- **NFR-09:** Inclusion of review and moderation-status reliability

The following functional requirements were added:

- **FR-16:** Review moderation
- **FR-17:** Privacy notice and user consent
- **FR-18:** Record ownership
- **FR-19:** Inappropriate-content reporting
- **FR-20:** Responsible content submission
- **FR-21:** Review-status information
- **FR-22:** Submission feedback

The following non-functional requirements were added:

- **NFR-11:** Security
- **NFR-12:** Ethical content
- **NFR-13:** Intellectual property
- **NFR-14:** Transparency
- **NFR-15:** Data minimization
- **NFR-16:** Data retention
- **NFR-17:** Content safety
- **NFR-18:** Prototype limitations

All requirement changes must also be recorded in `docs/updated-requirements-note.md` and connected to their supporting Lab 09 evidence and GitHub issue or commit.
