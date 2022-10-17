# Working With Arrays in Java

An Array is a reference data type that is used for containing multiple values of the same type of data, primitive or non-primitive, in sequential order within a single data structure.

## Creating an Array

You can create an Array by by using:

-the `new` keyword and the containing data type followed by square brackets with a number representing the length of the array

- square brackets containing the array values

For example:

```java
// creates an empty array of 5 length
int[] numbers1 = new int[5];

// creates a 5 length array storing the integers 1, 2, 3, 4, 5
int[] numbers2 = { 1, 2, 3, 4, 5 };

for (int i = 0; i < numbers1.length; i++) {
    // assigns an integer at the index i
    numbers1[i] = (i + 1) * 5;
}

// uses Array.toString()
System.out.println("numbers1 contents: " + Arrays.toString(numbers1));
System.out.println("numbers2 contents: " + Arrays.toString(numbers2));
```

Notice how we accessed the _length_ property of the `number1` array to check it's length, and iterate the loop until it reached the last index of the array.

Then, we use the index number surrounded by square brackets to reference and in this case _assign_ new values at each index.

## Array Methods via `java.util.Arrays`

Using the `java.util.Arrays` class, you can use many methods such as:

- `toString`
- `deepToString`
- `asList`
- `binarySearch`
- `copyOf`
- `copyOfRange`
- `equals`
- `deepsEquals`
- `sort`
- `fill`

Read more about these methods at [java.util.Arrays class docs](https://docs.oracle.com/javase/7/docs/api/java/util/Arrays.html).
