# HallPass User Testing Results

## 1. Testing Overview

The Lab 13 dataset contains **200 task attempts** completed by first-year, international, exchange, and senior students, together with student/staff administrator testers. The testing covered the working HallPass prototype, including homepage orientation, dormitory and cafeteria browsing, account access, review submission, the Campus Survival Guide, and the administrator dashboard.

The detailed evidence is stored in [`data/user-testing-results.csv`](../data/user-testing-results.csv). Testers used fictional data only.

## 2. Overall Results

| Metric | Result |
| --- | ---: |
| Task attempts | 200 |
| Successful attempts | 170 |
| Unsuccessful attempts | 30 |
| Overall completion rate | 85.0% |
| Average completion time | 1.89 minutes |
| Average feedback score | 3.98 / 5 |
| Attempts with a recorded confusion point | 79 |

## 3. Results by Task

| Task | Description | Attempts | Successful | Success Rate | Average Time | Average Score | Related Requirements |
| --- | --- | ---: | ---: | ---: | ---: | ---: | --- |
| T01 | Understand the HallPass homepage | 29 | 23 | 79.3% | 0.99 min | 3.72 / 5 | FR-01, FR-02 |
| T02 | Browse dormitory reviews | 29 | 26 | 89.7% | 1.91 min | 4.07 / 5 | FR-04, FR-06, FR-07 |
| T03 | Browse cafeteria reviews | 29 | 26 | 89.7% | 1.69 min | 4.03 / 5 | FR-05, FR-06, FR-07 |
| T04 | Create an account or sign in | 29 | 24 | 82.8% | 2.08 min | 3.97 / 5 | FR-03, FR-15, FR-18 |
| T05 | Submit a dormitory or cafeteria review | 28 | 23 | 82.1% | 3.26 min | 4.07 / 5 | FR-08, FR-10, FR-15, FR-16, FR-18 |
| T06 | Read the Campus Survival Guide | 28 | 26 | 92.9% | 1.35 min | 4.14 / 5 | FR-09 |
| T08 | View the administrator dashboard | 28 | 22 | 78.6% | 1.98 min | 3.89 / 5 | FR-12, FR-13, FR-21 |

## 4. Main Findings

### What worked well

- The Campus Survival Guide achieved the highest completion rate at **92.9%**.
- Dormitory and cafeteria browsing both achieved **89.7%** completion.
- The average feedback score was close to **4 out of 5**, indicating that most testers found the prototype understandable and useful.
- Testers were generally able to connect ratings, descriptions, and practical guide content with campus-life decisions.

### Main usability problems

- **Homepage orientation:** navigation labels and feature-card wording did not always make the main paths obvious.
- **Administrator workflow:** dashboard location, moderation navigation, statistic labels, and the route back to the main site caused confusion.
- **Login and signup:** testers requested clearer field labels, password guidance, account confirmation, and switching between login and signup.
- **Review submission:** rating/category instructions, required-field indicators, and submission confirmation need stronger visual treatment.
- **Review browsing:** opening review details, search labels, category labels, and the separation of ratings from review text need improvement.
- **Guide structure:** testers completed the guide task successfully, but asked for more descriptive headings and clearer topic organization.

The most frequently recorded individual confusion points were login/signup navigation, opening review details, and navigation labels, with **six records each**. Search labels appeared in **five records**.

## 5. Improvement Actions

| Priority | Action | Evidence |
| --- | --- | --- |
| Critical | Clarify homepage pathways and feature-card wording. | T01 had 79.3% success. |
| Critical | Improve administrator dashboard/moderation navigation and provide a clear return route. | T08 had the lowest success rate at 78.6%. |
| Critical | Improve review-form guidance, required-field indicators, and confirmation feedback. | T05 had 82.1% success and the longest average time. |
| Important | Improve login/signup labels, password guidance, and confirmation. | T04 had 82.8% success. |
| Important | Clarify review-detail controls, rating presentation, search, and category labels. | Repeated confusion in T02 and T03. |
| Useful | Improve guide headings and topic organization. | T06 was successful overall, but still generated navigation feedback. |

The complete prioritized backlog, owners, deadlines, and verification steps are recorded in [`final-improvement-list.md`](final-improvement-list.md).

## 6. Conclusion

The testing evidence supports proceeding to the Lab 14 final demonstration after the Critical and Important usability improvements are completed and re-tested. HallPass demonstrates the intended student and administrator pathways, but the project should continue to be presented as a frontend classroom MVP using fictional data, simulated accounts, and browser `localStorage`.

