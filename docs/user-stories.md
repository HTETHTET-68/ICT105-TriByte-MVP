
## User Stories
# Lab 04 - User Stories and Acceptance Criteria
 
## User Story Format
As a [user role], I want to [goal/action], so that [benefit/value].
 
## User Stories
 
| Story ID | Role | User Story | Related Requirement | Priority | Acceptance Criteria | Demo Evidence |
|---|---|---|---|---|---|---|
| US-01 | International Student | As an international student, I want to see a homepage that clearly explains what HallPass does, so that I immediately know I can find trustworthy dorm, cafeteria, and campus-life information here. | FR-01 | Must | Given I open HallPass, when the homepage loads, then I see the project name, a one-line problem statement, the target user, and a clear main action (e.g., "Browse Dorm Reviews"). | Homepage screenshot |
| US-02 | Exchange Student | As an exchange student, I want a clear path from opening HallPass to reading a review, so that I don't waste time figuring out how the site works. | FR-02 | Must | Given I am new to HallPass, when I follow the main navigation (Home → Browse/Search → Review Detail), then I reach a specific review or guide in 3 clicks or fewer with no dead ends. | User-flow diagram + click-through demo |
| US-03 | First-year Student | As a first-year student, I want to submit a review of my dorm or cafeteria experience, so that other new students get honest, real information instead of guesswork from strangers online. | FR-03 | Must | Given I am on a dorm or cafeteria page, when I complete the review form (rating + comment) and submit, then the review is saved and appears in the listing. | Submission screenshot |
| US-04 | International Student | As an international student, I want my submitted review to still be there when I come back later, so that my contribution isn't lost. | FR-04 | Must | Given I submit a review, when I refresh the page or return later, then the same review still appears in the stored records. | Database/records screenshot |
| US-05 | First-year Student | As a first-year student, I want to browse a list of existing dorm and cafeteria reviews, so that I can quickly see what other students are saying before I ask anyone. | FR-05 | Must | Given reviews exist in the system, when I open the Dorm Reviews or Cafeteria Reviews page, then I see a list showing at minimum a title, rating, and short excerpt for each entry. | Review list screenshot |
| US-06 | First-year Student | As a first-year student, I want to search or filter reviews by dorm/cafeteria name or category, so that I stop wasting time scrolling through scattered, irrelevant information. | FR-06 | Must | Given I am on the review list page, when I enter a search term or apply a filter, then only matching results are displayed. | Search/filter demo |
| US-07 | First-year Student | As a first-year student, I want to open a review to see full details, so that I don't end up making a bad dorm or food decision based on a short summary alone. | FR-07 | Must | Given I click on a review card, when the detail page opens, then I see the full review text, a rating breakdown, and the date posted. | Detail view screenshot |
| US-08 | Exchange Student | As an exchange student, I want to see whether a review is from a verified student, so that I can trust it wasn't written by someone with no real experience. | FR-08 | Should | Given a review has been submitted, when it is displayed on the platform, then it shows a status label such as "Verified Student" or "Pending Review." | Status label screenshot |
| US-09 | Admin/Moderator | As a platform admin, I want to review, approve, or remove submitted content, so that outdated or fake reviews don't mislead new students. | FR-09 | Must | Given a new review is submitted, when an admin opens the moderation panel, then they can approve, flag, or delete it before it stays visible. | Admin panel screenshot |
| US-10 | International Student | As an international student, I want the review form to stop me from submitting incomplete entries, so that the platform doesn't fill up with low-quality or broken data. | FR-10 | Must | Given I try to submit a review missing a required field (e.g., no rating), when I click submit, then I see an error message and the review is not saved. | Validation demo |
| US-11 | Exchange Student | As an exchange student, I want confirmation after I submit a review, so that I know it actually went through. | FR-11 | Must | Given I submit a complete, valid review, when submission finishes, then I see a message such as "Review submitted successfully." | Confirmation message screenshot |
| US-12 | International Student | As an international student, I want a simple summary of top-rated dorms and cafeterias, so that I can get a quick read on the best options without reading every review. | FR-12 | Should | Given reviews exist, when I open the dashboard/summary view, then I see items such as top-rated dorm, top-rated cafeteria, and total number of reviews. | Dashboard screenshot |
| US-13 | Exchange Student | As an exchange student, I want every page on HallPass to look and work the same way, so that I'm not confused switching between dorm, cafeteria, and guide sections. | FR-13 | Must | Given I navigate between at least three different pages, when I compare layout, navigation, and button style, then they are visually and functionally consistent. | Full walkthrough recording/screenshots |
| US-14 | International Student | As an international student, I want to use HallPass comfortably on my phone, so that I can check information on the go, which is when I most often search. | FR-14 | Should | Given I open HallPass on a mobile-width screen, when I browse the main pages, then content resizes correctly with no horizontal scrolling or broken layout. | Mobile screenshot |
| US-15 | International Student | As an international student, I want my personal details kept private when I post a review, so that I feel safe giving honest feedback without exposing my identity. | FR-15 | Must | Given I submit a review, when it is published, then only a display name/initial is shown publicly, with no full profile or contact details exposed. | Privacy handling screenshot/explanation |
| US-16 | Project Team | As the TriByte team, we want every prototype screen to trace back to a Lab 04 requirement and user story, so that we can justify why each feature exists during evaluation. | FR-16 | Must | Given the final prototype is reviewed, when each major screen is checked, then it references a specific Req ID and Story ID in the documentation. | Traceability table in README/docs |
| US-17 | First-year Student | As a first-year student, I want a "Survival Guide" section I can read through, so that I have one clear starting point instead of not knowing where to begin. | FR-05, FR-07 | Must | Given I open the guide from the homepage, when the page loads, then I see a structured list of topics (e.g., move-in, dining, orientation) that I can click into for detail. | Survival Guide page screenshot (highest-requested feature: R003, R007, R014, R019) |

## Acceptance Criteria Checklist
A good acceptance criterion should be:
- testable;
- observable in the final prototype;
- connected to a requirement;
- connected to user evidence;
- not too vague.

## Rejected / Future User Stories

| Story ID | Reason for Postponing | Future Condition |
|---|---|---|
| US-18 | Real-time messaging requires additional backend infrastructure, moderation features, and higher maintenance costs. It is not essential for validating the platform's core value of helping students discover and review accommodations and food. | Add after the core review and community system is stable |
| US-19 | An AI recommendation engine depends on a large amount of high-quality user-generated reviews and interaction data. During the MVP stage, there is insufficient data to provide accurate and meaningful recommendations. | Add after a meaningful volume of student reviews has been collected |
| US-20 | Integrating room booking and reservation involves partnerships with dormitory providers, payment processing, and transaction management, which significantly increases project complexity beyond the MVP objectives. | Add in a future expansion phase once the platform has an established user base |
