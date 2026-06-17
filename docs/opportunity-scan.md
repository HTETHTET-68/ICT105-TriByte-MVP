 # Lab 02 Opportunity Scanning

## Ideas Reviewed from Lab 1

| Idea | Problem Area | Target User | Current Alternative | Initial Technology Direction |
|---|---|---|---|---|
| HallPass | International students lack honest dorm/cafeteria reviews & basic settling-in info | New international students | Asking friends and in facebook groups; Google searches, university websites which are often outdated, not student-verified, or incomplete | Web app + cloud-based storage for reviews & user data |
| CampusMarket | No safe, student-only platform to buy/sell second-hand items | Budget-conscious new students | Facebook Marketplace, Carousell that is open to public, no student verification | Web app + cloud-based storage for listings & accounts (uni email sign-up) |
| StudyMatch | Hard to find study partners/groupmates in the same course | Students wanting study groups or project partners | LINE/Discord groups where students have to manually set up, no auto-matching | Web app + cloud-based storage for profiles & match data |

## Opportunity Discovery Table

| No. | Observed Problem | Target User | Current Alternative | Possible IT Solution | Feasible Technology |
|---|---|---|---|---|---|
| 1 | International students don't know which dorms/cafeterias are good — no honest, student-written reviews | New international students choosing dorm/meal options | Asking friends and in facebook groups | A platform where students rate and write reviews on dorms & cafeterias | Web app + cloud-based storage for reviews |
| 2 | New students don't know basic things like where to eat, what to bring, or how to get around campus | First-time international students | Google searches, university websites that are often outdated, not student-verified, or incomplete | Built-in settling-in guides on the same platform | Web app + cloud-based content storage |
| 3 | Students want affordable second-hand items (textbooks, laptops, furniture) but have no student-only option | New / budget-conscious students | Facebook Marketplace, Carousell | A web marketplace exclusive to listing/buying among students | Web app + cloud-based storage for listings |
| 4 | No way to verify sellers/buyers are real students, making transactions feel unsafe | All university students buying/selling | Facebook Marketplace, Carousell, open to the public with no verification | University email sign-up to verify and trust users | Web app + cloud-based authentication & accounts |
| 5 | Students don't know who else in their class wants to study together | Students seeking study or project partners | LINE group chats or Discord servers, manually set up | Profile-based platform listing course & available study times | Web app + cloud-based storage for profiles |
| 6 | No automatic way to match students by course and schedule | Students with overlapping subjects/schedules | Manual group chat setup, word of mouth | Auto-matching feature that pairs students by course & availability | Web app + cloud-based matching logic |

## Technology Feasibility Mapping

| Idea | Prototype Type | Tools Needed | Data Needed | Difficulty | Feasible? |
|---|---|---|---|---|---|
| HallPass (reviews) | HTML/CSS/JS webpage with an embedded review form | Google Form for review submission, Google Sheets to store and display the responses | List of dorms/cafeterias to review, sample reviews and star ratings | Low | Yes |
| HallPass (settling-in guides) | HTML/CSS/JS landing page with static guide content | HTML/CSS/JS page listing guides, Google Form for students to suggest new tips | Campus info such as food spots, transport routes, dorm essentials checklist | Low | Yes |
| CampusMarket (listings) | Airtable database with a filtered item list embedded on a webpage | Airtable for listings, Airtable's built-in filter/grid view, simple HTML page to host the embed | Sample item listings with title, price, photo link, category | Low | Yes |
| CampusMarket (email verification) | Google Form sign-up with email format validation | Google Form set to validate the email pattern against the university domain, Google Sheets to log approved accounts | List of valid university email domain(s), sample sign-up responses | Low | Yes |
| StudyMatch (profiles) | Google Form for profile creation | Google Form collecting course code and available study times, Google Sheets to store profiles | Course codes, sample student availability data | Low | Yes |
| StudyMatch (auto matching) | Google Sheets QUERY/FILTER formula showing matches, with a Figma clickable prototype for the results screen | Google Sheets FILTER or QUERY formula to match students by course code and overlapping time slots | Student profile sheet with course and schedule columns | Medium | Yes |
