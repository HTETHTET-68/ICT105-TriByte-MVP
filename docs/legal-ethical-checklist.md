# Legal and Ethical Checklist

## Project Title

**HallPass – Dormitory and Cafeteria Reviews**

---

## Ethical Review

| Check Item | Yes/No | Evidence / Notes | Mitigation Action | Owner | GitHub Issue/Commit |
|---|---|---|---|---|---|
| Users are informed about the purpose of the prototype. | Yes | The homepage and project documentation explain that HallPass is a student-driven prototype for sharing dormitory, cafeteria, and campus guidance information. | Continue displaying a short project purpose statement before users submit reviews. | TriByte Team | Issue #52 |
| The prototype avoids misleading claims. | Yes | Reviews represent student opinions only and are not presented as official university recommendations or verified facts. | Add a disclaimer stating that reviews reflect personal experiences and are not official university recommendations. | TriByte Team | Issue #52 |
| The prototype does not collect unnecessary sensitive data. | Yes | Users submit review content, ratings, and basic account information only. The prototype does not request sensitive personal information such as national ID numbers, financial information, or health records. | Continue limiting data collection to only the information required for account management and review submission. | TriByte Team | Issue #53 |
| Users can understand what happens after submission. | Yes | After submitting a review, users receive confirmation that their review has been submitted and may be reviewed by an administrator before publication. | Improve confirmation messages by clearly explaining the moderation process and expected review status. | TriByte Team | Issue #52 |
| Admin or manager actions are clearly separated from user actions. | Yes | Administrator functions such as review moderation and content management are available only through the admin dashboard, while students can only create, edit, or delete their own reviews. | Maintain role-based access and prevent unauthorized access to administrator features. | TriByte Team | Issue #53 |
| The prototype avoids unfair or harmful treatment of users. | Yes | All students can browse reviews equally regardless of background. Reviews are moderated to reduce offensive, misleading, or inappropriate content. | Continue applying moderation guidelines and remove harmful or discriminatory content when reported. | TriByte Team | Issue #52 |

---

## Summary Decision

- **Safe to continue:** **Yes**

- **Required revision before implementation:**
  - Add a clear privacy notice explaining what user information is collected.
  - Include a disclaimer that reviews represent personal opinions and are not official university recommendations.
  - Improve the review submission confirmation page to explain the moderation process.
  - Continue enforcing administrator-only access for content moderation.
  - Establish moderation guidelines to reduce inappropriate, false, or harmful user-generated content.
