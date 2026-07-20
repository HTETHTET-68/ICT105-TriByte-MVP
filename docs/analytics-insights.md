# Lab 08 - Analytics Insights

## 1. Analytics Question

**What did users do, say, and prove when testing the HallPass MVP direction?**

The validation aimed to determine whether first-year, international, and exchange students could successfully use HallPass to browse dormitory and cafeteria reviews, access campus guidance, and submit reviews with minimal assistance.

---

## 2. Metrics Calculated

| Metric | Formula / Method | Result |
|---|---|---:|
| Total validation records | Count all validation records | **200** |
| Completed tasks | Count where TaskCompleted = Yes | **170** |
| Task success rate | Completed Tasks ÷ Total Records × 100 | **85%** |
| Average ease of use | Average EaseOfUseScore | **3.99 / 5** |
| Average usefulness score | Average UsefulnessScore | **4.30 / 5** |
| Average interest level | Average InterestLevel | **4.34 / 5** |
| Most common confusion points | Count repeated ConfusionPoint categories | Login & Signup Navigation, Navigation Labels, Opening Review Details |

---

## 3. Findings

| Finding | Evidence from Power BI | Requirement ID | Prototype Action |
|---|---|---|---|
| Users successfully completed most prototype tasks. | **85% task success rate** indicates that most participants could complete the required tasks without assistance. | FR-01, FR-02 | Maintain the current homepage and navigation structure while refining usability. |
| HallPass provides clear value to students. | **Average usefulness score of 4.30/5** shows users believe the platform helps them make better campus decisions. | FR-04, FR-05, FR-06, FR-07 | Expand dormitory reviews, cafeteria reviews, and campus guide content. |
| Users were interested in using HallPass in the future. | **Average interest level of 4.34/5** indicates strong willingness to continue using the platform after launch. | FR-05, FR-06, FR-07 | Continue development and increase review content to maintain user engagement. |
| Authentication remains the largest usability issue. | Login & Signup Navigation appeared as one of the most frequent confusion points during testing. | FR-03 | Improve login/signup layout, instructions, and navigation flow. |
| Navigation and review details need minor improvements. | Users occasionally struggled with navigation labels and opening review details. | FR-02, FR-07 | Improve button labels, page hierarchy, and review card design. |

---

## 4. Interpretation

The analytics demonstrate that the HallPass MVP successfully addresses the needs of its target users. Most participants completed the required tasks successfully, indicating that the overall workflow is understandable and usable.

Users rated the prototype highly for usefulness (4.30/5) and expressed strong interest in continuing to use HallPass (4.34/5). These results support the project's value proposition of helping students make informed decisions about dormitories, cafeterias, and campus life.

However, the validation also identified several usability improvements. Login and signup navigation caused the highest level of confusion, while some participants required additional guidance when locating review details and interpreting navigation labels. These issues are relatively minor and can be addressed through interface improvements rather than major feature redesign.

Overall, the analytics provide strong evidence that the MVP is moving in the correct direction.

---

## 5. Requirements Affected

| Requirement ID | Evidence | Action Needed |
|---|---|---|
| FR-01 | High task completion indicates users understand the homepage. | Maintain current design with minor visual improvements. |
| FR-02 | Navigation labels were a common confusion point. | Improve menu labels and page organization. |
| FR-03 | Login and signup workflow generated repeated user confusion. | Simplify authentication flow and provide clearer guidance. |
| FR-09 | Campus guide received positive usefulness feedback. | Expand campus guidance content. |
| FR-04 | Dormitory reviews were frequently accessed and valued. | Increase review coverage and filtering options. |
| FR-05 | Cafeteria reviews were considered useful by participants. | Add additional reviews and improve search functionality. |
| FR-07 | Some users required clearer review detail presentation. | Improve ratings, layout, and review summaries. |
| FR-08 | Review submission was generally successful. | Enhance form guidance and validation messages. |
| FR-10 | Validation worked but additional hints would improve usability. | Add clearer field instructions and validation feedback. |
| FR-16 | Local storage successfully simulated review persistence and moderation status. | Continue using fictional local prototype data until backend implementation. |

---

## 6. Next Prototype Improvement

Before continuing development, the team should focus on improving the usability of the existing prototype rather than redesigning it.

Priority improvements include:

- Simplify the login and signup workflow.
- Improve navigation labels and menu visibility.
- Enhance the review detail page by making ratings and summaries more prominent.
- Add clearer search and filtering options for dormitory and cafeteria reviews.
- Expand the amount of student-generated review content and campus guidance.
- Improve form validation messages to help users submit reviews more confidently.

### MVP Decision

**Validated**

The HallPass MVP achieved an **85% task success rate**, a **4.30/5 usefulness score**, and a **4.34/5 interest level**, demonstrating that the prototype successfully meets the needs of its target users. The remaining issues are primarily usability refinements rather than fundamental problems with the product concept.
