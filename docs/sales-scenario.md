# HallPass Sales Scenario

**Project Title:** HallPass — Student Reviews and Campus Survival Guide  


## 1. Target User and Customer

- **Primary users:** First-year, international, and exchange students who are unfamiliar with accommodation, food, services, and everyday campus life at RSU.
- **Secondary users:** Current students who want to compare student experiences or contribute a dormitory or cafeteria review.
- **Operational stakeholder:** A HallPass administrator who moderates reviews, investigates reports, manages demonstration accounts, and checks audit activity.
- **Potential adoption partners:** RSU orientation staff, international student support, student clubs, and student-affairs teams that can introduce HallPass to new students.

## 2. Realistic Situation

Yuki is an international student preparing for her first week at RSU. She needs an affordable dorm close to campus, wants to know which cafeteria has suitable food, and is unsure about transport, banking, health services, and other daily tasks. The information she finds is scattered across old social-media posts, chat groups, and informal recommendations. It is difficult to compare options, check whether advice is still useful, or know which details come from student experience.

During an orientation session, a student ambassador introduces the HallPass landing page and explains that the prototype brings dormitory reviews, cafeteria reviews, and a practical survival guide into one consistent website. Yuki opens the demo, browses dorm reviews, searches for a place, filters by minimum rating, opens a detailed listing, and reads the campus guide. After trying a cafeteria, she logs in with a demonstration student account, reads the privacy notice, consents, and submits a review. Her dashboard shows that the review is **Pending** until an administrator approves or rejects it.

## 3. Pain Point

The current information-search process creates:

- wasted time moving between chats, social media, and word-of-mouth advice;
- difficulty comparing ratings, price, distance, facilities, and student comments;
- uncertainty about whether information is relevant to RSU students;
- no single place for practical new-student guidance;
- no transparent way for contributors to see the status of a submitted review; and
- a risk that inappropriate or misleading content is published without moderation.

## 4. Product Introduction

HallPass is introduced through its responsive marketing landing page. The message “Your shortcut to campus life” explains the problem and leads users to the working prototype through the **Try the HallPass demo** call to action. In the prototype, users can explore information without an account. Login is requested only when a student chooses to contribute a review or manage personal submissions.

HallPass is currently a classroom MVP. It uses fictional/sample records, fixed demonstration credentials, and browser `localStorage`. It does not claim to provide production authentication, a live database, or verified institutional information.

## 5. Value Message

> For first-year, international, and exchange students who experience scattered and uncertain campus information, our HallPass web platform helps them make faster, more confident campus-life decisions by combining searchable student dormitory and cafeteria reviews, practical survival guidance, consent-based review submission, status tracking, and administrator moderation in one place.

## 6. Sales Conversation / Pitch Moment

**Student ambassador:** “What took the most time when you prepared to study at RSU?”

**Yuki:** “Finding a dorm I could trust and understanding everyday things like transport, food, and banking. The information was spread across many groups.”

**Student ambassador:** “HallPass puts those decisions into one student-focused flow. You can compare dorm and cafeteria experiences, search and filter the listings, open the full details, and use the survival guide for practical first-week steps. Let me show you.”

The ambassador opens the landing page, enters the prototype, filters dormitory reviews, and opens a review detail. The ambassador then shows the guide, signs in as a demonstration student, and submits a sample review after displaying the privacy notice.

**Student ambassador:** “The review does not publish immediately. Your dashboard shows its status, and an administrator can approve or reject it. The admin action is also recorded in the audit log. This gives students a simple contribution path while keeping a moderation checkpoint.”

**Yuki:** “I would use this before choosing accommodation and during my first weeks. I would also contribute after I had real experience.”

**Student ambassador:** “Please try the main tasks and tell us where anything feels unclear. Your feedback will guide the final Lab 14 improvements.”

## 7. Expected User Action

After seeing the scenario, the user should:

1. select **Try the HallPass demo**;
2. browse a dormitory or cafeteria category;
3. search, filter, and open a review detail;
4. read a relevant survival-guide topic;
5. use the demonstration student login to submit a non-sensitive sample review;
6. check the Pending status in **My Dashboard**; and
7. give usability feedback and share the demo with another RSU student.

For the live classroom demonstration, use only fictional data and the fixed accounts shown on the login screen.

## 8. Value for Stakeholders

- **Students:** less time searching, clearer comparisons, and practical guidance in one interface.
- **Student support teams:** one focused resource to introduce during orientation.
- **Administrators:** a visible moderation queue, reports, user examples, and audit activity.
- **Project team:** measurable feedback on browsing, contribution, status, and moderation tasks before Lab 14.

## 9. Related Requirements

| Scenario element | Requirement traceability |
| --- | --- |
| Clear introduction and entry to the prototype | FR-01, FR-02, FR-22; NFR-01, NFR-02, NFR-03 |
| Browse dormitory and cafeteria experiences | FR-04, FR-05 |
| Search, minimum-rating filter, and detail view | FR-06, FR-07 |
| Practical new-student guidance | FR-09 |
| Simulated login and student contribution | FR-03, FR-08, FR-10, FR-16 |
| Privacy notice, consent, and ethical content reminder | FR-15; NFR-04, NFR-08, NFR-10, NFR-13, NFR-14 |
| Personal dashboard and review status | FR-11, FR-14, FR-17, FR-18; NFR-11 |
| Administrator moderation and audit evidence | FR-12, FR-13, FR-19, FR-20, FR-21 |
| Honest MVP limitations | NFR-09; system-requirements.md “Out of Scope” |

## 10. Success Signal

The scenario is successful if a new RSU student can explain HallPass’s value, complete the browse-to-detail path without training, understand that review submission requires login and consent, identify the Pending moderation state, and recognize that the current version is a frontend-only classroom prototype.
