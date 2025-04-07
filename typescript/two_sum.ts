// Leetcode: 167. Two Sum II.
//
// Given an array of numbers, which is sorted in non-decreasing order, find two
// numbers such that they add up to a target number,
// return indexes of both numbers started from 1.
const twoSum = (numbers: number[], target: number) => {
    let left_p = 0;
    const size = numbers.length;
    let right_p = size - 1;

    // use two pointer solution
    // to avoid additional cycle so the complexity is O(n)
    // otherwise with two cycles is O(n^2)
    while (left_p < size) {
        let total = numbers[left_p] + numbers[right_p]
        if (total === target) {
            return [left_p + 1, right_p + 1]
        } else if (total > target) {
            right_p--
        } else {
            left_p++
        }
    }
    return []
};
