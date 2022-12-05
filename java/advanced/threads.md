# Java Threads

A **process** "is defined as an entity which represents the basic unit of work to be implemented in the system."

A **thread** "is a flow of execution through the process code, with its own program counter that keeps track of which instruction to execute next, system registers which hold its current working variables, and a stack which contains the execution history."

A process can use several threads, or put another way, use multiple CPU cores.

Use threads for blocking I/O operations, GUI applications, and independent tasks

Every Java program will at least run with one thread.

## Handling Multiple Threads

There is more than one way to handle threads in Java.

1. Extend the `Thread` class
2. Implement the `Runnable` interface

## Handling Synchronized Operations

If multiple threads are trying to access the same object data at the same time, you could run into race conditions. You can add a `synchronized` keyword on a method to disable multiple threads from entering a method at the same time.

> A **deadlock** is when two or more threads are stuck waiting for the same resource to become available.

You can create a `synchronized` block that only allows a single thread to access a code block at one time.

One solution to avoid having a thread deadlock is having threads requesting the same object first within a synchronized code block.
