const test = require("./test");

/**
 * Given an input string s, reverse the order of the words
 * A word is a sequence of non space chars
 * return a string of the reversed words concatenated by single space
 * string my have leading and trailing spaces as double spaces between words need to remove that too
 */

/**
 *
 * @param {string} s
 * @returns {string}
 */
const reverseWords = (s) => {
  // this regex find space if prev symbol was space
  const regex = /(?<=\s)\s/g;
  // find and remove all trailing spaces, trim spaces from the start make array of words, reverse them and make string separated by space
  const result = s.replaceAll(regex, "").trim().split(" ").reverse().join(" ");
  return result;
};

test(
  () => reverseWords("the sky is blue"),
  "blue is sky the",
  "Simple string without edge cases"
);

test(
  () => reverseWords(" Hello  World"),
  "World Hello",
  "String with trailing spaces"
);
test(
  () => reverseWords(" third,  example  "),
  "example third,",
  "String with trailing spaces and punctuation"
);
