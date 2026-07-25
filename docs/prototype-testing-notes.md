# Prototype Testing Notes

## Test Environment

- Prototype link or folder: `prototype/`
- Browser/device used: Google Chrome on a laptop; responsive layout reviewed for desktop and mobile screen sizes
- Tester role: Student user and administrator
- Test date: 25 July 2026
- Testing limitation: Testing used fictional sample data and a limited number of devices. Performance with large datasets, simultaneous users, shared data across devices, and additional browsers still requires further testing.

## Main Test Cases

| Test ID | User Flow / Feature | Steps to Test | Expected Result | Actual Result | Status | Issue Found | Fix / Next Action |
|---|---|---|---|---|---|---|---|
| T-01 | Open homepage | Open `prototype/index.html` and review the homepage | Homepage shows the HallPass title, target users, purpose, review categories, and main action buttons | The homepage displayed the HallPass introduction, Dormitory and Cafeteria categories, latest reviews, Survival Guide link, and calls to action | Passed | No major functional issue found; final appearance may vary slightly on different devices | Test the homepage on additional browsers and capture an updated Lab 11 screenshot |
| T-02 | Submit record | Log in with the student demonstration account, open Write Review, complete all required fields, accept privacy consent, and submit | Review is saved in browser storage with Pending status and a confirmation message appears | The review was stored using `localStorage`, assigned to the logged-in student, marked Pending, and followed by a submission confirmation | Passed | Submitted data is stored only in the current browser and is not shared with other devices | Use a shared backend database in a future production version |
| T-03 | View record list | Open the Dormitory and Cafeteria review pages and check the available records | Fictional sample records and approved student reviews are visible in the appropriate list | Dormitory and Cafeteria records displayed with images, ratings, prices, distances, and review information | Passed | Pending reviews do not appear publicly until administrator approval, which may confuse testers if the moderation step is skipped | Add clearer submission guidance explaining that new reviews require approval |
| T-04 | Search/filter | Enter a keyword, choose a minimum rating, and change the sorting option on a review-list page | Only matching records are shown and records are arranged according to the selected option | Keyword search, minimum-rating filtering, and sorting updated the visible review cards | Passed | Keyword search mainly checks place titles and does not fully search review text, tags, or locations | Expand search to include descriptions, tags, and location information |
| T-05 | Detail view | Select a Dormitory or Cafeteria record from the list | The selected record’s title, category, rating, location, price, and review information are shown clearly | The detail page displayed the selected place and its associated ratings, review content, location, and price information | Passed | Some places have more detailed sample information than others | Standardize the amount of information provided for every place record |
| T-06 | Status update | Log in as the administrator, open the Moderation Queue, and approve or reject a Pending review | Review status changes, the student dashboard reflects the new status, dashboard counts update, and the action appears in the audit log | The review status changed to Approved or Rejected, stored data was updated, metric counts refreshed, and the administrator action was recorded | Passed | Administrator authorization is simulated through client-side JavaScript and is not secure for production use | Implement server-side authentication and role-based authorization in a future version |
| T-07 | Dashboard metrics | Open the Student Dashboard and Administrator Dashboard and compare the displayed totals with the stored review data | Total, Pending, Approved, Rejected, Dormitory, and Cafeteria counts are visible and match the prototype records | Review and status metrics matched the seed records and locally stored submissions | Passed with limitation | Open Reports and Registered Users are fixed demonstration values rather than live calculated metrics | Label them clearly as demonstration values or connect them to real stored data in the next sprint |

## Summary of Issues

1. Review and account data is stored only in browser `localStorage`, so it is not shared across devices or users.
2. Authentication and administrator access are frontend simulations rather than production security.
3. Search mainly matches place titles and does not fully search descriptions, tags, or locations.
4. Open Reports and Registered Users are fixed demonstration values.
5. Report investigation and user-management features are not complete end-to-end workflows.
6. Optional images can use a large amount of browser storage.
7. Testing was completed with limited sample data and devices, so further cross-browser, mobile, and large-data testing is required.

## Improvements Completed During Lab 11

- Updated the homepage and review cards with a more consistent HallPass design and richer images.
- Improved Dormitory and Cafeteria lists with keyword search, minimum-rating filtering, and sorting.
- Expanded the Survival Guide with searchable topics and detailed guide pages.
- Improved review submission with existing/new place selection, privacy consent, image validation, and Pending status tracking.
- Improved the Student Dashboard with Total, Pending, Approved, and Rejected submission metrics.
- Improved administrator moderation with detailed review information, approve/reject actions, removal requests, and audit records.
- Added startup and product metrics for review activity, categories, moderation status, user validation, usefulness, and interest.
- Updated `docs/feature-implementation-status.md`, `docs/startup-metrics.md`, `docs/prototype-testing-notes.md`, `docs/weekly-logbook.md`, and `README.md`.
- GitHub commit references: Add the final Lab 11 commit links after each team member uploads their assigned files.
