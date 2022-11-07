# Test Driven Development Basics

Test driven development is where you write tests for production code before you write production code.

The goal of TDD is _code quality_.

TDD Pros and Cons:

Pros:

- Forces you to clarify requirements
- Improves communication between team members
- Improves structure of production code (towards a _loosely-coupled_ project)
- Allows changes without missing breaking changes

Cons:

- Takes time
- Bad tests can exist

## TDD Process

1. Write a failing test
2. Write production code to pass the test
3. Refactor the tests to check added functionality

Red -> Green -> Refactor -> Repeat

## Good Tests

Tests should be:

- Readable - even more readable than the code they test
- Isolated - code in one test must not affect any other test
- Thorough - should be robust with what they test
- Explicit - should contain all of the setup required to complete the test

## Types of Tests

1. **Unit Testing** - tests specific, low-level functionality
2. **Integration Testing** - tests pieces of an application works together
3. **End-to-End Testing** - tests the application from the viewpoint of the user