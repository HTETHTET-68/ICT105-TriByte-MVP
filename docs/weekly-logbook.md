
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

