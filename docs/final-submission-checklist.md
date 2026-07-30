# HallPass Final Venture Pitch Outline

**Recommended length:** 7–10 minutes  
**Core message:** HallPass gives new Rangsit University students one student-focused place to compare dormitories and cafeterias, learn campus essentials, and contribute moderated experiences.

## Slide 1 — HallPass: Your Campus, Decoded

- Team: **TriByte**
- Htet Htet Myint Zaw — Product and Documentation Lead
- Khaing Zin Thet — Technical Lead
- Yousel Zangmo — UX/UI and Validation Lead
- One-line pitch: “A student reviews and campus survival guide for faster, more confident campus decisions.”
- Visual: final homepage screenshot.

**Speaker point:** Introduce the team and state that HallPass is a working browser-based MVP, not only an idea.

## Slide 2 — The problem and target users

- Target users: first-year, international, and exchange students at Rangsit University.
- Campus information is scattered across university pages, social media, group chats, friends, and word of mouth.
- This creates wasted search time, inconsistent advice, language barriers, and uncertainty about where to live or eat.
- Early discovery evidence:
  - 13 of 20 respondents spent more than 30 minutes searching for basic campus information.
  - 8 of 20 named scattered information as the largest problem.
  - 16 of 20 said they would use HallPass.

**Speaker point:** Frame the problem as a decision-confidence and information-access gap.

## Slide 3 — Validation evidence

- Method: task-based prototype usability testing.
- Dataset: 200 validation records.
- Results:
  - **85%** task-success rate, above the 80% target;
  - **3.99/5** average ease of use;
  - **4.30/5** average usefulness;
  - **4.34/5** average interest.
- Most frequent issue: login/signup navigation.
- Other repeated requests: clearer filters and ratings, more categories, and stronger form guidance.

**Speaker point:** These figures validate the direction and identify usability priorities; they are prototype evidence, not commercial traction.

## Slide 4 — Solution and value proposition

- Searchable dormitory and cafeteria listings with ratings, filters, sorting, and details.
- Practical campus survival guides for unfamiliar situations.
- Saved places, recent history, Google Maps links, and side-by-side comparison.
- Student registration, profiles, review submission, privacy consent, and status tracking.
- Moderated content with verification labels, helpful votes, misinformation reports, and administrator review.

**Value proposition:** “HallPass reduces uncertainty by bringing student experiences, reviewed place information, and practical campus advice into one accessible platform.”

## Slide 5 — Final prototype demonstration

Show this closed-loop story:

1. Student lands on HallPass and browses dormitories or cafeterias.
2. Student searches, filters, opens details, saves places, and compares options.
3. Student logs in and submits a fictional review with consent.
4. The review appears as **Pending** in the student dashboard.
5. An administrator reviews and approves or rejects it.
6. The student sees the updated status; the action is recorded in the audit log.
7. Optional: student reports incorrect information and the administrator resolves it.

**Requirements covered:** FR-01 through FR-12, including storage, validation, status, admin functions, metrics, and traceability.

## Slide 6 — Business model and sustainability

- **Beneficiaries:** new students, international/exchange students, senior student contributors, and campus administrators.
- **Key partners:** Student Affairs, university IT, International College, orientation teams, student council, dormitory managers, and cafeteria operators.
- **Channels:** class LINE groups, international-student communities, orientation ambassadors, QR posters, Instagram, and university pages.
- **Sustainability:** university-supported service that improves onboarding, reduces repeated staff questions, and maintains shared student knowledge.
- **Future options:** approved university sponsorships or clearly labelled campus-service partnerships—without compromising review trust.

## Slide 7 — Metrics and what changed

**Product evidence**

- Validation: 85% task success; 4.30/5 usefulness; 4.34/5 interest.
- Prototype dashboard: review counts, moderation workload, reports, users, helpful votes, and audit activity.
- Demonstration dataset supports Approved, Pending, Rejected, and removal-request states.

**Improvements driven by evidence**

- clearer authentication and password guidance;
- more visible search/filter/sort controls and ratings;
- stronger submission confirmation and privacy consent;
- saved places, comparison, recently viewed, and notifications;
- responsive and accessible interaction, reduced motion, and optimized images;
- expanded administrator moderation, reports, user management, reset, and audit evidence.

## Slide 8 — Technical architecture and responsible data use

- Frontend: HTML5, CSS3, and JavaScript.
- Hosting: GitHub Pages; no installation required for the hosted demo.
- Prototype storage: browser `localStorage`.
- Stored/simulated data: accounts, profiles, reviews, favourites, votes, reports, status changes, and audit events.
- Current safeguards: client-side validation, consent notice, data-minimization prompts, fictional demo data, duplicate-report prevention, and administrator moderation.
- Transparent limits: no shared backend, password hashing, secure authorization, cross-device synchronization, or production-grade upload protection.

**Production path:** server/API, database, hashed credentials, role-based authorization, secure media storage, rate limiting, backups, privacy review, and monitoring.

## Slide 9 — Go-to-market and next development

**Initial launch experiment**

- Share tagged links through class LINE groups, International College communities, QR posters, Instagram, and orientation ambassadors.
- Targets: 50 landing-page visitors, 40% CTA click rate, 30 prototype views, 10 feedback responses, and 25% landing-page-to-demo conversion.
- Measure each channel separately and improve the message or route based on evidence.

**Next product priorities**

1. secure shared backend and university-managed accounts;
2. verified, regularly updated campus information;
3. Thai/English or broader multilingual support;
4. larger live tests across devices and student groups;
5. production moderation, privacy, accessibility, and security controls.

Clarify that outreach figures are targets, not achieved results.

## Slide 10 — Closing and Q&A

- Restate the problem: scattered campus information creates uncertainty and wasted time.
- Restate the proof: users completed most tasks and rated HallPass useful and interesting.
- Restate the product: one guided journey from discovery and comparison to contribution and moderation.
- Closing line: **“HallPass turns scattered campus knowledge into one clearer starting point for every new student.”**
- Show the QR code or URL for the live prototype and invite questions.

## Suggested Q&A preparation

- **Why not use social media?** HallPass structures campus information around searchable places, details, status, and moderation instead of an unstructured feed.
- **Can the current login protect real data?** No. It is a classroom frontend demonstration; production requires server-side security.
- **How will information remain trustworthy?** Use verified university data, clear source labels, moderation, report handling, audit records, and review recency.
- **How will HallPass be sustained?** Through university partnership, student contributors, and defined content/moderation ownership.
- **What is the strongest evidence?** The discovery results and the documented 200-record validation dataset, especially the 85% task-success and 4.30/5 usefulness results.
