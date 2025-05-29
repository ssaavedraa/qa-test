Here's your **prettified Markdown** version with improved formatting, consistent spacing, clearer sectioning, and enhanced readability. It maintains the same content and structure, but with better visual flow and styling for professional documentation:

---

# 🧪 QA Practical Test: To-Do List

## 📖 User Story

**As a user**, I want to **add and remove tasks** from my to-do list so that I can **manage my daily activities**.

---

## 🎯 Purpose

This document outlines a **QA practical test** for a simple To-Do List application. The test scenarios are designed to evaluate your ability to:

- Understand requirements
- Design and write effective test cases
- Apply acceptance criteria using **Gherkin** format

---

## ✅ Acceptance Criteria (Gherkin Scenarios)

```gherkin
Feature: Manage To-Do List

  Scenario: Add a new task
    Given I am on the to-do list page
    When I enter "Buy groceries" in the task input field
    And I click the "Add" button
    Then I should see "Buy groceries" in the list of tasks

  Scenario: Remove a task
    Given I have "Buy groceries" in my list of tasks
    When I click the "Delete" button next to "Buy groceries"
    Then "Buy groceries" should be removed from the list of tasks
```

---

## 🔍 Test Details

### 🎯 Objective

Evaluate the candidate’s ability to:

- Analyze functional requirements
- Design and write test cases (manual or automated)
- Clearly communicate test findings

---

## 📝 Instructions for the Candidate

You are provided with:

- A **user story** and **acceptance criteria** (see above)
- Gherkin-style **feature scenarios**

### Your Tasks

1. **Review** the user story and acceptance criteria
2. **Write detailed test cases** for the provided scenarios

   - If **manual**, use a table or checklist format
   - If **automated**, use your preferred tool (e.g., Cucumber, Selenium, Cypress, Playwright)

3. **Identify at least two edge cases** not covered in the original scenarios and write test cases for them
4. **Document your test approach**

   - Briefly describe your strategy, tools, and reasoning

5. **(Optional):** If automating, include instructions on how to run your tests

---

## 📦 Deliverables

- ✅ Test cases (Manual: Markdown, Excel, etc. / Automated: scripts or code)
- 🔁 Edge case test cases
- 📘 Test approach/strategy document
- 🛠️ (Optional) Setup and run instructions for automation

---

## 🧠 Evaluation Criteria

Your submission will be assessed based on:

- Clarity and completeness of test cases
- Coverage of acceptance criteria and edge cases
- Quality of documentation and communication
- (If automated) Code quality and maintainability

---

## 🌐 QA Environment

You can access the testing environment here:
🔗 [https://qa.santiagosaavedra.com.co/](https://qa.santiagosaavedra.com.co/)

---

Let me know if you'd like this converted to **PDF**, have test case tables generated, or want example automated tests as a starting point!
