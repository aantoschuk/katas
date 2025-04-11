/*
 * LeetCode 2843: Count Symmetric Integers
 *
 * Given two integers, low and high,
 * find all numbers in that range where the sum of the digits
 * in the first half of the number is equal to the sum of the digits
 * in the second half.
 *
 * I used a naive approach:
 * I generated all numbers in the range and kept only those with an even number of digits,
 * since an odd number of digits can't be evenly split into two halves.
 * Then, I calculated the digit sums of both halves and compared them.
 *
 * If we need to optmize it, we could remove array at all with pushing elements to it
 * additionally we remove first for cycle, and check for odd number, right away.
 * we could also check if n > 10 && < 100, so we could avoid using two reduce for lower numbers
 *
 */
const countSymmetricIntegers = (low: number, high: number) => {
  const arr = [];
  for (let i = low; i <= high; i++) {
    if (i.toString().length % 2 === 0) {
      arr.push(i);
    }
  }
  const res = arr.filter((v) => {
    const s = v.toString();
    const m = s.length / 2;
    const first = s
      .slice(0, m)
      .split("")
      .map(Number)
      .reduce((a, b) => a + b, 0);
    const second = s
      .slice(m)
      .split("")
      .map(Number)
      .reduce((a, b) => a + b, 0);
    if (second === first) return true;
  });
  return res.length;
};
