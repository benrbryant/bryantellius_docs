// LOOPING A TRIANGLE

/*
Output the following "triangle" as a string:

#
##
###
####
#####
######
#######
*/
let solution = "";
for (let i = 1; i <= 7; i++) {
  solution += "#".repeat(i);
  if (i != 7) solution += "\n";
}
console.log(solution);

// FIZZBUZZ

/*
Output "Fizz" (divisible by 3), "Buzz" (divisible by 5), or "FizzBuzz" (divisible by 3 AND 5) for all numbers from 1-100:

1 -> ""
2 -> ""
3 -> "Fizz"
4 -> ""
5 -> "Buzz"
...
15 -> "FizzBuzz"
*/
for (let i = 1, output = ""; i <= 100; i++) {
  if (i % 3 == 0) output += "Fizz";
  if (i % 5 == 0) output += "Buzz";
  console.log(i, output);
  output = "";
}

// CHESSBOARD

/*
Output the following 8x8 grid as a string:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
*/
let size = 8;
let board = "";
for (let row = 1; row <= size; row++) {
  for (let col = 1; col <= size; col++) {
    board += (row + col) % 2 == 0 ? " " : "#";
    if (col == size && row != size) board += "\n"; 
  }
}
console.log(board);
