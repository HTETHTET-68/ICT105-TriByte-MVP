# Final Venture Pitch Outline: HallPass — Student Reviews & Campus Survival Guide

**Course:** ICT105 Fundamental Technology Entrepreneurship  
**Instructor:** Dr. Herison Surbakti  
**Team Name:** TriByte  
**GitHub Repository:** [HTETHTET-68/ICT105-TriByte-MVP](https://github.com/HTETHTET-68/ICT105-TriByte-MVP)  
**Live Prototype URL:** [HallPass Final Prototype](https://htethtet-68.github.io/ICT105-TriByte-MVP/prototype/)

---

## Slide 1: Project Title and Team

- **Slide Title:** HallPass — Student Reviews & Campus Survival Guide
- **Subtitle:** Turning Scattered Campus Information into One Trusted Starting Point
- **One-Line Pitch:** HallPass helps first-year, international, and exchange students compare dormitories and cafeterias, learn campus essentials, and share moderated student experiences through one accessible platform.
- **Team Members & Responsibilities:**
  - **Htet Htet Myint Zaw** — *Product & Documentation Lead*: Defined the problem, target users, value proposition, project direction, documentation, and final pitch coordination.
  - **Khaing Zin Thet** — *Technical Lead*: Managed repository development, JavaScript functionality, data handling, authentication simulation, dashboards, and final prototype integration.
  - **Yousel Zangmo** — *UX/UI & Validation Lead*: Designed interface screens, contributed CSS and interaction design, managed customer discovery, validation evidence, privacy documentation, and marketing communication.
- **Visual / Layout Recommendation:** HallPass logo and final homepage screenshot with a simple three-member role strip at the bottom.

---

## Slide 2: Problem and Target Users

- **Slide Title:** New Students Face an Information Access Problem
- **Core Problem:**
  - Reliable information about dormitories, cafeterias, and daily campus life is scattered across university pages, social media, group chats, friends, and word of mouth.
  - Students must compare incomplete or outdated information across several sources before making basic decisions about where to live, eat, and find campus services.
  - International and exchange students face an additional language barrier that makes existing resources harder to understand.
- **Customer Discovery Evidence:**
  - **13 of 20 respondents** spent more than 30 minutes searching for basic campus information.
  - **8 of 20 respondents** identified scattered information as their biggest problem.
  - **16 of 20 respondents** said they would use HallPass if it existed.
  - All international and exchange respondents identified language as a major barrier and selected multilingual content as useful.
- **Target User Segments:**
  1. **Primary Users:** First-year, international, and exchange students who need trustworthy campus information quickly.
  2. **Content Contributors:** Senior students who can share experience-based dormitory, cafeteria, and campus advice.
  3. **Administrators:** Student or staff administrators who moderate submissions, investigate reports, and maintain content quality.
- **Visual / Layout Recommendation:** “Before HallPass” scattered-source graphic on the left and three user personas on the right.

---

## Slide 3: Evidence from Customer Discovery and Validation

- **Slide Title:** Evidence Shows the Problem and Solution Direction Are Valid
- **Customer Discovery (Lab 03):**
  - Collected **20 survey responses** from first-year, international, exchange, and other students.
  - The strongest repeated need was one reliable location for honest dormitory, cafeteria, and first-week information.
  - Discovery led the team to treat the **Campus Survival Guide as a core feature**, not a secondary feature.
- **Customer Validation & Usability Testing:**
  - Conducted task-based usability testing using **200 validation records**.
  - **Overall Task Completion Rate:** **85.0%**, exceeding the 80% success target.
  - **Average Ease of Use:** **3.99 / 5**.
  - **Average Usefulness:** **4.30 / 5**.
  - **Average Interest:** **4.34 / 5**.
- **Task-Level Findings:**
  - Strongest flow: **Campus Survival Guide — 92.9% completion**.
  - Dormitory browsing: **89.7% completion**.
  - Cafeteria browsing: **89.7% completion**.
  - Main improvement areas: homepage clarity, login/signup guidance, review-form guidance, search labels, rating visibility, and administrator-dashboard navigation.
- **Decision:** Continue the same venture direction with targeted usability improvements rather than a major redesign.
- **Visual / Layout Recommendation:** Four metric cards with a small task-completion chart and two short user-feedback callouts.

---

## Slide 4: Solution and Value Proposition

- **Slide Title:** HallPass — One Guided Platform for Campus Decisions
- **Product Overview:** HallPass is a browser-based student information platform that combines campus reviews, practical guides, contribution tools, status tracking, and moderated content.
- **Core Value Propositions:**
  1. **Centralized Campus Information:** Dormitory reviews, cafeteria reviews, and Campus Survival Guides are available in one structured platform.
  2. **Faster, More Confident Decisions:** Search, category filters, ratings, sorting, details, Saved Places, comparison, and Google Maps links help students evaluate options.
  3. **Student-Driven Knowledge:** Senior and current students can contribute experience-based ratings and reviews.
  4. **Trust and Transparency:** Review statuses, verification labels, helpful votes, misinformation reports, moderation decisions, and audit records support responsible content.
  5. **Accessible Entry Point:** Responsive web access allows students to use the prototype without installing an application.
- **Value Proposition Statement:**
  > “HallPass reduces uncertainty by bringing student experiences, reviewed place information, and practical campus guidance into one accessible platform.”
- **Visual / Layout Recommendation:** Desktop and mobile mockups highlighting reviews, guide topics, comparison, and moderation status.

---

## Slide 5: Final Prototype Demonstration Flow

- **Slide Title:** Live Prototype Demonstration — Student to Administrator Loop
- **Step-by-Step Demo Journey:**
  1. **Homepage (`index.html`):** Introduce HallPass and open the Dormitories, Cafeterias, or Campus Survival Guide pathways.
  2. **Browse and Compare (`dorms.html` / `cafeteria.html`):** Search, filter, sort, open details, view ratings, save places, and compare selected options.
  3. **Campus Guidance (`guide.html` / `guide-details.html`):** Explore practical first-week and campus-survival topics.
  4. **Account and Review Submission (`signup.html`, `login.html`, `write-review.html`):** Create a simulated account and submit a validated fictional review with privacy consent.
  5. **Student Status Tracking (`student-dashboard.html`):** View Pending, Approved, Rejected, and Removal Requested submissions, notifications, Saved Places, recently viewed items, and profile settings.
  6. **Administrator Moderation (`dashboard.html`):** Approve or reject reviews, process removal requests, investigate reports, manage demonstration users, and inspect the audit log.
- **Requirements Demonstrated:** Complete student and administrator pathway covering homepage, navigation, authentication, storage simulation, browsing, filtering, detail views, submissions, status tracking, validation, dashboards, reports, moderation, and traceability.
- **Visual / Layout Recommendation:** Horizontal six-step flow using final screenshots from homepage to audit log.

---

## Slide 6: Business Model Canvas Summary

- **Slide Title:** Business Model and Sustainability
- **BMC Key Components:**
  - **Customer Segments:** First-year students, international and exchange students, senior contributors, and campus administrators.
  - **Value Proposition:** A trusted, student-focused source for campus reviews, comparison, practical guidance, and moderated contributions.
  - **Channels:** Mobile-friendly website, GitHub Pages, university pages, orientation events, QR posters, class LINE groups, student clubs, and social media.
  - **Customer Relationships:** Self-service browsing, student accounts, review contributions, saved content, notifications, status tracking, reporting, and administrator moderation.
  - **Key Activities:** Platform maintenance, content verification, moderation, campus-guide updates, user testing, and outreach.
  - **Key Resources:** TriByte development team, HTML/CSS/JavaScript prototype, review and guide content, GitHub repository, testing evidence, and university relationships.
  - **Key Partners:** Student Affairs, university IT, International College, orientation teams, student council, dormitory managers, and cafeteria operators.
  - **Sustainability:** A university-supported service that improves onboarding and preserves shared student knowledge. Future options may include clearly labelled campus-service partnerships without influencing student review scores.
- **Visual / Layout Recommendation:** Simplified nine-block Business Model Canvas with Customer Segments, Value Proposition, Channels, and Key Partners emphasized.

---

## Slide 7: Product Metrics and User Testing Findings

- **Slide Title:** Product Evidence and Measurement Plan
- **Validated Product Metrics:**
  - **200 task attempts** across student and administrator user types.
  - **170 successful attempts**, producing **85.0% overall completion**.
  - **1.89 minutes** average task-completion time.
  - **3.99 / 5** average feedback score.
  - **4.30 / 5** usefulness and **4.34 / 5** interest from the validation summary.
- **Prototype / Dashboard Metrics:**
  - Student review submissions and status counts.
  - Pending moderation workload and approval rate.
  - Dormitory versus cafeteria activity.
  - Average rating, helpful votes, reports, users, and audit activity.
  - Mobile activity and task-processing time in the Lab 11 analytics demonstration.
- **Go-to-Market Measurement Targets:**
  - **50 landing-page visitors**.
  - **40% CTA click rate**.
  - **30 prototype demo views**.
  - **10 feedback responses**.
  - **25% landing-page-to-demo conversion rate**.
- **Important Note:** The acquisition figures above are experiment targets, not achieved market traction. The strongest completed evidence is the customer-discovery and usability-testing data.
- **Visual / Layout Recommendation:** Left side validation funnel; right side dashboard KPI cards; bottom strip showing acquisition targets.

---

## Slide 8: Technical Architecture and Responsible Data Handling

- **Slide Title:** Lightweight Architecture with Transparent Prototype Limits
- **System Architecture & Tech Stack:**
  - **Frontend:** HTML5, CSS3, and modular Vanilla JavaScript.
  - **Hosting:** GitHub Pages for a no-install browser demonstration.
  - **Prototype Data Layer:** Fictional seed records and browser `localStorage` for accounts, reviews, saved places, reports, moderation actions, status changes, and audit events.
  - **Interface Design:** Responsive layouts, keyboard focus, reduced-motion support, optimized WebP images, and mobile-friendly controls.
- **Responsible IT & Privacy Design:**
  - Privacy notice and required consent during account and review workflows.
  - Data-minimization prompts and fictional classroom demonstration records.
  - Client-side validation, duplicate-report prevention, moderation controls, report handling, and audit evidence.
  - Clear separation between student-facing and administrator-facing workflows.
- **Transparent Current Limitations:**
  - No shared backend or production database.
  - No password hashing, secure server-side authorization, cross-device synchronization, or production-grade image protection.
  - Client-side roles and `localStorage` are suitable for classroom demonstration only.
- **Production Path:** Secure API, shared database, hashed credentials, server-side role authorization, sanitized uploads, backups, rate limiting, privacy review, monitoring, and university-managed accounts.
- **Visual / Layout Recommendation:** Browser → HallPass frontend → localStorage/seed data architecture diagram, with a separate “Production Upgrade” lane.

---

## Slide 9: Final Improvements and Future Development

- **Slide Title:** Evidence-Driven Improvements and Roadmap
- **Improvements Driven by Testing:**
  - Clearer homepage navigation and shorter feature-card wording.
  - More visible search, filter, sort, category, and rating controls.
  - Stronger login/signup labels, password guidance, and account confirmation.
  - Clearer required fields, category/rating instructions, privacy consent, and submission confirmation.
  - Improved review-detail links, guide headings, dashboard statistics, and routes between public and administrator pages.
  - Added Saved Places, comparison, recently viewed places, notifications, removal requests, report investigation, user management, and audit evidence.
  - Final responsive and end-to-end student/administrator walkthrough.
- **Future Development Priorities:**
  1. Secure shared backend, database, authenticated sessions, and server-side authorization.
  2. University-managed or verified accounts and regularly updated official campus information.
  3. Thai/English and broader multilingual support.
  4. Structured moderation reasons, recoverable deletion, and transparent appeals.
  5. Larger live pilots across devices, browsers, and real student groups.
  6. Production accessibility, privacy, security, performance, backup, and monitoring controls.
- **Visual / Layout Recommendation:** Two-column roadmap: “Completed in MVP” versus “Next Production Stage.”

---

## Slide 10: Closing and Q&A

- **Slide Title:** HallPass — Student Dormitory Reviews and Campus Survival Guide
- **Core Summary Message:**
  > “HallPass turns scattered campus knowledge into one clearer starting point for every new student.”
- **Closing Highlights:**
  - **Validated Problem:** Students spend time searching across scattered and inconsistent campus-information sources.
  - **Validated Direction:** 16 of 20 discovery respondents said they would use HallPass.
  - **Proven Prototype Usability:** 85.0% overall task completion across 200 validation records.
  - **Strong Perceived Value:** 4.30/5 usefulness and 4.34/5 interest.
  - **Complete Demonstration:** One closed loop from discovery and comparison to contribution, status tracking, reporting, and administrator moderation.
- **Links:**
  - **Live Prototype:** [https://htethtet-68.github.io/ICT105-TriByte-MVP/prototype/](https://htethtet-68.github.io/ICT105-TriByte-MVP/prototype/)
  - **GitHub Repository:** [https://github.com/HTETHTET-68/ICT105-TriByte-MVP](https://github.com/HTETHTET-68/ICT105-TriByte-MVP)
- **Q&A Invitation:**
  > “Thank you, Dr. Herison Surbakti and evaluators, for your time and guidance. We welcome your questions, feedback, and suggestions.”
- **Visual / Layout Recommendation:** Large HallPass closing statement, QR code to the prototype, and small repository link beneath it.

---

## Suggested Q&A Preparation

### Why not just use social media or group chats?

HallPass structures information around searchable places, ratings, details, comparison, guides, status, reporting, and moderation. Social feeds and chats are useful for conversation, but they are difficult to search, compare, verify, and maintain over time.

### Is the current login secure enough for real users?

No. The current login and roles are classroom simulations stored in the browser. A production version requires server-side authentication, hashed passwords, secure sessions, authorization, and a shared database.

### How will HallPass keep reviews trustworthy?

HallPass can combine verified place information, clear source labels, content moderation, misinformation reports, helpful votes, review recency, transparent status, and audit records. Sponsored content must remain clearly labelled and must never change review scores.

### What is the strongest evidence for the project?

The strongest evidence is the combination of discovery results and the 200-record validation dataset: 13 of 20 respondents spent over 30 minutes searching, 16 of 20 said they would use HallPass, and the prototype achieved 85.0% task completion with 4.30/5 usefulness.

### How can HallPass be sustained?

The strongest initial model is a university-supported service operated with Student Affairs, International College, orientation teams, student contributors, and defined moderation ownership. Clearly labelled partnerships may support future costs without compromising review independence.

### What is the next most important technical improvement?

A secure shared backend with university-managed authentication, a production database, server-side authorization, safe media storage, backups, and monitoring.
