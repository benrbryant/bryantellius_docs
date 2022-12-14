# Loops

Loops allow for repetition in code.

Loops are generally made up of three parts:

1. Initialization Statement
2. Continuation Condition
3. Iteration Statement

## General Loops

### While

The `while` loop contains a condition and a loop body. The loop body will be executed as long as the condition evaluates to `true`.

Pseudocode:

```txt
WHILE condition DO
    Perform action
    Update iterator
```

JavaScript:

```js
let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}
```

Java:

```java
int i = 1;

while (i <= 10) {
  System.out.println(i);
  i++;
}
```

### Do/While

The `do/while` loop contains a loop body and a condition. The loop body will be executed as long as the condition evaluates to `true`. The difference between a `while` and `do/while` loop is that the loop body in a `do/while` loop comes _before_ the condition, meaning the loop body will always be executed at least once.

Pseudocode:

```txt
DO
    Perform action
    Update iterator
WHILE condition
```

JavaScript:

```js
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 10);
```

Java:

```java
int i = 1;

do {
  System.out.println(i);
  i++;
} while (i <= 10)
```

### For

The `for` loop contains an initialization statement, condition, and iteration statement, followed by a loop body. The loop body with be executed as long as the condition evaluates to `true`, and the initialized value will be updated based on the iteration statement after each iteration.

Pseudocode:

```txt
DO
    Perform action
    Update iterator
WHILE condition
```

JavaScript:

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

Java:

```java
for (int i = 1; i <= 10; i++) {
  System.out.println(i);
}
```

### Foreach

Most, but not all, languages support some version of a `foreach` loop. The `foreach` loop generally contains a initialization statement and a specified collection to iterate over.

In Java, the `foreach` loop resembles the following:

```java
String[] hobbits = { "Frodo", "Sam", "Pippin", "Merry" };

for (String hobbit : hobbits) {
    // do something with each hobbit
}
```

## Exercises

### Exercise 1: