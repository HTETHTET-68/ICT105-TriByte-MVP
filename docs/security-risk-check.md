# Basic Security Risk Check

## Project Scope

This check covers the HallPass v1.0 frontend prototype in `prototype/`. The prototype uses HTML, CSS, JavaScript, seed data, and browser `localStorage`; it does not use production authentication, a backend API, or a live database.

| Area | Risk Question | Current Status | Risk Level | Mitigation | Owner |
|---|---|---|---|---|---|
| Form input | Can incomplete, invalid, or harmful data be submitted? | HTML `required` fields block some empty submissions, but text length, file size, and unsafe content are not validated or sanitized. | High | Enforce server-side validation in implementation; limit title to 100 characters and review text to 10–500 characters; sanitize output; validate rating/category; reject unexpected fields. | TriByte Development Lead |
| Admin function | Can normal users access admin actions? | Login redirects the demo admin to `dashboard.html`, but the dashboard itself has no role check. Anyone who knows the URL can open it. Approve/reject buttons are simulations only. | High | Add a dashboard route guard now and enforce server-side role-based authorization before production. Never rely only on a hidden link or browser state. | TriByte Development Lead |
| Data display | Is private information visible to everyone? | Public review cards show review content but not email or password. Seed reviews do not contain personal contact details; however, a user could type personal data into review text. | Medium | Show only approved reviews; display a username or anonymous label; add a warning not to include personal information; moderate content before publication. | Content Moderator |
| Status update | Can records be edited without control? | Submitted reviews receive `Pending` in `localStorage`, but dashboard approve/reject buttons do not persist changes and ownership checks are not implemented. | High | Allow students to change only their own reviews and administrators to moderate all reviews; verify authorization on the server; record moderator, timestamp, and action. | TriByte Development Lead |
| Public links | Does a public link expose data that should be private? | Review and guide pages are intentionally public. `dashboard.html` is also directly reachable, although it should be admin-only. | High | Protect the admin route, return an access-denied response for non-admin users, and keep account/session data out of URLs. | TriByte Development Lead |
| File upload | If used, can unsafe or unrelated files be uploaded? | `write-review.html` contains an optional image selector, but the selected file is not saved or processed by the prototype. No type/size/content validation exists beyond `accept="image/*"`. | High if implemented | For the current MVP, keep uploads disabled or remove the selector. If implemented later, allow only approved image formats, verify MIME type and extension, set a size limit, rename files, scan content, strip metadata, and store outside executable paths. | TriByte Development Lead |

## Security Decision

**Continue with mitigation.**

The prototype is suitable for classroom demonstration because all data and actions are simulated in one browser. It is **not ready for production deployment**. Before implementation with real users, the team must protect the admin dashboard, replace hard-coded demo credentials and `localStorage` sessions with secure authentication, validate and sanitize input, enforce record ownership and moderation permissions, and either disable file uploads or add a secure upload process. These actions support FR-03, FR-08, FR-10, FR-11, FR-14, NFR-08, and NFR-09.
