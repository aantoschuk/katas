/*
 * 3395. Minimum Number of operations to make elements in array distinct.
 *
 * Given array nums,, ensure that all elemenet are distinct. To achieve this
 * you can perform following operation any number of times:
 * - Remove first 3 elements from the begining of the array. If the array
 *   has fewer than 3 elements, remove all remaining elements.
 *
 * So basically, we use brute force and search for current element excluding current element,
 * we could achieve so by dividing array before and after, if there some duplicates,
 * remove first 3 elements and start over.
 * */
const minimumNumber = (nums: number[]) => {
  let array = nums;
  let count = 0;

  let index = 0;
  while (index < array.length) {
    const v = array[index];
    const left = array.slice(0, index);
    const right = array.slice(index + 1);
    const isDuplicate = left.includes(v) || right.includes(v);
    if (isDuplicate) {
      index = 0;
      array.splice(0, 3);
      count++;
    } else {
      index++;
    }
  }
  return count;
};

// LeetCode showed that it beats 100% by runtime but i doubt it.
