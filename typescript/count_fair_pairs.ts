/*
 * 2563: So basically find pairs which is condition are true
 * lower <= nums[i] + num[j] <= upper
 *
 * Personally i solved it using two loops
 * but better version would be using two pointers
 * */
const countFairPairs = (nums: number[], lower: number, upper: number) => {
  // If we see conditions like 0 <= i < j <= nums.length and
  // element positions, indexes are not in question - we can sort it right away
  nums.sort((a, b) => a - b);

  // helper function which return sums lower then the target
  const countPairsWithSumLessThan = (target: number) => {
    let left = 0,
      right = nums.length - 1;
    let count = 0;

    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum < target) {
        count += right - left;
        left++;
      } else {
        right--;
      }
    }

    return count;
  };

  // find all pairs which is lower then upper variable and all  that lower
  // get the diff as our sum should be upper then lower number and we should get fair pairs amount
  return (
    countPairsWithSumLessThan(upper + 1) - countPairsWithSumLessThan(lower)
  );
};
