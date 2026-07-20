# Feature-Requirement Mapping

This table describes the prototype currently stored in `prototype/`. It does not claim future responsible-IT functions that are not yet implemented.

| Feature ID | Current feature | Requirements | User stories | Prototype evidence |
|---|---|---|---|---|
| F01 | Homepage and shared navigation | FR-01, FR-02, FR-12, FR-13 | US-01 | `prototype/index.html` |
| F02 | Simulated login | FR-03, FR-12 | US-08 | `prototype/login.html`, `prototype/js/auth.js` |
| F03 | Simulated signup | FR-03, FR-12 | US-07 | `prototype/signup.html`, `prototype/js/auth.js` |
| F04 | Dormitory reviews | FR-04, FR-12, FR-13 | US-02 | `prototype/dorms.html` |
| F05 | Cafeteria reviews | FR-05, FR-12, FR-13 | US-03 | `prototype/cafeteria.html` |
| F06 | Title search and minimum-rating filter | FR-06 | US-02, US-03 | `prototype/dorms.html`, `prototype/cafeteria.html`, `prototype/js/main.js` |
| F07 | Review details | FR-07, FR-12 | US-04 | `prototype/review-details.html` |
| F08 | Logged-in review submission with required fields | FR-08, FR-10, FR-14 | US-05 | `prototype/write-review.html`, `prototype/js/reviews.js` |
| F09 | Campus Survival Guide | FR-09, FR-12 | US-06 | `prototype/guide.html` |
| F10 | Dashboard statistics and simulated moderation controls | FR-11, FR-12 | US-09 | `prototype/dashboard.html`, `prototype/js/dashboard.js` |

## Current Requirement Coverage

| Requirement | Current implementation |
|---|---|
| FR-01 | Homepage explains HallPass and its audience. |
| FR-02 | Shared navigation connects Home, Dorm Reviews, Cafeteria Reviews, Survival Guide, Write Review, and Login. |
| FR-03 | Hard-coded demonstration login and browser-based simulated signup. |
| FR-04–FR-05 | Dormitory and cafeteria review lists use seed and locally submitted data. |
| FR-06 | Search checks review titles; rating filter applies a minimum rating. The visible sort dropdown is not functional. |
| FR-07 | Query-string review ID opens a detail view. |
| FR-08 | Logged-in users can save a review locally with Pending status. |
| FR-09 | Survival Guide displays organized static campus information. |
| FR-10 | HTML required fields validate category, rating, title, and review text. |
| FR-11 | Dashboard displays totals and review rows; Approve/Reject buttons currently show demonstration messages only. |
| FR-12–FR-13 | Shared CSS provides consistent styling and responsive layouts. |
| FR-14 | The public review form does not request a student ID, email address, phone number, or home address. |
| FR-15 | This mapping links requirements, stories, features, and existing screens. |

## Current Prototype Pages

`index.html`, `login.html`, `signup.html`, `dorms.html`, `cafeteria.html`, `review-details.html`, `write-review.html`, `guide.html`, and `dashboard.html`.

Privacy Consent, My Reviews, Report Review, persistent moderation decisions, record ownership, and public approval filtering are documented only as future improvements in `updated-requirements-note.md`; they are not part of the current prototype.
