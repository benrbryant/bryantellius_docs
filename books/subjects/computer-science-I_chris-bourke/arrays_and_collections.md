# Arrays, Collections and Dynamic Memory

An array is an example of an _ordered collection_ of data.

Arrays can be _statically_ or _dynamically_ allocated.

In statically typed languages, you generally must declare the array data type and the array size. Dynamically typed languages allow you to store values of any type in an array.

Array elements are positioned based on _zero-indexing_. "An index is
an integer that specifies an element in the array."

When copying arrays, or really any _reference_ value, there is _shallow_ and _deep_ copying.

_Shallow_ copying refers to copying a reference value stored in a variable, which is really copying the _memory address_ to the data value in memory.

_Deep_ copying is what we generally think of when we copy elements. The contents of a variable's reference value is copied to the new variable.

## Exercises

### Exercise 1: Maximum Element in a Array

Write a function to return the index of the maximum element in an array
of numbers.

Pseudocode:

```txt
FUNCTION findMax(array)
    max <- array[0]

    FOR i <- 0; i <= array's length; i <- i + 1
        IF array[i] > max
            max <- array[i]
        END
    END

    return max
END
```

JavaScript:

```js
// using a for loop

function findMax(array) {
  let max = array[0];
  for (let i = 0; i <= array.length; i++) {
    if (array[i] > max) max = array[i];
  }
  return max;
}

// or using reduce

function reduceMax(array) {
  return array.reduce((max, num) => (num > max ? num : max));
}

// or using Math.max and the rest operator

function restMax(array) {
  return Math.max(...array);
}
```

Java:

```java
// using a foreach loop

public static int findMax(int [] array) {
    int max = array[0];
    for (int i : array) {
        if (i > max) max = i;
    }
    return max;
}

// using a stream

public static int streamMax(int [] array) {
    OptionalInt max = Arrays.stream(array).max();
    if (max.isPresent()) return max.getAsInt();
    else return 0;
}
```

### Exercise 2: Minimum Element in an Array

Write a function to return the index of the minimum element in an array
of numbers.

Pseudocode:

```txt
FUNCTION findMin(array)
    min <- array[0]

    FOR i <- 0; i <= array's length; i <- i + 1
        IF min > array[i]
            min <- array[i]
        END
    END

    return min
END
```

JavaScript:

```js
// using a for loop

function findMin(array) {
  let min = array[0];
  for (let i = 0; i <= array.length; i++) {
    if (min > array[i]) min = array[i];
  }
  return min;
}

// or using reduce

function reduceMin(array) {
  return array.reduce((min, num) => (min > num ? num : min));
}

// or using Math.min and the rest operator

function restMin(array) {
  return Math.min(...array);
}
```

Java:

```java
// using a foreach loop

public static int findMin(int [] array) {
    int min = array[0];
    for (int i : array) {
        if (min > i) min = i;
    }
    return min;
}

// using a stream

public static int streamMin(int [] array) {
    OptionalInt min = Arrays.stream(array).min();
    if (min.isPresent()) return min.getAsInt();
    else return 0;
}
```

### Exercise 3: Average of an Array

Write a function to compute the mean (average) of an array of numbers.

Pseudocode:

```txt
FUNCTION findAverage(array)
    sum <- array[0]

    FOR i <- 1; i <= array's length; i <- i + 1
        sum <- sum + array[i]
    END

    return sum / array's length
END
```

JavaScript:

```js
// using a for loop

function findAverage(array) {
  let sum = array[0];
  for (let i = 1; i <= array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

// or using reduce

function reduceMin(array) {
  return array.reduce((sum, num) => sum + num) / array.length;
}
```

Java:

```java
// using a foreach loop

public static int findAverage(int [] array) {
    int sum = 0;
    for (int i : array) {
        sum += i;
    }
    return sum / array.length;
}

// using a stream

public static int streamAverage(int [] array) {
    return Arrays.stream(array).sum() / array.length;
}
```

### Exercise 4: Adding Arrays

