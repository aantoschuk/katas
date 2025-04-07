/**
 * Given an array nums, return true if two sums partion of that array is equal,
 * otherwise return false.
 * */
const partion_equal_subset = (nums: number[]) => {
  // If sum ot two partions is equal, then it's just sum of each element divided by 2
  const totalSum = nums.reduce((acc, v) => acc + v, 0);
  // as we have 2 partions, so totalSum should be even
  if (totalSum % 2 != 0) return false;

  // memoize sum of partion and create set to avoid saving the same values
  const target = totalSum / 2;
  let result = new Set([0]);

  // iterate over each element of the array and save it's sum
  for (let num of nums) {
    // save sum of previous iteration and iterate over for a new ones for the current number
    let possible = new Set(result);
    for (let v of result) {
      possible.add(num + v);
    }
    result = possible;
  }
  // if set has searched value it will return true
  return result.has(target);
};

const nums = [1, 5, 11, 5];
const r = partion_equal_subset(nums);
console.log(r);

/**
 *  for second iteration, result would look like this:
 *  [0, 1, 5, 6]
 *  where 0, is the initial value, 1 is the result of 0 + 1, 5 + 0 = 5, 5 + 1 = 6 etc
 * */
