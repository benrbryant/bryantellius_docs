# Agile Planning: From Ideas to Story Cards

By Launch School

[Book Source](https://launchschool.com/books/agile_planning)

## Table of Contents

- [What is Agile?](#what-is-agile)
- [Business Cycle](#business-cycle)
- [Planning Cycle](#planning-cycle)
- [Sprint Cycle](#sprint-cycle)
- [Release Cycle](#release-cycle)
- [The Planning Process](#the-planning-process)
- [To Do App Example](#to-do-app-example)
    - [Application Concept](#application-concept)
    - [Developing Personas](#developing-personas)
    - [Writing Scenarios](#writing-scenarios)
    - [Storyboarding and Wireframes](#storyboarding-and-wireframes)
    - [Epics and Stories](#epics-and-stories)
    - [Story Writing Workshops](#story-writing-workshops)
    - [Product Backlog](#product-backlog)

## Notes

### What is Agile?

_Agile_ is "an incremental approach to building [software projects], such that a team is in position to change directions quickly."

The four values of agile are:

1. Individuals and interactions over processes and tools
2. Working software over comprehensive documentation
3. Customer collaboration over contract negotiation
4. Responding to change over following a plan

Along with the four core values are [12 principles](http://agilemanifesto.org/principles.html).

For example, number 7 states, "Working software is the primary measure of progress."

The whole focus is to get to _working software_. Once there, you can obtain user feedback and continue the agile iterative process of prioritization of features, implementation, testing, releasing, and feedback.

> The Pareto Law states when applied to software development states that 80% of users will only use 20% of features.

Agile is focused in four primary feedback loops:

1. Business Cycle
2. Planning Cycle
3. Release Cycle
4. Sprint Cycle

### Business Cycle

At the highest level, the business cycle includes _identifying a need_, _conceptualizing a solution_, _building a solution_, and _measuring user feedback_. This cycle can vary in time depending on the size and product of the company, and should be flexible to change.

### Planning Cycle

Planning cycles are used to create a set of features and deliver releases to end users. These features are based on _personas_ of users and the solutions they need.

### Release Cycle

The Software Release iteration involves planning and implementing _feature_ releases, as opposed to releasing the entirety of the software at once.

### Sprint Cycle

The Sprint cycle is the feedback loop for the development process. Typically 2 to 4 weeks, development teams prioritize, divvy, execute and review work on features.

### The Planning Process

The planning process has the following stages:

- Application Concept: What is the application solving? Who is it solving it for?
- Developing Personas: Describe the user.
- Writing Scenarios: Describe how the user would use the software to solve their problem.
- Storyboarding and Wireframes: Visualize the application and how the user would interact with it.
- Writing Epics: More specifically describe how the user would use the software to solve their problem based on the storyboards and wireframes.
- Breaking Down Epics to Stories: Create _user stories_ by further breaking down epics into issues that create product value. These will go into the _product backlog_.

### To Do App Example

#### Application Concept

For the first example, we will use a _To Do List Application_ where users can track their tasks online.

#### Developing Personas

This step involves defining who your users are and what will help them most.

We will create _bios_ for prospective users that are called _personas_.

The idea is to describe a specific person. This can be a fun process. We'll define a title, name, image and demographic background for our user. Next, we'll detail out motivations, goals, and tasks for our person. We'll describe her technological aptitude as well. All of this is used to create a _persona sheet_ that encompasses all of the imagined details surrounding our prospective user.

We'll have many different personas.

For example:

```txt
Title: Stay At Home Mom
Name: Norris
Age: 33
Gender: Female
Marital Status: Married
Family Status: 2 kids, 5 and 2
Educational Status: Masters Degree in Speech Pathology
Work Status: Stay-Home Mom, NA

Norris is an organized, habitual mother who prides herself on her efficiency. She dedicates her days to rearing her small children with her husband who works from home.

Goals:
- Ensure her kids learn and have fun
- Manage finances so they can save for the kids and retirement
- Be on top of her family duties and never miss appointments

Tasks:
- Takes kids to and from school and appointments
- Runs errands, picking up groceries and similar
- Attends schools and church meetings

Technical Practice:
Norris uses the internet, word processors/spreadsheets weekly, across mobile to laptop devices. She asks her husband for any technical solutions or is quick to contact a support team.
```

#### Writing Scenarios

_Scenarios_ are important because they relate details to the development team for a deeper understanding of the users' characteristics.

Scenarios at least need to cover the who, what, when, where, how, why pattern.

We'll write some scenarios for Norris using our To Do app.

1. Recording a Task

Norris and her 2 year old are on a play date with a friend. They are discussing the child's upcoming birthday. Norris is planning on a hosting a birthday party for her daughter, and her friend gives her a lead for finding a balloon arch provider. Norris pulls out her cell phone and launches her To Do app. She creates a new task to call the balloon supplier at the number her friend gave her.

2. Viewing Tasks

Norris just sat down for breakfast with her 5 and 2 year old, and she pulls out her phone to review her tasks for the day. She likes to get an overview of what is required to be done for the day so that she can plan ahead.

3. Setting Reminders

Norris hasn't filed her taxes yet, but she always likes to stay one step ahead. Since she wants to make this task a priority, she adds a due date and reminder to the created task so that is prioritized over other, less important tasks.

4. Organizing Tasks

Norris is very organized with her daily life and routine. Since she has tasks that spread over different aspects of her life, she has begun to create lists of tasks that are titled and grouped by different categories (e.g. kids, home, personal).

5. Sharing Tasks with others

Norris is going on a girls trip for the weekend, and wants to share her "kids" list task with her husband for him to complete while she's away. She shares the list with her husband, who can now see the shared list when he opens the To Do app.

#### Storyboarding and Wireframes

"In software development, storyboarding is the creation of a series of images to represent key points in user interaction."

_Storyboards_ will be visual interpretations of our _scenarios_.

_Wireframes_ will be a visual interface that will begin to define the different elements' placements while still shying away from stylistic details. These interfaces will be derived from the scenarios and storyboards.

#### Epics and Stories

The next step in the Agile Planning process is to break down the wireframes (_artifacts_) into smaller, manageable pieces of functionality (_epics_ and _stories_) that developers can estimate and complete in a sprint iteration.

The breakdown process is:

1. Just-In-time, meaning we breakdown and process what we need _right now_
2. Continuous, meaning there will always (_seemingly_) be more scenarios/storyboards/wireframes to iteratively breakdown

Users stories need to small and specific. They following the following format:

```txt
Involved User First:

As a [user type]
I want to [perform an action]
In order to [achieve some value]

- or -

Derived Value First:

In order to [achieve some value]
As a [user type]
I want to [perform an action]
```

> The order of these three statements depend on your company/dev team priority. Is the user involved first? Or is the value derived first?

These three statements _need to be specific to the user_ and answer the "Who", "What", and "Why".

Furthering the conversation, Ron Jeffries developed the "The 3 C's:

- Card: a small reminder of who, what, why that identifies the requirement of the user story
- Conversation: where the details of the card are discussed
- Confirmation: acceptance tests based on the card and conversation

_Acceptance tests_ are statements that define requirements for the software based on user stories. These can and generally are later implemented as automated tests.

For example:

```txt
Given...
When...
Then...

Given I am on the todo home page
When I click the "New" button to add a task
And I input a message to describe the task
And I select a due date for the task
And I click the "Save" button
Then I should see a success alert notify me "Task Created"
And my newly created task should be in "My Tasks" list on the home page
```

#### Story Writing Workshops

Story writing workshops consist of product owners, designers, and developers collaborating on filling out the backlog of user stories. It should not be a one-time event to scope out the project in entirety.

"The goal of the initial story writing process is to create enough estimable stories that the development team can use to plan a release."

Two dangers that arise from trying to plan the whole product in one writing workshop are:

- Fatigue: often there are too many user stories to break down a one time while still being production and equal minded
- Uncertainty: some features or needs will not be known during the initial writing process

From our earlier scenarios, here are a view _epics_ and _user stories_:

```txt
Epic:

As a stay at home mom user
I want to create category lists to place my tasks
In order to better organize and differentiate my tasks

Stories:

As a stay at home mom user
I want to create a new list
In order to manage new lists for tasks

As a stay at home mom user
I want to place selected tasks in a list
In order to categorize new or existing tasks

As a stay at home mom user
I want to delete a list
In order to clean up any unused lists
```

When writing user stories, Bill Wake created a mnemonic for keeping on track:

- Independent: stories should have as few dependencies as possible
- Negotiable: stories in the backlog should be flexible to changes
- Valuable: stories should be value; they should solve _real_ and _current_ user problems
- Estimate: stories should be small and clear enough to estimate complexity
- Scalable or Small: stories that are small and scalable are easier to estimate and change
- Testable: stories that pass acceptance tests are can then easily be considered "done'

#### Product Backlog

The many user stories that have been created form the _product backlog_.

"The agile product backlog is a _prioritized_ features list, containing short descriptions of all functionality desired in the product."

The product backlog should be:

- visible to everyone
- the single source of truth
- dynamic

Along with user stories, the product backlog includes:

- _bugs_: work related to a defect
- _chores_: work, often technical, that has no direct business value (updating project dependencies, etc)
- _spikes_: work that represents "proof of concepts"
