// SUM OF A RANGE

/*
Write a function called range that accepts start, end, and step parameters, and returns an array of numbers based on the inputs.

Write a function called sum that returns the sum of all numbers in a provided array parameter.
*/
function range(start = 0, end = -1, step = 1) {
  let output = [];
  for (let i = start; i <= end; i += step) {
    output.push(i);
  }
  return output;
}

function sum(nums) {
  return nums.reduce((acc, num) => acc + num, 0);
}

console.log(sum(range(1, 5))); // expects 15

// REVERSING AN ARRAY

/*
Write a function called reverseArray that accepts an array, and returns a new array that has a reverse order from the original.

Write a function called reverseArrayInPlace that accepts an array, and returns the array value sorted in place.

Do not use Array.reverse.
*/
function reverseArray(arr) {
  let output = [...arr];
  for (let i = 0; i < output.length / 2; i++) {
    let temp = output[i];
    output[i] = output[output.length - i - 1];
    output[output.length - i - 1] = temp;
  }
  return output;
}

function reverseArrayInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
  return arr;
}

console.log(reverseArray([1, 2, 3]), reverseArrayInPlace([1, 2, 3])); // expects [3, 2, 1] and [3, 2, 1]

// A LINKED LIST

/*
Write a function called arrayToList that accepts an array, and returns a linked list data structure.

Write a function called listToArray that accepts a linked list, and returns an array.

Write a function called prepend that accepts a new element and a linked list, and returns a new linked list with the new element as the head. 

Write a function called nth that accepts a linked list and a number, and returns the value at the number position (zero-indexed) in the linked list.
*/
function arrayToList(arr) {
  let tempArr = [...arr];
  let linkedList = { value: tempArr.pop(), next: null };
  while (tempArr.length) {
    linkedList = { value: tempArr.pop(), next: { ...linkedList } };
  }
  return linkedList;
}

function listToArray(list) {
  let arr = [];
  let linkedList = { ...list };
  while (linkedList) {
    arr.push(linkedList.value);
    linkedList = linkedList.next;
  }
  return arr;
}

function prepend(list, item) {
  let linkedList = { value: item, next: { ...list } };
  return linkedList;
}

function nth(list, pos) {
  let linkedList = { ...list };
  let count = 0;
  while (linkedList.next) {
    if (count++ == pos) return linkedList.value;
    linkedList = linkedList.next;
  }
  return null;
}

console.log(nth(arrayToList([1, 2, 3, 4, 5]), 3)); // expects 4
console.log(nth(prepend(arrayToList([1, 2, 3, 4, 5]), 0), 3)); // expects 3
console.log(
  listToArray({ value: 0, next: { value: 1, next: { value: 2, next: null } } })
); // expects [0, 1, 2]

// DEEP COMPARISON

/*
Write a function called deepEqual that accepts two values and returns true of false if they are equal, or if all of their properties are equal. 
*/
function deepEqual(a, b) {
  if (
    a !== null &&
    b !== null &&
    typeof a == "object" &&
    typeof b == "object"
  ) {
    for (let key in a) {
      if (!b.hasOwnProperty(key) || !deepEqual(a[key], b[key])) return false;
    }

    return true;
  } else {
    return a === b;
  }
}

console.log(deepEqual(1, 2)); // expects false
console.log(deepEqual("Hello", "Hello")); // expects true
console.log(deepEqual([1, 2, 3], [1, 2, 3])); // expects true
console.log(deepEqual([{ val: [1, 2, 3] }, { val: [1, 2, 3] }], [{ val: [1, 2, 3] }, { val: [1, 2, 3] }])); // expects true
console.log(deepEqual({ test: "yes" }, { test: "no" })); // expects false
console.log(deepEqual({ test: "yes" }, { bad: "no" })); // expects false
