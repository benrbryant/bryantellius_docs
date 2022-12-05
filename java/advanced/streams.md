# Java Streams

Streams use internal iteration, while traditional for loops use external iteration. Streams make iterations easier to read, abstract, organize, and parallelize.

Streams contain _lazy_ methods and _eager_ methods. Lazy methods operate on some of the items before they enter the stream (i.e. filter). Eager methods operate on all of the items once they are in the stream (i.e. forEach).

Streams support lambdas. The following is an example:

```java
ArrayList<String> names = new ArrayList<>();
    names.add("Andrew");
    names.add("Ben");
    names.add("Caleb");
    names.add("Daniel");
    names.add("Andy");
    names.add("David");

    names.stream().filter(n -> n.startsWith("A")).forEach(System.out::println);
```

## Parallel Streams

Streams can be run in _parallel_ by using the `parallelStream` method instead of `stream`. If you are iterating over a very large data set, especially more than once, it is computationally efficient to do this in parallel. If you do not have a large data set, use the regular `stream` method.
