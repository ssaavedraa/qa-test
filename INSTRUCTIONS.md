# QA Practical Test: To-Do List

## User Story

As a user, I want to add and remove tasks from my to-do list so that I can manage my daily activities.

## Purpose

This document describes a practical QA test for a simple To-Do List application. The scenarios are designed to evaluate the candidate's ability to:

- Understand requirements
- Design and write test cases
- Use acceptance criteria in Gherkin format

## Acceptance Criteria (Gherkin Scenarios)

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

## Test Details

### Objective

Test the candidate's ability to:

- Analyze requirements
- Design and write test cases (manual or automated)
- Communicate findings clearly

### Instructions for the Candidate

You are provided with:

- A user story and acceptance criteria for a simple To-Do List application (see above).
- Gherkin-style scenarios (see above).

Your tasks:

1. **Review the user story and acceptance criteria.**
2. **Write detailed test cases** (manual or automated) for the scenarios provided.
   - If manual, use a table or checklist format.
   - If automated, use your preferred tool (e.g., Cucumber, Selenium, Cypress, Playwright, etc.).
3. **Identify at least two edge cases** not covered in the original scenarios and add test cases for them.
4. **Document your test approach** (briefly describe your strategy, tools, and reasoning).
5. **(Optional)**: If you automate, include instructions on how to run your tests.

### Deliverables

- Test cases (manual: Markdown, Excel, or similar; automated: code/scripts).
- Edge case test cases.
- Test approach/strategy document.
- (If automated) Setup and run instructions.

### Evaluation Criteria

- Clarity and completeness of test cases
- Coverage of acceptance criteria and edge cases
- Quality of documentation and communication
- (If automated) Code quality and maintainability

These scenarios and instructions are intended to be clear, concise, and easy to implement for both manual and automated testing.

#### QA environment is available [here](https://qa.santiagosaavedra.com.co/)
