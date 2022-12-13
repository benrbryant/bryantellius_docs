# Basics

## Control Flow

_Control flow_ defines how a program processes instructions.

"The state of a program is the value of all its variables adn other information/data stored in memory at a given moment during its execution"

_Procedural programming_ is derived from _imperative programming_, and consists of procedures, or subroutines (i.e. functions or methods), that carry out computational steps.

## Flowcharts

Legend for reading flowcharts:

- Decision nodes - diamond shaped box
- Control performances - blue box
- Action performances - green box

## Variables

"A variable is essentially a memory location in which a value can be stored."

Values in a program are stored and represented by certain _data types_. The foremost of which are _numeric types_.

Values can be stored and referenced through _variables_. Variables are labelled by _identifiers_, or names, that adhere to general naming conventions (can start with letters, `$`, `_`, etc).

### Naming Conventions

| Convention        | Example     |
| ----------------- | ----------- |
| Underscore Casing | `full_name` |
| Camel Casing      | `fullName`  |
| Pascal Casing     | `FullName`  |

In general, decide names that are descriptive and self-documenting names without being verbose. Avoid abbreviated or shortened names unless clearly or universally understood.

> FUN FACT: Words that have no plural form are _plurale tantum_ while words with no singular form are _singular tantum_. Words with singular and plural forms being the same are _unchanging irregular plurals_.

### Variable Types

Variables are the location of _values_. These values have specific data types that determine how much memory they take up, and ultimately how they are used in a program.

#### Numeric Types

The most basic data type is _numeric data_

For example, integers represent positive or negative whole numbers, while floating point numeric values represent positive or negative decimal numbers.

> `0b` is conventionally prefixed to binary numbers
> Representing negative numbers in binary is achieved with _two's complement_, where one bit is designated to refer to the sign of a number

The _Institute of Electrical and Electronics Engineers (IEEE) 754 Standard_ defines fixed bit ranges for floating point numbers (decimals, or _radix_) that include the sign (for negative numbers), _mantissa_ (significand), and exponent.

> FUN FACT: "The first 80 digits of π are 3.14159265358979323846264338327950288419716939937510582097494459230781640628620899 though only 39 digits of π are required to accurately calculate the volume of the known universe to within one atom."

Most languages support single (32 bits) and double (64 bits) precisions since that is what is supported by most hardware.

Some languages support _arbitrary precision_ format for numbers where more memory is allocated dynamically for larger numbers, but this comes at a computational cost depending on the memory used.

#### Textual Types

Text characters are encoded and assigned numbers to represent their value. The _American Standard Code for Information Interchange_, or ASCII, uses 8 bits (1 byte) to assign decimal numbers to characters. For example, 'A' is 65, 'B' is 66, 'b' is 98, etc. The limitation to ASCII, since it was developed in the 60s, is that it can only represent 256 values with 8 bits.

Today, we use Unicode encoding, most commonly UTF-8, which can represent 1,112,064 total values and is backwards compatible to support ASCII.

Character and String (sequence of characters) types in code are defined by `'` or `"` respectively (e.g. `'s'` for a single character, `"sauce"` for a string).

#### Boolean Types

_Boolean_ values are logical values that are typically explicitly represented with `true` or `false`. The following expression implicitly evaluates to a Boolean value: `x == 10`.

#### Object and Reference Types

"Objects and structures allow you to group multiple pieces of data together into one logical entity: this is known as _encapsulation_."

_User-defined_ types are stored as a _reference or pointer_ in a variable.

`null` is typically used to represent an invalid, uninitialized, or missing reference.

_Enumerated_ data types, or `enum`'s, are common user-defined types that assign a list of keywords to integers. For example, `north=0`, `south=1`, `east=2`, and `west=3`.

#### Dynamic vs Static Typing

"A language that requires you to declare a variable and its type is a _statically typed_ language."

For example in Java:

```java
String myName = "Ben"; // variable is declared as a String
```

On the other hand, most _interpreted languages_ infer the type of the variable during runtime, which is _dynamic typing_.

For example in JavaScript:

```js
let myName = "Ben"; // variable is inferred to be a string, since that is what was assigned
```

### Variable Scope

"The scope of a variable is the section of code in which a variable is valid or 'known'.".

A _globally scoped_ variable is accessible throughout the entirety of a program, though is it discouraged to use global variable unless absolutely necessary.

Example:

```java
boolean isOnline = true;


if (isOnline) {
    int age = 25; // only accessible within the defined block scope
}

System.out.println(age); // SyntaxError: age is not defined
```

## Operators

Operations in a program are initiated by use of _operators_, symbols used with _operands_ to perform an action.

Below is a list of assignment and arithmetic operators:

| Operator | Description                        | Example        |
| -------- | ---------------------------------- | -------------- |
| `=`      | Assignment                         | `int age = 25` |
| `+`      | Addition or Concatenation          | `age + 1`      |
| `-`      | Subtraction                        | `age - 1`      |
| `*`      | Multiplication                     | `age * 365`    |
| `/`      | Division                           | `age / 10`     |
| `%`      | Remainder (Modulo)                 | `age % 2`      |
| `+=`     | Addition Compound Assignment       | `age += 5`     |
| `-=`     | Subtraction Compound Assignment    | `age -= 5`     |
| `*=`     | Multiplication Compound Assignment | `age *= 365`   |
| `/=`     | Division Compound Assignment       | `age /= 10`    |
| `%=`     | Remainder Compound Assignment      | `age %= 2`     |

## Basic Input and Output

