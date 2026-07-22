# HallPass
IT startup MVP project for ICT105 Fundamental Technology Entrepreneurship.

## Project Venture Workspace

## Course Information
- Course Code: ICT105
- Course Name: Fundamental Technology Entrepreneurship
- Instructor: Dr. Herison Surbakti
- Project Type: 14-Labs Continuous IT Startup MVP Development

## Team Name
TriByte

## Team Members and Roles
| Name | Role | Responsibility |
|---|---|---|
| Htet Htet Myint Zaw | Product Lead, Documentation Lead | Define problem, target users, value proposition, and project direction |
| Khaing Zin Thet | Technical Lead | Manage repository, prototype development, and technical feasibility |
| Yousel Zangmo | UX/UI Lead, Validation Lead | Design wireframes and interface screens, manage user research and survey evidence |

## Initial Problem Area
New international students and first-year university students often struggle to find trustworthy information about dormitories, cafeterias, and campus life. Existing information is scattered across university websites, social media, and word-of-mouth sources, making it difficult for students to make informed decisions and adapt quickly.

## Target Users
- International students
- First-year university students
- Exchange students


## Selected IT Venture Direction
**HallPass – Student Reviews & Campus Survival Guide**

A web-based platform that helps students settle into campus life by providing:
- Student-written dormitory reviews and ratings
- Cafeteria reviews and food recommendations
- Campus survival guides
- A platform for students to share experiences and advice

**Key Features**
- Dorm Reviews
- Cafeteria Reviews
- Survival Guides
- Student Community Contributions
- Search and Rating System

## Technology Possibility
- Web application interface
- Dashboard
- Cloud-based system for user data and review storage

## Repository Structure
- `docs/`: Project profiles, idea logs, weekly logbooks, and problem notes.
- `prototype/`: Interface mockups, wireframes, and screen designs.
- `data/`: Survey results, interview notes, and user research findings.
- `finance/`: Budget estimates and cost planning documents.
- `diagrams/`: System flow diagrams and user journey maps.
- `screenshots/`: Visual records of the working prototype and progress.
- `pitch/`: Final presentation slides and pitch materials.

## Weekly Progress Log

| Lab | Main Activity | Output | Status |
|---|---|---|---|
| Lab 1 | Lab setup and idea log | Repository setup, team profile, initial three-idea logbook | Completed |
| Lab 2 | Opportunity scanning and NUF scoring | Six-idea opportunity discovery table, technology feasibility mapping, NUF scoring, selected project HallPass | Completed |
| Lab 3 | Customer discovery and problem validation | Target respondents defined, survey distributed, 20 responses collected, assumption vs evidence analysis completed | Completed |
| Lab 4 | User persona, system requirements, MVP feature prioritization, user stories, user flow, and use case diagrams | Completed user persona, functional requirements, MVP feature list (MoSCoW), user stories, user flow diagram, use case diagram| Completed |
| Lab 5 | Product concept and UI/UX wireframes | Product concept, feature-requirement mapping, six required wireframes, user flow diagram, usability checklist, and clickable HTML/CSS wireframe draft | Completed |
| Lab 6 | Business model development, feature-value mapping, technical architecture design, data structure definition, and system/data flow planning | Business Model Canvas, Feature-Value Mapping, Technical Architecture, Data Structure, System Architecture Diagram, Data Flow Diagram, sample dataset, README update, and weekly logbook | Completed |
| Lab 7 | MVP experiment planning, critical assumption analysis, test user definition, success metrics design, experiment script preparation, and GitHub documentation | MVP Experiment Plan, Critical Assumptions, Experiment Script, Success Metrics, Feedback Form, Sample Test Users, README update, GitHub Issues, and Weekly Logbook | Completed |
| Lab 8 |Customer validation, MVP experiment, analytics reporting, and product evaluation | Validation Results, Customer Validation Summary, Analytics Insights, Feedback Forms, MVP Decision, Validation Screenshots, README Update, and Weekly Logbook | Completed |
| Lab 9 | Responsible IT review covering privacy, ethics, intellectual property, data protection, and basic security | Legal and Ethical Checklist, Privacy and Data Protection Review, IP and Third-Party Assets Register, Security Risk Check, Risk Register, Updated System Requirements Note, README Update, and Weekly Logbook | Completed |
| Lab 10 | | | |
| Lab 11 | | | |
| Lab 12 | | | |
| Lab 13 | | | |
| Lab 14 | | | |

