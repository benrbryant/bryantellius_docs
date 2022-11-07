# Writing Integration Tests

Integration Testing ensures that all units work together correctly.

Cycle

1. Write a failing test
2. Write production code to pass a test
3. Refactor the tests and production code

## Test Doubles

Fake versions of services that operate more quickly than the real thing.

**Mocks** and **Stubs** are examples of test doubles.

> NOTE: Never use test doubles in unit tests.

Types:

1. Single-Service Integration Tests - test a single service or piece of an application
2. Boundary Integration Tests - tests communication between different services or pieces of an application

> NOTE: Never use test doubles in boundary integration tests.
