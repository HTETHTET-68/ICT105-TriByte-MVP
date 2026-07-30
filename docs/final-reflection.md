# Final Reflection

## 1. What We Built

We built HallPass, a responsive frontend campus survival guide for first-year, international, and exchange students at Rangsit University. The final prototype combines Dormitory and Cafeteria reviews, detailed place pages, a practical Survival Guide, simulated signup/login, validated review submission, a Student Dashboard, and a protected Administrator Dashboard.

The final version goes beyond the earliest MVP with Saved Places, comparison of two or three places, quick recommendation cues, recently viewed places, helpful voting, verification labels, Google Maps links, profile improvements, activity notifications, approved-review removal requests, report investigation, user-management demonstrations, and audit records.

## 2. What We Learned About Users

Students valued ratings, descriptions, comparison information, and practical guide content. The testing results showed that the Survival Guide and review-browsing tasks were the easiest flows, while the homepage and administrator dashboard were less consistently understood.

Users do not only need more features; they need clear labels, visible actions, predictable navigation, and confirmation after important operations. Repeated confusion around search labels, opening details, password guidance, required fields, rating selection, submission confirmation, statistic labels, and back navigation showed that small wording and hierarchy choices can determine whether a feature feels usable.

## 3. What We Learned About Requirements

Requirements became more useful when we connected them to user stories, prototype modules, observable screenshots, and test evidence. Early requirements described broad screens; later work revealed cross-cutting needs such as ownership, privacy consent, action feedback, status visibility, role separation, persistence, and traceability.

We also learned to distinguish the assessed Lab 14 FR-01–FR-12 structure from the product's detailed system requirements. In the final matrix, newly added features such as Saved Places and comparison are traced under the closest assessed requirement rather than creating inconsistent identifiers only for the final submission.

## 4. What We Improved After Testing

We improved navigation labels and calls to action, search/filter wording, detail access, password and email guidance, required-field behavior, consent controls, submission confirmation, guide organization, dashboard labels, and administrator navigation.

We also added higher-value improvements that responded to the overall decision-making problem:

- Saved Places and comparison
- highest-rated, lowest-priced, and nearest recommendation cues
- recently viewed places
- helpful voting and verification labels
- Google Maps access
- activity notifications and removal requests
- expanded reporting, user management, and audit evidence
- responsive layouts, visible focus, reduced-motion support, and optimized WebP images

## 5. What Was Difficult Technically

The most difficult part was maintaining consistent state across many connected frontend-only workflows. Accounts, review ownership, Saved Places, helpful votes, moderation states, reports, profiles, notifications, and audit entries all use `localStorage`, so every module needs consistent keys, identifiers, and error handling.

Role protection is also difficult without a backend. The prototype can demonstrate student and administrator pathways, but client-side checks cannot provide production security. Optional local images create browser quota risks, and permanent delete actions have no shared backup or recovery mechanism.

Finally, keeping requirements, user stories, screenshots, testing files, and implementation notes aligned became a substantial documentation task. The Lab 14 traceability files help make that work auditable.

## 6. What We Would Improve Next

Our next priority would be a secure backend with a shared database, encrypted credentials, server-side validation and authorization, recoverable deletion, and cross-device synchronization. We would then complete a broader accessibility and compatibility audit using multiple browsers, real mobile devices, keyboard-only navigation, screen readers, contrast testing, and larger datasets.

At the product level, we would improve onboarding and administrator discoverability, add structured moderation and rejection reasons, make no-results recovery clearer, and pilot HallPass with a controlled group of real students. Future mapping, notification, translation, recommendation, or chat features should be added only after privacy, moderation, and trust foundations are strong.

## 7. Individual Contributions

| Member | Contribution | Evidence Link/Commit/Issue |
|---|---|---|
| Htet Htet Myint Zaw | Product and documentation leadership; README, demo script, pitch outline, submission checklist, and weekly logbook | `https://github.com/HTETHTET-68/ICT105-TriByte-MVP/commits/main/` |
| Khaing Zin Thet | Technical leadership; prototype pages, JavaScript modules, CSS, integration, and final prototype delivery | `https://github.com/HTETHTET-68/ICT105-TriByte-MVP/commits/main/` |
| Yousel Zangmo | UX/UI and validation leadership; wireframes, screenshots, validation data, analytics insights, and testing evidence | `https://github.com/HTETHTET-68/ICT105-TriByte-MVP/commits/main/` |

The current repository evidence records shared contribution areas. Exact personal commit or issue links should replace the shared commit page before submission if individual URLs are required.
