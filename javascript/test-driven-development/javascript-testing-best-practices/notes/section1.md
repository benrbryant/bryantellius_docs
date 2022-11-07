# The Test Anatomy

The test should report a result that is meaningful to anyone who is not necessarily familiar with the code base.

Parts to include:

1. What is being tested
2. What is the scenario
3. What is expected

Here is an example test in node.js:

```js
//1. unit under test
describe('Products Service', function() {
  describe('Add new product', function() {
    //2. scenario and 3. expectation
    it('When no price is specified, then the product status is pending approval', ()=> {
      const newProduct = new ProductService().add(...);
      expect(newProduct.status).to.equal('pendingApproval');
    });
  });
});
```

> Credit [goldbergyoni](https://github.com/goldbergyoni/javascript-testing-best-practices)

Design your tests with the AAA structure:

1. Arrange - code that sets up the test (i.e. mock db stubs, constructor calls, preparation code)
2. Act - execute the test
3. Assert - check the result against the expected value

```js
describe("Customer classifier", () => {
  test("When customer spent more than 500$, should be classified as premium", () => {
    //Arrange
    const customerToClassify = { spent: 505, joined: new Date(), id: 1 };
    const DBStub = sinon
      .stub(dataAccess, "getCustomer")
      .reply({ id: 1, classification: "regular" });

    //Act
    const receivedClassification =
      customerClassifier.classifyCustomer(customerToClassify);

    //Assert
    expect(receivedClassification).toMatch("premium");
  });
});
```

> Credit [goldbergyoni](https://github.com/goldbergyoni/javascript-testing-best-practices)

Stick to declarative BDD (**behavior driven development**) styled tests. Utilize as many Jest test assertions as you can to keep to declarative > imperative code.

Also, stick to **black box**, (**behavioral**) testing. If the external result is expected, then there is no need to write tests for the internal (private) code/apis. The latter is considered **white box** testing.

Try to write tests that mock real data. Utilize [faker](https://npmjs.com/faker) to emulate tests passing or failing depending on data that matches your own.

Test inputs with **property-based** testing in mind. This allows for a more in-depth and accurate testing environment for a multitude of outcomes.

> Property-based testing is generative testing. You do not supply specific example inputs with expected outputs as with unit tests. Instead, you define properties about the code and use a generative-testing engine (e.g., QuickCheck) to create randomized inputs to ensure the defined properties are correct. - [Json Steinhauser](https://dev.to/jdsteinhauser/intro-to-property-based-testing-2cj8)
> Tool for property-based testing: [FastCheck](https://github.com/dubzzz/fast-check#readme)

Try to only use short or inline _snapshots_ for testing. This means that all that the test needs are coupled to 3 to 7 lines, instead of requiring an external file (HTML, CSS, JSON, etc) for testing expectations.

Avoid global text fixtures by adding data per test. This means that the data that your test depends on is independent from any external seeding.

Avoid using `try/catch/finally` blocks in your test. Use Jest's `expect().toThrow()` method with appropriate error properties for efficient feedback.

Utilize tags (`#sanity`) to invoke subsets in testing.

```js
//this test is fast (no DB) and we're tagging it correspondigly
//now the user/CI can run it frequently
describe("Order service", function () {
  describe("Add new order #cold-test #sanity", function () {
    test("Scenario - no currency was supplied. Expectation - Use the default currency #sanity", function () {
      //code logic here
    });
  });
});
```

> Credit [goldbergyoni](https://github.com/goldbergyoni/javascript-testing-best-practices)

Write tests with at least two levels of categorized levels. For example, having one `describe` for the _name of the unit_ and one `describe` for the _scenario_ of the test.

```js
// Unit under test
describe("Transfer service", () => {
  //Scenario
  describe("When no credit", () => {
    //Expectation
    test("Then the response status should decline", () => {});

    //Expectation
    test("Then it should send email to admin", () => {});
  });
});
```

> Credit [goldbergyoni](https://github.com/goldbergyoni/javascript-testing-best-practices)

[To Top](#the-test-anatomy)
