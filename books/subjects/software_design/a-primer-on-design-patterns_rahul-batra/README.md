# A Primer on Design Patterns

By Rahul Batra

[Book Source](https://leanpub.com/aprimerondesignpatterns/read)

A **design pattern** is the reusable form of a solution to a design problem.

In 1994, _Design Patterns: Elements of Reusable Object-Oriented Software_ by Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides set the stage for univerally adopted design patterns. The book became known as the _GoF (Gang of Four) book_, and _GoF patterns_ within.

The patterns include:

- Abstract factory (creational)
- Builder (creational)
- Factory Method (creational)
- Prototype (creational)
- Singleton (creational)
- Adapter (structural)
- Bridge (structural)
- Composite (structural)
- Decorator (structural)
- Facade (structural)
- Flyweight (structural)
- Proxy (structural)
- Chain of responsibility (behavioral)
- Command (behavioral)
- Interpreter (behavioral)
- Iterator (behavioral)
- Memento (behavioral)
- Observer (behavioral)
- State (behavioral)
- Strategy (behavioral)
- Template Method (behavioral)
- Visitor (behavioral)

## Strategy Pattern

Example: Batch Task Processing System

A _batch task processing system_ is a system where jobs or tasks are put in a queue and executed one by one.

If you attempt _inheritance_, you may end up with "multiple generations of classes" that all contain an algorithm that exacerbates changes to the system and makes the design "brittle."

```ts
class TaskRunner {
  getNextTask() {
    // skeleton method
  }
}

class ShortestJobRunner extends TaskRunner {
  getNextTask() {
    // overrides and implements shortest job first algo
  }
}

class FirstComeFirstServeRunner extends TaskRunner {
  getNextTask() {
    // overrides and implements first-come first-serve algo
  }
}
```

However, you could focus on _composition_, where one interface includes the algorithm and any implementing class could contain it's specific version of the algorithm.

```ts
interface ITaskAlgorithm {
  getNextTask: Function;
}

class ShortestJobAlgorithm implements ITaskAlgorithm {
  getNextTask() {
    // implement shortest job first algo
  }
}

class FirstComeFirstServeAlgorithm implements ITaskAlgorithm {
  getNextTask() {
    // implement first-come first-serve algo
  }
}
```

> "...the key themes of design patterns is to identify what part of your code changes often, so that we can work around this variability without a redesign of the other parts."

So above is an interface and two classes with algorithm implementations (known as _concrete strategies_). The point is that we can now create a single level `TaskRunner` class with a `ITaskRunner strategy` member that can be assigned any algorithm implementation as long as it implements `ITaskAlgorithm`.

```ts
// ..cont.

class TaskRunner {
  strategy: ITaskAlgorithm;

  public setStrategy(strategy: ITaskAlgorithm): void {
    this.strategy = strategy;
  }

  public nextTask(): void {
    this.strategy.getNextTask();
  }
}

let scheduler: TaskRunner = new TaskRunner();
scheduler.setStrategy(new FirstComeFirstServeAlgorithm());
scheduler.nextTask();
scheduler.setStrategy(new ShortestJobAlgorithm());
scheduler.nextTask();
```

### Strategy Pattern Summary

_Strategy Pattern_, or policy pattern, is a "behavioral software design pattern that enables selecting an algorithm at runtime." In other words, this pattern defers the decision about with algorithm to use until runtime, _allowing the calling code to be more flexible and reusable without code duplication_.

## Decorator Pattern

Example: Find dialog in a text editor or page

A _Find_ dialog is an dialog that allows a user to search a file or directory for specified text or regular expression, and even replace that text.

Since there are several action combinations that the find dialog can complete, it may become unruly when dealing with the different permutations.

```ts
class FindDialog {
  public find(toFind: string) {
    // ...default find
  }
}

class FindWithRegex extends FindDialog {
  public find(toFind: string) {
    // ... with regex
  }
}

// ...
```

"The _decorator pattern_ is all about keeping the same _entity_ and _decorating_ it with additional features or responsibilities at runtime."

```ts
interface IFindDialog {
  find: (toFind: string) => void;
  displayHelp: () => void;
}

class SimpleFind implements IFindDialog {
  public find(toFind: string) {
    // ...
  }

  public displayHelp() {
    // ...
    console.log("Search current file for text.");
  }
}
```

The goal is to provide an outline for decorations to implement the `IFindDialog` interface. We'll create an _abstract class_ that implements `IFindDialog` that will "bind decorator writers to implement certain methods which all decorators should share."

```ts
abstract class FindDecorator implements IFindDialog {
  protected enhancedFind: IFindDialog;

  constructor(findDialog: IFindDialog) {
    this.enhancedFind = findDialog;
  }

  public abstract find(toFind: string): void;

  public displayHelp() {
    this.enhancedFind.displayHelp();
  }
}

class FindWithRegex extends FindDecorator {
  constructor(findDialog: IFindDialog) {
    super(findDialog);
  }

  public find(toFind: string) {
    // ...
  }

  public displayHelp(): void {
    super.displayHelp();
    console.log("[with TS compatible regular expressions]");
  }
}
```

Let's see how we could use this.

```ts
let findDialog: IFindDialog = new FindWithRegex(new SimpleFind());
findDialog.displayHelp();
findDialog.find("Hello World!");
```

In this case, we are instantiating a `FindWithRegex` instance that is _decorating_ the `SimpleFind` instance. There is no limit to how many decorations you can apply or the order in which you apply them. This would be dependent on use case.

### Decorator Pattern in Summary

The _decorator pattern_ allows behavior to be added, or _decorated_, to an individual object at runtime without affecting other objects of the same class. This provides a flexible alternative to sub-classing.

## Factory Pattern

