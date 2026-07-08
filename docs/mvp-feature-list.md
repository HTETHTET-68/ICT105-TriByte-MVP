# Lab 04 - MVP Feature List

## MVP Decision Rule

The MVP should include the minimum set of features required to validate that HallPass helps first-year, international, and exchange students find trustworthy dormitory, cafeteria, and campus survival information more quickly than searching through scattered sources.

HallPass will focus on student reviews, useful campus tips, and a simple guide for new students.

---

## MoSCoW Prioritization

| Feature ID | Feature Name | Problem Solved | Related User Story | Priority | Technical Complexity (1-5) | User Value (1-5) | Evidence Strength (1-5) | Include in Final Prototype? |
|---|---|---|---|---|---:|---:|---:|---|
| **F01** | Homepage / Landing Screen | New students need a clear starting point to understand what HallPass does. | US-01 | Must | 1 | 5 | 5 | Yes |
| **F02** | Browse Dormitory and Cafeteria Reviews | Students struggle to find trustworthy student experiences about dorms and food options. | US-02 | Must | 2 | 5 | 5 | Yes |
| **F03** | Search and Filter Reviews | Searching through social media or group chats is slow and inefficient. | US-03 | Must | 2 | 5 | 5 | Yes |
| **F04** | View Review Details | Short information is not enough for students to make confident dormitory or food decisions. | US-04 | Must | 2 | 5 | 5 | Yes |
| **F05** | Submit Review | Students need a way to share dormitory, cafeteria, or campus guide experiences with others. | US-05 | Must | 3 | 5 | 5 | Yes |
| **F06** | Campus Survival Guide | New students need first-week campus information in one organized place. | US-06 | Should | 2 | 4 | 4 | Yes |
| **F07** | Dashboard Summary | Students and the project team need a simple summary of review activity and top-rated options. | US-07 | Should | 2 | 4 | 4 | Yes |
| **F08** | Admin Review Moderation | Review content needs basic moderation to improve trust and reduce misleading information. | US-08 | Should | 3 | 4 | 4 | Yes |
| **F09** | Favorite / Save Reviews | Users may want to revisit useful reviews later. | US-09 | Could | 3 | 3 | 3 | No |
| **F10** | Interactive Campus Map | Students may want to visually locate buildings and services. | US-10 | Could | 4 | 3 | 3 | No |
| **F11** | AI Recommendation System | Personalized suggestions could help students choose dormitories and cafeterias. | US-11 | Won't | 5 | 3 | 2 | No |
| **F12** | Real-Time Student Chat | Students may want to ask other students questions directly. | US-12 | Won't | 5 | 2 | 2 | No |

---

## Must-Have Features

The following features are required in the final prototype:

- Homepage / Landing Screen
- Browse Dormitory and Cafeteria Reviews
- Search and Filter Reviews
- View Review Details
- Submit Review

These features directly support the main HallPass goal: helping new students find trustworthy campus-related information without relying only on scattered group chats, social media posts, or word of mouth.

---

## Should-Have Features

The following features improve the quality and trustworthiness of the MVP:

- Campus Survival Guide
- Dashboard Summary
- Admin Review Moderation

These features help HallPass feel more complete while still staying within a realistic student prototype scope.

---

## Could-Have / Future Features

The following features are useful but not required for the MVP:

- Favorite / Save Reviews
- Interactive Campus Map

These features may be added after the core review and guide system is tested.

---

## Won't-Have Features for MVP

The following features are outside the current MVP scope:

- AI Recommendation System
- Real-Time Student Chat

These features require more advanced backend development, user data, moderation, and maintenance. They are not necessary to prove the core HallPass concept.

---

## Final MVP Scope

The final HallPass prototype will include the following pages:

| Feature ID | Feature | Prototype File |
|---|---|---|
| **F01** | Homepage / Landing Screen | `prototype/wireframe-html/index.html` |
| **F02** | Browse Dormitory and Cafeteria Reviews | `prototype/wireframe-html/reviews.html` |
| **F03** | Search and Filter Reviews | `prototype/wireframe-html/reviews.html` |
| **F04** | View Review Details | `prototype/wireframe-html/detail.html` |
| **F05** | Submit Review | `prototype/wireframe-html/submit.html` |
| **F06** | Campus Survival Guide | `prototype/wireframe-html/guide.html` |
| **F07** | Dashboard Summary | `prototype/wireframe-html/dashboard.html` |
| **F08** | Admin Review Moderation | `prototype/wireframe-html/admin.html` |

---

## MVP Summary

HallPass will not try to solve every campus problem at once. The MVP will focus on the most important student needs: finding dormitory reviews, cafeteria reviews, first-week guidance, and trustworthy student-shared information.