## Customer Problem Discovery Summary
In Lab 03, our team collected early problem evidence from target users. The purpose was to confirm whether our selected problem from Lab 02 is real and important. We distributed a survey via Google Forms and collected 20 responses from students at our university. Through this process, we validated that students face significant challenges in accessing reliable and centralized information about dormitories, cafeterias, and campus life. We also identified that users rely heavily on informal sources such as friends and social media, which leads to inconsistent and stressful decision-making.

## Target Respondents
We surveyed the following groups of users:
- First-year university students who are new to campus life and frequently need guidance for dorms, food, and basic services
- International and exchange students who experience additional challenges such as language barriers and unfamiliar systems
- Students who depend on social media, group chats, and friends as their main sources of information
- Students who have recently made decisions about dormitories or cafeterias and experienced either positive or negative outcomes

## Main Evidence Found
- 14 out of 20 respondents are first-year, international, or exchange students and all rated difficulty finding campus information as 4 or 5 out of 5
- 13 out of 20 spent more than 30 minutes searching for basic campus information when they first arrived
- 8 out of 20 identified scattered information as their biggest problem — the most common single answer
- Students currently work around the problem by asking friends, posting in LINE or WhatsApp groups, and searching on social media — none of which are reliable or written by real students
- All international and exchange students flagged language as a major barrier and selected multilingual content as the most useful feature
- 16 out of 20 respondents said they would use HallPass if it existed

## Updated Problem Statement
University students, especially first-year, international, and exchange students, struggle to make informed decisions about dormitories, cafeterias, and campus life because relevant information is scattered, outdated, and unreliable. As a result, students rely heavily on informal sources, which leads to confusion, wasted time, and poor living decisions during their early university experience.

## Decision for Next Step
In Lab 04, we will refine the problem definition and user needs based on validated evidence. We will prioritize key pain points, identify the most critical user segments, and begin shaping the MVP solution features for HallPass.
## Lab 04: User Persona, Requirements, and User Stories

### Primary Target User
The primary target user is a first-year university student who is looking for reliable information about campus dormitories, cafeterias, and student life. The platform helps students make informed decisions by providing trusted reviews and campus resources in one place.

### Persona Summary
- **Persona name:** May
- **User type:** First-year university student
- **Main goal:** Find trustworthy information about campus accommodation and food options before making decisions.
- **Main pain point:** Campus information is scattered across social media, friends, and unofficial sources, making it difficult to verify.
- **Current workaround:** Asking seniors, checking Facebook groups, and browsing multiple websites.

### Key Requirements

| Req ID | Requirement | Priority | Related Evidence |
| --- | --- | --- | --- |
| FR-01 | Display a homepage introducing HallPass and its purpose. | Must | User Story US-01 |
| FR-02 | Allow users to browse dormitory and cafeteria reviews. | Must | User Story US-02 |
| FR-03 | Allow users to submit ratings and reviews. | Must | User Story US-03 |
| FR-04 | Store and display submitted reviews. | Must | User Story US-04 |
| NFR-01 | The system should be responsive on desktop and mobile devices. | Must | System Requirements |

### MVP Feature Scope

| Feature | Priority | Included in Final Prototype? |
| --- | --- | --- |
| Search Dormitories | Must | Yes |
| Browse Cafeteria Reviews | Must | Yes |
| Submit Reviews | Must | Yes |
| View Ratings and Comments | Must | Yes |
| Search & Filter Reviews | Must | Yes |
| Campus Survival Guide | Should | Yes |
| Admin Review Moderation | Should | Yes |
| User Rating System | Should | Yes |
| Save Favourite Reviews | Could | No |
| Interactive Campus Map | Could | No |
| AI Recommendation System | Won't | No |
| Real-time Student Chat | Won't | No |

### Diagram Links
- User flow diagram: `diagram/hallpass_user_flow_diagram.jpeg`
- Use case diagram: `diagram/hallpass_use_case_diagram.jpeg`


### GitHub Contribution Evidence
All team members contributed to the repository through commits, pull requests, and collaborative development activities. 


