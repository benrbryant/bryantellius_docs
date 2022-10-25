# Java Error and Exception Handling

## Debugger

Breakpoints

## Exceptions

**Exceptions** are errors that occur when the program is executing.

### Handling Exceptions

To prevent exceptions from crashing your program, you can use `try...catch` blocks.

```java
try {
    char[] characters = { 'a', 'b', 'c' };
    System.out.println(Character.toUpperCase(characters[3]));
} catch (Exception e) {
    e.printStackTrace();
}
```

In this code, I am attempting to reference the value at index 3 of the array. Since there is no value at index 3, this will throw an `ArrayIndexOutOfBoundsException` and typically crash my program.

However, since I have included the problematic code in a `try...catch` block, I will catch the thrown exception, print it's stack trace, and continue running the rest of my program.

You can chain `catch` blocks that handle specific exceptions specific different ways.

```java
try {
    char[] characters = { 'a', 'b', 'c' };
    System.out.println(Character.toUpperCase(characters[3]));
} catch (ArrayIndexOutOfBoundsException e) {
    e.printStackTrace();
    // handle one way for this specific error
} catch (Exception e) {
    // handle default exceptions this way
}
```
