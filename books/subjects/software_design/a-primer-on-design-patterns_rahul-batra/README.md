# A Primer on Design Patterns

By Rahul Batra

[Book Source](https://leanpub.com/aprimerondesignpatterns/read)

## Table of Contents

1. [Strategy Pattern](#strategy-pattern)
2. [Decorator Pattern](#decorator-pattern)
3. [Factory Pattern](#factory-pattern)
4. [Observer](#observer-pattern)
5. [Template Method Pattern](#template-method-pattern)
6. [Singleton Pattern](#singleton-pattern)

## Notes

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

Example: Management Application Supporting Different Notes

The issue at hand, is that we may support several different types of Notes (e.g. Rich Notes, Outline Notes, Simple Notes). However, calling the constructor of a single `Note` class cannot return a specific object instance of the type of note we want to create. This is where a _factory_ comes in.

```ts
abstract class Note {}

class RichNote extends Note {}

class OutlineNote extends Note {}

class NoteFactory {
  private type: string;

  constructor(type: string) {
    this.type = type;
  }

  public createNote() {
    if (this.type == "Rich") {
      return new RichNote();
    } else if (this.type == "Outline") {
      return new OutlineNote();
    }
  }
}
```

In the above example code, there is a _Simple Factory_ implementation where a factory class has a `createNote` method that returns a specific type of note instance.

The note classes are derived from a `Note` abstract class, which is abstract because, in this case, notes will specifically be of a specific type.

### Simple Factory vs Factory Method

Earlier is an example of a simple factory. There is a factory class that contains a method that returns the instance of a specific type of note.

The Gang of Four authors of _Design Patterns_ in 1994 suggested the _factory method pattern_. See below:

```ts
abstract class Note {}

class RichNote extends Note {}

class OutlineNote extends Note {}

abstract class NoteFactory {
  title: string;

  public abstract createNote(): Note;
}

class RichNoteFactory extends NoteFactory {
  public createNote(): Note {
    return new RichNote();
  }
}

class OutlineNoteFactory extends NoteFactory {
  public createNote(): Note {
    return new OutlineNote();
  }
}
```

This difference here lies in the potential specializations that you can create by basing specific factories on an abstract factory class.

### Factory Pattern Summary

The _Factory Pattern_ "defines an interface for creating an object, but let's subclasses decide which class to instantiate." In other words, allowing subclasses to define how to instantiate objects by overriding a factory method used to created derived types.

## Observer Pattern

Example: Blog Entry Subscription

The _Observer Pattern_ defines a "one-to-many dependency between objects", where each of its dependents can be notified of a change in its state. This pattern can fit into many examples where observer _subscribes_ to data or events.

```ts
class Reader {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  public notify() {
    // ...
    console.log(`${this.name} is notified...`);
  }
}

class Blog {
  subscribers: Reader[];
  posts: any[];
  author: string;

  constructor(name: string) {
    this.subscribers = [];
    this.posts = [];
    this.author = name;
  }

  public subscribe(reader: Reader) {
    this.subscribers.push(reader);
  }

  public notifySubscribers() {
    for (let reader of this.subscribers) {
      reader.notify();
    }
  }

  public addPost(post: string) {
    this.posts.push(post);
    console.log(`${this.author} added a post...`);
    this.notifySubscribers();
  }
}
```

In this example, `Blog` is an _observable_ and `Reader` is an _observer_ that is subscribed to new blog posts. `Blog` is responsible for keeping track of, and updating all readers that are subscribed to it.

### Observer Pattern Summary

The _Observer Pattern_ consists of an object (subject or _observable_) that "maintains a list of its dependents, called _observers_, and notifies them automatically of any _state changes_." This is a pattern that enables object dependency without forcing tight object coupling.

## Template Method Pattern

Example: Mail Client Application

As far as mail applications go, there are a variety of headers that need to exist, starting with plain text vs html emails.

```ts
abstract class Mail {
  contentTypeHeader: string;

  getText(source: InputSource) {}

  public abstract applyHeaders(): void;

  public fillAddressFields(fields: Fields) {}

  public authSMTP(user: string, password: string, method: string) {}

  public sendMailUsingSMTP(conn: SMTPConnection) {}

  public sendMail() {
    this.getText();
    this.applyHeaders();
    this.fillAddressFields();
    this.authSMTP();
    this.sendMailUsingSMTP();
  }
}

class PlainTextMail extends Mail {
  public applyHeaders(): void {
    this.contentTypeHeader = "text/plain";
  }
}

class HTMLMail extends Mail {
  public applyHeaders(): void {
    this.contentTypeHeader = "text/plain";
  }

  public fillAddressFields(fields: Fields): void {
    this.replyTo = fields.getReplyToValue();
  }
}
```

In this example, `sendMail` is a _template method_ that "fixes the steps for an algorithm or procedure", or in this case calling the methods to send an email. The subclasses override any methods that need specification, and a _template method_ is used to sequence the mailing steps in a single method.

> The `fillAddressFields` method of `HTMLMail` is an example of _method overriding_, specifically a _hook_ where we are "hooking on an additional implementation" of the default `fillAddressFields` method of `Mail`. _Hook_ methods generally have empty method bodies, but not always.

### Template Method Pattern Summary

The _Template Method Pattern_ consists of a method in a superclass that executes a series of steps, or calls defined methods to complete an action. These defined methods are available for specification by subclasses through _method overriding_ and _hook methods_.

## Singleton Pattern

A _Singleton_ class is a class that produces only _one_ instance. Any subsequent constructor call returns the existing single instance. This is particularly useful in database connections and loggers.

```ts
class DatabaseConnection {
  private static dbConn: DatabaseConnection;

  private constructor() {
    // ...
  }

  public static getDBConnection(): DatabaseConnection {
    if (this.dbConn == undefined) {
      this.dbConn = new DatabaseConnection();
    }

    return this.dbConn;
  }
}
```

The idea is that the `constructor` of the single class is listed as _private_, and a static variable and method are responsible for controlling the instantiation and providence of the singleton to the calling code base.

### Disclaimer: Issues with Singletons

A couple issues with singletons are:

- multithreading issues
- single-responsibility principle
- bottle necking

First, if your program is multithreaded, it could be possible that both threads instantiate an instance of the singleton, which defeats the purpose of having _one instance_.

> This can be fixed by labeling the `getDBConnection` as `synchronized` in Java and related languages, or by instantiating the singleton when the class is created, rather than when the first `getDBConnection` is called.

Second, having a singleton be responsible for it's on creation _and_ whatever else functionality it's responsible for violates the _single-responsibility principle_.

Third, if a significant part of your application uses the singleton, there could come times when your code is becomes hung up.

## Singleton Pattern Summary

The _Singleton Pattern_ consists of a class that only produces a _single instance_. Singletons do not pollute the global namespace, permit lazy allocation and initialization, and "can be used as a basis for other design patterns, such as the abstract factory, factory method, builder and prototype patterns."
