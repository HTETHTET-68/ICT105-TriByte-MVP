
# Data Structure

## Project Title
**HallPass – Student Reviews & Campus Survival Guide**

## 1. Main Data Entities / Tables

| Entity / Table | Purpose | Example Records |
|---|---|---|
| Users | Stores basic user account information for students and admins | U001, U002, U003 |
| Campus Places | Stores information about dormitories, cafeterias, and campus facilities | P001, P002, P003 |
| Reviews | Stores student reviews, ratings, and recommendations | R001, R002, R003 |
| Survival Guides | Stores campus tips and guide content for new students | G001, G002, G003 |
| Moderation Reports | Stores reports or admin checks for inappropriate or incorrect content | M001, M002, M003 |

## 2. Field Definition

| Entity | Field Name | Data Type | Required? | Example Value | Validation Rule | Used For Search/Filter? |
|---|---|---|---|---|---|---|
| Users | user_id | Text/ID | Yes | U001 | Unique value | Yes |
| Users | name | Text | Yes | Tashi Dorji | 2–50 characters | No |
| Users | email | Text | Yes | student@example.com | Must contain @ | No |
| Users | role | Text/List | Yes | Student | Student/Admin | Yes |
| Users | created_date | Date | Yes | 2026-07-08 | Valid date format | No |
| Campus Places | place_id | Text/ID | Yes | P001 | Unique value | Yes |
| Campus Places | place_name | Text | Yes | Main Cafeteria | 2–100 characters | Yes |
| Campus Places | category | Text/List | Yes | Cafeteria | Dormitory/Cafeteria/Facility | Yes |
| Campus Places | location | Text | Yes | Building A, Ground Floor | 2–100 characters | Yes |
| Campus Places | description | Text | No | Affordable food near classrooms | Maximum 300 characters | No |
| Campus Places | status | Text/List | Yes | Active | Active/Inactive/Under Review | Yes |
| Reviews | review_id | Text/ID | Yes | R001 | Unique value | Yes |
| Reviews | user_id | Text/ID | Yes | U001 | Must match existing user_id | No |
| Reviews | place_id | Text/ID | Yes | P001 | Must match existing place_id | Yes |
| Reviews | rating | Number | Yes | 4 | 1–5 only | Yes |
| Reviews | review_text | Text | Yes | Food is affordable and clean. | 10–500 characters | No |
| Reviews | review_date | Date | Yes | 2026-07-08 | Valid date format | Yes |
| Reviews | status | Text/List | Yes | Pending | Pending/In Review/Approved/Rejected | Yes |
| Reviews | admin_note | Text | No | Approved after checking content | Maximum 200 characters | No |
| Survival Guides | guide_id | Text/ID | Yes | G001 | Unique value | Yes |
| Survival Guides | title | Text | Yes | How to Choose a Dormitory | 5–100 characters | Yes |
| Survival Guides | category | Text/List | Yes | Dormitory | Dormitory/Cafeteria/Campus Life | Yes |
| Survival Guides | content | Text | Yes | Compare distance, price, and facilities before choosing. | 20–1000 characters | No |
| Survival Guides | created_by | Text/ID | Yes | U002 | Must match existing user_id | No |
| Survival Guides | status | Text/List | Yes | Published | Draft/Published/Archived | Yes |
| Moderation Reports | report_id | Text/ID | Yes | M001 | Unique value | Yes |
| Moderation Reports | review_id | Text/ID | Yes | R001 | Must match existing review_id | No |
| Moderation Reports | report_reason | Text/List | Yes | Inappropriate content | Spam/Inaccurate/Inappropriate/Other | Yes |
| Moderation Reports | reported_date | Date | Yes | 2026-07-08 | Valid date format | No |
| Moderation Reports | status | Text/List | Yes | In Progress | Pending/In Progress/Completed/Closed | Yes |
| Moderation Reports | updated_by | Text/ID | Yes | U003 | Must match admin user_id | No |

## 3. Status Values

| Status | Meaning | Who Can Update? |
|---|---|---|
| Pending | Content has been submitted but not yet checked | System/Admin |
| In Progress | Admin is currently reviewing or handling the content | Admin |
| Completed | Review or moderation action has been finished | Admin |
| Closed | The issue is resolved and no further action is needed | Admin |
| Approved | Review is accepted and visible to users | Admin |
| Rejected | Review is not accepted because it breaks rules or is not useful | Admin |
| Active | Campus place is currently available and visible | Admin |
| Inactive | Campus place is hidden or no longer used | Admin |
| Published | Survival guide is visible to users | Admin |
| Draft | Survival guide is still being prepared | Admin |
| Archived | Old guide is stored but not shown as current information | Admin |

## 4. Sample Records

The sample dataset should be saved in:

`/data/sample-records.csv`

Example sample records may include users, campus places, reviews, survival guides, and moderation reports used to test the HallPass prototype.

## 5. Data Privacy Note

HallPass will not collect sensitive personal data such as student ID numbers, phone numbers, home addresses, passport details, payment information, or private academic records.

For the prototype, all sample data will be anonymized. Student names and emails will use fake examples, such as `student@example.com`. Reviews and guide content will be sample text created for testing only. The system will only store basic user roles, campus review content, ratings, status values, and admin update notes needed to demonstrate the MVP workflow.
