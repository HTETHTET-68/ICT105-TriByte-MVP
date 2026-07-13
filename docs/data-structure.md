# Data Structure

## Project Title

**HallPass – Student Reviews & Campus Survival Guide**

---

## 1. Main Data Entities / Tables

| Entity / Table | Purpose | Example Records |
|---|---|---|
| Campus Review Records | Store student reviews and ratings for dormitories and cafeterias around campus. | HP-001, HP-002, HP-003 |

---

## 2. Field Definition

| Field Name | Data Type | Required? | Example Value | Validation Rule | Used For Search/Filter? |
|---|---|---|---|---|---|
| ReviewID | Text | Yes | HP-001 | Unique value | Yes |
| ReviewType | List | Yes | Dormitory | Dormitory / Cafeteria | Yes |
| PlaceName | Text | Yes | Green Residence Hall | Cannot be empty | Yes |
| Location | Text | Yes | Near Main Gate | Cannot be empty | Yes |
| Rating | Number | Yes | 4 | Whole number from 1 to 5 | Yes |
| DateSubmitted | Date | Yes | 2026-07-01 | Valid date in YYYY-MM-DD format | Yes |
| ReviewerRole | List | Yes | Student | Student / Senior Student | Yes |
| Status | List | Yes | Approved | Pending / In Review / Approved / Rejected / Archived | Yes |
| ReviewTitle | Text | Yes | Quiet and affordable dorm | Maximum 100 characters | Yes |
| ReviewText | Text | Yes | The rooms are clean and the dorm is close to campus. | 10–500 characters | Yes |

---

## 3. Status Values

| Status | Meaning | Who Can Update? |
|---|---|---|
| Pending | A review has been submitted and is waiting for moderation. | Student, Senior Student |
| In Review | An administrator is checking the review content. | Administrator |
| Approved | The review has been accepted and is visible to users. | Administrator |
| Rejected | The review was not accepted because it is inappropriate, inaccurate, or incomplete. | Administrator |
| Archived | The review is kept in the system but is no longer shown as current content. | Administrator |

---

## 4. Sample Records

Dataset location:

```text
data/sample-records.csv
```

Example records:

| ReviewID | ReviewType | PlaceName | Location | Rating | Status |
|---|---|---|---|---|---|
| HP-001 | Dormitory | Green Residence Hall | Near Main Gate | 4 | Approved |
| HP-002 | Cafeteria | Central Campus Cafeteria | Student Center | 5 | Approved |
| HP-003 | Dormitory | Riverside Student Dorm | East Campus | 3 | In Review |
| HP-004 | Cafeteria | Library Food Corner | Ground Floor, Library | 4 | Approved |
| HP-005 | Dormitory | Sunrise Apartment | Behind Building 6 | 2 | Pending |
| HP-006 | Cafeteria | International Food Court | Building A | 5 | Approved |
| HP-007 | Dormitory | Lotus Residence | West Campus | 4 | Archived |
| HP-008 | Cafeteria | Sports Complex Café | Sports Area | 3 | Rejected |

---

## 5. Data Privacy Note

This HallPass prototype stores only the information needed to submit, display, search, filter, and moderate campus reviews. It does not collect passwords in the sample dataset, student identification numbers, passport details, home addresses, payment information, private academic records, or other sensitive personal data.

All sample records are fictional and are used only for demonstration and prototype testing. Reviewer names and personal contact information are not included in the dataset.