## Lab 05: Product Concept and UI/UX Wireframe

Lab 05 converts the Lab 04 requirements, user stories, and MVP feature list into the first visual baseline for the final HallPass prototype.

### Lab 05 Outputs

| Required Output | Repository Location | Status |
|---|---|---|
| Product concept | `docs/product-concept.md` | Completed |
| Feature-requirement mapping | `docs/feature-requirement-mapping.md` | Completed |
| Wireframe specification | `docs/wireframe-specification.md` | Completed |
| Usability checklist | `docs/wireframe-usability-checklist.md` | Completed |
| User flow diagram | `diagrams/user-flow.mmd` and `diagrams/user-flow.png` | Completed |
| Homepage wireframe | `wireframes/homepage.png` | Completed |
| Input/submission form wireframe | `wireframes/input-form.png` | Completed |
| Records/list view wireframe | `wireframes/record-list.png` | Completed |
| Detail view wireframe | `wireframes/detail-view.png` | Completed |
| Dashboard/summary wireframe | `wireframes/dashboard.png` | Completed |
| Admin/manager view wireframe | `wireframes/admin-view.png` | Completed |
| Clickable wireframe draft | `prototype/wireframe-html/index.html` | Completed |

### Lab 05 Prototype Navigation

Homepage → Browse Reviews → Review Detail  
Homepage → Submit Review → Confirmation → Review List  
Homepage → Dashboard → Admin Moderation  
Homepage → Survival Guide → Guide Topics

### Lab 05 Traceability

The wireframes are not random screens. Each screen is connected to `docs/system-requirements.md`, `docs/user-stories.md`, and `docs/mvp-feature-list.md`. The feature-requirement mapping file explains which requirement ID, user story ID, MVP feature, wireframe, and prototype module belongs to each screen.

# Lab 06 Update - Business Model Canvas and Technical Architecture

## Lab 06 Summary
In Lab 06, our group connected the HallPass product concept, system requirements, user stories, MVP features, and wireframes into a clear business model and technical architecture. This lab explains how HallPass creates value for students and how the final prototype will be built and tested.

## Files Added or Updated

- [Business Model Canvas](docs/business-model-canvas.md)
- [Feature-Value Mapping](docs/feature-value-mapping.md)
- [Technical Architecture](docs/technical-architecture.md)
- [Data Structure](docs/data-structure.md)
- [System Architecture Diagram](diagram/system-architecture.mmd)
- [Data Flow Diagram](diagram/data-flow.mmd)
- [Weekly Logbook](docs/weekly-logbook.md)

## Technical Direction
The HallPass prototype will use a **frontend-only architecture with HTML, CSS, JavaScript, and sample JSON/localStorage simulation**.

This approach is suitable for the MVP because the prototype focuses on demonstrating user pathways, review browsing, search and filtering, review submission, dashboard summary, and admin moderation. Data storage will be simulated using sample records and/or browser localStorage instead of a full backend database.

## Final Prototype Connection
This Lab 06 work will guide the final prototype by clearly showing how each MVP feature connects to user value, system requirements, user stories, and prototype screens. The Business Model Canvas explains why HallPass is useful for first-year, international, and exchange students, while the technical architecture and data structure explain how reviews, guides, status updates, dashboard summaries, and admin moderation will work in the final prototype.

These files will help our group stay aligned when building the final version of HallPass and ensure the prototype shows interaction, data flow, user pathways, and visible system behavior.

| Lab 7 | MVP experiment design and validation planning | MVP Experiment Plan, Critical Assumptions, Experiment Script, Success Metrics, Feedback Form, README update, and Weekly Logbook | Completed |

# Lab 07 Update - MVP Experiment Design

## Lab 07 Summary

In Lab 07, our team prepared the MVP experiment to validate the HallPass prototype before full implementation. We identified critical assumptions, selected representative test users, defined measurable success metrics, designed the experiment procedure, and prepared feedback forms to collect usability evidence.

## Files Added or Updated

- [MVP Experiment Plan](docs/mvp-experiment-plan.md)
- [Critical Assumptions](docs/critical-assumptions.md)
- [Experiment Script](docs/experiment-script.md)
- [Success Metrics](docs/success-metrics.md)
- [Feedback Form](docs/feedback-form.md)
- [Weekly Logbook](docs/weekly-logbook.md)

