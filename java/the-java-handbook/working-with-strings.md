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
| `%d`      | decimal/integer        |
| `%f`      | floating point numbers |
| `%o`      | octal integers         |
| `%x`      | hexadecimal integers   |
| `%e`      | scientific notation    |

Examples:

```java

```

## String Methods
