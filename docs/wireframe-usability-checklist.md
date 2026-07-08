# Wireframe Usability Checklist

| Check Area | Question | Status | Evidence / Notes |
|---|---|---|---|
| Required screens | Are all six required screens included? | Complete | Homepage, input form, record list, detail view, dashboard, and admin view are included in `wireframes/`. |
| Requirement traceability | Does every screen connect to system requirements? | Complete | See `docs/feature-requirement-mapping.md`. |
| User story traceability | Does every screen connect to user stories? | Complete | Screen mappings include US IDs from `docs/user-stories.md`. |
| Realistic content | Do screens include sample content instead of empty boxes? | Complete | Dorm, cafeteria, guide, and moderation examples are used. |
| Main user flow | Can a student move from homepage to list, detail, submission, and status/confirmation? | Complete | See `diagrams/user-flow.mmd`. |
| Search/filter logic | Is there a clear search or filter area? | Complete | Review list includes search, category filter, and status filter. |
| Input validation | Does the form show required fields and error prevention? | Complete | Input form includes required labels and validation notes. |
| Confirmation feedback | Does the system show feedback after submission/update? | Complete | Submission and admin screens include confirmation/status feedback. |
| Admin function | Is at least one admin/manager function shown? | Complete | Admin screen supports approve, flag, delete, and status update. |
| Dashboard/summary | Is a summary or analytics screen shown? | Complete | Dashboard includes total reviews, pending reviews, and top-rated places. |
| UI consistency | Do screens share consistent colors, navigation, labels, and card styles? | Complete | All wireframes use the same HallPass layout style. |
| Privacy awareness | Does the prototype avoid unnecessary sensitive personal data? | Complete | Review form uses display name/initials, not full personal contact details. |
| Mobile/responsive consideration | Can the layout reasonably adapt to smaller screens later? | In progress | Card-based layout is suitable for responsive HTML/CSS implementation. |
| Final prototype alignment | Can the team explain how Lab05 guides the final prototype? | Complete | README, mapping file, and specification document explain alignment. |

## Issues to Create / Track in GitHub

1. Build clickable HTML/CSS wireframe pages from the exported wireframes.
2. Add JavaScript search/filter simulation for review list.
3. Add local storage or sample JSON record storage for review submissions.
4. Test mobile responsiveness and add screenshots.
5. Record a short walkthrough of the clickable prototype.
