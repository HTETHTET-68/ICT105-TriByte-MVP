# HallPass Prototype

HallPass is an ICT105 frontend MVP that helps Rangsit University students compare dormitories and cafeterias, read student experiences, and access a campus survival guide.

## Run the prototype

Open `index.html` in a modern browser. For the most reliable result, serve the `prototype` folder using a local static server or GitHub Pages.

The Font Awesome icons load from a public CDN, so an internet connection is recommended.

## Demo accounts

| Role | Email | Password |
|---|---|---|
| Student | `student@hallpass.com` | `Student123!` |
| Administrator | `admin@hallpass.com` | `Admin123!` |

## Recommended demonstration flow

1. Browse dormitories and cafeterias.
2. Search, filter, sort, open a place, use its map link, save it, and mark a review helpful.
3. Log in as a student and view Saved Places.
4. Submit a review with consent and optional photo.
5. Confirm the review appears as Pending in My Submissions.
6. Log in as administrator and approve or reject it.
7. Return to the student account and confirm its status.
8. Report incorrect information from a public review.
9. Resolve the report in the administrator dashboard.

## Main features

- Public dormitory and cafeteria listings
- Search, rating filters, sorting, details, and Google Maps links
- Verified/admin-reviewed information indicators
- Saved places for each prototype account
- Side-by-side comparison of up to three saved places
- Recently viewed place history
- Student review-status notifications
- Helpful-review voting
- Student registration, profile, dashboard, and submission tracking
- Review submission, validation, photo resizing, and privacy consent
- Admin moderation, removal requests, reports, user management, metrics, and audit log
- Administrator presentation reset that preserves demo accounts
- Responsive layouts and empty/error states

## Prototype limitations

HallPass currently has no backend. Accounts, passwords, reviews, images, favourites, helpful votes, reports, and audit events are stored in the current browser with `localStorage`.

- Do not enter real or sensitive information.
- Authentication and roles can be modified through browser developer tools.
- Passwords are not hashed.
- Information does not synchronize between browsers or devices.
- Clearing browser site data resets prototype records.

A production release requires server-side authentication, password hashing, authorization, database storage, rate limiting, secure uploads, moderation controls, and privacy/security review.

## Data reset

Use the browser’s site-data controls to clear local storage for the prototype origin, then reload the page. Demo accounts will be recreated.

# HallPass Final Prototype

HallPass is TriByte's browser-based ICT105 MVP for Rangsit University students, especially first-year, international, and exchange students. It replaces scattered dormitory, cafeteria, and campus-life information with one searchable guide where students can compare places, read practical advice, submit reviews, and track moderation status.

## Open the prototype

- **Live prototype:** <https://htethtet-68.github.io/ICT105-TriByte-MVP/prototype/index.html>
- **Repository source:** <https://github.com/HTETHTET-68/ICT105-TriByte-MVP/tree/main/prototype>
- **Local use:** Open `index.html` in a modern browser. For the most reliable result, serve the `prototype` folder with a local static server.




