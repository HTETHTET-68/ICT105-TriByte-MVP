
# Weekly Venture Logbook

## Lab 1: Lab Setup and IT Venture Repository

### What We Completed
1. Set up the GitHub repository with the required folder structure including docs, prototype, data, finance, diagrams, screenshots, and pitch folders.
2. Created and filled in all required documents including README.md, team-profile.md, idea-log.md, and problem-notes.md.
3. Identified three possible IT venture ideas and documented each one using the problem, target users, current alternative, proposed solution, technology, and suitability format.

### What We Learned
1. How to set up and manage a GitHub repository including creating folders, writing commit messages, and organizing project files.
2. How to think about a problem from a user perspective and turn it into a possible IT solution.

### Problems or Difficulties
1. It was our first time using GitHub so setting up the repository structure and making commits took some time to figure out.
2. Choosing three distinct and realistic ideas was challenging as we wanted each idea to be genuinely useful for students.

### Evidence of Work
- GitHub repository link: https://github.com/HTETHTET-68/ICT105-TeamTriByte-MVP
- Files created:
  - `README.md`
  - `docs/team-profile.md`
  - `docs/idea-log.md`
  - `docs/problem-notes.md`
  - `docs/weekly-logbook.md`

### Decision Made This Week
No final decision was made yet. The team logged three initial venture ideas, HallPass, CampusMarket, and StudyMatch, each with a defined problem area, target users, current alternatives, and a possible IT solution. These ideas were documented for further evaluation rather than committed to at this stage.

### Plan for Next Week
In Lab 2, the team will expand the idea pool, score all opportunities using the NUF (New, Useful, Feasible) framework, and select the strongest idea to move forward with as our semester project.

## Lab 02: IT Opportunity Scanning

### What We Completed

1. Reviewed six potential IT venture opportunities and analyzed their target users, problems, and current alternatives.
2. Created a NUF (New, Useful, Feasible) scoring matrix to evaluate and compare all opportunities.
3. Selected HallPass as the semester project and documented the opportunity in the repository.

### Selected Opportunity

**HallPass – Student Reviews & Campus Survival Guide**

### Why We Selected It

HallPass received the highest NUF score among the opportunities reviewed.

* **New:** Provides student-generated reviews and survival guides that are not commonly available through official university channels.
* **Useful:** Helps international and first-year students make informed decisions about housing, food, and campus life.
* **Feasible:** Can be prototyped using HTML, CSS, JavaScript, and sample data without requiring IoT devices or advanced cybersecurity implementation.

The project addresses a real student problem while remaining achievable within the semester timeline.

### What We Rejected

**CampusMarket – Student Marketplace**

This idea was rejected because it would require more complex features such as transaction management, user verification, and trust mechanisms. Compared to HallPass, it was less feasible to develop as a semester MVP and would be more difficult to validate during the early stages of the project.

### What We Learned

1. A good startup idea must solve a real problem experienced by a specific target user.
2. NUF scoring helps teams make objective decisions when comparing multiple opportunities.
3. Feasibility is as important as usefulness when selecting a semester-long project.

### Evidence of Work

