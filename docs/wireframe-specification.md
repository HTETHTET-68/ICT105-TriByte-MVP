# Wireframe Specification

## Design Direction

HallPass should feel like a student-friendly campus guide rather than a formal university system. The interface uses warm neutral backgrounds, dark navy text, soft gold highlights, rounded cards, clear buttons, and simple navigation. All screens should look consistent across the prototype.

## Implemented Prototype Screens

### 1. Homepage / Landing Screen
**File:** `prototype/index.html`

- Shows the HallPass name and tagline: "Your Campus Survival Guide."
- Explains that HallPass helps students find trusted dormitory, cafeteria, and campus-life information.
- Includes main actions such as browsing reviews, submitting a review, and opening the survival guide.
- Introduces the core value of student-generated reviews and campus tips.
- Connected requirements: FR-01, FR-02, FR-12.

### 2. Login Screen
**File:** `prototype/login.html`

- Provides a simple sign-in interface.
- Supports the prototype account flow.
- Includes a link to the signup page.
- Connected requirements: FR-03, FR-04, FR-12.

### 3. Signup Screen
**File:** `prototype/signup.html`

- Allows new users to create a simulated account.
- Supports the user registration flow in the MVP.
- Connected requirements: FR-03, FR-12.

### 4. Survival Guide Screen
**File:** `prototype/guide.html`

- Displays practical campus survival guide topics for new students.
- Includes helpful information such as accommodation, transportation, food, emergency tips, printing, laundry, and student-life preparation.
- Connected requirements: FR-09, FR-12.

### 5. Dorm Reviews Screen
**File:** `prototype/dorms.html`

- Displays dormitory review cards.
- Includes search and filter controls.
- Allows users to open a review detail page.
- Connected requirements: FR-05, FR-07, FR-10, FR-12.

### 6. Cafeteria Reviews Screen
**File:** `prototype/cafeteria.html`

- Displays cafeteria and food review cards.
- Includes search and filter controls.
- Allows users to open a review detail page.
- Connected requirements: FR-06, FR-07, FR-10, FR-12.

### 7. Review Details Screen
**File:** `prototype/review-details.html`

- Shows full information for one selected review.
- Includes rating, category, detailed comment, and related review information.
- Provides clear navigation back to review browsing.
- Connected requirements: FR-07, FR-12.

### 8. Write Review Screen
**File:** `prototype/write-review.html`

- Allows students to submit a dormitory or cafeteria review.
- Includes fields such as category, place name, rating, title, price range, location/distance, photo upload, and review comment.
- Supports the review contribution feature of the MVP.
- Connected requirements: FR-08, FR-10, FR-12.

### 9. Admin Dashboard Screen
**File:** `prototype/dashboard.html`

- Shows review statistics and moderation-related content.
- Includes dashboard summary cards such as total reviews, dorm reviews, food reviews, and pending reviews.
- Helps demonstrate how submitted content can be monitored by an admin.
- Connected requirements: FR-11, FR-12.

## Realistic Sample Content Used

- Dorm review example: "Green Residence is close to campus and quiet after 9 PM."
- Cafeteria review example: "RIC Cafeteria has affordable lunch sets and vegetarian options."
- Survival guide topic example: "First-week checklist: SIM card, student ID, food spots, transport, and class location."

## Navigation Plan

```text
Homepage → Dorm Reviews → Review Details
Homepage → Cafeteria Reviews → Review Details
Homepage → Survival Guide
Homepage → Write Review
Homepage → Login → Signup
Login/Admin Flow → Admin Dashboard
