/*
 * Leetcode 125: Valid Palindrome
 *
 * given string, find does this string is a palindrome,
 * after converting all upper case to lower case letters and removing all non-alphanumeric characters
 *
 * Convert to lower case, then remove remove everything except alphanumeric characterts
 * and then compare with reversed.
 * */

const isValidPalindrome = (s: string) => {
  // @ts-ignore: just for the sake of removing the error about replaceAll not existing
  s = s.toLowerCase().replaceAll(/[^a-z0-9]g/, "");
  return (s = s.split("").reverse().join(""));
};
