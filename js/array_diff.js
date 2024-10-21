const test = require("./test");

/**
 * Given two arrays return diff between two arrays
 */

/**
 *
 * @param {unknown[]} arr
 * @param {unknown[]} arr2
 * @returns unknown[]
 */
const arrayDiff = (arr, arr2) => {
  const s = new Set(arr2);
  return arr.filter((v) => !s.has(v));
};

test(
  () => arrayDiff([1, 2, 5], [1, 3, 4]),
  [2, 5],
  "Arrays same length and has differences"
);
test(
  () => arrayDiff([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]),
  [],
  "Should return an empty array"
);
test(
  () => arrayDiff([1, 2, 3], [4, 5]),
  [1, 2, 3],
  "Should return original array"
);