## Experiment Focus

The MVP experiment evaluates whether students can successfully navigate HallPass, browse dormitory and cafeteria reviews, access the Campus Survival Guide, and submit reviews using the HTML, CSS, and JavaScript prototype before further development.


## Lab 08: Customer Validation and Analytics Sheet

### Validation Objective

The objective of this validation was to evaluate whether first-year, international, and exchange students could successfully use the HallPass prototype to find reliable dormitory reviews, cafeteria reviews, and campus guidance, as well as submit their own reviews without assistance. The experiment also measured usability, task completion, user satisfaction, and interest in using HallPass as a campus information platform.

---

### Prototype Version Tested

- **Version:** HallPass MVP v1.0
- **Link:** https://github.com/HTETHTET-68/ICT105-TriByte-MVP
- **Screenshots:** `/screenshots/validation-test-screens.png`

---

### Analytics Summary

| Metric | Result |
|---|---:|
| Total test users | 200 |
| Task success rate | 85% |
| Average feedback score | 3.99 / 5 |
| Average interest level | 75% / 5 |
| Main confusion point | Some users initially found the review submission process and category navigation slightly confusing. |

---

### MVP Decision

**Decision: Continue with Minor Revisions**

The validation results indicate that users successfully completed most tasks and found the prototype useful for discovering campus information. Feedback highlighted several opportunities for improvement, including simplifying navigation, improving the review submission workflow, enhancing search and filtering, and adding richer review content such as images. Since the core assumptions were validated, the team will continue development while implementing these usability improvements before the next iteration.

---

### Files Added

- `/data/validation-results.csv`
- `/docs/customer-validation-summary.md`
- `/docs/analytics-insights.md`
- `/docs/mvp-decision.md`
- '/data/Lab08_GroupName_Validation_Analytics.pbix'
-  `/screenshots/lab08-powerbi-dashboard.png`



## Lab 09 - Responsible IT Check

### Responsible Design Summary
Explain the main privacy, ethical, IP, and basic security risks identified.

### Files Added
- docs/legal-ethical-checklist.md
- docs/privacy-and-data-protection.md
- docs/ip-and-third-party-assets.md
- docs/security-risk-check.md
- docs/risk-register.md
- docs/updated-requirements-note.md
- docs/weekly-logbook.md

### Requirement Update
State whether system-requirements.md changed after Lab 09.

### Team Contributions
List what each member contributed to the GitHub repository.
## Lab 09 - Responsible IT Check

### Responsible Design Summary

The TriByte team reviewed the HallPass MVP to identify its main privacy, ethical, intellectual property, and basic security risks.

- **Privacy risks:** HallPass uses usernames, email addresses, passwords, user roles, ratings, and review content. Unnecessary personal or sensitive information should not be collected or publicly displayed. Users must be informed about data collection and warned not to include personal information in reviews.
- **Ethical risks:** User reviews may contain false, misleading, discriminatory, offensive, retaliatory, or harmful content. Reviews should be moderated before publication, and the interface should clearly state that reviews represent individual opinions rather than official university recommendations.
- **Intellectual property risks:** Images, fonts, icons, written content, datasets, and AI-assisted materials may belong to third parties. All project assets must be original, appropriately licensed, or properly attributed. Users must also submit only content they own or have permission to share.
- **Security risks:** The current frontend prototype uses simulated authentication and browser `localStorage`. The administrator dashboard can be reached without production-level role verification, and input validation and review ownership controls are limited. A real implementation would require secure authentication, password hashing, protected sessions, role-based authorization, server-side input validation, and secure data storage.

The overall decision is to **continue with mitigation for classroom prototyping**. HallPass is not ready for production deployment or the collection of real sensitive personal data.

### Files Added

- `docs/legal-ethical-checklist.md`
- `docs/privacy-and-data-protection.md`
- `docs/ip-and-third-party-assets.md`
- `docs/security-risk-check.md`
- `docs/risk-register.md`
- `docs/updated-requirements-note.md`
- `docs/weekly-logbook.md`

### Requirement Update

Yes, `docs/system-requirements.md` changed after the Lab 09 responsible IT review.

