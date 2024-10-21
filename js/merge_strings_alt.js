/**
 * Given two strings word1 and word2.
 * Merge them by adding two letters in alternating order, starting with word1.
 * If a string is longer than the other, append the additional letters to the end
 * of the merged string
 * return merged string
 *
 *
 * - first find which string is longer
 * - then split into usable chars and rest which wil be merged later
 * - iterate through strings and add word1[0] + word[0] + word[1] + word[1] etc
 * - made array into string and apply rest of the longest string to the end
 */

const test = require("./test");

/**
 *
 * @param {string} word1
 * @param {string} word2
 * @returns  string
 */
const mergeAlternately = (word1, word2) => {
  // find largest string
  const length = Math.max(word1.length, word2.length);
  // get substring which is left
  const rest =
    word1.length > word2.length ? word1.slice(length) : word2.slice(length);
  const res = [];
  for (let i = 0; i < length; i++) {
    res.push(word1[i], word2[i]);
  }
  return res.join("") + rest;
};

test(() => mergeAlternately("abc", "pqr"), "apbqcr", "Running Test Case 1");
test(() => mergeAlternately("abc", "qr"), "aqbrc", "Running Test Case 2");
test(
  () => mergeAlternately("qwerty", "zxcvbnmlop"),
  "qzwxecrvtbynmlop",
  "Running Test Case 3"
);
