/*
 * 2176: Count Equal and Divisible Pairs in an Array
 * Give an array nums and an integer k, return the number of pairs i,j where
 * 0 <= i < j < n, such that nums[i] == nums[j] and i * j divisible by k
 *
 * So basically use brute force, loop twice, and check is elements with different indexes are equal
 * and is product of their indexes can be divisible without a trace ( modulo operator )
 * */
const countPairs = (nums: number[], k: number) => {
  // create count pairs and shorthand for array length
  let count = 0;
  const l = nums.length;
  // get two pair of indexes
  for (let i = 0; i < l; i++) {
    for (let j = i + 1; j < l; j++) {
      // check for needed conditions
      if (nums[i] === nums[j] && (i * j) % k === 0) {
        count++;
      }
    }
  }
  return count;
};
