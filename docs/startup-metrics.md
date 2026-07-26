# Startup / Product Metrics — HallPass

## 1. Metrics Summary

| Metric ID | Metric Name | Metric Type | Why This Metric Matters | Formula / How to Calculate | Data Source | Prototype / Dashboard Area |
|---|---|---|---|---|---|---|
| M-01 | Total Records | Usage | Shows the size of the place/review dataset being managed | Distinct count of `RecordID` | `lab11_prototype_records.csv` | Power BI overview; admin overview |
| M-02 | Student Review Submissions | Usage | Shows whether students use the core contribution feature | Count records where `RecordType` is Student Review or Test Submission | Prototype records | Power BI record analysis; student dashboard |
| M-03 | Pending Review Count | Status | Shows the moderation workload that still needs action | Distinct count where `CurrentStatus = "Pending"` | Prototype records / `hallpassReviews` | Power BI status view; admin moderation queue |
| M-04 | Approval Rate | Status / Value | Shows the share of submitted reviews accepted for publication | Approved submitted reviews ÷ all submitted/test reviews × 100 | Prototype records | Power BI status view; admin dashboard |
| M-05 | Most Active Content Category | Category | Indicates whether dormitory or cafeteria content attracts more records | Count records by `ItemCategory`; return the largest | Prototype records | Power BI category chart |
| M-06 | Average Rating | Product Value | Summarizes the rating level across the current demonstration dataset | Average of nonblank `Rating` | Prototype records | Power BI KPI; review listings |
| M-07 | Total Activity Events | User Activity | Shows the amount of recorded prototype interaction | Count rows in ActivityLog | `lab11_activity_log.csv` | Power BI activity page |
| M-08 | Mobile Activity Rate | User Activity / UX | Tests whether mobile is an important usage context | Mobile events ÷ all activity events × 100 | Activity log | Power BI device chart |
| M-09 | Average Task Processing Time | Operational | Highlights flows that may be slow or confusing | Average `ProcessingTimeMinutes` | Activity log | Power BI operations view |
| M-10 | Moderation Decision Count | Operational | Shows administrator processing of submitted reviews | Count `ApproveReview` + `RejectReview` actions | Activity log | Power BI action chart; audit log |
| M-11 | Report Submission Count | Responsible Design | Shows how often students flag incorrect information | Count `ReportIncorrectInfo` actions | Activity log / `hallpassReports` | Power BI action chart; Reports panel |
| M-12 | Task Completion Rate | Validation | Shows whether testers complete the planned end-to-end tasks | Passed test cases ÷ executed test cases × 100 | `docs/prototype-testing-notes.md` | Documentation / future analytics summary |

## 2. Current Lab 11 Snapshot

| Measure | Current Demonstration Value | Interpretation |
|---|---:|---|
| Total records | 19 | 10 place profiles, 5 seeded student reviews, and 4 labeled Lab 11 test submissions |
| Submitted/test reviews | 9 | The dataset can demonstrate submission and moderation states |
| Approved submitted/test reviews | 6 | Five seeded student reviews plus test record HPT202 |
| Pending / Rejected / Removal Requested | 1 / 1 / 1 | HPT201–HPT204 provide workflow-state examples |
| Approval rate | 66.7% | 6 approved out of 9 submitted/test reviews |
| Most active category | Cafeteria (10 records) | Cafeteria narrowly exceeds Dorm (9 records) in this sample |
| Average rating | 4.34 / 5 | Ratings are high in the demonstration data; real-user data is needed before product conclusions |
| Total activity events | 54 | Includes 33 student events and 21 administrator events |
| Mobile activity rate | 37.0% | 20 of 54 logged events use Mobile |
| Average processing time | 3.15 minutes | Useful as a baseline for finding slower flows |
| Review submissions logged | 9 | `SubmitReview` is the most frequent single action |
| Content reports logged | 3 | The data demonstrates a report/investigation workflow |

## 3. Metrics Interpretation

The Lab 11 snapshot confirms that HallPass can represent both student-facing activity and administrator operations. The 19-record dataset is intentionally small and combines seeded prototype content with four clearly labeled workflow scenarios, so it should be treated as demonstration evidence rather than market traction. Cafeteria content is only slightly more common than dormitory content, suggesting that both categories should remain visible in the MVP. Six of the nine submitted or test reviews are approved, while pending, rejected, and removal-requested examples ensure the dashboard can demonstrate the full status workflow. Mobile accounts for 37.0% of activity events, which supports continuing responsive and touch-friendly testing. The 3.15-minute average task time is acceptable as an early baseline, but the team should break it down by action because review submission, reporting, and investigation take longer than simple browsing. The team should next collect real test outcomes for task completion, usability feedback, and error rates instead of expanding the sample data only. A larger live dataset will be required before using these measures for product or business decisions.

## 4. Link to the Final Prototype

- The **student dashboard** displays each student’s total, Pending, Approved, and Rejected submissions and allows status filtering.
- The **administrator dashboard** displays public review counts, moderation workload, removal requests, reports, users, and recent audit activity.
- The **Power BI file** at `powerbi/Lab11_TriByte_Startup_Metrics.pbix` provides a separate analytics demonstration using `powerbi/data/lab11_prototype_records.csv` and `powerbi/data/lab11_activity_log.csv`.
- The final prototype should either connect its live data to the dashboard or export records using the same data dictionary so the measures remain traceable.

## 5. Power BI Quality Note

The supplied `powerbi/resources/lab11_dax_measures.txt` contains several action/status labels from the professor’s lost-and-found example (`SubmitReport`, `Resolved`, `SearchRecord`, and similar terms). Before final submission, replace those generic labels with HallPass values such as `SubmitReview`, `Approved`, `Rejected`, `SearchPlace`, `ApproveReview`, and `RejectReview`, then refresh and confirm every visual.
