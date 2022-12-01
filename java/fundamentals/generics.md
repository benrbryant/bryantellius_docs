# Java Generics

Using Generics requires the code compiler to check the data types of values that are supplied to Lists, methods, etc

Here is an example using Generics with lists:

```java
List<String> strs = new ArrayList<>(); // the generics is specifying that the List collection will contain string objects
strs.add("Hello");

// versus
List<> strs = new ArrayList<>();
strs.add("Hello");
String word = (String) strs.get(0); // must use type casting without generics

```

Here is an example using a generic type parameter:

```java
// in this method, T is defined as a generic type variable for this scope
public static <T> ArrayList<T> toArrayList(T[] arr, ArrayList<T> arrList) {
    for (T obj : arr) {
        arrList.add(obj);
    }
    return arrList;
}

// versus
public static ArrayList<Object> toArrayList(Object[] arr, ArrayList<Object> arrList) {
    for (Object obj : arr) {
        arrList.add(obj);
    }
    return arrList;
}
```

## `varargs`

`varargs` is useful when you expect a variable amount of arguments to a method. This can be denoted by `...` in the parameter list, and will collect all parameters into an array for use in the method.

```java
public static int addWithVarArgs(int ... args) {
    return Arrays.stream(args).sum();
}
```

## Substitution Principle

The Substitution Principle, or the _Liskov Subsitution Principle_, allows variables to be assigned values of a subtype. In a simple example, if there is a Shape class, and a Square is a subtype of a Shape, then the following code is allowed:

```java
// Shape <- Square
Shape sq = new Square();
```

However, this is not the case for Lists of a given type as a parameter:

```java
public static void test() {
    List<Square> squares = new ArrayList<>();
    printShapes(squares); // won't work because a list of squares is not a list of shapes
}

public static printShapes(Shape[] arr) {
    // ...
}
```

## Wildcards

A wildcard is an unknown type in Java.

The previous `printShapes` method can be written as follows to avoid rewriting methods to conform to input data types:

```java
public static void test() {
    List<Square> squares = new ArrayList<>();
    printShapes(squares); // won't work because a list of squares is not a list of shapes
}

public static printShapes(List<? extends Shape> arr) {
    // ...
}
```

