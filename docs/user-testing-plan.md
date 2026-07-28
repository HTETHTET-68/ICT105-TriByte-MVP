# HallPass User Testing Plan

## 1. Testing Objective

The purpose of the test is to determine whether first-year, international, and exchange students can understand HallPass and independently complete its main student workflows: browse trusted dormitory and cafeteria reviews, search and filter listings, open review details, sign in, submit a review with consent, read the Campus Survival Guide, and track submission status. The administrator workflow will also be tested to confirm that an authorized moderator can review submitted content and understand the dashboard summary before Lab 14.

## 2. Test User Profile

| User Type | Number of Testers | Why This User Type Matters |
| --- | ---: | --- |
| First-year, international, exchange, and senior students | 172 | These users represent students who need reliable campus information and experienced students who can contribute useful reviews. |
| Student administrator/content moderator | 28 | This role verifies the administrator dashboard, moderation queue, status update, and audit workflow. |
| **Total** | **200** | The sample covers the main HallPass student and administrator roles recorded in the MVP validation dataset. |

## 3. Testing Tasks

| Task ID | User Task | Related Requirement | Success Criteria | Observation Focus |
| --- | --- | --- | --- | --- |
| T01 | Open the HallPass homepage and explain its purpose. | FR-01, FR-02 | Tester identifies HallPass as a source of student dormitory reviews, cafeteria reviews, and campus guidance. | Homepage purpose, feature-card wording, and navigation labels. |
| T02 | Browse dormitory reviews, use search/rating controls, and open one review detail. | FR-04, FR-06, FR-07 | Tester finds a relevant dormitory and understands its rating, price, distance, and student comments without major help. | Search label, category visibility, result selection, and back navigation. |
| T03 | Browse cafeteria reviews, use search/rating controls, and open one review detail. | FR-05, FR-06, FR-07 | Tester finds a relevant cafeteria and understands its rating, price, distance, and student comments without major help. | Search/filter wording, rating display, and opening review details. |
| T04 | Create an account or sign in to the simulated student account. | FR-03, FR-15, FR-18 | Tester completes the simulated authentication flow and understands the privacy consent notice. | Login/signup switching, field labels, password guidance, and confirmation feedback. |
| T05 | Submit a dormitory or cafeteria review. | FR-08, FR-10, FR-15, FR-16, FR-18 | Logged-in tester completes required fields and consent; the review is saved as Pending and linked to the tester. | Required-field indicators, category/rating controls, consent, and submission confirmation. |
| T06 | Read one Campus Survival Guide topic and explain one useful action. | FR-09 | Tester opens a guide detail and identifies a practical recommended step. | Topic headings, guide organization, readability, and navigation. |
| T07 | Open My Dashboard and identify a review’s current status. | FR-11, FR-14, FR-17 | Student understands Pending, Approved, and Rejected labels and can filter submissions or remove a pending item. | Status wording, totals, filtering, and difference between removal and a removal request. |
| T08 | Sign in as administrator, inspect metrics, and approve or reject a pending review. | FR-12, FR-13, FR-18, FR-21 | Administrator locates the moderation queue, changes a status, and sees the action reflected in the dashboard/audit log. | Dashboard navigation, statistic labels, moderation actions, and status feedback. |

## 4. Testing Procedure

1. Open the HallPass Prototype 15 pages in a modern browser on the tester’s assigned desktop, laptop, tablet, or mobile layout.
2. Explain that HallPass is a classroom prototype and that fictional/sample information is stored only in the browser through `localStorage`.
3. Ask each tester to complete only the tasks relevant to the tester’s role. Do not guide the tester unless the tester is unable to continue.
4. Record task completion, completion time, ease-of-use score, usefulness score, confusion point, and comments in `data/user-testing-results.csv`.
5. Reset or verify the browser’s prototype state when necessary so one tester’s saved review or login session does not affect another tester.
6. Group repeated problems by requirement and severity, then prioritize the smallest high-impact improvements before Lab 14.
7. Re-test changed screens and update the shared GitHub repository, `docs/system-requirements.md`, screenshots, and testing evidence together.

## 5. Test Environment and Evidence

- **Prototype:** HallPass Prototype 15 in `prototype/`
- **Repository:** https://github.com/HTETHTET-68/ICT105-TriByte-MVP
- **Implementation:** HTML5, CSS3, JavaScript, fictional seed data, and browser `localStorage`
- **Recorded test dates:** 20–26 July 2026
- **Devices represented:** desktop, laptop, tablet, and mobile
- **Evidence source:** `data/validation-results.csv`

## 6. Ethical Reminder

Participation should be voluntary. Testers should be told that feedback is collected for class learning and prototype improvement. The team must not collect passwords, private campus records, sensitive personal data, or identifying information that is unnecessary for the test. Only fictional/sample review content should be entered, and consent must be obtained before recording feedback.