The following existing requirements were clarified:

- **FR-10:** Strengthened review-input validation.
- **FR-11:** Restricted the administrative dashboard to authorized administrators.
- **FR-14:** Expanded student privacy protection.
- **NFR-08:** Expanded privacy and data-protection requirements.
- **NFR-09:** Included reliable review and moderation-status handling.

New requirements were added to address:

- Review moderation
- Privacy notices and user consent
- Review ownership
- Inappropriate-content reporting
- Responsible content submission
- Review-status information
- Secure authentication and authorization
- Ethical content moderation
- Intellectual-property protection
- Data minimization and retention
- Transparency about student opinions
- Classroom prototype limitations

Every requirement change is documented in `docs/updated-requirements-note.md` with its reason, supporting evidence, GitHub issue or commit, and team-approval status.

### Team Contributions

| Team Member | Lab 09 Contribution | GitHub Evidence |
|---|---|---|
| **Htet Htet Myint Zaw** | Conducted the security review, prepared the risk register, documented the data-handling policy, and created the data inventory and risk-register datasets. | `docs/security-risk-check.md`, `docs/risk-register.md`, `docs/data-handling-policy.md`, `data/data-inventory.csv`, `data/risk-register.csv` |
| **Yousel Zangmo** | Completed the legal and ethical review, documented privacy and data-protection practices, prepared the user-consent statement, contributed to the security-risk review, and documented the updated system requirements. | `docs/legal-ethical-checklist.md`, `docs/privacy-and-data-protection.md`, `docs/user-consent-statement.md`, `docs/security-risk-check.md`, `docs/updated-requirements-note.md` |
| **Khaing Zin Thet** | Completed the IP and third-party asset review, prepared the asset register, created the privacy and security review diagram, captured supporting screenshots, and updated the weekly logbook. | `docs/ip-and-third-party-assets.md`, `data/third-party-assets-register.csv`, `diagrams/privacy-security-review.png`, `screenshots/privacy-security-review.png`, `docs/weekly-logbook.md` |

All team members reviewed the identified risks, proposed mitigation actions, and changes to the HallPass system requirements.
## Lab 10 - MVP Implementation Sprint 1

### Sprint Goal

Our goal in Lab 10 was to begin building the first working version of the HallPass prototype based on the approved system requirements, wireframes, technical architecture, user stories, and responsible-design checks.

During Sprint 1, the team focused on implementing the main student and administrator workflows, connecting the prototype pages, adding interactive JavaScript functionality, simulating data storage with browser localStorage, and updating the project documentation to match Prototype 15.

### Implementation Approach

* **Platform/tools:** HTML5, CSS3, JavaScript, Visual Studio Code, GitHub, and browser developer tools
* **Backend status:** Simulated backend
* **Data storage/simulation:** JavaScript sample data and browser localStorage
* **Prototype link or folder:** `prototype/`

The prototype uses separate HTML pages for the homepage, authentication, dormitory reviews, cafeteria reviews, review details, review submission, campus guide, student dashboard, and administrator dashboard.

CSS is used for the visual design and responsive layout, while JavaScript controls search, filtering, form validation, review submission, status tracking, moderation actions, toast messages, and localStorage persistence.

### Features Implemented in Sprint 1

