// Count the hidden sequence
// arr is the difference between arr[0] = hidden[i + 1] - hidden[i]
// find how many arrays we can construct
//
// so basically calculate all the values,
const countHidden = (arr: number[], upper: number, lower: number) => {
  let cur = 0,
    min = 0,
    max = 0;
  for (let n of arr) {
    // construct previous elements
    //  arr[0] + arr[1] = diff[0]
    cur += n;
    // smallest sum
    min = Math.min(min, cur);
    // largetst sum
    max = Math.max(max, cur);
  }
  // total range - (range from arr) + inclusive
  return upper - lower - (max - min) + 1;
};
