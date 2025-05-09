// NOTE: first challenge

// This method, which is supposed to return the result of dividing its first argument
// by its second, isn't always return correct values. Fix it

const solve = (x: number, y: number) => x; // y

// solution solve = (x, y) => x / y

// NOTE: second challenge

// Write a function that takes an array of numbers and returns the sum of the numbers.
// If the array does not contain any numbers return 0

const sum = (numbers: number[]) => numbers.reduce((acc, n) => acc + n, 0);

// NOTE: third challenge

// print array elements with comma delimiters
// type here, actually don't matter, i decided to go with number
const printArray = (array: number[]) => array.join(",");

// NOTE: fourth challange

// Write a function that removes all exclamaition marks from a given string
// better way to do it so const removeAllExclamationMarks = (s: string) => s.replaceAll("!", "");
const removeExclamationMarks = (s: string) => s.replace(/!/gi, "");

// NOTE: fifth challange: kinda harder then before

// Create a function that accepts a string and return a 26 characters long binary string ie 100100
// if one of the character of alphabet represented in the given string swap 0 with 1 in place where character belongs in the alphabet
// like a = 1, b = 2, etc.
// Solution is O(n)
const change = (s: string) => {
  const zeroArray = new Array(26).fill("0");
  // starting index in the alphabet
  const initial = "a".charCodeAt(0);
  s = s.toLowerCase();
  // iterate over a given string
  for (let c of s) {
    // find index
    const diff = c.charCodeAt(0) - initial;
    // if index in range from a - z swap 0 with 1
    if (diff >= 0 && diff <= 25) zeroArray[diff] = "1";
  }
  return zeroArray;
};
