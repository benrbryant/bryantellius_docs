// MINIMUM

/*
Write a function called min that returns the minimum of two number parameters.
Do not use Math.min.
*/
function min(a, b) {
    return a > b ? b : a;
}

console.log(min(10, 11)); // expects 10;

// RECURSION

/*
Write a function called isEven that recursively returns true or false whether a provided number is even or not. 
*/
function isEven(n) {
    if (n > 1) return isEven(n - 2);
    return n == 0;
}

console.log(isEven(10)); // expects true

// BEAN COUNTING

/* 
Write a function called countChar that takes in two arguments, a string and a character, and returns the count it's occurrences in the string.

Write a function countBs that takes a string as its only argument
and returns a number that indicates how many uppercase "B" characters there are in the string.
Use countChar.
*/
function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) count++;
    }
    return count;
}

function countBs(str) {
    return countChar(str, "B");
}

console.log(countBs("Ben Bryant")); // expects 2