# Java Variables and Data Types

## Variable Declaration and Assignment

Declare variables with `<type> <name>` syntax.

Assign values to variables with the `=` assignment operator.

You cannot redeclare variables.

Variables can start with letters, `_` or `$`. Variable names are case sensitive and _conventionally_ follow **camel-casing**.

Variables that are `final`, ex: `final string name`, cannot be re-assigned. However, they can be declared and assigned a value later.

## Data Types

### Primitive Data Types

Java has the following 8 different primitive data types.

| Data Type | Description                                                                                       | Example        |
| --------- | ------------------------------------------------------------------------------------------------- | -------------- |
| `byte`    | 8-bit signed integer within the range of -128 to 127                                              | `127`          |
| `short`   | 16-bit signed integer within the range of -32,768 to 32,767                                       | `16,000`       |
| `int`     | 32-bit signed integer within the range of -2147483648 to 2147483647                               | `123456789`    |
| `long`    | 64-bit signed integer within the range of -9223372036854775808 to 9223372036854775807             | `101112131415` |
| `float`   | single-precision 32-bit floating point within the range of 1.4E-45 to 3.4028235E38                | `3.14f`        |
| `double`  | double-precision 64-bit floating point within the range of 4.9E-324 to 1.7976931348623157E308     | -5E-100        |
| `boolean` | logical value of true or false                                                                    | `true`         |
| `char`    | single 16-bit Unicode character within the range of \u0000 (or 0) to \uffff (or 65,535 inclusive) | `'a'`          |

## Type Conversion

### Implicit Type Conversion

Values can be implicitly converted to _larger_ data types. For example:

```java
int ageInYears = 25;
double ageInDays = ageInYears * 365.25; // 9131.25 which is a double data type
```

### Explicit Type Conversion

Values can be explicitly converted to _smaller_ data types via _type casting_. For example:

```java
double daysInYear = 365.25;
int daysOld = 25 * (int)daysInYear; // explicitly converted to int of 365
```

## Wrapper Classes

Primitive data types have _wrapper classes_ that have defined methods for interacting with the primitive data.

For example:

```java
int agePrim = 25; // primitive data type for integers
Int ageRef = 25; // reference data type for integers

ageRef.intValue(); // returns primitive value
```
