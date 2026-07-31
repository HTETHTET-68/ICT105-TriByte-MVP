# Final Demo Link

## Prototype Link

- **Live Hosted HallPass Prototype:** [https://htethtet-68.github.io/ICT105-TriByte-MVP/prototype/index.html](https://htethtet-68.github.io/ICT105-TriByte-MVP/prototype/index.html)
- **GitHub Repository Source:** [https://github.com/HTETHTET-68/ICT105-TriByte-MVP/tree/main/prototype](https://github.com/HTETHTET-68/ICT105-TriByte-MVP/tree/main/prototype)

## Landing Page Link

- **Live HallPass Landing Page:** [https://htethtet-68.github.io/ICT105-TriByte-MVP/landing-page/index.html](https://htethtet-68.github.io/ICT105-TriByte-MVP/landing-page/index.html)
- **Landing Page Specification:** [`docs/landing-page-content.md`](../docs/landing-page-content.md)

> Verify both live links after GitHub Pages has been enabled. The exact path depends on the actual location and filename of each `index.html` file.

## Notes for Instructor and Evaluators

### 1. Zero Setup Required

HallPass runs directly in a standard web browser using HTML, CSS, and JavaScript. No local server or software installation is required after the repository is published through GitHub Pages.

### 2. Student Access and Main Workflow

Visitors can open the HallPass homepage and browse available campus information. The main student demonstration covers:

1. Open the HallPass homepage.
2. Browse dormitory reviews.
3. Browse cafeteria reviews.
4. Search, filter, and open review details.
5. Create an account or use the demonstration login.
6. Submit a dormitory or cafeteria review.
7. View review status in the student dashboard.
8. Open the Campus Survival Guide.

### 3. Administrator Access

The administrator demonstration covers:

1. Open the administrator dashboard.
2. Review dashboard statistics.
3. Open the moderation queue.
4. Approve or reject a demonstration review.
5. Review reports and removal requests.
6. View user-management and audit-log examples.

Use the fixed fictional demonstration accounts documented in `prototype/README.md`:

- **Student email:** `student@hallpass.com`
- **Student password:** `Student123!`
- **Administrator email:** `admin@hallpass.com`
- **Administrator password:** `Admin123!`

These credentials are for the frontend classroom prototype only and must not be reused for real accounts.

### 4. Pre-Populated Demonstration Data

The HallPass prototype includes fictional sample dormitory reviews, cafeteria reviews, users, moderation records, reports, and activity records. These records are used only to demonstrate search, filtering, review details, submission, moderation, status tracking, and dashboards.

### 5. Data Storage and Prototype Limitation

The current classroom prototype uses browser `localStorage` and client-side JavaScript. Data saved in one browser or device is not automatically shared with another device. Clearing browser data may reset saved demonstration records. The prototype does not represent production-level authentication or a live backend database.

### 6. Responsible Data Statement

All sample users, reviews, and related information should be fictional or created specifically for testing. Testers should not enter sensitive personal information into the prototype.

### 7. Responsive Design

The prototype should be tested on desktop and mobile widths before submission. The final verification should cover navigation, review lists, review details, forms, dashboards, and dialogs.
