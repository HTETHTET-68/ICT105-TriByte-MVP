# HallPass Data Handling Policy

## Purpose and Scope

This policy defines how HallPass v1.0 handles account, review, moderation, campus-guide, and Lab 08 validation data. It supports FR-03, FR-04–FR-11, FR-14, NFR-08, and the field definitions in `docs/data-structure.md`. The current MVP is an educational frontend prototype, not a production service.

## Data Collection

HallPass uses only the minimum data required to demonstrate its features:

- account email and role for simulated login and access flow;
- review category, place/title, rating, optional price range, optional location/distance, review comment, generated review ID, and moderation status;
- non-personal seed reviews and campus survival-guide content;
- Lab 08 usability and validation results stored as research evidence.

The prototype must not request student ID, full legal name, phone number, date of birth, home address, passport/national ID, financial information, medical information, biometric data, or precise live location. Users must be told not to place personal information in review text.

## Data Storage

| Data Set | Current Prototype Storage | Production Rule |
|---|---|---|
| Demo session (`hallpassUser`) | Browser `localStorage` | Replace with secure server-managed sessions using HTTPS, expiry, and protected cookies. |
| Submitted reviews (`hallpassReviews`) | Browser `localStorage` | Store in an access-controlled database with validation, moderation status, backups, and audit records. |
| Seed reviews and guide content | JavaScript/HTML files in `prototype/` | Store as approved public content; retain source and update history. |
| Sample and Lab 08 validation data | CSV/XLSX/PBIX files in `data/` | Use coded tester IDs, restrict edit access to the team, and avoid unnecessary identifiers. |
| Optional review photo | Selector exists, but files are not stored or processed | Keep disabled for MVP; if added, validate format/size/content, strip metadata, and use protected object storage. |

Passwords entered in the demo are not written to `localStorage`; however, demo credentials are hard-coded in `prototype/js/auth.js` and must never be reused in a real implementation.

## Data Access

| Role | Permitted Access |
|---|---|
| Public visitor | View approved dormitory/cafeteria reviews and campus survival-guide content only. |
| Student user | Public access plus submit reviews and, in a future implementation, manage only their own submissions. |
| Administrator/content moderator | View pending content and approve, reject, or archive reviews after authenticated role verification. |
| TriByte team | Maintain prototype/sample files and analyze coded Lab 08 validation data for coursework. |

Email addresses, credentials, internal roles, rejected content, and moderation notes must not be displayed on public pages. Access control must be enforced by the server in a real implementation, not only by navigation links or browser `localStorage`.

## Data Quality and Moderation

- Validate category, rating, title, location, price, and review length before accepting a record.
- Use the documented status values: `Pending`, `In Review`, `Approved`, `Rejected`, and `Archived`.
- Publish only approved reviews.
- Allow correction or removal of inaccurate, harmful, discriminatory, promotional, or privacy-invasive content.
- Keep moderation actions attributable through an audit log in a production system.

## Data Minimization

| Field | Decision | Reason |
|---|---|---|
| Full name | Replace with username/anonymous label | Real identity is not required for public review attribution. |
| Student ID | Remove | Not required for browsing or submitting reviews. |
| Email on public review | Remove | Authentication data must not be exposed publicly. |
| Phone, home address, date of birth | Remove | Unnecessary for every HallPass MVP feature. |
| National ID/passport, finance, health, biometrics | Prohibit | Sensitive data is outside scope and creates unjustified risk. |
| Precise GPS location | Replace with general place/location text | General campus context is enough for reviews. |
| Photo upload | Disable in current MVP | The prototype has no secure file-processing or storage controls. |

## Retention and Disposal

- Browser prototype data may be cleared after demonstrations or testing by removing HallPass `localStorage` entries.
- Sample records may be retained with the repository while they remain fictional and non-identifying.
- Coded Lab 08 validation data should be retained only for the ICT105 assessment period and then deleted when no longer required by the course.
- Rejected or archived production reviews should follow a defined retention schedule and be securely deleted when no longer required.

## Responsible Data Rule

HallPass must collect the least data needed, use fictional or masked records during development, publish only moderated content, prevent public exposure of account data, and obtain clear consent before collecting data from testers. Any move from this classroom prototype to a real service requires a new privacy, security, and legal review.

