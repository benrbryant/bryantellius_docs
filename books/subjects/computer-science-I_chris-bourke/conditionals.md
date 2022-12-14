# Conditionals

"A _conditional_ statement", or _selection_ control structure, "interrupts this normal control flow and executes statements only if some specified condition holds true."

"Conditions in a program are specified by coding logical statements using _logical operators_."

## Logical Operators

### Comparison Operators

Binary operators used to evaluate to a boolean value.

| Operator | Description  | Example |
| -------- | ------------ | ------- |
| `==`     | equality     | 2 == 2  |
| `!=`     | inequality   | 3 != 2  |
| `>`      | greater than | 3 > 2   |
| `<`      | less than    | 1 < 2   |
| `>=`     | greater than | 2 >= 2  |
| `<=`     | less than    | 2 <= 2  |

### Negation

Unary operator that converts the inherent boolean value of a value in an expression to it's opposite. Represented by `!`.

### Logical Or, AND

The logical AND operator, or _conjuction_ operator, is a binary operator that returns true only if both operands are true. Represented by `&&`

The logical OR operator, or _conjuction_ operator, is a binary operator that returns true if at least one operand is true. Represented by `||`.

### Logical Considerations

"A statement that is always true regardless of the truth values of its variables is a _tautology_."

"A statement that is always false regardless of the truth values of its variables is a _contradiction_."

_De Morgan's Laws_ states that when a logical AND is negated, it is equal to an _unnegated_ logical OR. For example, `!(a && b) == !a || !b`, or `!(a || b) == !a && !b`.

### Short Circuiting

_Short circuiting_, or McCarthy's sequential conjunction operation, involves computers ignoring the second half of logical AND expressions if the first operand is false.

This is also seen with logical OR expressions if the first operand is true.

## Control Structures

- `if` - used with a condition, the associated code block is executed if the condition is true
- `else` - used without a condition, the associated code block is executed if the previous condition(s) is false
- `else if` - used with a condition, the associated code block is executed if the condition is true

You can chain many `if-else-if` structures together for form complex control flow.

## Exercises

### Exercise 1: Meal Discount

Given a subtotal and discount amount (if there a discount), calculate the total cost of the meal based on applied discount and tax rate.

Outline:

- Ask the user for a subtotal
- Ask the user if a discount should be applied
  - if yes, ask for the discount percentage
  - else 0
- Check to see if the discount percentage is above 100
  - if yes, output error message
- Calculate the total meal amount with the discount
- Calculate the total meal amount after tax
- Output total to the user

Pseudocode:

```txt
subTotal <- prompt the user for a subtotal
discountPercentage <- 0
hasDiscount <- prompt the user for a discount (yes/no)

IF hasDiscount = "yes" THEN
    discountPercentage <- prompt the user for a discount percentage
END

IF discountPercentage > 100 THEN
    output Error! Discount cannot be more than 100%
END

discount <- subTotal X discountPercentage
discountTotal <- subTotal - discount
tax <- taxRate X discountTotal
total <- discountTotal + tax

output subTotal, discountTotal, tax, total to user
```

JavaScript:

```js
let subTotal = parseFloat(prompt("Enter sub total:"));
let discountPercentage = 0;
let hasDiscount = prompt("Do you have a discount? (yes/no)");

if (hasDiscount == "yes") {
  discountPercentage = parseFloat(
    prompt("Enter the discount percentage amount:")
  );
}

if (discountPercentage > 100) {
  alert("Error! Discount cannot be more than 100%");
} else {
  let discount = 0;
  if (discountPercentage > 0) {
    discount = subTotal / discountPercentage;
  }
  let discountTotal = subTotal - discount;
  let tax = 0.15 * discountTotal;
  let total = discountTotal + tax;

  alert(`${subTotal}, ${discountTotal}, ${tax}, ${total}`);
}
```

Java:

```java
Scanner rl = new Scanner(System.in);

System.out.println("Enter sub total:");
double subTotal = rl.nextDouble();

int discountPercentage = 0;

System.out.println("Do you have a discount? (yes/no)");
boolean hasDiscount = rl.next().equals("yes");

if (hasDiscount) {
    System.out.println("Enter the discount percentage amount:");
    discountPercentage = rl.nextInt();
}

if (discountPercentage > 100) {
    System.out.println("Error! Discount cannot be more than 100%");
} else {
    double discount = 0;
    if (discountPercentage > 0) {
        discount = subTotal / discountPercentage;
    }
    double discountTotal = subTotal - discount;
    double tax = 0.15 * discountTotal;
    double total = discountTotal + tax;

    System.out.printf("Sub Total: %f\nDiscount Total: %f\nTax: %f\n==========\nTotal: %f", subTotal, discountTotal, tax, total);
}
```

### Exercise 2: Cartesian Plane

Given x and y coordinates in a Cartesian plane, output the quadrant or axis that the point lies on.

Outline:

- Ask the user for the x coordinate
- Ask the user for the y coordinate
- Check if the coordinates lie on an axis (coordinate is 0)
- Check which quadrant the point lies in if not on an axis
- Output the result

Pseudocode:

```txt
x <- prompt the user for x
y <- prompt the user for y
output <- ""


IF x = 0 OR y = 0 THEN
    IF x = 0 AND y = 0 THEN
        output <- Coordinate lies in the center
    ELSE IF x = 0 THEN
        output <- Coordinate lies on the y-axis
    ELSE
        output <- Coordinate lies on the x-axis
    END
ELSE
    IF x > 0 AND y > 0 THEN
        output <- Coordinate lies in the 1st Quadrant
    ELSE IF x > 0 AND y < 0 THEN
        output <- Coordinate lies in the 4th Quadrant
    ELSE IF x < 0 AND y < 0 THEN
        output <- Coordinate lies in the 3rd Quadrant
    ELSE
        output <- Coordinate lies in the 2nd Quadrant
    END
END

Display output to user
```

JavaScript:

```js
let x = parseInt(prompt("Enter the x coordinate:"));
let y = parseInt(prompt("Enter the y coordinate:"));
let output;

if (x == 0 || y == 0) {
  if (x == 0 && y == 0) {
    output = "Coordinate lies in the center";
  } else if (x == 0) {
    output = "Coordinate lies on the y-axis";
  } else {
    output = "Coordinate lies on the x-axis";
  }
} else {
  if (x > 0 && y > 0) {
    output = "Coordinate lies in the 1st Quadrant";
  } else if (x > 0 && y < 0) {
    output = "Coordinate lies in the 4th Quadrant";
  } else if (x < 0 && y < 0) {
    output = "Coordinate lies in the 3rd Quadrant";
  } else {
    output = "Coordinate lies in the 2nd Quadrant";
  }
}

alert(output);
```

Java

```java
Scanner rl = new Scanner(System.in);

System.out.println("Enter the x coordinate:");
int x = rl.nextInt();

System.out.println("Enter the y coordinate:");
int y = rl.nextInt();

String output;


if (x == 0 || y == 0) {
    if (x == 0 && y == 0) {
        output = "Coordinate lies in the center";
    } else if (x == 0) {
        output = "Coordinate lies on the y-axis";
    } else {
        output = "Coordinate lies on the x-axis";
    }
} else {
    if (x > 0 && y > 0) {
        output = "Coordinate lies in the 1st Quadrant";
    } else if (x > 0 && y < 0) {
        output = "Coordinate lies in the 4th Quadrant";
    } else if (x < 0 && y < 0) {
        output = "Coordinate lies in the 3rd Quadrant";
    } else {
        output = "Coordinate lies in the 2nd Quadrant";
    }
}

System.out.println(output);
```
