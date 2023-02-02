# Code Simplicity

By Max Kanat-Alexander

[Source (PDF)](https://www.codesimplicity.com/wp-content/uploads/2022/05/CodeSimplicity.pdf)

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

Incremental Design and Development implemented with creating small, simple pieces of that make up a whole program ensures that you code can remain simple and maintainable over time.

