# Java Operators

## Arithmetic Operators

Used for performing mathematical operations

| Operator | Description         |
| -------- | ------------------- |
| `+`      | Addition            |
| `-`      | Subtraction         |
| `*`      | Multiplication      |
| `/`      | Division            |
| `%`      | Remainder (Modulus) |

Examples:

```java
int x = 10;
int y = 2;

x + y; // 12
x - y; // 8
x * y; // 20
x / y; // 5
x % y; // 0
```

Keep in mind that operations work differently with different operands. Dividing integers will always result in an integer, which means that it will truncate the decimal value if the values cannot be divided evenly.

For example:

```java
int x = 10;
int y = 3;

System.out.println(x / y); // 3

double x2 = 10;
double y2 = 3;

System.out.println(x2 / y2); // 3.3333333333333335
```

### Concatenation

Concatenation is the operation of adding strings together. This will actually happen when you add _any_ value with a string. Examples:

```java
System.out.println("Hello World!" + true); // HelloWorld!true
```

## Assignment Operators

Assignment operators are used to assign a variable a value.

| Operator | Description                        |
| -------- | ---------------------------------- |
| `=`      | Assignment                         |
| `+=`     | Addition then Assignment           |
| `-=`     | Subtraction then Assignment        |
| `*=`     | Multiplication then Assignment     |
| `/=`     | Division then Assignment           |
| `%=`     | Division Remainder then Assignment |

Examples:

```java
// Assignment

int x = 10;

x += 10; // x is 20
x -= 5; // x is 15
x /= 3; // x is 5
x *= 20; // x is 100
x %= 9; // x is 1
```

## Comparison Operators

Comparison operators are used to compare two values and will always result in `true` or `false`.

| Operator | Description           |
| -------- | --------------------- |
| `==`     | Equality              |
| `!=`     | Inequality            |
| `>`      | Greater Than          |
| `>=`     | Greater Than or equal |
| `<`      | Less Than             |
| `<=`     | Less Than or equal    |

Examples:

```java
int x = 100;
int y == 101;

x == y; // false
x != y; // true
x > y; // false;
y < x; // true
x >= y; // false
y <= x; // true
```

## Logical Operators

Logical operators are used to introduce conditional logic.

| Operator | Description                                                        |
| -------- | ------------------------------------------------------------------ | --- | ------------------------------------------ |
| `&&`     | Logical AND requires both operands to be true                      |
| `        |                                                                    | `   | Logical OR requires one operand to be true |
| `!`      | Logical NOT equate to the negated _boolean_ value from the operand |

Examples:

```java
int x = 100;
int y = 101;
boolean isOnline = true;

x > y || isOnline; // true
x > y && isOnline; // false
!isOnline; // false
```

## Unary Operators

Unary operators are operators that operate on _one_ operand. We've already seen the `!` logical not operator. We'll introduce the rest below.

| Operator | Description                                                                          |
| -------- | ------------------------------------------------------------------------------------ |
| `!`      | Logical NOT negates the boolean value                                                |
| `+`      | Positive sign operator that indicates a positive number                              |
| `-`      | Negative sign operator that indicates a negative number                              |
| `++`     | Increment operator that increments a variable value by one and _reassigns_ the value |
| `--`     | Decrement operator that decrements a variable value by one and _reassigns_ the value |

Examples:

```java
boolean isOnline = true;
int x = 100;

!isOnline; // false
x++; // x is now 101
x--; // x is now 100

int y = x++;
// y is 100, x is now 101 because of postfix increment
// the postfix assigns y and then increments the value of x
int z = ++x;
// z is 102, x is now 102 because of prefix increment
// the prefix increments the value of x and then assigns z
```

Prefix and postfix increment/decrement can be difficult to understand. The rule is to pay attention to where the operator in relation to the operand. If the operator comes before the operand, then the operation (increment/decrement and reassignment) happens before the value is used in the current expression. If the operator comes after the operand, then the operation (increment/decrement and reassignment) happens after the value is used in the current expression.

Write more examples yourself to better understand some of these operators and what their results are with different data types. (\* Not all operators are compatible with all data types)
