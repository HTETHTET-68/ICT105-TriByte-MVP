# Lab 04 - MVP Feature List

## MVP Decision Rule

The HallPass MVP includes the minimum set of features required to validate that first-year, international, and exchange students can quickly find trustworthy dormitory reviews, cafeteria reviews, and campus survival information from a single platform instead of relying on scattered sources such as social media, group chats, or word of mouth.

The prototype focuses on student-generated reviews, practical campus survival information, and a simple, intuitive user experience.

---

# MoSCoW Prioritization

| Feature ID | Feature Name | Problem Solved | Related User Story | Priority | Technical Complexity (1-5) | User Value (1-5) | Evidence Strength (1-5) | Include in Final Prototype? |
|---|---|---|---|---|---:|---:|---:|---|
| **F01** | Homepage | New students need a clear introduction to HallPass and its purpose. | US-01 | Must | 1 | 5 | 5 | Yes |
| **F02** | Login | Returning users need access to the platform. | US-08 | Must | 2 | 4 | 4 | Yes |
| **F03** | Signup | New users need a way to create an account. | US-07 | Must | 2 | 4 | 4 | Yes |
| **F04** | Dormitory Reviews | Students need trustworthy accommodation information. | US-02 | Must | 2 | 5 | 5 | Yes |
| **F05** | Cafeteria Reviews | Students need reliable information about campus dining options. | US-03 | Must | 2 | 5 | 5 | Yes |
| **F06** | Search and Filter Reviews | Students should quickly locate relevant reviews. | US-02, US-03 | Must | 2 | 5 | 5 | Yes |
| **F07** | Review Details | Students need complete information before making decisions. | US-04 | Must | 2 | 5 | 5 | Yes |
| **F08** | Write Review | Students should be able to contribute their own experiences. | US-05 | Must | 3 | 5 | 5 | Yes |
| **F09** | Campus Survival Guide | New students need essential campus information in one place. | US-06 | Should | 2 | 5 | 4 | Yes |
| **F10** | Dashboard | Demonstrates review statistics and moderation-related information. | US-09 | Should | 2 | 4 | 4 | Yes |
| **F11** | Save/Favorite Reviews | Students may wish to bookmark useful reviews. | Future | Could | 3 | 3 | 3 | No |
| **F12** | Interactive Campus Map | Students may want building and service locations. | Future | Could | 4 | 3 | 3 | No |
| **F13** | AI Recommendation System | Personalized recommendations for dormitories and cafeterias. | Future | Won't | 5 | 3 | 2 | No |
| **F14** | Real-Time Student Chat | Students communicate directly through the platform. | Future | Won't | 5 | 2 | 2 | No |

---

# Must-Have Features

The following features are required in the final prototype:

- Homepage
- Login
- Signup
- Dormitory Reviews
- Cafeteria Reviews
- Search and Filter Reviews
- Review Details
- Write Review

These features directly support HallPass's primary goal of helping new students quickly find trustworthy campus information.

---

# Should-Have Features

The following features improve the overall usefulness of the MVP:

- Campus Survival Guide
- Dashboard

These features provide additional campus information and demonstrate administrative monitoring while remaining within the project's scope.

---

# Could-Have Features

The following features may be considered for future versions:

- Save/Favorite Reviews
- Interactive Campus Map

These features enhance convenience but are not required to validate the MVP.

---

# Won't-Have Features for MVP

The following features are outside the scope of the current HallPass prototype:

- AI Recommendation System
- Real-Time Student Chat
- Online Dormitory Booking
- Payment System
- Live Database Integration
- Mobile Application

These features require additional backend development and are reserved for future versions.

---

# Final MVP Scope

The final HallPass prototype includes the following pages:

| Feature ID | Feature | Prototype File |
|---|---|---|
| **F01** | Homepage | `prototype/index.html` |
| **F02** | Login | `prototype/login.html` |
| **F03** | Signup | `prototype/signup.html` |
| **F04** | Dormitory Reviews | `prototype/dorms.html` |
| **F05** | Cafeteria Reviews | `prototype/cafeteria.html` |
| **F06** | Search and Filter Reviews | `prototype/dorms.html`, `prototype/cafeteria.html` |
| **F07** | Review Details | `prototype/review-details.html` |
| **F08** | Write Review | `prototype/write-review.html` |
| **F09** | Campus Survival Guide | `prototype/guide.html` |
| **F10** | Dashboard | `prototype/dashboard.html` |

---

# MVP Summary

The HallPass MVP focuses on solving the most important challenges faced by new university students. It provides a centralized platform where students can browse dormitory reviews, cafeteria reviews, campus survival guides, and contribute their own experiences. By concentrating on these core features, the prototype demonstrates the value of HallPass while remaining realistic for the current project scope and allowing future expansion in later versions.
