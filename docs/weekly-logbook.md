
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

## Lecturer / TA Notes

*To be completed during the laboratory session after feedback from the lecturer or teaching assistant.*
