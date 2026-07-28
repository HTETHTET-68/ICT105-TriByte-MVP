# HallPass Prototype Demo Script

**Lab 13 assigned member:** Yousel Zangmo  
**Recommended duration:** 6–8 minutes  
**Demo environment:** Current desktop browser, HallPass files served from the repository, JavaScript enabled  
**Data rule:** Use only fictional/sample information

## Demo Objective

Prove that HallPass supports its actual main user pathway from the marketing landing page to a useful student outcome, then continues through consented review submission, status tracking, administrator moderation, and audit evidence. The demo must also state that authentication and data storage are simulations in a frontend-only classroom MVP.

## Presenter Roles

| Member | Role in demo | Part presented |
| --- | --- | --- |
| Htet Htet Myint Zaw | Product and user-testing presenter | Problem, target user, landing page, validation focus |
| Khaing Zin Thet | Prototype and data presenter | Browse/search/detail, localStorage behavior, admin workflow |
| **Yousel Zangmo** | Sales-scenario and demo lead | Value message, guided student flow, requirement traceability, close |

Roles may be reassigned by the team; requirement IDs and screen order should remain unchanged.

## Pre-Demo Setup

1. Serve the project root so relative links work; open `landing-page/index.html`.
2. Use a current browser at a desktop width. Keep a mobile-width view ready to mention responsiveness.
3. Confirm JavaScript is enabled and the prototype pages load.
4. Keep the demo credentials visible on `prototype/login.html`:
   - Student: `student@hallpass.com` / `Student123!`
   - Admin: `admin@hallpass.com` / `Admin123!`
5. Use a fictional review such as “Demo Cafeteria — affordable lunch option.”
6. If old local demo data could confuse the audience, clear only the HallPass data for the demo browser before rehearsing.
7. Open `screenshots/demo-flow.png` as a backup visual in case live navigation fails.

## Screen-by-Screen Demo Flow

