# Critical Assumptions

## Instruction

Identify assumptions that could cause your final prototype to fail if they are wrong.

| Assumption ID | Category | Assumption | Related Requirement/User Story | Risk Level | Current Evidence | How to Test |
|---|---|---|---|---|---|---|
| A-01 | User Problem | Students need a centralized platform to access reliable dormitory reviews, cafeteria reviews, and campus guidance because campus information is scattered across different sources. | FR-04, FR-05, FR-09 / US-02, US-03, US-06 | High | Product Concept, README, Dorm Reviews page, Cafeteria Reviews page, Campus Guide page | Observe whether students can quickly find campus information and gather feedback through usability testing. |
| A-02 | Value Proposition | Students believe HallPass helps them make better campus decisions through authentic peer reviews and campus guidance. | FR-01, FR-04, FR-05 / US-01, US-02, US-03 | High | Homepage, MVP Feature List, Review Pages, Campus Guide | Ask participants whether HallPass is useful and whether they would use or recommend it. |
| A-03 | Usability | Students can easily navigate the website, browse reviews, read review details, and submit reviews without instructions. | FR-01, FR-02, FR-06, FR-07, FR-08 / US-01, US-02, US-04, US-05 | Medium | Interactive HTML/CSS/JavaScript prototype, Wireframes, Navigation Menu, Write Review page | Conduct usability testing by asking users to complete common tasks and record task completion rates and navigation errors. |
| A-04 | Technical Feasibility | HTML, CSS, JavaScript, and Local Storage are sufficient to implement the HallPass MVP without requiring a backend database. | FR-08, FR-11, FR-12, FR-13 / US-05, US-09 | Medium | Technical Architecture, data.js, reviews.js, dashboard.js, Local Storage implementation | Test review creation, editing, storage, retrieval, and dashboard functionality across the prototype. |
| A-05 | Business Logic | Student review submission, editing, deletion, and administrator moderation workflows are sufficient to demonstrate realistic platform operation during MVP testing. | FR-06, FR-07, FR-08, FR-14 / US-04, US-05, US-09 | Medium | Dashboard, Review Management pages, Product Concept, Prototype | Verify review workflows, administrator moderation, and overall content management through functional testing. |

## Categories

Use these categories:
- User Problem
- Value Proposition
- Usability
- Technical Feasibility
- Business Logic
