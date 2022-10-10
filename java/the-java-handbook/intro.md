# Java Introduction and Syntax

## Brief Syntax Breakdown

Here's an example of a Java `Main` class:

```java
// in Main.java file

public class Main
{
    public static void main(String[] args)
    {
        System.out.println("Hello World!");
    }
}
```

Java looks for a `Main.java` file as the entry point to an application. Each source code file _generally_ has **one** top-level class with the same name as the file.

The `Main` class always has a `main` method that starts with the signature `public static void` to indicate that it is a public, static method that has no return value.

The `System.out.println` is a method on the system output instance that will print provided arguments.

## JVM, JRE, and JDK

The Java Virtual Machine, or **JVM**, will receive _bytecode_, which is a compilation of your source code, to run a program. It is not binary, nor is it human readable. It's a cross between so that Java can remain _cross-platform_.

The Java Runtime Environment, or **JRE**, is an implementation of the JVM as well as included Java libraries required for running Java programs.

The Java Development Kit, or **JDK**, is a superset of the JRE that comes in different shapes and sizes. You'll use a JDK to develop Java applications.

## Getting Started with JDK and IntellijIDEA

Install the official JDK at [https://www.oracle.com/java/technologies/downloads/](https://www.oracle.com/java/technologies/downloads/)

Install IntellijIDEA Community at [https://www.jetbrains.com/idea/](https://www.jetbrains.com/idea/)
