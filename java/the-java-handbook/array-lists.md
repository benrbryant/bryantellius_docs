# Java Array Lists

Java Arrays are statically sized, which means that once you create an array, it cannot grow larger than the created size. ArrayLists are similar to regular Arrays, but are dynamically sized.

## Creating an ArrayList

## Working with ArrayList Items

Although an ArrayList is zero-indexed like a regular Array, we must use special methods (not just bracket notation with an index) to work with the collection values.

| Method      | Description                                                                     |
| ----------- | ------------------------------------------------------------------------------- |
| `add`       | Adds an item (optionally provide an index first to insert at an index position) |
| `set`       | Updates an item at an index                                                     |
| `get`       | Retrieves an item by index                                                      |
| `remove`    | Removes an item by index or value                                               |
| `size`      | Returns the length of the collection                                            |
| `addAll`    | Adds all of the items from a provided collection                                |
| `removeAll` | Removes all of the items from a provided collection                             |
| `clear`     | Removes all items                                                               |
| `removeIf`  | Removes all items where the return condition is `true`                          |
| `clone`     | Copies the values from a list and returns a new collection                      |
| `equals`    | Checks the equality of list values                                              |
| `contains`  | Returns a boolean whether a provided value is contained within the list         |
| `isEmpty`   | Returns a boolean whether a list is empty                                       |
| `sort`      | Sorts list items based on a provided `Comparator` value                         |
| `retainAll` | Retains all values in the original that are present in the provided list        |
| `forEach`   | Calls a `predicate function` on each value in the list                          |

Phew, that is a lot, so we'll stop there and look of some examples of these before introducing more.

Examples:

```java
ArrayList<String> names = new ArrayList<>();

// add items
names.add("Kvothe");
names.add("Simmon");
names.add("Wilem");

// get item
System.out.printf("The value at index 1 is: %s\n", names.get(1));

// set item
names.set(2, "Wil");

System.out.printf("The value at index 2 is changed: %s\n", names.get(2));

// remove
names.remove(0);

// size
System.out.printf("The length of the ArrayList is now: %d\n", names.size());

// contains
System.out.printf("Names currently contains 'Kvothe': %b\n", names.contains("Kvothe"));

// removeIf
// removes names if they are less than 5 characters
names.removeIf(name -> name.length() < 5);

// toString
System.out.printf("The names ArrayList is now: %s\n", names.toString());

// clear
names.clear();

// isEmpty
System.out.printf("The names ArrayList is now empty: %b\n", names.isEmpty());
```
