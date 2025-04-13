/*
 * Implement Pow(x, n)
 *
 *  So as it can be big numbers and TLE
 *  i need use binary exponentiation.
 *  So basically i just raise it like that:
 *  if number if even ? than i just do (a^even)^2 if odd: (a^odd)^2 x a where
 *  a is a number which i need to raise.
 *
 * Invert the base as negative is equal to 1/a^n, so flip it
 * Then compute half power a^[n / 2 ]
 * Squre the result and if odd multiply by a
 *
 * Should be O(log n)
 * */
const binaryPow = (a: number, b: number) => {
  if (b === 0) {
    return 1;
  }

  if (b < 0) {
    a = 1 / a;
    b = -b;
  }

  // as js not round by default
  let res: number = binaryPow(a, Math.floor(b / 2));
  if (b % 2 !== 0) {
    return res * res * a;
  } else {
    return res * res;
  }
};
