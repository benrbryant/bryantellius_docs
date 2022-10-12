# Working With Strings In Java

Strings are collections of characters surrounded by double quotes. The JVM uses a _string pool_ when checking for strings and creating new strings in a program.

## Creating a String

Create a string by:

1. Using a string literal - `String name = "Ben";
2. Using the `String` constructor - `String name = new String("Ben");

When you create a string literal, the JVM technically reuses the same instance of that string if it exists in the string pool. It will always create a new string with the `String` constructor.

Examples:

```java
// String Literal
String city = "Birmingham";
// or String Constructor
String state = new String("Alabama");
```

## Formatting a String

You can combine strings using _concatenation_.

You can format strings with the `String.format()` method.

The `format` method has _format specifiers_ for formatting specific values:

| Specifier | Description            |
| --------- | ---------------------- |
| `%s`      | strings                |
| `%c`      | unicode                |
| `%b`      | boolean                |
| `%d`      | decimal integer        |
| `%f`      | floating point numbers |
| `%o`      | octal integers         |
| `%x`      | hexadecimal integers   |
| `%e`      | scientific notation    |

Examples:

```java
// Concatenation
String fname = "Ben";
String lname = "Bryant";

System.out.println(fname + " " + lname);

// String.format
String fullName = "Ben Bryant";
int age = 25;
// string and decimal integer
String result = String.format("Hello my name is %s and I am %d years old.", fullName, age);
System.out.println(result);

// string, boolean, float, and scientific notation
float ageInDays = age * 365.25f;
boolean isOfAge = age > 21;

result = String.format("Hello, %s is %f days old. He is %e old as well. Is he old enough? Answer: %b.", fullName, ageInDays, ageInDays, isOfAge);
System.out.println(result);
```

## String Methods

There are many pre-defined methods for working with `String` types.

| Method        | Description                                                                       |
| ------------- | --------------------------------------------------------------------------------- |
| `length`      | returns the length of characters in a string                                      |
| `isEmpty`     | returns a `boolean` depending on if the string has contents                       |
| `split`       | returns an `Array` of split strings based on a _separator_ string or regex        |
| `join`        | returns a `String` value of multiple `Array` values joined together               |
| `toUpperCase` | returns a `String` value with all characters upper cased                          |
| `toLowerCase` | returns a `String` value with all characters lower cased                          |
| `equals`      | returns `boolean` value depending on if the strings has equal contents            |
| `replace`     | returns a `String` value with the matched contents replaced by the new contents   |
| `contains`    | returns a `boolean` value depending on if the `String` value contains a substring |


Examples:

```java

```