/*
 * Leetcode 2938: Separate Black and White Balls
 *
 * Given a binary string `s`, where `1` represents a black ball and `0` represents a white ball,
 * sort the string such that all black balls (1s) are on the right side and all white balls (0s)
 * are on the left side. You can move one ball at a time.
 *
 * The goal is to return the minimum number of steps required to sort the balls.
 *
 * Since the problem doesn't ask for the actual sorted string, we calculate the minimum number
 * of operations using a greedy algorithm. As we encounter a '1', we add the number of '0's we've
 * encountered so far to the operation count, as each '1' needs to "pass over" all the '0's before it.
 *
 **/
const separateBalls = (s: string) => {
  let res = 0;
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "0") count++;
    if (s[i] === "1") res += count;
  }
  return res;
};
