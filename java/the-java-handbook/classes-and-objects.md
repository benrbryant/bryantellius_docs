# Classes and Objects in Java

Objects are structures that contain data and actions (code blocks). Generally, the data is assigned to _fields_ or _properties_ on an object, and the actions are _methods_.

Classes are structures (often referred to as "blueprints") used to create object of a certain type, that has defined properties and methods.

## Creating a Class

Typically, classes are allocated their own file in a project. The next few sections will focus on a `Person` class.

Start by creating a new Java Class file called `Person`.

```java
public class Person {

}
```

### Defining Properties

Properties, or _fields_, are data stored on an object. We can define those directly on the class.

```java
import java.time.LocalDate;

public class Person {
    String firstName;
    String lastName;
    LocalDate dob;
}
```

Here we are defining three properties, `firstName`, `lastName`, and `dob` for any given `Person`. `LocalDate` is used to represent "a date without a time-zone in the ISO-8601 calendar system, such as 2007-12-03." We'll use that to store `Person` date-of-birth values.

> NOTE: You can initiate properties with default values. Ex: `String firstName = "Some Name";`

Properties can be accessed via the instance and _dot notation_.

```java
// creates an object from the Person class
Person testPerson = new Person();

testPerson.firstName = "Test";
testPerson.lastName = "Person";
testPerson.dob = LocalDate.now();

System.out.printf("%s %s was born in %d", testPerson.firstName, testPerson.lastName, testPerson.dob.getYear());
```

### Defining Methods

Methods are actions, or code blocks, stores on objects. Methods can access the object properties and methods through the `this` keyword.

```java
public void greet() {
    System.out.println("Hello! My name is " + this.firstName);
}
```

Here we have a method called `greet`, that is defined with a `void` return type. The method simply prints out a greeting message. Notice that is references the `Person.firstName` value of the specific instance for which the `greet` method is called. It can simply reference that value through the `this` keyword.

Now instances from this class can call a `greet` method.

```java
testPerson.greet();
```

#### Method Overloading

We can define several use cases for any given method. Let's say that we want the `Person` to be able to greet with or without a provide name. As is `"Hello!"` vs. `"Hello, <name>!"`. We can define this distinction through _method overloading_, where we will define a method several different ways.

```java
public void greet() {
    System.out.println("Hello! My name is " + this.firstName);
}

public void greet(String name) {
    System.out.println("Hello " + name + "! My name is " + this.firstName);
}
```

These methods have the same name, and normally that would result in a error. But, since we have defined the `greet` method a second time that takes a parameter, it is _overloaded_ and can be used either way.

```java
testPerson.greet(); // prints "Hello! My name is Test"

testPerson.greet("World"); // prints "Hello World! My name is Test"
```

### Constructors

A _constructor_ is a special method on a class that is called when instances are created from a class. It has the same name as the class and usually assigns values to properties at creation. Like other methods, they can accept parameters.

```java
public Person(String firstName, String lastName, String dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = LocalDate.parse(dob);
}
```

Now we can initiate a `Person` object with `firstName`, `lastName`, and `dob` property values.

```java
/*
Without constructor parameters
Person testPerson = new Person();
testPerson.firstName = "Test";
testPerson.lastName = "Person";
testPerson.dob = LocalDate.now();
*/

// With Constructor parameters
Person testPerson = new Person("Test", "Person", "2022-10-20");
```

### Access Modifiers

We can control the access of properties and methods with _access modifiers_.

| Type      | Description                                |
| --------- | ------------------------------------------ |
| Default   | Accessible within the package              |
| Public    | Accessible anywhere                        |
| Private   | Accessible within the class                |
| Protected | Accessible within the class and subclasses |

If data and actions should be limited for use by specific interfaces, then we should consider making them `private` or at least `protected`.

Within our `Person` class, let's make the `dob` property private.

```java
public class Person {
    public String firstName;
    public String lastName;
    private LocalDate dob;

    // ...
}
```

That should break our code, since we printed out the `testPerson.dob` earlier within the `main` method. That's because we no longer have access to the `dob` property from outside of the class. We will often want to define the access of properties and methods depending on our use cases.

### Getters and Setters

Since we've introduced _access modifiers_, the next topic answers the following question: How can we change the value of a `private` property?

_Getters and setters_ are methods that are designed to _get_ a property value a certain way and _set_ a property value a certain way, especially if they are `private` or `protected`.

They conventionally start with `get` and `set`, followed by the name of the field.

Let's write a getter and setter for the `dob` field on `Person`.

```java
private LocalDate dob;

public String getDob() {
    return this.dob.toString();
}

public void setDob(String dob) {
    this.dob = LocalDate.parse(dob);
}
```

Now we can call these methods to either get the value of or set the value of the `dob` property.

> NOTE: The reason why access modifiers and getters and setters are useful is the _control of access_ to properties and methods. This adheres to the Object-Oriented Programming concept of **_Encapsulation_**.

### Inheritance

Classes can _inherit_ from one another, similar to how we speak of genealogy inheritance. In our case, we can have many specific kinds of `Person`'s.

To create a class that inherits from another class, we use the `extends` keyword followed by the name of the _super_ class, or parent class.

```java
public class Coder extends Person {
    // ...
}
```

We need to define a constructor that will pass the required values to the `Person` class constructor. When we do that, we can call the `Person` class constructor through the `super` keyword.

```java
public String language;

public Coder(String firstName, String lastName, String dob, String language) {
    super(firstName, lastName, dob);

    this.language = language;
}
```

Now we've defined a property called `language` for the `Coder` class, and defined a constructor that will call the `super` constructor and update the `Coder` language upon instantiation.

#### Method Overriding

Method overriding is similar to method overloading, but between classes. Let's say we want all `Person` objects to be able to greet, but `Coder` objects greet different than regular `Person`'s.

We can _override_ the `greet` method to make it specific to the `Coder` class. As we redefine the method, we can add an annotation, `@Override`, that explicitly specifies that we are overriding this method.

```java
@Override
public void greet() {
    System.out.println("Hello world! My name is " + this.firstName + " " + this.lastName + " and I code in " + this.language + "!");
}
```

Now we can use the `Coder` class as follows:

```java
Coder webDev = new Coder("John", "Doe", LocalDate.now().toString(), "JavaScript");
webDev.greet(); // prints "Hello world! My name is John Doe and I code in JavaScript!"
```
