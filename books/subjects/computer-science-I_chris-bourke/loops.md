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

### Exercise 1: Print All Numbers

Given an input number, print all of the integers from 1 - N.

Pseudocode:

```txt
N <- 100

FOR i <- 1; i <= N; i <- i + 1 DO
    Print i
END
```

JavaScript:

```js
let N = 100;

for (let i = 1; i <= N; i++) {
  console.log(i);
}
```

Java:

```java
int N = 100;

for (int i = 1; i <= N; i++) {
    System.out.println(i);
}
```

### Exercise 2: Print All Even Number in Reverse Order

Given an input number, print all of the even integers from N - 0.

Pseudocode:

```txt
N <- 100

FOR i <- N; i > 0; i <- i - 1 DO
    IF i divisible 2 THEN
        Print i
    END
END
```

JavaScript:

```js
let N = 100;

for (let i = N; i > 0; i--) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
```

Java:

```java
int N = 100;

for (int i = N; i > 0; i--) {
  if (i % 2 == 0) {
    System.out.println(i);
  }
}
```

### Exercise 3: Nested Loops

Try and recreate the following in the output window (console/terminal) using nested loops:

```txt
11 21 31 41 51 61 71 81 91 101
12 22 32 42 52 62 72 82 92 102
13 23 33 43 53 63 73 83 93 103
14 24 34 44 54 64 74 84 94 104
15 25 35 45 55 65 75 85 95 105
16 26 36 46 56 66 76 86 96 106
17 27 37 47 57 67 77 87 97 107
18 28 38 48 58 68 78 88 98 108
19 29 39 49 59 69 79 89 99 109
20 30 40 50 60 70 80 90 100 110
```

Pseudocode:

```txt
row <- ""

FOR i <- 1; i <= 10; i <- i + 1 DO
    FOR j <- 1; j <= 10; j <- j + 1 DO
        row <- row + i + 10j
        IF j = 10 THEN
            row <- row + " "
        END

        Print row
        row <- ""
END
```

JavaScript:

```js
let N = 1;
let M = 10;
let row = "";

for (let i = N; i <= M; i++) {
  for (let j = N; j <= M; j++) {
    row += i + M * j;
    if (j != M) row += " ";
  }

  console.log(i, row);
  row = "";
}
```

Java:

```java
int N = 1;
int M = 10;

StringBuilder row = new StringBuilder();

for (int i = N; i <= M; i++) {
    for (int j = N; j <= M; j++) {
        row.append(i + M * j);
        if (j != M) {
            row.append(" ");
        }
    }

    System.out.println(row);
    row = new StringBuilder();
}
```