| Feature                          | Requirement ID | Status                             | Evidence                                                                                     |
| -------------------------------- | -------------- | ---------------------------------- | -------------------------------------------------------------------------------------------- |
| Homepage                         | FR-01          | Completed                          | `prototype/index.html` and `/screenshots/homepage.png`                                       |
| Shared navigation                | FR-02          | Completed                          | Navigation links across the Prototype 15 HTML pages                                          |
| Signup and login                 | FR-03          | Completed                          | `prototype/signup.html`, `prototype/login.html`, and `/screenshots/login-signup.png`         |
| Dormitory record list            | FR-04          | Completed                          | `prototype/dorms.html` and `/screenshots/dormitory-list.png`                                 |
| Cafeteria record list            | FR-05          | Completed                          | `prototype/cafeteria.html` and `/screenshots/cafeteria-list.png`                             |
| Search and minimum-rating filter | FR-06          | Completed                          | JavaScript search/filter functions and `/screenshots/search-filter.png`                      |
| Detail view                      | FR-07          | Completed                          | `prototype/review-details.html` and `/screenshots/detail-view.png`                           |
| Input / review submission form   | FR-08, FR-10   | Completed                          | `prototype/write-review.html` and `/screenshots/input-form.png`                              |
| Campus survival guide            | FR-09          | Completed                          | `prototype/guide.html` and `/screenshots/campus-guide.png`                                   |
| Student dashboard                | FR-11          | Completed                          | `prototype/student-dashboard.html` and `/screenshots/student-dashboard.png`                  |
| Administrator dashboard          | FR-12          | Completed                          | `prototype/dashboard.html` and `/screenshots/admin-view.png`                                 |
| Review approval and rejection    | FR-13          | Completed as a frontend simulation | Moderation section in `prototype/dashboard.html` and `/screenshots/moderation-queue.png`     |
| Status tracking                  | FR-14          | Completed                          | Status records in `prototype/student-dashboard.html` and `/screenshots/status-tracking.png`  |
| Privacy notice and consent       | FR-15          | Completed                          | Signup and review-submission consent interfaces and `/screenshots/privacy-consent.png`       |
| Review ownership                 | FR-16          | Completed                          | Student-specific submission records in the student dashboard                                 |
| Remove pending submissions       | FR-17          | Completed                          | Pending-review removal action in `prototype/student-dashboard.html`                          |
| Toast and action feedback        | FR-18          | Completed                          | Shared JavaScript feedback messages                                                          |
| Reported-content examples        | FR-19          | Partially Completed                | Reports section in `prototype/dashboard.html` and `/screenshots/report-management.png`       |
| User-management examples         | FR-20          | Partially Completed                | User-management section in `prototype/dashboard.html` and `/screenshots/user-management.png` |
| Administrator audit log          | FR-21          | Completed                          | Audit-log section in `prototype/dashboard.html` and `/screenshots/audit-log.png`             |
| Responsive interface             | FR-22          | Completed                          | `prototype/css/style.css` and `/screenshots/responsive-mobile-view.png`                      |

### Screenshots

* **Homepage:** `/screenshots/homepage.png`
* **Input form:** `/screenshots/input-form.png`
* **Record list:** `/screenshots/record-list.png`
* **Detail view:** `/screenshots/detail-view.png`
* **Admin/status view:** `/screenshots/admin-view.png`

Additional supporting screenshots include:

* `/screenshots/login-signup.png`
* `/screenshots/dormitory-list.png`
* `/screenshots/cafeteria-list.png`
* `/screenshots/search-filter.png`
* `/screenshots/privacy-consent.png`
* `/screenshots/student-dashboard.png`
* `/screenshots/status-tracking.png`
* `/screenshots/moderation-queue.png`
* `/screenshots/report-management.png`
* `/screenshots/user-management.png`
* `/screenshots/audit-log.png`
* `/screenshots/responsive-mobile-view.png`

### Team Contribution

All group members contributed to the same GitHub repository and completed work through assigned GitHub issues, commits, prototype files, documentation, and screenshot evidence.

| Member                             | Contribution                                                                                                                                                                                           | Evidence                                                                                                                                                                                      |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Htet Htet Myint Zaw – Member 1** | Developed the HallPass frontend and core screens, including the homepage, review submission form, record lists, review detail page, navigation, and responsive page structure.                         | GitHub Issue #55, core HTML pages in `prototype/`, commits, and interface screenshots                                                                                                         |
| **Khaing Zin Thet – Member 2**     | Implemented JavaScript functionality, sample data, form validation, search and filtering, review details, moderation and status actions, localStorage persistence, and screenshot evidence.            | GitHub Issue #56, files in `prototype/js/`, commits, and files in `screenshots/`                                                                                                              |
| **Yousel Zangmo – Member 3**       | Completed Sprint 1 documentation, styling, and repository updates. Updated the prototype link, implementation plan, feature implementation status, weekly logbook, README, and maintained `style.css`. | GitHub Issue #57, `prototype/prototype-link.md`, `prototype/css/style.css`, `docs/implementation-plan.md`, `docs/feature-implementation-status.md`, `docs/weekly-logbook.md`, and `README.md` |
