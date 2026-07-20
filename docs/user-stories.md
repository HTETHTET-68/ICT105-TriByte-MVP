# HallPass User Stories

## User Story List

| Story ID | User Role | User Story | Related Requirement | Priority | Acceptance Criteria | Prototype Evidence |
|---|---|---|---|---|---|---|
| **US-01** | Student | As a first-year, international, or exchange student, I want to understand what HallPass is from the homepage, so that I know how it can help me find campus information. | FR-01, FR-02 | Must | Given I open the homepage, when the page loads, then I can see the HallPass title, purpose, and navigation to the main features. | `prototype/index.html` |
| **US-02** | Student | As a student, I want to browse dormitory reviews, so that I can compare accommodation options before making a decision. | FR-04, FR-06 | Must | Given I open the Dorm Reviews page, when reviews are displayed, then I can browse dorm review cards and use search or filtering options. | `prototype/dorms.html` |
| **US-03** | Student | As a student, I want to browse cafeteria reviews, so that I can discover food options recommended by other students. | FR-05, FR-06 | Must | Given I open the Cafeteria Reviews page, when reviews are displayed, then I can browse cafeteria review cards and use search or filtering options. | `prototype/cafeteria.html` |
| **US-04** | Student | As a student, I want to view detailed review information, so that I can make better decisions based on complete reviews. | FR-07 | Must | Given I select a review, when the detail page opens, then I can view the complete review information, rating, and description. | `prototype/review-details.html` |
| **US-05** | Student | As a student, I want to submit a review, so that I can share my experiences with other students. | FR-08, FR-10, FR-14 | Must | Given I complete the review form, when I submit the review, then the prototype demonstrates a structured review submission process. | `prototype/write-review.html` |
| **US-06** | Student | As a new student, I want to read the campus survival guide, so that I can prepare for university life more easily. | FR-09 | Should | Given I open the Survival Guide page, when it loads, then I can browse organized campus survival topics. | `prototype/guide.html` |
| **US-07** | Student | As a new user, I want to create an account, so that I can access the HallPass platform. | FR-03 | Must | Given I open the Signup page, when I complete the form, then I can create a simulated account. | `prototype/signup.html` |
| **US-08** | Student | As a returning user, I want to log into HallPass, so that I can access the platform. | FR-03 | Must | Given I open the Login page, when I enter my account information, then I can access the simulated login flow. | `prototype/login.html` |
| **US-09** | Admin | As an administrator, I want to view review statistics and a simulated moderation table, so that the dashboard concept can be demonstrated. | FR-11 | Should | Given I open the Dashboard page, when it loads, then I can view statistics, review rows, and demonstration Approve/Reject feedback. Persistent decisions and admin-only access are not implemented. | `prototype/dashboard.html` |
| **US-10** | Student | As a student, I want to save useful reviews, so that I can revisit them later. | Future Feature | Could | This feature is not included in the current MVP. | Not included |
| **US-11** | Student | As a student, I want an interactive campus map, so that I can locate campus buildings and services. | Future Feature | Could | This feature is not included in the current MVP. | Not included |
| **US-12** | Student | As a student, I want AI-powered recommendations, so that I can receive personalized suggestions. | Future Feature | Won't | This feature is not included in the current MVP. | Not included |
| **US-13** | Student | As a student, I want real-time chat with other students, so that I can ask questions directly. | Future Feature | Won't | This feature is not included in the current MVP. | Not included |

---

# Acceptance Criteria Checklist

Every acceptance criterion should be:

- Testable
- Observable in the prototype
- Connected to a functional requirement
- Connected to an MVP feature
- Demonstrable during the final presentation

---

# Rejected / Future User Stories

| Story ID | Reason for Postponing | Future Condition |
|---|---|---|
| **US-10** | Saving reviews is useful but not essential for validating the core HallPass concept. | Add after the review system is fully implemented. |
| **US-11** | Interactive maps require additional location data and mapping services. | Add in a future version with mapping integration. |
| **US-12** | AI recommendations require sufficient user and review data, as well as backend processing. | Add after collecting enough real user data. |
| **US-13** | Real-time chat requires backend infrastructure, moderation, and authentication. | Add after the platform becomes fully operational. |

---

# Main User Flow

The primary HallPass user flow is:

1. Student opens `index.html`.
2. Student selects one of the available features:
   - Dormitory Reviews
   - Cafeteria Reviews
   - Campus Survival Guide
   - Write Review
   - Login
3. New users can create an account through `signup.html`.
4. Students browse reviews in `dorms.html` or `cafeteria.html`.
5. Students open `review-details.html` to view detailed information.
6. Students submit reviews using `write-review.html`.
7. Administrators view platform statistics through `dashboard.html`.

---

# Scope Note

These user stories describe only the current HallPass MVP.

The implemented prototype includes:

- Homepage
- Login
- Signup
- Dormitory Reviews
- Cafeteria Reviews
- Search and filtering
- Review Details
- Write Review
- Campus Survival Guide
- Dashboard

The current MVP does **not** include:

- AI-powered recommendations
- Online booking
- Payment system
- Real-time chat
- Live database integration
- Mobile application
- Interactive campus navigation

These features are planned for future development after validating the core HallPass concept.
