# Code Simplicity

By Max Kanat-Alexander

✅ [Source (PDF)](https://www.codesimplicity.com/wp-content/uploads/2022/05/CodeSimplicity.pdf)

## Table of Contents

1. [Chapter 1: Intro](#chapter-1-intro)
2. [Chapter 2: The Purpose of Software](#chapter-2-the-purpose-of-software)
3. [Chapter 3: The Future](#chapter-3-the-future)
4. [Chapter 4: Change](#chapter-4-change)
5. [Chapter 5: Defects and Design](#chapter-5-defects-and-design)
6. [Chapter 6: Simplicity](#chapter-6-simplicity)
7. [Chapter 7: Complexity](#chapter-7-complexity)
8. [Chapter 8: Testing](#chapter-8-testing)

## Chapter 1: Intro

To improve the result, you must improve the code.

"Programming, in essence, must become the act of reducing complexity to simplicity."

Every developer on a team is a software designer.

## Chapter 2: The Purpose of Software

"The Purpose of software is to _help people_."

"...your potential ability to write good software is limited only by your ability to conceive of helping another."

## Chapter 3: The Future

The Equation of Software Design: D = V / E

- D: desirability of a change
- V: value of a change
- E: effort involved with completing a change

"The desirability of any change is directly proportional to the value of the
change and inversely proportional to the effort involved in making the
change"

### What is Value?

"The degree to which this change helps anybody anywhere"

Research is an important way to gauge prospective feature value

Value is composed of two elements:

- the probability of value (how likely is the feature capable of creating change)
- the potential value (how much change can it create)

"Calculating a change's value includes considering how mch harm it may do, and balancing that against the help it brings."

### What is Effort?

Effort is usually measured in hours worked.

It is important to consider _all time spent_ on a project or feature, not just time spent programming. This may include communication time, programming, brain storming sessions, research, etc.

### What is Maintenance?

Maintenance includes the effort and value of a feature over _time_.

Features take effort to be maintained. Some features more than others.

Features may increase or decrease in value over time.

So when calculating value and effort, maintenance, current value, and future value must also be considered.

Ultimately, "the desireability of a change is directly proportional to the value now plus the future value, and inversely proportional to the effort of implementation plus the effort of maintenance."

**Reducing the effort of maintenance is more important than reducing the effort of implementation.**

### Quality of Design

**The quality level of your design should be proportional to the length of future time in which your system will continue to help people.**

## Chapter 4: Change

**The longer your program exists, the more probable it is that any piece of it will have to change.**

### The Three Flaws

There are 3 mistakes that developers make when dealing with the Law of Change:

1. Writing code that isn't needed
2. Not making the code easy to change
3. Being too generic

#### Writing Unneeded Code

YAGNI, or "you ain't gonna need it"

When you attempt to predict the future of a program or environment, you can end up writing code that will never be used. Stick to the task/feature at hand, and write code when you need it.

**Don't write code until you actually need it, and remove any code that isn't being used.**

#### Making the Code Hard to Change

Code that is hard to change, or "rigid design" can happen by:

1. Making too many assumptions about the future
2. Writing code without enough design

**Code should be designed based on what you know now, not on what you think will happen in the future.**

#### Being Too Generic

"Overengineering" - designing a solution so generic that it will accommodate for every possible future situation.

**Be only as generic as you know you need to be right now.**

### Incremental Development and Design

_Incremental development and design_ involves developing features in a system piece by piece, and can be a combatant to avoiding the three flaws listed earlier.

Design -> develop -> Redesign -> develop -> Redesign -> etc...

> Incremental development is a method of building up a hole system by doing work in small pieces.

## Chapter 5: Defects and Design

The Law of Defect Probability states that **the chance of introducing a defect into your program is proportional to the size of the changes you make to it.**

More defects directly increases maintenance.

In many cases, smaller changes lead to less defects that leads to less maintenance.

**The best design is the one that allows for the most change in the environment with the least change in the software.**

Only fix a problem when there is _significant evidence_ of there being a problem.

**In any particular system, any piece of information should, ideally, exist only once.** AKA DRY

Code reusability reduces future changes in your program, thus reducing the probability of defects.

## Chapter 6: Simplicity

The Law of Simplicity states that **the ease of maintenance of any piece of software is proportional to the simplicity of its individual pieces.**

Incremental Design and Development implemented to create small, simple pieces that make up a whole program ensures that you code can remain simple and maintainable over time.

Be as simple and understandable as possible. Your code should be as easy as possible for new programmers to understand, and your program should be as easy as possible for your users to understand.

_Consistency_ is one way to add simplicity to your codebase.

**Readability of code depends primarily on how space is occupied by letters and symbols.**

Names should be descriptive without being verbose.

The code should be readable enough for someone to understand what it does. Comments should be used for _why_ code is used for a specific purpose.

**_Simplicity requires design_**

## Chapter 7: Complexity

"Complexity leads to more complexity leads to more complexity"

Some ways that complexity is added:

1. New features
2. Expanding the purpose of the software
3. Adding programmers
4. Changing things that don't need to be changed
5. Being locked into bad technologies
6. Misunderstanding
7. Poor or no design
8. Reinventing the wheel

Contain complexity by sticking to the software's _purpose_.

Understanding the problem is the first step to writing a simple solution.

### How to Avoid Bad Technologies

There are three factors that can determine if a technology is good or bad:

1. Survival Potential - the likelihood that is continues to be maintained
2. Interoperability - the ease of which you could switch to using a different technology
3. Attention to Quality - the rate or existence of improvement in code quality

### Complex Problems

Some problems can be terribly complex to understand; however, this doesn't mean that the solution can't be simple.

**Many difficult design problems can be solved by simply drawing or writing them out on paper.**

### Handling Complexity

If some pieces of software of complex, try to redesign the pieces to be smaller and simpler.

If complex pieces cannot be reduced, then those pieces can be contained or _hidden_ from the rest of the codebase. From the outside-in, the code will appear simple.

## Chapter 8: Testing

The Law of Testing states that **the degree to which you know how your software behaves is the degree to which you have accurately tested it.**

Or more simply, **unless you've tried it, you don't know that it works.**
