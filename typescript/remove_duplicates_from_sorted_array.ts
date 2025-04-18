/*
 * Basically i need to leave the array to be sorted and with distinct elements,
 * and array should be the same length
 * maximum number of repetetivnes is 2
 * return how many distinctive elements
 *
 * Two pointer solution
 * */

const removeDuplicates = (arr: number[]) => {
  // as two elements ca be equal, start from 2
  let left = 2;
  for (let right = 2; right < arr.length; right++) {
    // check if they are distinctive elements
    if (nums[right] !== nums[left - 2]) {
      // if yes, then swap previous one, which should be equal,
      // and increment left pointer
      nums[left] = nums[right];
      left++;
    }
  }
  return left;
};