* Opportunity scan file: `/docs/opportunity-scan.md`
* NUF scoring file: `/data/opportunity-scoring.xlsx`
* Selected opportunity file: `/docs/selected-opportunity.md`
* GitHub issue screenshot:
 <img width="1265" height="714" alt="Screenshot 2026-06-17 at 1 59 26 PM" src="https://github.com/user-attachments/assets/01bee27d-04b2-40a0-bf75-ced526f8fd40" /> 
  Commit link: (https://github.com/HTETHTET-68/ICT105-TriByte-MVP/commits/main/)

### Plan for Lab 03

The team will conduct customer problem discovery by interviewing and surveying international students, first-year students, and exchange students.

We will:

* Prepare customer discovery questions.
* Identify target respondents.
* Conduct interviews and surveys.
* Collect evidence about current challenges related to dormitories, cafeterias, and campus life.
* Validate whether students would use a platform such as HallPass.

The key question we want to answer is:

> Do international and first-year students experience enough difficulty finding reliable information about dormitories, cafeterias, and campus life to justify using a dedicated platform like HallPass?
# Weekly Venture Logbook

## Lab 03: Customer Problem Discovery

### What We Completed
1. Designed a 10-question customer discovery survey and distributed it to international, exchange, and first-year students via Google Forms.
2. Collected 20 survey responses and recorded them in a structured raw response file covering workarounds, time spent, difficulty rating, main pain, and willingness to use HallPass.
3. Built an assumption-evidence table comparing 8 team assumptions against real survey data and determined which to keep, revise, or reject.

### What We Learned About the Problem
1. The problem is real and confirmed — international, exchange, and first-year students consistently rated difficulty finding campus information as 4 or 5 out of 5, and 13 out of 20 spent more than 30 minutes searching.
2. Students trust peer experiences more than official university websites, which means a student-written review platform is more valuable than a university information page.
3. The first-week guide is equally as important as dorm and cafeteria reviews — we originally treated it as a secondary feature but the evidence shows it should be a core feature.

### What Evidence We Collected
- Number of respondents: 20 survey responses
- Evidence file: `data/raw-responses.xlsx`
- Key repeated pattern: Students rely on friends, LINE group chats, and social media because there is no single trusted place for campus information — leading to scattered searches, wasted time, and stress

### What We Changed Based on Evidence
- Elevated the first-week guide to a core feature alongside dorm and cafeteria reviews, not a secondary one
- Updated the target user group to include exchange students explicitly, not just international and first-year students
- Revised the problem statement to reflect that consequences include both stress and wasted time, not stress alone
- Updated the updated problem statement in README.md to reflect all changes from Lab 03 findings

### Problems or Difficulties
1. Some survey responses were from second or third-year students who had already adapted to campus life, which made their answers less useful for validating our core problem.
2. The survey did not ask whether students would write reviews or only read them, which left a gap in understanding how content would be contributed to HallPass.

### Evidence of Work
- GitHub repository link: https://github.com/HTETHTET-68/ICT105-TeamTriByte-MVP
- Customer questions file: `docs/customer-questions.md`
- Raw responses file: `data/raw-responses.xlsx`
- Assumption-evidence table: `docs/assumption-evidence-table.md`
- Commit link: (https://github.com/HTETHTET-68/ICT105-TriByte-MVP/commits/main/) 

### Plan for Lab 04
In Lab 04, the team will use the validated evidence from Lab 03 to define a clear customer segment and build a user persona representing our primary target user. We will identify the persona's goals, frustrations, and behaviors based on the survey patterns. We will then write user stories in the format "As a [user], I want to [action] so that [benefit]" to describe what HallPass must do from the user's perspective. These outputs will guide the feature prioritization and prototype planning in the following labs.                                    


# Lab 04 – User Persona, Requirements, and User Stories

## **Group Information**

- **Course:** ICT105 Fundamental Technology Entrepreneurship
- **Lab:** Lab 04 – User Persona, Requirements, and User Stories
- **Group Name:** TriByte-MVP
- **Repository Link:** `https://github.com/HTETHTET-68/ICT105-TriByte-MVP`
- **Date:** June 24, 2026



## **1. Work Completed Today**

| **Member Name** | **Contribution** | **GitHub Evidence (Commit/Issue/PR Link)** |
|---|---|---|
| **Yousel Zangmo** | Created the user persona, wrote the user stories, updated the weekly logbook, and updated the README. | `https://github.com/HTETHTET-68/ICT105-TriByte-MVP/commits/main/?author=youselz68-oss` |
| **Htet Htet Myint Zaw** | Worked on system requirements and MVP feature list. | `https://github.com/HTETHTET-68/ICT105-TriByte-MVP/commits/main/?author=HTETHTET-68` |
| **Khaing Zin Thet** | Developed user flow and use case diagrams based on the system requirements. | `https://github.com/HTETHTET-68/ICT105-TriByte-MVP/commits/main/?author=khaingzinthet-6921` |



## **2. Main Decisions**

- **Primary target user:** First-year, international, and exchange students who are navigating dorm, cafeteria, and campus-life decisions for the first time.

- **Main persona:** **"May"** — a first-year university student in her first 1–3 months on campus, currently relying on friends, social media, group chats, and the university website (all scattered/unreliable) to find dorm and food information.

- **Most important problem:** Students spend excessive time (often 30–60+ minutes per search) hunting for trustworthy, up-to-date campus information because it is scattered across multiple informal sources and not written by real students.

- **Must-have requirements:**
  - Landing page explaining HallPass's purpose (FR-01)
  - Clear navigation path from homepage → search → reviews → submit (FR-02)
  - Review submission with ratings/comments (FR-03)
  - Persistent storage of reviews (FR-04)
  - Browsable review listings (FR-05)
  - Search/filter by keyword or category (FR-06)
  - Full review detail pages (FR-07)

- **Features included in MVP:**
  - Search Dormitories (F01)
  - Browse Cafeteria Reviews (F02)
  - View Detailed Reviews (F03)
  - Submit Reviews (F04)
  - Search & Filter Reviews (F05)

  **Should Have**
  - Campus Survival Guide (F06)
  - Admin Review Moderation (F07)
  - 1–5 Star Rating System (F08)

- **Features postponed:**
  - Favorite/Save Reviews (F09)
  - Interactive Campus Map (F10)
  - AI Recommendation System (F11)
  - Real-time Chat (F12)



## **3. Requirement Changes / Clarifications**

- Admin-facing requirements were formalized this week:
  - Review status labels (Pending / Approved / Published — FR-08)
  - Admin moderation capability (FR-09)

- Privacy was clarified as a requirement (FR-15):
  - HallPass will collect only essential information.
  - Reviews will be displayed using a display name or initials instead of the user's full identity.



## **4. Problems Encountered**

- **Technical problem:** Organizing and linking the user stories, system requirements, and diagrams so they remained consistent throughout the documentation.
- **Team coordination problem:** Coordinating document updates across team members and ensuring everyone's contributions aligned before merging.
- **Evidence/requirement problem:** Some user needs overlapped, requiring revisions to the user persona, requirements, and user stories before the final versions were agreed upon.




## **5. Next Actions Before Lab 05**

| **Task** | **Owner** | **Deadline** | **GitHub Issue** |
|---|---|---|---|
| Finish MVP feature list and review system requirements | **Htet Htet Myint Zaw** | 07/07/2026 | https://github.com/HTETHTET-68/ICT105-TriByte-MVP/issues |
| Finish user stories and user persona | **Yousel Zangmo** | 07/07/2026 | https://github.com/HTETHTET-68/ICT105-TriByte-MVP/issues|
| Finish use case diagram and flowchart | **Khaing Zin Thet** | 07/07/2026 | https://github.com/HTETHTET-68/ICT105-TriByte-MVP/issues |
| Finish weekly logbook and README | **Yousel Zangmo** | 07/07/2026 | https://github.com/HTETHTET-68/ICT105-TriByte-MVP/issues |



# Lab 05 – Product Concept and UI/UX Wireframe

## Group Information

- **Course:** ICT105 Fundamental Technology Entrepreneurship
- **Lab:** Lab 05 – Product Concept and UI/UX Wireframe
- **Group Name:** TriByte-MVP
- **Project:** HallPass – Student Reviews & Campus Survival Guide
- **Repository Link:** `https://github.com/HTETHTET-68/ICT105-TriByte-MVP`
- **Date:** July 8, 2026

## 1. Work Completed Today

| Member Name | Contribution | GitHub Evidence |
|---|---|---|
| Htet Htet Myint Zaw | Updated product concept, feature-requirement mapping, README Lab 05 section, and weekly logbook. | Commit / issue evidence to be added after upload. |
| Yousel Zangmo | Prepared UI/UX wireframe direction, screen content, and usability checklist review. | Commit / issue evidence to be added after upload. |
| Khaing Zin Thet | Prepared user flow diagram and clickable HTML/CSS wireframe draft structure. | Commit / issue evidence to be added after upload. |

## 2. Main Lab 05 Decisions

- HallPass will continue as a student review and campus survival guide platform for first-year, international, and exchange students.
- The Lab 05 wireframes will be used as the visual baseline for the final prototype.
- The required screens are homepage, input/submission form, record list, detail view, dashboard/summary, and admin/manager view.
- The prototype will focus on student review browsing, review submission, search/filter, review details, admin moderation, and simple dashboard summaries.
- Out-of-scope features such as AI recommendations, real-time chat, mobile app development, and campus maps remain excluded from the current semester MVP.

## 3. Files Added or Updated

| File / Folder | Purpose |
|---|---|
| `docs/product-concept.md` | Defines target users, problem, solution, value proposition, MVP scope, and out-of-scope items. |
| `docs/feature-requirement-mapping.md` | Maps every screen to requirement IDs, user stories, MVP features, and final prototype modules. |
| `docs/wireframe-specification.md` | Describes each required wireframe screen and expected content. |
| `docs/wireframe-usability-checklist.md` | Checks usability, consistency, requirement coverage, and final prototype alignment. |
| `diagrams/user-flow.mmd` | Mermaid source for the user flow. |
| `diagrams/user-flow.png` | Exported user flow image. |
| `wireframes/` | Contains all six required wireframe screenshots. |
| `prototype/wireframe-html/` | Clickable HTML/CSS wireframe draft for Lab 05 navigation. |
| `README.md` | Updated with Lab 05 summary and output links. |

## 4. Requirement Coverage

- FR-01 and FR-02 are covered by the homepage and user flow.
- FR-03, FR-10, FR-11, and FR-15 are covered by the review submission form.
- FR-04, FR-05, FR-06, and FR-08 are covered by the review list.
- FR-07 is covered by the detail view.
- FR-09 is covered by the admin/moderator view.
- FR-12 is covered by the dashboard/summary view.
- FR-13, FR-14, and FR-16 are considered across all screens through consistent UI, responsive layout planning, and traceability documentation.

## 5. Problems Encountered

- The team needed to make sure the wireframes were not just attractive screens but also traceable to the Lab 04 requirements and user stories.
- Some features overlapped across screens, so the mapping file was used to clarify which screen demonstrates each requirement.
- The clickable draft is not a full backend system yet, so data storage is currently simulated using sample content.

## 6. Next Actions Before Lab 06

| Task | Owner | Deadline | Notes |
|---|---|---|---|
| Turn clickable wireframe into more complete HTML/CSS/JavaScript prototype | Khaing Zin Thet | Before Lab 06 | Add working search/filter and better page transitions. |
| Add simple local storage or JSON sample data for submitted reviews | Htet Htet Myint Zaw | Before Lab 06 | Supports FR-04 record management. |
| Review mobile responsiveness and capture screenshots | Yousel Zangmo | Before Lab 06 | Supports FR-14. |
| Create GitHub issues for unfinished prototype improvements | All members | Before Lab 06 | Evidence for teamwork and project continuity. |

# Weekly Logbook - Lab 06

## Group Name
TriByte-MVP

## Project Title
HallPass – Student Reviews & Campus Survival Guide

## Date
July 8, 2026

## Members Present

| Member Name | Contribution Today | GitHub Evidence / Commit / File Updated |
|---|---|---|
| Htet Htet Myint Zaw | Developed and refined the clickable HTML prototype, synchronized all documentation with the implemented prototype, updated the Product Concept, System Requirements, MVP Feature List, Feature-Requirement Mapping, Feature-Value Mapping, Wireframe Specification, and Weekly Logbook. | `prototype/`, `docs/product-concept.md`, `docs/system-requirements.md`, `docs/mvp-feature-list.md`, `docs/feature-requirement-mapping.md`, `docs/feature-value-mapping.md`, `docs/wireframe-specification.md`, `docs/weekly-logbook.md` |
| Yousel Zangmo | Reviewed the user persona, user stories, documentation consistency, and verified prototype navigation and screen alignment. | `docs/user-persona.md`, `docs/user-stories.md`, documentation review |
| Khaing Zin Thet | Improved prototype navigation, UI consistency, HTML page structure, and verified page connections across the clickable prototype. | `prototype/index.html`, `login.html`, `signup.html`, `guide.html`, `dorms.html`, `cafeteria.html`, `review-details.html`, `write-review.html`, `dashboard.html` |

---

## Decisions Made Today

### 1. Business Model Decision
The team confirmed that HallPass will remain a student-driven campus survival guide focused on helping first-year, international, and exchange students access trustworthy dormitory reviews, cafeteria reviews, and campus survival information. Advanced services such as AI recommendations, booking, and payment systems remain outside the MVP scope.

### 2. Technical Architecture Decision
The final prototype will be implemented as a front-end web application using HTML, CSS, and JavaScript. The project will use a static prototype structure with sample data and a consistent navigation flow across all pages.

### 3. Data Structure Decision
The prototype data structure was finalized to include the following core entities:

- User
- Dormitory Review
- Cafeteria Review
- Campus Survival Guide
- Dashboard Summary

These entities are sufficient to support the current MVP without requiring a production database.

### 4. Diagram Decision
The team finalized the navigation flow and confirmed that every implemented prototype page corresponds directly to the documented user stories, system requirements, and MVP features. Documentation diagrams and mappings were updated to reflect the actual prototype instead of the previous template.

---

## Problems or Risks Found

- Several documentation files still contained outdated template page names and prototype paths that required synchronization.
- Maintaining consistency between requirements, user stories, feature mappings, and prototype pages required multiple rounds of review.
- Since the current prototype is front-end only, all review data and dashboard information remain simulated rather than connected to a real database.
- Time management was important because both prototype refinement and documentation updates had to be completed together.

---

## Next Actions Before Lab 07

- Conduct final testing of all prototype navigation and page links.
- Verify responsive layouts on different screen sizes.
- Review and polish the visual design for consistency across all pages.
- Capture final prototype screenshots for documentation.
- Review the GitHub repository to ensure all files are complete, synchronized, and ready for submission.
- Fix any remaining UI or documentation inconsistencies identified during testing.

---

# Weekly Logbook - Lab 07

## Group Name

TriByte-MVP

## Project Title

HallPass – Student Reviews & Campus Survival Guide

## Date

July 13, 2026

---

## Members Present

| Member Name | Contribution Today | GitHub Evidence / Commit / File Updated |
|---|---|---|
| Htet Htet Myint Zaw | Prepared the Experiment Script, selected representative test users, and reviewed experiment materials. | `docs/experiment-script.md`,  `docs/success-metrics.md`,  |
| Yousel Zangmo | Prepared the MVP Experiment Plan, Critical Assumptions, Success Metrics.  | `docs/mvp-experiment-plan.md`, `docs/critical-assumptions.md`, |
| Khaing Zin Thet | designed the Feedback Form, updated the README, and revised the Weekly Logbook. | `README.md`, `docs/weekly-logbook.md`, `docs/feedback-form.md`|

---

## Decisions Made Today

### 1. MVP Experiment Type

The team selected a combination of **Simple Web Prototype**, **Clickable Prototype**, and **Form-Based Simulation** to evaluate HallPass. The prototype allows users to browse dormitory and cafeteria reviews, search information, view review details, register or log in, submit reviews, and explore the Campus Survival Guide.

### 2. Experiment Objective

The objective of the MVP experiment is to determine whether first-year, international, and exchange students can successfully complete the main HallPass tasks without assistance while validating that the prototype solves the campus information problems identified in previous labs.

### 3. Critical Assumptions

The team identified and ranked assumptions related to:

- User problems
- Value proposition
- Usability
- Technical feasibility
- Business logic

Each assumption was linked to system requirements, user stories, and planned testing activities.

### 4. Success Metrics

The team defined measurable success criteria including:

- Homepage understanding rate
- Dormitory review browsing success
- Search and filter success
- Review detail understanding
- Review submission completion
- Overall usability rating
- Feature usefulness rating

These metrics will determine whether the prototype is ready for further implementation.

### 5. Experiment Preparation

Five representative testers were selected:

- First-year Undergraduate Student
- International Student
- Exchange Student
- Senior Undergraduate Student
- Administrator (Content Moderator)

The team prepared a structured experiment script and neutral feedback form to collect both quantitative ratings and qualitative comments.

---

## Problems or Risks Found

- Authentication and review storage are currently simulated using Local Storage instead of a production database.
- Review moderation is demonstrated through the prototype but does not include real backend approval functionality.
- Additional usability testing is required to validate navigation, search functionality, and review submission before implementation.
- Different user backgrounds may influence feedback, requiring careful interpretation of experiment results.

---

## Files Added or Updated

| File | Purpose |
|---|---|
| `docs/mvp-experiment-plan.md` | Documents the MVP experiment scope, objectives, and testing approach. |
| `docs/critical-assumptions.md` | Identifies project assumptions, associated risks, and validation methods. |
| `docs/experiment-script.md` | Provides the usability testing procedure for participants. |
| `docs/success-metrics.md` | Defines measurable indicators and decision rules for evaluating the experiment. |
| `docs/feedback-form.md` | Contains structured feedback questions for experiment participants. |
| `docs/weekly-logbook.md` | Updated with Lab 07 activities. |
| `README.md` | Updated with the Lab 07 summary and experiment direction. |

---

## Next Actions Before Lab 08

- Conduct usability testing with the five selected participants.
- Record observations, task completion rates, completion times, and user feedback.
- Compare experiment results against the predefined success metrics.
- Prioritize interface improvements based on tester feedback.
- Revise the prototype and documentation before beginning the next development phase.

---

# Weekly Logbook - Lab 08

## Group Name

TriByte-MVP

## Project Title

HallPass – Student Reviews & Campus Survival Guide

## Date

July 16, 2026

---

## Members Present

| Member Name | Contribution Today | GitHub Evidence / Commit / File Updated |
|---|---|---|
| Htet Htet Myint Zaw | Created the customer validation dataset, prepared the validation-results Excel workbook and CSV file, and developed the Power BI validation dashboard to visualize customer validation metrics and analytics. | `data/validation-results.xlsx`, `data/validation-results.csv`, Power BI Validation Dashboard |
| Yousel Zangmo | Prepared the customer validation summary, analyzed the validation results, documented the analytics insights, and updated the project README with the Lab 08 summary. | `docs/customer-validation-summary.md`, `docs/analytics-insights.md`, `README.md` |
| Khaing Zin Thet | Updated the weekly logbook, documented the MVP decision based on customer validation evidence, and prepared the validation dashboard screenshots for project documentation. | `docs/weekly-logbook.md`, `docs/mvp-decision.md`, `screenshots/validation-dashboard.png` |

---

## Decisions Made Today

### 1. Customer Validation

The team conducted customer validation using the HallPass MVP prototype with representative users. Validation focused on whether users could successfully browse dormitory and cafeteria reviews, access the Campus Survival Guide, log in, and submit reviews. User feedback and task performance were collected as evidence for evaluating the prototype.

### 2. Validation Analytics

The validation data was organized into Excel and CSV datasets and analyzed using a Power BI dashboard. Key metrics included task success rate, average ease-of-use score, average usefulness score, average interest level, and the most common confusion points. These analytics helped the team identify the strengths and weaknesses of the MVP.

### 3. MVP Decision

Based on the customer validation results, the team decided to **continue with minor revisions**. The prototype achieved the predefined success metrics and demonstrated that HallPass effectively addresses student needs. However, usability improvements are required for the login and signup workflow, navigation, search functionality, and review presentation.

### 4. Prototype Improvements

The validation results identified the following improvements for the next prototype iteration:

- Simplify the login and signup workflow.
- Improve navigation labels and menu visibility.
- Enhance the search and filter interface.
- Improve the visibility of ratings and review summaries.
- Expand dormitory, cafeteria, and campus guide content.

---

## Problems or Risks Found

- Login and signup navigation remained the most common confusion point during validation.
- Some users had difficulty locating search and filter controls.
- The current prototype stores data using Local Storage rather than a backend database.
- Additional review content and campus information will improve the usefulness of the system.

---

## Files Added or Updated

| File | Purpose |
|---|---|
| `data/validation-results.xlsx` | Stores customer validation records and calculated analytics. |
| `data/validation-results.csv` | CSV version of the validation dataset. |
| `docs/customer-validation-summary.md` | Summarizes validation participants, testing activities, and key findings. |
| `docs/analytics-insights.md` | Interprets validation metrics and usability evidence. |
| `docs/mvp-decision.md` | Documents the evidence-based MVP decision and improvement plan. |
| `screenshots/validation-dashboard.png` | Screenshot of the Power BI validation dashboard. |
| `docs/weekly-logbook.md` | Updated with Lab 08 activities and member contributions. |
| `README.md` | Updated with the Lab 08 project summary and progress. |

---

## Next Actions Before Lab 09

- Implement the usability improvements identified during customer validation.
- Improve the authentication workflow and navigation.
- Enhance search, filtering, and review presentation.
- Expand review categories and campus guidance content.
- Continue prototype development while maintaining alignment with `system-requirements.md`.

---

# Weekly Logbook - Lab 09

## Group Name

TriByte-MVP

## Project Title

HallPass – Student Reviews & Campus Survival Guide

## Date

July 19, 2026

---

## Members Present

| Member Name | Contribution Today | GitHub Evidence / Commit / File Updated |
|---|---|---|
| Htet Htet Myint Zaw | Conducted the security review, prepared the risk register, documented the data handling policy, and created the data inventory and risk register datasets. | `docs/security-risk-check.md`, `docs/risk-register.md`, `docs/data-handling-policy.md`, `data/data-inventory.csv`, `data/risk-register.csv` |
| Yousel Zangmo | Completed the legal and ethical review, documented privacy and data protection practices, prepared the user consent statement, and contributed to the security risk review. | `docs/legal-ethical-checklist.md`, `docs/privacy-and-data-protection.md`, `docs/user-consent-statement.md`, `docs/security-risk-check.md` |
| Khaing Zin Thet | Completed the IP and third-party asset review, prepared the third-party asset register, created the privacy and security review diagram, captured supporting screenshots, and updated the weekly logbook. | `docs/ip-and-third-party-assets.md`, `data/third-party-assets-register.csv`, `diagrams/privacy-security-review.png`, `screenshots/privacy-security-review.png`, `docs/weekly-logbook.md` |

---

## Decisions Made Today

### 1. Data Inventory and Privacy Review

The team reviewed all data collected by the HallPass prototype and identified which fields were necessary for the MVP. Personal information such as student name, student ID, and email address was limited to authentication purposes, while unnecessary sensitive data was excluded from the prototype.

### 2. Legal, Ethical, and Consent Review

The project was reviewed to ensure that it does not make misleading claims, unfairly exclude users, or collect unnecessary personal information. A privacy and data protection document, legal and ethical checklist, and user consent statement were prepared to support responsible system development.

### 3. IP and Third-Party Asset Review

All third-party resources used in the project, including Google Fonts, Unsplash images, GitHub, Power BI, browser Local Storage, and ChatGPT, were documented together with their sources, licenses, and usage. The team also created a Privacy and Security Review workflow diagram to summarize the responsible design review process.

### 4. Security Risk Assessment

The team reviewed authentication, form validation, Local Storage usage, review submission, and administrator access. Security risks were documented together with mitigation strategies in the security risk register. The current MVP uses sample data and Local Storage only, reducing the risk of exposing real user information during testing.

---

## Problems or Risks Found

- Authentication currently relies on Local Storage instead of a secure backend database.
- User passwords are not encrypted because the prototype is frontend-only.
- Administrator authentication is simulated and requires backend implementation in future versions.
- Review content moderation is manually simulated and should be strengthened in future development.
- Additional security measures will be required before deploying the system in a production environment.

---

## Files Added or Updated

| File | Purpose |
|---|---|
| `docs/legal-ethical-checklist.md` | Documents the legal and ethical review of the HallPass prototype. |
| `docs/privacy-and-data-protection.md` | Explains how user data is collected, stored, and protected. |
| `docs/user-consent-statement.md` | Provides a sample user consent statement for data collection. |
| `docs/ip-and-third-party-assets.md` | Records all external assets, licenses, and intellectual property information. |
| `docs/security-risk-check.md` | Reviews privacy and security risks within the prototype. |
| `docs/risk-register.md` | Documents identified project risks and mitigation strategies. |
| `docs/data-handling-policy.md` | Defines how project data should be managed and protected. |
| `data/data-inventory.csv` | Lists all data fields collected or displayed by the prototype. |
| `data/risk-register.csv` | CSV version of the project risk register. |
| `data/third-party-assets-register.csv` | Lists third-party assets, licenses, and usage information. |
| `diagrams/privacy-security-review.png` | Workflow diagram illustrating the privacy and security review process. |
| `screenshots/privacy-security-review.png` | Screenshot evidence of the privacy and security review diagram. |
| `docs/weekly-logbook.md` | Updated with Lab 09 activities and member contributions. |
| `README.md` | Updated with the Lab 09 summary and project progress. |

---

## Next Actions Before Lab 10

- Review all responsible design recommendations before continuing prototype implementation.
- Improve authentication and administrator access using a backend database in future versions.
- Continue monitoring privacy, security, and legal compliance throughout development.
- Resolve GitHub issues created from the security and risk review.
- Ensure future prototype updates remain aligned with `system-requirements.md` and responsible design principles.

---


# Weekly Logbook – Lab 10

## Lab Topic

**MVP Implementation Sprint 1**

## What We Built Today

During Lab 10, our team implemented and updated the HallPass MVP Prototype  using HTML, CSS, JavaScript, and browser localStorage.

The main prototype pages and features completed during the sprint include:

* Homepage and shared navigation
* Student signup and login pages
* Dormitory review list
* Cafeteria review list
* Keyword search and minimum-rating filters
* Review detail page
* Review submission form
* Required-field validation
* Privacy notice and consent confirmation
* Campus survival guide
* Student dashboard
* Review submission status tracking
* Removal of pending submissions
* Administrator dashboard
* Review approval and rejection actions
* Reported-content examples
* User-management examples
* Administrator audit log
* Toast and action-feedback messages
* Responsive styling for desktop, tablet, and mobile screens
* Browser localStorage for simulated data persistence

The project documentation was also updated to match Prototype 15, including the system requirements, implementation plan, feature implementation status, weekly logbook, prototype link, and README.

## Requirement IDs Addressed

* **FR-01 to FR-03:** Homepage, shared navigation, signup, and login
* **FR-04 to FR-07:** Dormitory and cafeteria lists, search and rating filters, and review details
* **FR-08 to FR-10:** Authenticated review submission, campus guide, and form validation
* **FR-11 to FR-14:** Student dashboard, administrator dashboard, moderation, and submission status tracking
* **FR-15 to FR-18:** Privacy consent, review ownership, removal of pending submissions, and action feedback
* **FR-19 to FR-22:** Report examples, user-management examples, administrator audit log, and responsive interface

## Contribution by Members

| Member                             | Contribution                                                                                                                                                                                                                                                               | Evidence                                                                                                                                                                                      |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Htet Htet Myint Zaw – Member 1** | Developed the HallPass frontend and core screens, including the homepage, review submission form, review lists, review details, page navigation, and responsive layout structure.                                                                                          | GitHub Issue #55, core HTML pages in `prototype/`, frontend commits, and interface screenshots                                                                                                |
| **Khaing Zin Thet – Member 2**     | Implemented JavaScript functionality, sample data, form validation, search and rating filters, review details, moderation actions, submission statuses, localStorage persistence, and screenshot evidence.                                                                 | GitHub Issue #56, files in `prototype/js/`, functionality commits, and files in `screenshots/`                                                                                                |
| **Yousel Zangmo – Member 3**       | Updated Sprint 1 documentation and repository structure, created and maintained the main stylesheet, updated the prototype link, implementation plan, feature implementation status, weekly logbook, and README, and checked that the required files matched Prototype 15. | GitHub Issue #57, `prototype/css/style.css`, `prototype/prototype-link.md`, `docs/implementation-plan.md`, `docs/feature-implementation-status.md`, `docs/weekly-logbook.md`, and `README.md` |

## Screenshots Added

The following screenshots will be included as evidence of the implemented Prototype 15 features:

* `/screenshots/homepage.png`
* `/screenshots/login-signup.png`
* `/screenshots/dormitory-list.png`
* `/screenshots/cafeteria-list.png`
* `/screenshots/search-filter.png`
* `/screenshots/review-detail.png`
* `/screenshots/input-form.png`
* `/screenshots/privacy-consent.png`
* `/screenshots/student-dashboard.png`
* `/screenshots/status-tracking.png`
* `/screenshots/admin-view.png`
* `/screenshots/moderation-queue.png`
* `/screenshots/report-management.png`
* `/screenshots/user-management.png`
* `/screenshots/audit-log.png`
* `/screenshots/responsive-mobile-view.png`


## Problems Faced

* The new Prototype 15 structure and filenames were different from the earlier prototype documentation.
* Some requirement IDs in the previous implementation plan did not match the updated system requirements.
* Several features, such as reports and user management, were visible in the administrator dashboard but were only partially simulated.
* Browser localStorage was used instead of a real backend, so data was limited to the same browser and device.
* Authentication and role checking were simulated through frontend JavaScript and were not secure.
* Some prototype pages used different CSS and JavaScript files, which made consistency and maintenance more difficult.
* The team needed to ensure that navigation links worked correctly across all Prototype 15 pages.
* Responsive layouts required additional testing to prevent overlapping content on smaller screens.
* Existing screenshots could become outdated after changes to the prototype.
* Team contributions needed to be clearly connected to GitHub issues, commits, files, and screenshots.

To address these problems, the team reviewed the actual Prototype 15 files, corrected the documentation, used shared styling and JavaScript where possible, tested the main workflows, and clearly marked simulated and partially completed features.

## Plan for Next Lab

In the next lab, the team plans to:

* Conduct usability and functional testing of Prototype 15
* Test all navigation links and user workflows
* Test the prototype on desktop, tablet, and mobile screen sizes
* Check form validation and privacy-consent behaviour
* Verify review submission and status tracking
* Test administrator approval and rejection actions
* Review reports, user-management examples, and audit-log records
* Fix any interface, JavaScript, or responsive-design problems
* Capture updated screenshots of all required features
* Update GitHub issues with contribution evidence
* Confirm that all files are placed in the correct repository folders
* Complete final quality assurance before submission
* Prepare the project for the next MVP testing and validation stage


# Weekly Logbook - Lab 11

## Lab Topic

MVP Implementation Sprint 2 and Startup Metrics

## Group Case

**HallPass - Student Reviews & Campus Survival Guide**

HallPass is a student-focused platform for first-year, international, and exchange students at Rangsit University. It provides dormitory reviews, cafeteria reviews, student-written experiences, and practical campus survival information.

## Work Completed Today

* Reviewed the HallPass Sprint 1 prototype and Lab 11 requirements.
* Updated the prototype HTML pages and improved the overall page structure.
* Improved the homepage, Dormitory reviews, Cafeteria reviews, review details, Survival Guide, login, signup, review submission, Student Dashboard, and Admin Dashboard.
* Added keyword search, minimum-rating filters, and sorting controls.
* Improved the Survival Guide with topic search and detailed guide pages.
* Improved review submission with existing or new place selection, optional image handling, consent, and status tracking.
* Improved the Student Dashboard with submission counts, status filtering, profile settings, and removal-request controls.
* Improved the Admin Dashboard with review moderation, removal requests, reports, user management, and audit records.
* Prepared the genuine HallPass prototype-records CSV using the records from `js/data.js`.
* Imported the HallPass data into Power BI and assigned the correct data types.
* Created the HallPass Power BI dashboard and saved the completed PBIX file.
* Added KPI cards, charts, tables, and slicers to the Power BI dashboard.
* Documented HallPass startup and product metrics.
* Updated the prototype-testing notes, feature implementation status, weekly logbook, and README.

## Member Contributions

| Member Name             | Contribution                                                                                                                                                                                                         | File/Feature Updated                                                                                                                         | GitHub Evidence                                  |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| **Htet Htet Myint Zaw** | Developed and updated the HallPass prototype HTML pages, improved the visual interface, added and organized image assets, prepared the Power BI data, created the Power BI dashboard, and completed the PBIX report. | `prototype/*.html`, `prototype/images/`, `data/*.csv`, `Lab11_HallPass_PowerBI/*.pbix`, Power BI dashboard screenshot                        | Add Sprint 2 commit, issue, or pull-request link |
| **Khaing Zin Thet**     | Improved JavaScript functionality for search, filtering, sorting, authentication, review submission, Student Dashboard, moderation, removal requests, reports, user management, profiles, and audit actions.         | `prototype/js/`                                                                                                                              | Add Sprint 2 commit, issue, or pull-request link |
| **Yousel Zangmo**       | Completed and updated the Lab 11 documentation,UI and UX design, requirement traceability, startup metrics, prototype-testing notes, weekly logbook, and repository README.                                                           | `docs/feature-implementation-status.md`, `docs/startup-metrics.md`, `docs/prototype-testing-notes.md`, `docs/weekly-logbook.md`, `README.md`,  `prototype/css/stye.css/`| Add Sprint 2 commit, issue, or pull-request link |

## Requirements Addressed

* **FR-01:** Improved the HallPass homepage and introduction.
* **FR-02:** Improved navigation between the main prototype pages.
* **FR-03:** Maintained Student and Admin login and signup workflows.
* **FR-04:** Improved Dormitory review browsing.
* **FR-05:** Improved Cafeteria review browsing.
* **FR-06:** Added and improved keyword search, minimum-rating filters, and sorting.
* **FR-07:** Improved the place and review-detail presentation.
* **FR-08:** Improved authenticated Student review submission.
* **FR-09:** Expanded the Survival Guide with search and guide-detail pages.
* **FR-10:** Improved required-field, image, and consent validation.
* **FR-11:** Improved the Student Dashboard, submission counts, profile settings, and profile-picture controls.
* **FR-12:** Improved the Admin Dashboard and its navigation panels.
* **FR-13:** Improved review moderation, including review details, approval, rejection, and image removal.
* **FR-14:** Improved Pending, Approved, and Rejected status tracking.
* **FR-15:** Maintained privacy notices and consent controls.
* **FR-16:** Maintained review ownership information.
* **FR-17:** Improved Pending review removal and Approved review removal requests.
* **FR-18:** Improved confirmation and feedback messages.
* **FR-19:** Improved incorrect-information reporting and Admin investigation.
* **FR-20:** Improved user search, behaviour reporting, suspension, restoration, and deletion controls.
* **FR-21:** Maintained Admin moderation and audit records.
* **FR-22:** Improved responsive styling across the prototype.

## Metrics Added

* Total prototype records
* Total place profiles
* Total student reviews
* Dormitory review count
* Cafeteria review count
* Average review rating
* Approved review count
* Pending moderation count
* Rejected review count
* Removal-request count
* Review category distribution
* Review records by place
* Review records by status
* Student and Admin feature evidence
* Power BI startup-metrics dashboard

## Problems Found

* The prototype uses browser `localStorage` instead of a shared database.
* Information saved in one browser is not automatically available on another device or browser.
* Student and Admin authentication is simulated using frontend JavaScript.
* Administrator authorization is not secure enough for production deployment.
* The prototype does not contain a genuine analytics activity log.
* Some prototype records do not include an author or submission date.
* Power BI uses a static data snapshot and does not automatically update when browser data changes.
* Search functionality mainly focuses on place titles and could be expanded to include review text, tags, and locations.
* Optional review and profile images can consume browser-storage space.
* Additional cross-browser and responsive testing is required.
* Final GitHub contribution links still need to be added for each member.

## Next Action Before Lab 12

* Complete a final Student and Admin workflow test.
* Confirm that search, filtering, sorting, submission, moderation, reporting, and user-management functions work correctly.
* Test the prototype on desktop, tablet, and mobile screen sizes.
* Test the prototype in multiple browsers where available.
* Check keyboard navigation and form accessibility.
* Verify all Power BI KPI values and visualisations.
* Save and upload the final PBIX file.
* Capture and upload a clear screenshot of the completed Power BI dashboard.
* Capture updated screenshots of the final HallPass prototype pages.
* Replace the contribution placeholders with real GitHub commit, issue, or pull-request links.
* Confirm that all required files are stored in the correct GitHub folders.
* Complete final quality assurance before starting Lab 12.

# Weekly Logbook - Lab 12

## Lab Topic

Landing Page and Digital Go-to-Market

## Group Case

**HallPass — Student Reviews & Campus Survival Guide**

## Work Completed Today

- Reviewed the validated problem, target users, value proposition, final MVP
  requirements, and Lab 11 implementation status.
- Wrote the HallPass landing-page message structure and requirement mapping.
- Built a responsive HTML/CSS/JavaScript landing page with a working CTA linked
  to the existing HallPass prototype.
- Added direct feature links for dormitory reviews, cafeteria reviews, the
  campus survival guide, review submission, and privacy consent.
- Added a clear classroom-prototype and responsible-data statement.
- Prepared channel-specific marketing messages and a five-channel outreach plan.
- Defined ten acquisition indicators covering awareness, action, prototype use,
  feedback, conversion, and completion quality.
- Added a CSV template for channel-level metric tracking.
- Captured landing-page and CTA screenshots.
- Updated the repository README with Lab 12 progress, links, evidence, and
  requirement alignment.

## Member Contributions

| Member | Lab 12 Responsibility | File / Evidence |
|---|---|---|
| Htet Htet Myint Zaw | Product value review, target-user definition, landing-page copy, and README/requirement alignment | `docs/landing-page-content.md`, `README.md` |
| Khaing Zin Thet | Landing-page HTML/JavaScript, prototype links, CTA interaction, and metric-tracking template | `landing-page/index.html`, `landing-page/script.js`, `data/acquisition-metrics-template.csv` |
| Yousel Zangmo | Responsive visual design, go-to-market plan, marketing messages, acquisition-metric definitions, screenshots, and logbook | `landing-page/style.css`, `docs/go-to-market-plan.md`, `docs/marketing-message.md`, `docs/acquisition-metrics.md`, `screenshots/landing-page.png`, `screenshots/call-to-action.png`, `docs/weekly-logbook.md` |



## Main Decisions

- Use the headline **“Your shortcut to campus life.”**
- Lead with the needs of first-year, international, and exchange students.
- Use **Try the HallPass Demo** as the primary CTA.
- Promote only features represented in the current prototype.
- Label validation results with their context and avoid presenting them as
  current market traction.
- Identify the page and prototype as classroom demonstrations using
  fictional/sample data and browser-local storage.

## Metrics Plan

The group will measure landing-page views, channel visits, primary CTA clicks,
CTA click rate, demo attempts, feature exploration, feedback responses,
usefulness, feedback conversion, and assigned-task completion. Channel results
will be recorded in `data/acquisition-metrics-template.csv`.

## Problems Encountered

- Browser `localStorage` counters do not provide reliable multi-user analytics.
- The prototype is frontend-only, so messages must not imply production
  security, live accounts, or cloud data.
- Contribution links cannot be finalized until each member commits their work.

## Next Action Before Lab 13

- Upload the completed Lab 12 files to the shared repository.
- Have each member commit their assigned contribution.
- Replace contribution placeholders with actual commit/issue/PR links.
- Publish or share the landing-page link.
- Run the first early-user channel test and replace zero values in the metrics
  CSV with observed counts.
- Review feedback and revise the landing-page message or prototype workflow.

# Weekly Logbook - Lab 13

## Lab Topic

Sales Scenario, Demo Script, and User Testing

## Group Case

**HallPass – Student Reviews & Campus Survival Guide**

## Work Completed Today

- Reviewed the HallPass prototype and confirmed that all major features remained aligned with the system requirements, user stories, and MVP feature list.
- Prepared a realistic sales scenario explaining how first-year, international, and exchange students would use HallPass.
- Created a screen-by-screen demonstration script covering the complete student and administrator workflows.
- Conducted final user testing using representative users and recorded task completion, usability issues, completion times, and user feedback.
- Analysed the user-testing results to identify usability problems and prioritize improvements before the final MVP release.
- Prepared the final improvement list with Critical, Important, Useful, and Future priorities.
- Created a CSV version of the improvement list for tracking implementation progress.
- Updated the repository documentation, README, weekly logbook, and final demonstration links.
- Prepared the final demo documentation for GitHub Pages deployment.

---

## Member Contributions

| Member | Lab 13 Responsibility | File / Evidence |
|---|---|---|
| **Htet Htet Myint Zaw** | Prepared the user testing plan, documented the user testing results, organised the testing dataset, created the user testing workflow diagram, and captured testing evidence screenshots. | `docs/user-testing-plan.md`, `docs/user-testing-results.md`, `data/user-testing-results.csv`, `diagrams/user-testing-flow.mmd`, `screenshots/user-testing-evidence.png` |
| **Khaing Zin Thet** | Analysed user testing results, prepared the final improvement list, created the improvement tracking CSV, updated the weekly logbook, updated the README, and prepared the final demo link documentation. | `docs/final-improvement-list.md`, `data/final-improvement-list.csv`, `docs/weekly-logbook.md`, `README.md`, `prototype/final-demo-link.md` |
| **Yousel Zangmo** | Prepared the sales scenario, created the demonstration script, designed the demo workflow diagram, captured the demo flow screenshots, and prepared the demo presentation outline. | `docs/sales-scenario.md`, `docs/demo-script.md`, `diagrams/demo-flow.mmd`, `screenshots/demo-flow.png`, `pitch/demo-outline.md` |

---

## Main Decisions

- The final HallPass demonstration will follow the complete user journey from the landing page to the student and administrator workflows.
- All demo steps will remain traceable to the documented system requirements and MVP features.
- User-testing findings will guide the final improvements before Lab 14.
- Critical usability issues identified during testing will be addressed before the final presentation.
- The HallPass prototype will continue to be presented as a frontend classroom prototype using HTML, CSS, JavaScript, and browser `localStorage`.

---

## User Testing Summary

- Total testing records analysed: **200**
- Overall task completion rate: **85.0%**
- Average completion time: **1.89 minutes**
- Average feedback score: **3.99 / 5**

### Main usability issues identified

- Homepage navigation could be clearer.
- Administrator dashboard navigation required improvement.
- Login and signup instructions were not sufficiently clear.
- Review submission required better guidance and confirmation messages.
- Rating displays and review details could be easier to understand.
- Search labels and category labels needed improvement.

---

## Final Improvement Priorities

### Critical
- Improve homepage navigation.
- Improve administrator dashboard navigation.
- Improve review submission workflow.
- Complete final end-to-end prototype testing.

### Important
- Improve login and signup guidance.
- Improve review detail presentation.
- Improve search and category labels.
- Improve dashboard statistic labels.

### Useful
- Improve Campus Survival Guide navigation and organization.

### Future
- Replace browser `localStorage` with a secure backend database and authentication system.

---

## Problems Encountered

- The prototype still relies on browser `localStorage`, so testing data cannot be shared across devices.
- Some usability issues were identified only after analysing the complete user-testing dataset.
- GitHub Pages deployment and live prototype links must be verified before the final presentation.
- Final GitHub commit links will be added after every member uploads their assigned work.

---

## Next Action Before Lab 14

- Complete all Critical and Important improvements.
- Re-test both student and administrator workflows.
- Capture updated screenshots for the final demonstration.
- Verify GitHub Pages deployment and live prototype links.
- Replace placeholder GitHub evidence with actual commit, issue, or pull request links.
- Perform one final quality assurance review before the venture pitch.


# Weekly Logbook — Lab 14

## Group Name

TriByte

## Project Title

HallPass — Student Reviews & Campus Survival Guide

## Date

31 July 2026

## Members Present

- Htet Htet Myint Zaw
- Khaing Zin Thet
- Yousel Zangmo

## What We Completed Today

- Reviewed the final HallPass frontend prototype and confirmed the connected student and administrator demonstration flow.
- Consolidated final evidence across the prototype, screenshots, requirements, traceability, testing, metrics, demo script, pitch outline, and repository documentation.
- Checked that the final prototype remains aligned with the project’s stated frontend-only classroom-MVP scope, using sample data and browser `localStorage`.
- Prepared the final submission materials and recorded each member’s GitHub issue evidence.

## Final Prototype Updates

- Confirmed final student functionality: browsing dormitory and cafeteria reviews, searching, filtering, sorting, viewing details, submitting reviews, saving places, comparison, helpful voting, recently viewed places, profile controls, and submission-status tracking.
- Confirmed final administrator functionality: review moderation, removal requests, reported-content handling, demonstration-user management, audit activity, and dashboard summaries.
- Confirmed privacy consent, form validation, responsive styling, keyboard-focus support, reduced-motion support, and optimized WebP image assets.
- Confirmed the final prototype flow and final screenshots are available as evidence for the demonstration.

## Final Documentation Updates

- Updated/checked `docs/feature-implementation-status.md`.
- Updated/checked `docs/requirement-traceability-matrix.md` and `data/final-requirement-traceability.csv`.
- Updated/checked `data/final-testing-results.csv`, `docs/final-prototype-report.md`, and `docs/final-reflection.md`.
- Updated/checked `docs/final-demo-script.md`, `pitch/final-pitch-outline.md`, `README.md`, `data/member-contribution.csv`, and `docs/final-submission-checklist.md`.
- Confirmed final prototype packaging, final demo flow, sample data, and final screenshots.

## GitHub Contributions Today

| Member | File/Issue/Commit Updated | Evidence Link |
|---|---|---|
| Htet Htet Myint Zaw | Final demo script, venture-pitch outline, README, member-contribution record, weekly logbook, final submission checklist, and repository cleanup. | [Issue #69](https://github.com/HTETHTET-68/ICT105-TriByte-MVP/issues/69) |
| Khaing Zin Thet | Feature implementation status, requirement traceability matrix, final traceability CSV, final testing results, final prototype report, and reflection. | [Issue #68](https://github.com/HTETHTET-68/ICT105-TriByte-MVP/issues/68) |
| Yousel Zangmo | Final prototype packaging, final prototype link, final sample data, final demo-flow diagram, screenshot index, and six required final UI screenshots. | [Issue #67](https://github.com/HTETHTET-68/ICT105-TriByte-MVP/issues/67) |

## Problems Found Before Submission

- The prototype uses browser `localStorage`, so data does not synchronize across browsers or devices.
- Authentication, authorization, and administrator controls are simulated and are not suitable for production use.
- The final prototype must be tested in the presentation browser before delivery, especially the student/admin workflow, links, responsive layout, and screenshot paths.
- The GitHub Pages URL and any external Google Maps links must be checked before presenting.

## Action Before Final Presentation

- Run one final student and administrator end-to-end walkthrough.
- Open and verify the prototype link, final demo flow, screenshots, README links, and pitch materials.
- Confirm all Lab 14 checklist items are marked after the final verification.
- Present HallPass as a classroom frontend prototype with fictional data, simulated authentication, and browser-local storage.

