# HallPass Final Demo Script

**Recommended duration:** 5–7 minutes  
**Prototype:** <https://htethtet-68.github.io/ICT105-TriByte-MVP/prototype/index.html>  
**Demo accounts:** `student@hallpass.com` / `Student123!`; `admin@hallpass.com` / `Admin123!`

## Before the presentation

- Open the prototype in a fresh browser window and confirm JavaScript and browser storage are enabled.
- Keep the student and administrator credentials ready.
- Use fictional information only. Do not enter real personal or sensitive data.
- If earlier practice data could interrupt the flow, use the administrator presentation reset first.
- Keep the repository, `docs/analytics-insights.md`, and final screenshots open as backup evidence.

## 1. Opening — 0:00–0:40

**Speaker:** “HallPass is TriByte’s student reviews and campus survival guide for Rangsit University. First-year, international, and exchange students often spend too long searching across social media, group chats, and word of mouth for trustworthy dormitory, cafeteria, and campus information. HallPass brings those decisions into one searchable, student-focused platform.”

**Evidence to mention:** In early discovery, 13 of 20 respondents spent more than 30 minutes searching for basic campus information, and 16 of 20 said they would use HallPass.

**Value proposition:** “HallPass helps new students make faster and more confident campus decisions by combining reviewed place information, practical guidance, and student experiences.”

## 2. User scenario — 0:40–1:00

**Speaker:** “Imagine an international first-year student who needs an affordable dormitory, a nearby cafeteria, and practical campus advice. The student wants to compare reliable options, save promising places, and contribute a review after visiting.”

## 3. Prototype walkthrough — 1:00–4:55

| Time | Screen / action | What to demonstrate and say | Requirement |
|---|---|---|---|
| 1:00–1:25 | Homepage (`index.html`) | Show HallPass’s purpose, target content, recent review activity, main navigation, and calls to action. Explain that verified/admin-reviewed labels help users understand the information source. | FR-01, FR-02 |
| 1:25–1:55 | Dormitories or cafeterias | Open a listing page. Search by keyword, apply a rating/category filter, and change the sort order. Save one place from the list. | FR-05, FR-06 |
| 1:55–2:20 | Place detail | Open a result. Point out rating, review content, verification label, distance/price information, Google Maps link, helpful-review control, and report option. | FR-07, FR-10 |
| 2:20–2:45 | Student login and dashboard | Sign in with the student demo account. Show Saved Places, Recently Viewed, notifications, and My Submissions. If two same-category places are saved, select two and show the side-by-side comparison and quick recommendation. | FR-02, FR-08, FR-11 |
| 2:45–3:30 | Write Review | Open the review form. Enter clearly fictional data, select a category and rating, demonstrate required-field feedback, accept the privacy consent, and submit. Point out the confirmation that the review is pending administrator approval. | FR-03, FR-04, FR-10 |
| 3:30–3:50 | Student submission status | Return to My Submissions and show the new review with **Pending** status and the activity notification. Explain that approved and rejected states are also supported. | FR-08 |
| 3:50–4:35 | Administrator dashboard | Log out and sign in as administrator. Show Overview metrics, the Moderation Queue, Reports, User Management, and Audit Log. Open the new review and approve it. Explain that moderation actions persist in the browser and create audit evidence. | FR-09, FR-11 |
| 4:35–4:55 | Closed-loop result | Return to the student view and show the updated **Approved** status. If time permits, report incorrect information on a public review, then show how the administrator resolves the open report. | FR-02, FR-08, FR-09 |

## 4. Data handling and technical explanation — 4:55–5:25

**Speaker:** “This final MVP uses HTML, CSS, and JavaScript. Prototype accounts, reviews, saved places, helpful votes, reports, notifications, and audit events are stored in browser `localStorage`. This makes the classroom workflow interactive without a backend, but it is not production security: data does not synchronize between devices, passwords are not hashed, and browser users can alter client-side roles or data.”

**Responsible-use statement:** “All demonstration records are fictional. A production version requires server-side authentication and authorization, password hashing, database storage, secure uploads, rate limiting, moderation controls, and a full privacy and security review.”

## 5. Evidence and validation — 5:25–6:05

**Speaker:** “The product direction was tested with 200 validation records. The documented results show an 85% task-success rate, 3.99 out of 5 ease of use, 4.30 out of 5 usefulness, and 4.34 out of 5 interest. The main confusion point was login and signup navigation.”

**Show or summarize the response:**

- clearer authentication guidance and stronger password validation;
- more visible search, filtering, ratings, and submission feedback;
- saved places, side-by-side comparison, recently viewed items, and status notifications;
- stronger privacy consent, duplicate-report prevention, accessibility, responsive layouts, and optimized WebP images;
- expanded administrator moderation, reporting, user-management, reset, and audit functions.

Clarify that the validation figures are prototype evidence, not market traction.

## 6. Closing — 6:05–6:35

**Speaker:** “HallPass now demonstrates a complete path from discovering a place, comparing information, and submitting a review to administrator moderation and student status tracking. It addresses all Lab 14 baseline functions and adds practical student and administrator features.”

**Future work:** “The next release should add a secure shared backend, university-verified data, multilingual content, larger real-user testing, secure image storage, and production-grade privacy and moderation.”

**Final line:** “HallPass turns scattered campus knowledge into one clearer starting point for every new student. Thank you—we welcome your questions.”

## Contingency plan

- If GitHub Pages is unavailable, serve the local `prototype/` folder and open `index.html`.
- If the new review is not visible, check that the same browser profile and origin are being used.
- If time is short, demonstrate one listing, one detail page, one review submission, one moderation action, and the resulting status.
- If browser data is inconsistent, use the administrator presentation reset and restart with the demo accounts.
