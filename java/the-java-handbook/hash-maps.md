# Working with HashMaps in Java

HashMaps are collections that store values as key/value pairs. This is similar to objects in JavaScript.

## Creating a HashMap

To create a HashMap in Java, start by importing the class from the `java.util` package.

You'll instantiate instances from this class with the `new` keyword followed by the constructor.

When you assign a HashMap instance to a variable, you must define the key _and_ value data type.

Example:

```java
import java.util.HashMap;

// ... inside of a class > method

HashMap<String, String> addressBook = new HashMap<>();
```

This will create a HashMap collection that will store `String` values at `String` keys. We'll add values to this `addressBook` in the next section.

## Working with HashMap Values

There are many methods defined to allow us to work with HashMap values. Below are a few to get started:

| Method          | Description                                                                       |
| --------------- | --------------------------------------------------------------------------------- |
| `put`           | Adds a value at a provided key                                                    |
| `putIfAbsent`   | Adds a value at a provided key if it currently does not exist                     |
| `get`           | Retrieves an item by key                                                          |
| `getOrDefault`  | Retrieves an item by key, or returns a default value if it does not exist         |
| `replace`       | Updates an item at a key                                                          |
| `remove`        | Removes an item by key                                                            |
| `size`          | Returns the length of the collection                                              |
| `clear`         | Removes all items                                                                 |
| `putAll`        | Adds all of the items from a provided collection _of the same type_               |
| `replaceAll`    | Replaces all of the items within a collection based on a given predicate function |
| `containsKey`   | Returns a boolean whether a provided key is contained within the HashMap          |
| `containsValue` | Returns a boolean whether a provided value is contained within the HashMap        |
| `isEmpty`       | Returns a boolean whether a HashMap is empty                                      |
| `forEach`       | Calls a `predicate function` on each key/value pair in the HashMap                |

This is a "short list" of really useful methods for HashMaps. There are more to learn, but let's take a look at some of these in action.

Examples:

```java
public static void statePopulationPractice() {
    HashMap<String, Integer> statePopulations = new HashMap<>();

    // put, adds to a HashMap
    statePopulations.put("California", 39613493);
    statePopulations.put("Texas", 29730311);
    statePopulations.put("Florida", 21944577);

    showHashMap(statePopulations, "After .put(California, Texas, Florida)");

    // putIf, only adds if not present
    statePopulations.putIfAbsent("New York", 19299981);

    showHashMap(statePopulations, "After .putIfAbsent(New York)");

    // get, retrieves a value by a key
    statePopulations.get("New York"); // 19299981
    statePopulations.get("Alabama"); // null since it does not exist on the HashMap

    // getOrDefault, retrieves a value or the default if it does not exist
    statePopulations.getOrDefault("Alabama", 0); // 0, since there is no value at the key "Alabama"

    // containsKey, checks if a key exists
    if (statePopulations.containsKey("California")) {
        System.out.println("Successfully finds 'California'");
    }

    // containsValue, checks if a value exists
    if (statePopulations.containsValue(29730311)) {
        System.out.println("Successfully finds 29730311 at 'Texas'");
    }

    // forEach, iterates over each key,value pair and calls a predicate function
    statePopulations.forEach((state, population) -> {
        System.out.printf("\n%s has a population of %d", state, population);
    });

    // clear, removes all key/value pairs
    statePopulations.clear();

    showHashMap(statePopulations, "After .clear()");

    // isEmpty, checks if the HashMap is empty
    if (statePopulations.isEmpty()) {
        System.out.println("Finished!");
    } else {
        System.out.println("Something is not right.. HashMap should be empty.");
    }
}

public static void showHashMap(HashMap<String, Integer> hashMap, String message) {
    System.out.printf("\n%s:\n%s\n", message, hashMap.toString());
}
```

Now that's quite a bit of code, but I include it this way to encourage you to practice these methods in similar way. Make it your own and have fun, but _writing_ the code and _repeating_ the code will instill the syntax and make it second nature for you.
