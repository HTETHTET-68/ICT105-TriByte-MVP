# Wireframe Specification

## Design Direction

HallPass should feel like a student-friendly campus guide rather than a formal university system. The interface uses warm neutral backgrounds, dark navy text, soft gold highlights, rounded cards, and simple navigation. The screens must look consistent across the prototype.

## Required Screens

### 1. Homepage / Landing Screen
- Shows the HallPass name and short tagline: "Your Campus Survival Guide."
- Explains the problem: new students struggle with scattered dorm, food, and campus-life information.
- Includes main actions: Browse Reviews, Submit Review, Survival Guide.
- Shows quick evidence cards such as trusted student reviews, cafeteria tips, and dorm insights.
- Connected requirements: FR-01, FR-02, FR-13, FR-16.

### 2. Input / Submission Form
- Allows users to submit a review for dormitory, cafeteria, or campus guide.
- Required fields: category, place name, rating, title, review comment, display name or initials.
- Shows validation notes for missing required fields.
- Shows privacy note: full personal details are not displayed publicly.
- Shows confirmation message after successful submission.
- Connected requirements: FR-03, FR-10, FR-11, FR-15, FR-16.

### 3. Records / Review List View
- Displays submitted or sample reviews as cards or rows.
- Each record includes title, category, rating, short excerpt, date, and status label.
- Includes search bar and category/status filters.
- Allows users to open a record detail view.
- Connected requirements: FR-04, FR-05, FR-06, FR-08, FR-13, FR-16.

### 4. Detail View
- Shows full details of one selected review.
- Includes full comment, rating, category, posted date, status, useful tips, and related reviews.
- Includes clear back navigation to the record list.
- Connected requirements: FR-07, FR-08, FR-13, FR-16.

### 5. Dashboard / Summary View
- Shows simple summary cards: total reviews, pending reviews, top-rated dorm, top-rated cafeteria.
- Includes category/status count preview.
- Helps the team demonstrate simple analytics even without a full backend.
- Connected requirements: FR-12, FR-13, FR-16.

### 6. Admin / Manager View
- Shows submitted reviews waiting for moderation.
- Admin can approve, flag, delete, or update review status.
- Status labels include Pending, Approved, Published, and Flagged.
- Connected requirements: FR-08, FR-09, FR-11, FR-13, FR-16.

## Realistic Sample Content Used

- Dorm review: "Green Residence is close to campus and quiet after 9 PM."
- Cafeteria review: "RIC Cafeteria has affordable lunch sets and vegetarian options."
- Survival guide topic: "First-week checklist: SIM card, student ID, food spots, transport, class location."

## Navigation Plan

Homepage → Browse Reviews → Review Detail → Back to Reviews  
Homepage → Submit Review → Confirmation → Records/List  
Homepage → Dashboard → Admin View  
Homepage → Survival Guide → Guide Detail

## Final Prototype Alignment

The final prototype should use the same screen names, navigation labels, and requirement mapping from this document. Any future change must be documented in GitHub issues and the weekly logbook before changing the prototype scope.
