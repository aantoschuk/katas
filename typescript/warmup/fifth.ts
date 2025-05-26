/*NOTE: first challenge
 *
 * Given array of strings, return an array, where the first letter of a string is capitalized, the rest is lower case.
 *
 * Easy and a traightforward task, just iterate over all elements and make first one is upper case and join the rest of the string
 * as lowerCase due to whole words could be different cases.
 * */
const capMe = (names: string[]) =>
  names.map((name) => name[0].toUpperCase() + name.slice(1).toLowerCase());

/* NOTE: second challenge
 *
 * Given two strings,
 * you could remove leftmost character from one of the string, one at the time
 * return minimum amount of steps needed to made those strings equal.
 *
 * Solved in O(n + m)
 * */
function shiftleft(s: string, t: string) {
  let count = 0;
  if (s === t) return count;
  do {
    count++;
    // instead of slice we could just check indexes and substring
    // it would give me a better memory resoults, performance wise it would be the same
    // as slice creates a new string
    if (s.length > t.length) {
      s = s.slice(1);
    } else {
      t = t.slice(1);
    }
  } while (s !== t);
}

/* NOTE: third challenge
 *
 * Give array of length 2, calculate score based on it's content,
 * if both values are number then the score is sum of it's numbers.
 * return an array of initial arrays, the length of that array is equal to the score
 * */

const explode = (x: (number | string)[]) => {
  const [first, second] = x;

  if (typeof first === "number" && typeof second === "number")
    return Array(first + second).fill(x);
  if (typeof first === "number") return Array(first).fill(x);

  if (typeof second === "number") return Array(second).fill(x);
  return "Void!";
};
