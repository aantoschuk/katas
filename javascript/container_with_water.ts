/*
 * Leetcode 11: Container with most water.
 * Given an integer array where each element represents the height of a line,
 * which in turn represents the sides of a container. The task is to find the
 * container that can hold the most water.
 *
 * To solve this, use the two-pointer approach where one pointer starts at the
 * first wall and the second pointer starts at the last wall of the container.
 * The area between the two walls is then calculated based on the height of the
 * shorter wall and the distance between the two walls.
 *
 * The goal is to maximize the area by adjusting the pointers to find the
 * optimal container configuration.
 */

const maxArea = (heights: []) => {
  // create two pointers
  let l = 0;
  let r = heights.length - 1;

  let max = 0;

  while (l < r) {
    const height = Math.min(heights[l], heights[r]);
    const width = r - l;
    const area = height * width;
    max = Math.max(max, area);

    if (heights[l] > heights[r]) {
      r--;
    } else {
      l++;
    }
  }
  return max;
};
