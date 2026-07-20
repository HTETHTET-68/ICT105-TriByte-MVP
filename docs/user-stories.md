# HallPass User Stories

| ID | Role | User story | Requirements | Priority | Acceptance evidence |
|---|---|---|---|---|---|
| US-01 | Student | I want to understand HallPass and reach its main functions from the homepage. | FR-01, FR-02 | Must | Purpose, audience, actions, navigation, and disclaimer are visible. |
| US-02 | Student | I want to search, filter, sort, and browse approved dormitory reviews. | FR-04, FR-06 | Must | Controls update the Dorm Reviews results. |
| US-03 | Student | I want to search, filter, sort, and browse approved cafeteria reviews. | FR-05, FR-06 | Must | Controls update the Cafeteria Reviews results. |
| US-04 | Student | I want to read complete review details and know when they were posted. | FR-07 | Must | Detail view shows review, category, rating, author label, date, price, and location. |
| US-05 | Student | I want to submit a responsible review and receive clear feedback. | FR-08, FR-10, FR-14, FR-20, FR-22 | Must | Valid authenticated submission becomes Pending and confirmation explains moderation. |
| US-06 | New student | I want organized survival information to prepare for campus life. | FR-09 | Should | Guide topics are readable and navigable. |
| US-07 | New user | I want to create a simulated account after reviewing privacy information. | FR-03, FR-17 | Must | Required consent and valid signup lead to the student session. |
| US-08 | Returning user | I want to sign in using the correct demonstration role. | FR-03 | Must | Student and admin demo accounts reach appropriate screens. |
| US-09 | Admin | I want to access a protected dashboard and moderate submitted reviews. | FR-11, FR-16 | Must | Non-admins are blocked; admin actions persist. |
| US-10 | Student | I want to understand and consent to the prototype's data use. | FR-14, FR-17 | Must | Privacy screen explains collection, purpose, display, choices, and moderation. |
| US-11 | Student | I want to see and manage only reviews submitted by my account. | FR-18, FR-21 | Must | My Reviews is owner-filtered and provides permitted edit/delete controls. |
| US-12 | Student | I want to see whether my review is Pending, Approved, or Rejected. | FR-21 | Must | Status and rejection reason appear in My Reviews. |
| US-13 | User | I want to report inappropriate or unsafe review content. | FR-19, FR-22 | Must | Report form stores a Reported record and confirms next steps. |
| US-14 | Student | I want the interface to work consistently on different screen sizes. | FR-12, FR-13 | Should | Shared responsive UI remains usable across target sizes. |
| US-15 | Student | I want to save useful reviews. | Future | Could | Not included in this MVP. |
| US-16 | Student | I want an interactive campus map. | Future | Could | Not included in this MVP. |
| US-17 | Student | I want AI recommendations or real-time chat. | Future | Won't | Not included in this MVP. |

## Primary Student Flow

Homepage → Browse/Search → Review Details → Login/Signup and Consent → Write Review → Submission Confirmation → My Reviews Status

## Administration and Safety Flow

Admin Login → Protected Dashboard → Approve/Reject/Remove → Approved Public Display; Review Details → Report Review → Report Confirmation
