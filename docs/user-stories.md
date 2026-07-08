# HallPass User Stories

## User Story List

| Story ID | User Role | User Story | Related Requirement | Priority | Acceptance Criteria | Prototype Evidence |
|---|---|---|---|---|---|---|
| **US-01** | Student | As a first-year, international, or exchange student, I want to understand what HallPass is from the homepage, so that I know how it can help me find campus survival information. | FR-01, FR-02 | Must | Given I open the homepage, when the page loads, then I can see the HallPass title, purpose, target users, and main actions. | `prototype/wireframe-html/index.html` |
| **US-02** | Student | As a new student, I want to browse dormitory and cafeteria reviews, so that I can learn from other students' real experiences before making decisions. | FR-05 | Must | Given I open the reviews page, when reviews are displayed, then I can see review cards with a title, category, rating, status, and short description. | `prototype/wireframe-html/reviews.html` |
| **US-03** | Student | As a new student, I want to search and filter reviews, so that I can quickly find information about a specific dormitory, cafeteria, or topic. | FR-06 | Must | Given I am on the reviews page, when I use the search bar or category filter, then the prototype shows that reviews can be searched or grouped by category. | `prototype/wireframe-html/reviews.html` |
| **US-04** | Student | As a new student, I want to open a review detail page, so that I can read more complete information before trusting a review. | FR-07, FR-08 | Must | Given I click a review card, when the detail page opens, then I can see the category, rating, status, and full review description. | `prototype/wireframe-html/detail.html` |
| **US-05** | Student | As a student, I want to submit a dormitory, cafeteria, or campus guide review, so that I can share helpful information with other students. | FR-03, FR-10, FR-11, FR-15 | Must | Given I open the submit page, when I complete the required fields and submit the review, then I can see a confirmation message and privacy note. | `prototype/wireframe-html/submit.html` |
| **US-06** | Student | As a first-week student, I want to read a campus survival guide, so that I know what to prepare and where to start. | FR-02, FR-05 | Should | Given I open the guide page, when the page loads, then I can see organized first-week topics such as move-in checklist and food spots. | `prototype/wireframe-html/guide.html` |
| **US-07** | Student / Project Team | As a user, I want to view a dashboard summary, so that I can quickly understand review activity and top-rated options. | FR-12 | Should | Given I open the dashboard page, when the page loads, then I can see total reviews, pending reviews, top dormitory, and top cafeteria. | `prototype/wireframe-html/dashboard.html` |
| **US-08** | Admin / Moderator | As an admin, I want to approve, flag, or delete submitted reviews, so that HallPass can reduce misleading or low-quality information. | FR-09, FR-11 | Should | Given I open the admin page, when I view a pending review, then I can see moderation actions and a status update message. | `prototype/wireframe-html/admin.html` |
| **US-09** | Student | As a student, I want to save useful reviews, so that I can return to them later. | Future Feature | Could | This feature is not included in the current MVP. It may be added after the review system is validated. | Not included |
| **US-10** | Student | As a student, I want to use an interactive campus map, so that I can visually find campus buildings and services. | Future Feature | Could | This feature is not included in the current MVP because it requires map integration and more location data. | Not included |
| **US-11** | Student | As a student, I want AI recommendations, so that I can receive personalized dormitory or cafeteria suggestions. | Future Feature | Won't | This feature is not included in the MVP because it requires user data, recommendation logic, and advanced backend support. | Not included |
| **US-12** | Student | As a student, I want real-time chat with other students, so that I can ask questions directly. | Future Feature | Won't | This feature is not included in the MVP because it requires real-time infrastructure and moderation. | Not included |

---

## Acceptance Criteria Checklist

A good acceptance criterion should be:

- testable;
- observable in the final prototype;
- connected to a requirement;
- connected to an MVP feature;
- clear enough for the team to demonstrate during evaluation.

---

## Rejected / Future User Stories

| Story ID | Reason for Postponing | Future Condition |
|---|---|---|
| **US-09** | Favorite or saved reviews are useful, but they are not essential for proving the main review and guide workflow. | Add after the main review system works smoothly. |
| **US-10** | An interactive campus map requires additional mapping tools, accurate location data, and more development time. | Add when the team has reliable campus location data. |
| **US-11** | AI recommendations require a large amount of user and review data to be meaningful. | Add after HallPass has enough real review data. |
| **US-12** | Real-time chat requires backend infrastructure, moderation, and privacy controls. | Add only after the platform has a stable user base and moderation plan. |

---

## Main User Flow

The main HallPass user flow is:

1. Student opens `index.html`.
2. Student chooses one of the main actions:
   - Browse Reviews;
   - Submit Review;
   - Open Survival Guide.
3. Student browses reviews in `reviews.html`.
4. Student opens a review detail in `detail.html`.
5. Student submits a review in `submit.html`.
6. Student can view general summary information in `dashboard.html`.
7. Admin can simulate moderation in `admin.html`.

---

## Scope Note

These user stories are written only for the current HallPass MVP. Features such as login, booking, payment, live chat, AI recommendation, and interactive campus maps are outside the current prototype scope.
