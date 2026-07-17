# Privacy and Data Protection

## Data Collection Summary

| Data Field | Why It Is Needed | Personal Data? | Sensitive Data? | Keep / Remove / Replace | Notes |
|---|---|---|---|---|---|
| Username | Identify the review author within the system | Yes | No | Keep | Display a username instead of a full real name where possible. |
| Email Address | Login, account identification, and password recovery | Yes | No | Keep | Used only for authentication and not shown publicly. |
| Password | Secure user authentication | Yes | No | Keep | Store securely (hashed in a real implementation). The prototype should never display passwords. |
| User Role (Student/Admin) | Determine access permissions | Yes | No | Keep | Required for role-based access control. |
| Dormitory Review | Allow students to share dormitory experiences | No | No | Keep | Main feature of HallPass. |
| Cafeteria Review | Allow students to share cafeteria experiences | No | No | Keep | Main feature of HallPass. |
| Rating (1–5 Stars) | Help users compare dormitories and cafeterias | No | No | Keep | Used to summarize user opinions. |
| Review Date | Display when the review was submitted | No | No | Keep | Helps users determine review relevance. |
| Campus Guide Content | Provide helpful campus information | No | No | Keep | Managed by the system or administrators. |

---

## Privacy Rule for Prototype

HallPass collects only the minimum information necessary to provide its core functionality. Personal information is limited to a username, email address, password, and user role for account management and authentication. Review content, ratings, and submission dates are collected to support the review platform. Sensitive personal information such as national ID numbers, financial information, medical information, home addresses, or biometric data is **not** collected.

Student users can view public reviews and manage only their own submissions. Administrator accounts are responsible for moderating reviews and managing inappropriate content. User passwords should be securely stored using password hashing in a real deployment. The current prototype is intended for educational purposes and uses local storage rather than a production database.

---

## Data Minimization Decision

| Original Data | Decision | Reason |
|---|---|---|
| Full Name | Replace with Username | Protect user identity while allowing attribution. |
| Student ID Number | Remove | Not required for the prototype's functionality. |
| Phone Number | Remove | No communication feature requires it. |
| Home Address | Remove | Unrelated to the HallPass system. |
| Date of Birth | Remove | Not required for authentication or reviews. |
| National ID / Passport Number | Remove | Sensitive personal information that is unnecessary for the MVP. |
| Password (Plain Text) | Replace with Hashed Password (real implementation) | Improve account security and protect user credentials. |
| Review Author Display | Use Username instead of Email | Prevent exposure of users' personal contact information. |
