# Critical Assumptions

## Instruction

Identify assumptions that could cause the final HallPass prototype to fail if they are incorrect.

| Assumption ID | Category | Assumption | Related Requirement / User Story | Risk Level | Current Evidence | How to Test |
|---|---|---|---|---|---|---|
| A-01 | User Problem | First-year, international, and exchange students have difficulty finding reliable information about dormitories, cafeterias, and campus life before making decisions. | FR-04, FR-05, FR-09 / US-02, US-03, US-06 | High | Product Concept, README, Lab 03 user research | Ask users to complete information-finding tasks and observe whether HallPass helps them locate the information more quickly than their usual methods. |
| A-02 | Value Proposition | Students find greater value in accessing dormitory reviews, cafeteria reviews, and campus guidance from a single platform instead of using multiple sources. | FR-01, FR-04, FR-05, FR-09 / US-01, US-02, US-03, US-06 | High | Product Concept, MVP Feature List | Collect user ratings on the usefulness of combining reviews and campus guides into one platform. |
| A-03 | Usability | Students can navigate the HallPass website and locate important features without assistance. | FR-01, FR-02 / US-01 | High | Wireframes, HTML prototype, Navigation design | Observe users completing navigation tasks and record task completion rate, navigation errors, and requests for help. |
| A-04 | Usability | Students can successfully search, browse, and read dormitory and cafeteria reviews without confusion. | FR-04, FR-05, FR-06, FR-07 / US-02, US-03 | High | Implemented prototype (`reviews.js`, review pages) | Measure task completion rate, completion time, and collect feedback on the search and browsing experience. |
| A-05 | Usability | Students understand the review submission form and can successfully submit a review without making significant errors. | FR-08, FR-10 / US-05 | Medium | Write Review page, form validation, Local Storage implementation | Observe review submissions, record validation errors, and ask users whether the form was easy to complete. |
| A-06 | Technical Feasibility | HTML, CSS, JavaScript, and Local Storage provide sufficient functionality to demonstrate the MVP without requiring a backend database. | FR-08, FR-11 | Medium | Technical Architecture, implemented JavaScript modules | Test repeated review creation, editing, and retrieval to verify consistent prototype behavior. |
| A-07 | Technical Feasibility | The prototype functions correctly on commonly used desktop and mobile browsers without major usability issues. | FR-12, FR-13 | Medium | Responsive layout and browser testing during development | Test the prototype on multiple browsers and different screen sizes while recording any interface or functionality issues. |
| A-08 | Business Logic | Students are willing to contribute honest and useful reviews that benefit future students even without incentives. | FR-08 / US-05 | High | Product Concept (community-driven platform) | Ask participants whether they would contribute real reviews after using HallPass and why. |
| A-09 | Business Logic | Administrators can effectively monitor and manage user-generated content using the dashboard provided in the MVP. | FR-11 / US-09 | Medium | Dashboard design, Technical Architecture | Demonstrate the dashboard to testers and gather feedback on whether it supports basic moderation tasks. |
| A-10 | Data Handling | Simulated review data stored in Local Storage accurately represents how user-generated content will behave in the final system. | FR-04, FR-05, FR-08, FR-11 | Medium | `data.js`, Local Storage implementation, sample records | Refresh the application, verify stored reviews remain available, and confirm that review information is displayed consistently across pages. |

## Categories

- User Problem
- Value Proposition
- Usability
- Technical Feasibility
- Business Logic
- Data Handling
