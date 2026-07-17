# Basic Security Risk Check

| Area | Risk Question | Current Status | Risk Level | Mitigation | Owner |
|---|---|---|---|---|---|
| Form input | Can incomplete or invalid data be submitted? | Basic input validation is implemented, but stronger validation is needed. | Medium | Validate required fields, limit review length, sanitize user input, and prevent empty submissions. | TriByte Team |
| Admin function | Can normal users access admin actions? | Administrator functions are separated from student functions in the prototype. | Low | Continue enforcing role-based access control and restrict admin pages to authorized users only. | TriByte Team |
| Data display | Is private information visible to everyone? | Public users can view reviews, but personal information such as email addresses should remain hidden. | Low | Display usernames instead of email addresses and restrict access to personal account information. | TriByte Team |
| Status update | Can records be edited without control? | Students can edit or delete only their own reviews, while administrators moderate all content. | Low | Verify ownership before allowing edits or deletions and record moderation actions. | TriByte Team |
| Public links | Does a public link expose data that should be private? | The prototype contains only public review pages and does not intentionally expose user account information. | Low | Avoid exposing administrator pages or sensitive user information through public URLs. | TriByte Team |
| File upload | If used, can unsafe or unrelated files be uploaded? | File upload is not included in the current HallPass MVP. | Low | If file uploads are added in the future, restrict file types, file sizes, and scan uploaded files before storage. | TriByte Team |

## Security Decision

**Continue with mitigation**

The current HallPass MVP has a relatively low security risk because it is a frontend prototype developed for ICT105 coursework. However, improvements should be made before production deployment, including stronger input validation, secure password storage, role-based authorization, and protection of personal information.