| Step | Screen / action | Presenter action and narration | Requirement ID(s) | Expected user value / proof |
| ---: | --- | --- | --- | --- |
| 1 | `landing-page/index.html` | Point to “Your shortcut to campus life.” Say: “New, international, and exchange students often search scattered chats and posts for accommodation, food, and daily campus guidance. HallPass brings those decisions into one student-focused path.” Select **Try the HallPass demo**. | FR-01, FR-02, FR-22; NFR-01, NFR-02, NFR-03 | The audience understands the target user, problem, value, and clear entry point. |
| 2 | `prototype/index.html` | Show the shared navigation and latest review cards. Say: “Students can explore before creating an account. The homepage gives direct access to dorms, cafeterias, the survival guide, review contribution, and login.” | FR-01, FR-02, FR-18 | The main choices are visible and consistently named. |
| 3 | `prototype/dorms.html` | Open **Dorm Reviews**. Enter a title keyword and choose a minimum rating. Explain that listings combine fictional seed records with saved prototype records. | FR-04, FR-06; NFR-05, NFR-14 | Students can narrow choices instead of reading every listing. |
| 4 | `prototype/review-details.html?place=...` | Select **View Details** on a result. Point out title, category, rating, description, price, location/distance, student experiences, and the link to contribute. | FR-07 | A student can inspect decision-relevant details in one view. |
| 5 | `prototype/cafeteria.html` | Briefly switch to **Cafeteria Reviews** and demonstrate the same search/filter pattern. | FR-05, FR-06; NFR-03 | A consistent interaction model works across both review categories. |
| 6 | `prototype/guide.html` → `guide-details.html?topic=...` | Open **Survival Guide**, search or select a topic such as Transportation or Banking & Budget, then open **Read More**. Say: “HallPass supports the decision after the review as well as practical first-week tasks.” | FR-09 | New students receive practical campus guidance beyond ratings. |
| 7 | `prototype/write-review.html` → `login.html` | Select **Write Review** while logged out. Show that HallPass redirects to login and preserves the intended destination. State: “Login is simulated for this classroom MVP; it is not production security.” Sign in with the student demo account. | FR-03, FR-08; NFR-09 | Contribution is separated from anonymous browsing and the limitation is communicated honestly. |
| 8 | `prototype/write-review.html` | Complete category, rating, place/title, comment, and other required fields using fictional data. Open **View Privacy Notice**, explain browser storage and the instruction not to enter sensitive information, tick consent, and submit. Point out the success toast. | FR-08, FR-10, FR-15, FR-16, FR-18; NFR-04, NFR-08, NFR-10, NFR-13, NFR-14 | The audience sees validation, informed consent, ownership, and action feedback. |
| 9 | `prototype/student-dashboard.html` | Open **My Dashboard**. Show totals, the Pending/Approved/Rejected badges, status filter, and the newly submitted review. Mention that a student may remove a pending item. Refresh once to show same-browser persistence. | FR-11, FR-14, FR-17; NFR-11 | Contributors know what happened and can manage a pending submission. |
| 10 | Log out → `prototype/login.html` | Log out, then sign in with the administrator demo account. Say: “This role check is a client-side demonstration, not server authorization.” | FR-03, FR-12, FR-18; NFR-09 | The transition to the operational stakeholder is explicit and transparent. |
| 11 | `prototype/dashboard.html` — Overview and Moderation | Show total reviews, pending moderation, open reports, and registered users. Open **Moderation Queue**, locate the fictional review, and approve or reject it. | FR-12, FR-13 | The prototype demonstrates a moderation checkpoint and operational overview. |
| 12 | Admin Reports, Users, and Audit Log | Briefly open **Reports** and **Users** to show demonstration records, then open **Audit Log** and point to the recorded moderation action. Clarify that report investigation and account actions are simulated examples. | FR-19, FR-20, FR-21; NFR-09, NFR-11 | Stakeholders see governance concepts and traceable admin activity without overstating MVP capability. |
| 13 | Return to student dashboard if time permits | Log back in as the student and confirm that the moderated status is visible. If time is short, explain this expected outcome and point to the status node in the demo-flow image. | FR-13, FR-14; NFR-11 | The end-to-end loop finishes with a visible user outcome. |
| 14 | Closing / `screenshots/demo-flow.png` | Summarize: “HallPass reduces scattered campus searching, supports informed student decisions, and adds a clear contribution and moderation path. Lab 13 testing will decide which usability fixes are required before Lab 14.” Invite feedback. | NFR-12 and all traced FRs above | The audience understands the benefit, MVP boundary, and next action. |

## Presenter Cues and Recovery Notes

- **If search returns no result:** clear the keyword, keep the rating at “All,” and select any visible card.
- **If no pending review appears:** submit a fresh fictional review while signed in as the demonstration student.
- **If the new review is not obvious:** filter **My Submissions** to Pending.
- **If localStorage is unavailable:** state that the current prototype expects same-browser storage and continue with the backup flow image.
- **If the administrator queue is empty:** demonstrate Reports, Users, and Audit Log, then explain the expected moderation action using the backup visual.
- **Do not claim:** verified reviews, secure production accounts, cloud synchronization, a live database, real institutional approval, or permanent image storage.

## Requirement Coverage Check

The demonstration directly covers FR-01 through FR-22. It also demonstrates or explicitly explains NFR-01, NFR-02, NFR-03, NFR-04, NFR-05, NFR-08, NFR-09, NFR-10, NFR-11, NFR-12, NFR-13, and NFR-14. Browser compatibility and code maintainability (NFR-06 and NFR-07) are verified through technical review rather than a short live demo.

## Closing Statement

“HallPass gives new RSU students one clear place to compare student experiences, find practical campus guidance, and contribute responsibly. The current MVP proves the complete interaction concept—from discovery to moderation—while clearly identifying its simulated security and browser-only data limitations. Please try the key tasks and tell us what should be improved before the final Lab 14 release.”
