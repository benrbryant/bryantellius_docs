/**
 * Dynamic Array
 *
 * Stores data elements based on an sequen­tial, most commonly 0 based, index.
 * Space O(n), Lookup O(1), Insertion O(1), Append O(1), Delete O(n)
 *
 * Good for lookups, appends, and caches.
 * Bad for inserts and deletes.
 */

const array = [1, 2, 3, 4, 5];

/**
 * Linked List
 *
 * Stores data with nodes that point to other nodes.
 * Space O(n), Lookup O(n), Insertion O(n), Append O(1), Prepend O(1)
 *
 * Good for adding a first or last element and deleting the first element.
 * Poor for lookups or updates.
 */

const head = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: null,
    },
  },
};

/**
 * Binary Search Tree
 *
 * Stores nodes with left (smaller) and right (larger) children
 * Space O(n), Lookup O(log n) Insertion O(log n)
 *
 * Good performance if balanced. Lookups are better than arrays, as well as inserts and deletes.
 * No O(1) operations.
 */

const root = {
  data: 3,
  left: {
    data: 1,
    left: null,
    right: null,
  },
  right: {
    data: 5,
    left: null,
    right: null,
  },
};

/**
 * Heap
 *
 * Stores nodes in a "complete binary tree", meaning all levels are filled before moving to a new level
 * Space O(n), Lookup min O(1), Insertion O(log n), Delete min O(log n)
 *
 * Good for accessing the smallest element (min heap), and is space-efficient.
 * Bad for lookups of items other than the smallest item.
 */

const heap = [1, 2, 4, 5, 8, 12, 45];

/**
 * Hash Table
 *
 * Stores data as key/value pairs
 * Space O(n), Lookup O(1), Insertion O(n), Delete O(1)
 *
 * Good for fast lookups.
 * Bad for ordered keys, key lookup, and cache-friendliness
 */

const hashTable = {
  key: "value",
};

/**
 * Stack
 *
 * Stores items in a LIFO order (Last In, First Out)
 * Space O(n), Append O(1), Delete Last O(1), Lookup First O(1)
 *
 * Good for fast append, delete last and quick lookup operations.
 */

const stack = ["third", "second", "first"];

/**
 * Queue
 *
 * Stores items in a FIFO order (First In, First Out)
 * Space O(n), Append O(1), Delete First O(1), Lookup First O(1)
 *
 * Good for fast append, delete first, and quick lookup.
 */

const queue = {
  data: 1,
  next: {
    data: 2,
    next: null,
  },
};

/**
 * Trie
 *
 * Stores strings in a tree structure
 * Space O(n * k), Lookup O(k), Insertion O(k)
 *
 * Good for efficient prefix queries (how many words start with "pre"?).
 * Bad for space-efficiency.
 */

// Not a standard data structure

/**
 * Graph
 *
 * Stores nodes in interconnected networks where nodes are connected by edges
 *
 * Good for representing links or relationships.
 * Bad for scale. Most algorithms run at O(n * log n).
 */

const graph = [[1, 2], [2], [4, 5, 6], [1, 6]];

// Adjacency Matrix, 0s and 1s determine of a node is connected to another node
const graph2 = [
  [0, 1, 0, 0],
  [1, 0, 1, 1],
  [0, 1, 0, 1],
  [0, 1, 1, 0],
];
