# Java Iteration Statements

Iteration statements, or _loops_, allow us to repeat code instruction and logic as many times as we need to without writing repetitive and verbose source code.

## For Loop

The `for` loop takes up to three arguments: initialization, condition, and action/update expression. It works by initializing some variable, checking if a condition is `true`, executing a loop body, and updating the variable value. It will then check the condition again for `true`. If the condition is false, the loop will stop. A `for` loop will run _0 or more times_.

Example:

```java
for (int i = 1; i <= 10; i++) {
    System.out.println(i);
}
```

This code block will simply print the numbers 1 through 10 to the console. Although this example is simple, the applications are wide-reaching.

Here's a real world example in a hypothetical attendance taking program:

```java
// TODO
```

## While Loop

The `while` loop is the simplest loop you can write. It simply takes a condition as an argument, and continues executing the loop body each time the condition equates to `true`. A `while` loop will run _0 or more times_.

Example:

```java
int i = 1;

while (i <= 10) {
    System.out.println(i);
    i++;
}
```

## Do/While Loop

The `do/while` loop is kin to the `while` loop. The difference is when the condition is evaluated. In the loop structure, you'll notice that the condition succeeds the loop body. This is how you can tell them apart. In a `do/while` loop, the loop body will be executed _before_ it evaluates the condition. And since the condition must be `true` for the loop to continue, a `do/while` loop will always run _1 or more times_.

Example:

```java
int i = 1;

do {
    System.out.println(i);
    i++;
} while (i <= 10);
```

Now each of the loop examples up to this point have been the same outcome (because for the most part these loops can be used interchangeably), but the following example will illustrate the the subtle difference between a `while` and `do/while` loop.

```java
// while
// runs 0 or more times
int i = 1;

while (i < 1) {
    System.out.println(i);
    i++;
}

// do/while
// runs 1 or more times
int j = 1;

do {
    System.out.println(j);
    j++;
} while (j < 1);
```

In this case, the `while` loop will not start and the `do/while` loop will run once.

## ForEach Loop

The ForEach loop works similarly to the `for` loop, but it used to iterate of the values in a collection. It takes an initialization and the collection to iterate through.

Example:

```java
String[] names = {"Kvothe", "Simmon", "Wilem"};

for (String name : names) {
    System.out.printf("Hello %s!\n", name);
}
```

During each iteration, `name` is reassigned the value of the iterated-over value in the `String[] names`.

The output would be:

```txt
Hello Kvothe!
Hello Simmon!
Hello Wilem!
```
