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
 String testStr = "Hello World!";
// length
int testStrLength = testStr.length();
// isEmpty
if (testStr.isEmpty()) {
    System.out.println("Uh oh. The testStr is empty!");
} else {
    // split
    String[] words = testStr.split(" ");

    System.out.printf("The words in '%s' are:\n", testStr);

    for (int i = 0; i < words.length; i++) {
        System.out.println(words[i].toUpperCase());
    }

    // contains
    System.out.printf("\n%s contains 'World': %b", testStr, testStr.contains("World"));

    // replace (replaceAll will replace all occurrences of the substring)
    System.out.printf("\nIn '%s', 'l' characters will be replaced with '1' characters: %s", testStr, testStr.replaceAll("l", "1"));

    // equals and toLowerCase
    System.out.printf("\n%s is the same as %s", testStr, testStr.toLowerCase());
}

System.out.printf("\n%s is %d characters long.", testStr, testStrLength);
```

Working with strings is very prevalent in any programming language, so it's great to review these methods, format specifiers, escape characters and more. Review the following:

- [Java Strings Documentation](https://docs.oracle.com/en/java/javase/19/docs/api/java.base/java/lang/String.html)
- [JavaTPoint - Java Format Specifiers](https://www.javatpoint.com/java-output-formatting#:~:text=Java%20String%20Format%20Specifiers%20%20%20%20Format,%20Decimal%20Integer%20%209%20more%20rows%20)
- [JavaTPoint - Java Escape Characters](https://www.javatpoint.com/java-escape-characters#:~:text=List%20of%20Java%20Escape%20Characters%20%20%20,return%20i%20...%20%204%20more%20rows%20)
