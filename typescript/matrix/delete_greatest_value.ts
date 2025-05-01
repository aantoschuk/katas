/*
 * Leetcode 2500: Delete Greatest Value in Each Row
 *
 * Essentially, I need to delete the greatest value in each row until there are no
 * elements left in the matrix.
 * Additionally, I need to find the maximum value from the deleted ones and add that number to the sum.
 * For example, if 3 and 4 are deleted from the first and second rows respectively,
 * since 4 > 3, we add 4 to the sum and return that sum.
 *
 * Time complexity is O(m * log n).
 */

const deleteGreatestValue = (matrix: number[][]) => {
  for (let r of matrix) {
    r.sort((a, b) => a - b);
  }

  let sum = 0;
  let count = matrix[0].length;
  for (let i = 0; i < count; i++) {
    let t = [];
    for (let j = 0; j < matrix.length; j++) {
      const v = matrix[j].pop();
      if (v != undefined) t.push(v);
    }

    sum += Math.max(...t);
  }

  return sum;
};
