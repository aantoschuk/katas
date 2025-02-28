/*
 * This is pretty easy solution if we would use some like reverse() function to check if word is equal.
 * But using two pointers algorythm would have better performance. And according to leetcode (xD)
 * my solution beats 97.86% and runs only 1ms.
 * */

const words = ["abc", "car", "ada", "racecar", "cool"];

// Return the first palindromic string in the array.
// If there is no such thing return an empty string.
const firstPalindrome = (words: string[]) => {
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let left_p = 0;
    let right_p = word.length - 1;
    while (left_p < right_p) {
      if (word[left_p] !== word[right_p]) {
        break;
      }
      left_p++;
      right_p--;
      if (left_p > right_p) {
        return word;
      }
    }
  }
  return "";
};
