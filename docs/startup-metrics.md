# Startup / Product Metrics — Lab 11


## 1. Metrics Summary

| Metric ID | Metric Name | Metric Type | Why This Metric Matters | Formula / How to Calculate | Data Source | Prototype Screen |
|---|---|---|---|---|---|---|
| M-01 | Total Reviews | Usage | Shows the amount of review content available and submitted | Count seed reviews + locally submitted reviews | `js/data.js` and `hallpassReviews` | Admin Dashboard — Overview |
| M-02 | Pending Moderation | Status / Operational | Shows the administrator’s current review workload | Count submitted reviews where `status = Pending` | `hallpassReviews` | Admin Dashboard — Overview and Moderation Queue |
| M-03 | Approved Submissions | Status / Value | Shows how much student content has passed moderation | Count current user’s reviews where `status = Approved` | `hallpassReviews` | Student Dashboard |
| M-04 | Rejected Submissions | Status / Quality | Helps identify submission-quality or policy problems | Count current user’s reviews where `status = Rejected` | `hallpassReviews` | Student Dashboard |
| M-05 | Dormitory Review Count | Category | Measures content coverage for accommodation decisions | Count public records where `type = Dorm` | Seed data + approved local reviews | Admin Dashboard — Review Breakdown |
| M-06 | Cafeteria Review Count | Category | Measures content coverage for food decisions | Count public records where `type = Cafeteria` | Seed data + approved local reviews | Admin Dashboard — Review Breakdown |
| M-07 | Open Reports | Operational | Indicates content requiring investigation | Count unresolved report records | Demonstration report data | Admin Dashboard — Overview and Reports |
| M-08 | Registered Users | User Activity | Represents potential contributors and readers | Count registered accounts | Demonstration user data | Admin Dashboard — Overview and Users |
| M-09 | Task Success Rate | Validation | Shows whether target users can complete the tested HallPass tasks | Completed tasks ÷ total validation records × 100 | Lab 08 validation results: 170 ÷ 200 | Analytics documentation / Power BI |
| M-10 | Average Usefulness Score | Validation | Measures whether students perceive HallPass as valuable | Sum of usefulness ratings ÷ 200 responses | Lab 08 validation dataset | Analytics documentation / Power BI |
| M-11 | Average Interest Level | Validation | Indicates likely willingness to use HallPass | Sum of interest ratings ÷ 200 responses | Lab 08 validation dataset | Analytics documentation / Power BI |

## 2. Current Baseline and Interpretation

The updated prototype calculates Total Reviews, Pending Moderation, Dormitory Review Count, and Cafeteria Review Count from seed data and browser `localStorage`, so these figures update as the classroom demonstration proceeds. Approved and Rejected submission counts help a student understand the state of their own contributions. Open Reports and Registered Users are currently fixed demonstration values, so they illustrate the intended dashboard rather than live production analytics. The Lab 08 dataset provides a stronger validation baseline: **170 of 200 tasks were completed, producing an 85% task success rate**. Students rated HallPass **4.30/5 for usefulness** and **4.34/5 for interest**, which supports continuing the product direction. The most important next improvement is to clarify authentication and navigation because login/signup navigation was the most common validation confusion point. The team should also monitor the balance of Dormitory and Cafeteria content, because uneven category coverage may reduce value for some users. In a production version, registered users, reports, moderation time, and repeat activity should come from a shared backend rather than fixed values or local browser storage.

## 3. Link to the Final Prototype

The metrics are demonstrated in `prototype/dashboard.html` and `prototype/student-dashboard.html`. `prototype/js/admin-dashboard.js` recalculates review and moderation counts after status changes, while `prototype/js/student-dashboard.js` summarizes the logged-in student’s submissions by status. Historical validation metrics remain documented in `docs/analytics-insights.md` and `docs/customer-validation-summary.md`. A final production version should add date ranges, average moderation time, active users, and category trends from a secure shared database.

## 4. Metric Limitations

- Metrics stored in `localStorage` are limited to one browser profile and are not shared between devices.
- “Open reports” and “Registered users” are demonstration values, not live counts.
- Seed records are fictional classroom data.
- The Lab 08 validation results measure prototype testing, not real post-launch retention or revenue.
