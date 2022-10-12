# Java CLI Inputs and Outputs

It's common to take a user's input and display output with a console in programming languages. Here's how we can do that in Java.

## Output

You can print to the console several ways. I'll detail a few below:

```java
// prints inline
System.out.print("Hello World!");

// prints on a newline
System.out.println("Hello World");

// prints a formatted string
System.out.printf("%s is %d years old", "Ben Bryant", 25);
```

## Input

You can take input from the console using the `Scanner` object.

You'll need to import the `Scanner` class to instantiate a `Scanner` instance, then you can use methods to get user input.

```java
// at the top of the file
import java.util.Scanner;

// in the method

Scanner scanner = new Scanner(System.in);

System.out.println("Who are you?");

String name = scanner.nextLine();

System.out.printf("Welcome back, %s! What is your id number?\n", name);

int id = scanner.nextInt();

// clears the newline character from the enter key
scanner.nextLine();

System.out.printf("Logged in as User-%d. What is your department name?\n", id);

String department = scanner.nextLine();

System.out.printf("Looking up details for %s-%d...", department, id);

scanner.close();
```