Write a function that takes two arrays A, B and creates and returns a
new array that is the concatenation of the two. That is, the new array will contain all
elements a followed by all elements in b.

Pseudocode:

```txt
FUNCTION addArrays(arrayA, arrayB)
    ab <- new array of length arrayA + arrayB
    idx <- 0

    FOR i <- 1; i <= arrayA's length; i <- i + 1
        ab[idx] = arrayA[i]
        idx <- idx + 1
    END

    FOR i <- 1; i <= arrayB's length; i <- i + 1
        ab[idx] = arrayB[i]
        idx <- idx + 1
    END

    return ab
END
```

JavaScript:

```js
// using a for loop

function addArrays(arrayA, arrayB) {
  let ab = [];
  let idx = 0;

  for (let i = 1; i <= arrayA.length; i++) {
    ab[idx] = arrayA[i];
    idx++;
  }

  for (let i = 1; i <= arrayB.length; i++) {
    ab[idx] = arrayB[i];
    idx++;
  }

  return ab;
}

// or using concat

function addWithConcat(arrayA, arrayB) {
  return arrayA.concat(arrayB);
}
```

Java:

```java
// using foreach loops

public static int[] addArrays(int[] arrayA, int[] arrayB) {
    int[] ab = new int[arrayA.length + arrayB.length];
    int idx = 0;

    for (int n : arrayA) {
        ab[idx] = n;
        idx++;
    }

    for (int n : arrayB) {
        ab[idx] = n;
        idx++;
    }

    return ab;
}

// using a stream

public static int[] streamAdd(int[] arrayA, int[] arrayB) {
    return IntStream.concat(Arrays.stream(arrayA), Arrays.stream(arrayB)).toArray();
}
```

### Exercise 5: Adding Sorted Arrays in Order

Write a function that takes two arrays of numbers that are sorted and
merges them into one array (returning a new array as a result).

Pseudocode:

```txt
FUNCTION addSortedArrays(arrayA, arrayB)
    ab <- new array of length arrayA + arrayB
    idxA <- 0
    idxB <- 0

    FOR i <- 0; i <= ab's length; i <- i + 1
        IF arrayA[idxA] < arrayB[idxB]
            ab[i] = arrayA[idxA]
            idxA <- idxA + 1
        ELSE IF arrayB[idxB] < arrayA[idxA]
            ab[i] = arrayB[idxB]
            idxB <- idxB + 1
        END

    return ab
END
```

JavaScript:

```js
// adding sorted arrays without additional sorting

function addSortedArrays(arrayA, arrayB) {
  let ab = [];
  let idxA = 0;
  let idxB = 0;

  for (let i = 0; i < arrayA.length + arrayB.length; i++) {
    if (idxA < arrayA.length && idxB == arrayB.length) {
      ab[i] = arrayA[idxA];
      idxA++;
    } else if (idxB < arrayB.length && idxA == arrayA.length) {
      ab[i] = arrayB[idxB];
      idxB++;
    } else {
      if (arrayA[idxA] < arrayB[idxB]) {
        ab[i] = arrayA[idxA];
        idxA++;
      } else {
        ab[i] = arrayB[idxB];
        idxB++;
      }
    }
  }
  return ab;
}
```

Java:

```java
// adding sorted arrays without additional sorting

public static int[] addSortedArrays(int[] arrayA, int[] arrayB) {
    int[] ab = new int[arrayA.length + arrayB.length];
    int idxA = 0;
    int idxB = 0;

    for (int i = 0; i < ab.length; i++) {
        if (idxA < arrayA.length && idxB == arrayB.length) {
            ab[i] = arrayA[idxA];
            idxA++;
        } else if (idxB < arrayB.length && idxA == arrayA.length) {
            ab[i] = arrayB[idxB];
            idxB++;
        } else {
            if (arrayA[idxA] < arrayB[idxB]) {
                ab[i] = arrayA[idxA];
                idxA++;
            } else {
                ab[i] = arrayB[idxB];
                idxB++;
            }
        }
    }
    return ab;
}
```
