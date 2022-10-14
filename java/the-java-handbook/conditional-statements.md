# Java Control Flow

To introduce logic in your program, you can use _conditional_ statements.

## If/Else

`if` statements are followed by a _condition_ (that evaluates to a `boolean`) and a code block to execute when the condition evaluates to `true`.

`else` follows `if` statements, and is itself followed by a code block to execute when the condition of the `if` statement evaluates to `false`.

`if` statements can be followed by `else if` statements that chain another `if` condition in sequence. If the first condition is false, it will continue to check the sequential conditions.

Examples:

```java
String secret = "LUCIUS FOX";
Scanner scanner = new Scanner(System.in);

System.out.println("..'Type your name when you are finished'..");

String answer = scanner.nextLine();

if (secret.equals(answer.toUpperCase())) {
    System.out.println("System shutting down...");
} else {
    System.out.println("Incorrect Passcode >:(");
}
```

## Switch Case

A `switch` statement takes a value and evaluates it against many `case` expressions. If the value equals the `case`, then a code block associated with the `case` expression is executed.

`break` keywords inform the program to exit the `switch` statement when a case is matched. Otherwise, if no `break` keywords were reached, the program would continue to try and match cases in the switch statement, even after you found a match.

Examples:

```java
Scanner scanner = new Scanner(System.in);
String operators = "+-*/";

System.out.print("First number: ");

int x = scanner.nextInt();

scanner.nextLine();

System.out.print("Operation ('+', '-', '*', '/'): ");

String op = scanner.next();

scanner.nextLine();

if (!operators.contains(op)) {
    System.out.println("Invalid operator.\nGood bye!");
} else {
    System.out.print("Second number: ");

    int y = scanner.nextInt();

    scanner.nextLine();

    double result;

    switch (op) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "*":
            result = x * y;
            break;
        case "/":
            result = x / y;
            break;
        default:
            result = 0;
    }

    System.out.printf("%d %s %d = %f", x, op, y, result);
}
```
