# Final Improvement List Before Lab 14

## Testing Summary

The final improvement list is based on **200 user-testing records**.

- Overall task-completion rate: **85.0%**
- Average completion time: **1.89 minutes**
- Average feedback score: **3.99/5**
- Lowest task-success areas:
  - Administrative dashboard: **78.6%**
  - Homepage understanding: **79.3%**
  - Review submission: **82.1%**
  - Login/signup: **82.8%**

| Improvement ID | Problem / Improvement Needed | Priority | Related Requirement | Owner | Deadline | Evidence Source | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| IMP-01 | Clarify homepage navigation labels and shorten feature-card wording so first-time visitors can understand the main pathways immediately. | Critical | FR-01/FR-02 | Htet Htet Myint Zaw | Before Lab 14 final demo | User testing: T01 had 79.3% success; Navigation labels and Feature card wording were repeated confusion points. | Pending |
| IMP-02 | Make the administrator dashboard and moderation section easier to locate, and add a clear route back to the main HallPass pages. | Critical | FR-12/FR-13/FR-21 | Khaing Zin Thet | Before Lab 14 final demo | User testing: T08 had the lowest success rate at 78.6%; dashboard navigation, moderation section, dashboard location, and back navigation were reported. | Pending |
| IMP-03 | Improve login and signup guidance by clarifying field labels, password requirements, navigation between login and signup, and successful account confirmation. | Important | FR-03/FR-15/FR-18 | Khaing Zin Thet | Before Lab 14 final demo | User testing: T04 success rate was 82.8%; login/signup navigation, password guidance, field labels, and signup confirmation were reported. | Pending |
| IMP-04 | Improve the review-submission form with stronger required-field indicators, clearer category/rating instructions, and a more visible submission confirmation. | Critical | FR-08/FR-10/FR-15/FR-16/FR-18 | Khaing Zin Thet | Before Lab 14 final demo | User testing: T05 success rate was 82.1%; rating selection, review category, required fields, and submission confirmation were reported. | Pending |
| IMP-05 | Separate the rating display more clearly from review text and make review-detail links/buttons easier to recognize. | Important | FR-04/FR-05/FR-06/FR-07 | Yousel Zangmo | Before Lab 14 final demo | User testing: rating display and opening review details were repeated confusion points in dormitory and cafeteria tasks. | Pending |
| IMP-06 | Improve search and category labels for dormitory and cafeteria review pages. | Important | FR-04/FR-05/FR-06 | Yousel Zangmo | Before Lab 14 final demo | User testing: search label, dormitory category label, and cafeteria category label were reported. | Pending |
| IMP-07 | Use more descriptive Survival Guide topic headings and improve guide-topic organization/navigation. | Useful | FR-09 | Htet Htet Myint Zaw | Before Lab 14 final demo | User testing: T06 had 92.9% success, but topic headings, guide navigation, and topic organization were reported. | Pending |
| IMP-08 | Review dashboard statistic labels to ensure that each metric and status is understandable without explanation. | Important | FR-12/FR-13/FR-21 | Yousel Zangmo | Before Lab 14 final demo | User testing: statistic labels were reported as a repeated confusion point. | Pending |
| IMP-09 | Complete a final responsive and end-to-end walkthrough for student and administrator roles after all fixes. | Critical | FR-01–FR-22 | TriByte Team | Before Lab 14 final demo | Lab 13 requires a complete demo flow and final improvement verification before Lab 14. | Pending |
| IMP-10 | Replace frontend-only authentication and localStorage with a secure shared backend in a future production version. | Future | NFR security/privacy requirements | Future Development Team | Beyond this course | Current prototype limitation documented in previous labs. | Future |

## Priority Definition

- **Critical:** Must be fixed before the final presentation because it affects the main user flow, task completion, or demo reliability.
- **Important:** Should be fixed to improve clarity, usability, and the final prototype quality.
- **Useful:** Improves the experience but does not block the final demonstration.
- **Future:** Recommended for development beyond the current course prototype.

## Verification Plan

After completing each Critical and Important item, the team should:

1. Repeat the affected task using the same testing steps.
2. Confirm that the problem no longer blocks task completion.
3. Capture an updated screenshot or short evidence note.
4. Change the item status from `Pending` to `Completed`.
5. Record the related commit, issue, or pull request in `docs/weekly-logbook.md`.
