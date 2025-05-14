/*
 * A range of numbers is represented as a tuple of two numbers,
 * for example [0, 10] would indicate a range between 0 and 10 inclusively.
 * The inverse of a range between some bounds are the ranges from the lower bound, to the lowest part of the range and the upper part of the range to the upper bound.
 * */

const invertedRanges = (ranges: number[][]) => {
  let current = 0;

  const res = [];

  // check for the range
  for (let [start, end] of ranges) {
    if (start > current) {
      res.push([current, start - 1]);
    }
    // update current to the last value, excluding 50
    current = end + 1;
  }

  // if value was 99 + 1 == 100 it means we are not covered 100 yet
  if (current <= 100) {
    res.push([current, 100]);
  }

  return res;
};
