# Critical Assumptions

## Instruction

Identify assumptions that could cause the final HallPass prototype to fail if they are wrong.

| Assumption ID | Category              | Assumption                                                                                                                                              | Related Requirement/User Story     | Risk Level | Current Evidence                               | How to Test                                                                                                                            |
| ------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ---------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| A-01          | User Problem          | First-year, international, and exchange students need a centralized and easier way to access practical campus information.                              | FR-01, FR-02 / US-01               | High       | User persona and project problem analysis      | Ask target users to explore the homepage and determine whether HallPass addresses a real campus information need.                      |
| A-02          | Value Proposition     | Students find dormitory and cafeteria reviews from other students useful when making campus-related decisions.                                          | FR-04, FR-05 / US-02, US-03        | High       | User stories and MVP feature planning          | Ask testers to browse available reviews and evaluate whether the information is useful for making decisions.                           |
| A-03          | Usability             | First-year, international, and exchange students can understand the purpose of HallPass from the homepage without assistance.                           | FR-01, FR-02 / US-01               | High       | Current homepage prototype                     | Ask testers to open the homepage and explain what HallPass is for without receiving guidance.                                          |
| A-04          | Usability             | Students can easily browse, search, and filter dormitory and cafeteria reviews to find relevant information.                                            | FR-04, FR-05, FR-06 / US-02, US-03 | High       | Dormitory and cafeteria review prototypes      | Observe whether testers can find a relevant review using browsing, search, or filtering without assistance.                            |
| A-05          | Usability             | Students can understand the complete information, rating, and description presented on a review detail page.                                            | FR-07 / US-04                      | Medium     | Review detail page prototype                   | Ask testers to open a review and explain the key information presented on the detail page.                                             |
| A-06          | Business Logic        | Students are willing to contribute their own dormitory or cafeteria experiences through the review submission feature.                                  | FR-08, FR-10, FR-14 / US-05        | High       | Write Review prototype and user story planning | Ask testers to complete the review submission process and provide feedback on whether they would use this feature in a real situation. |
| A-07          | Value Proposition     | New students find organized campus survival guide information useful when preparing for and adjusting to university life.                               | FR-09 / US-06                      | Medium     | Campus Survival Guide prototype                | Ask testers to browse the guide and evaluate the usefulness and clarity of its information.                                            |
| A-08          | Technical Feasibility | The main HallPass pages, navigation links, search and filtering functions, and review submission flow work consistently in the clickable web prototype. | FR-02, FR-06, FR-08, FR-12, FR-13  | High       | Current HTML, CSS, and JavaScript prototype    | Test the main navigation, search and filtering functions, review form, and page transitions across the prototype.                      |

## Categories

Use these categories:

* User problem
* Value proposition
* Usability
* Technical feasibility
* Business logic
* Data handling
