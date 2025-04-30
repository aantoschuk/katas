/**
 * Determines whether string `s` is a subsequence of string `t`.
 *
 * A subsequence means that all characters of `s` appear in `t` in the same order,
 * but not necessarily consecutively. For example, "abc" is a subsequence of "adsfbtrrc".
 *
 * This function uses a two-pointer technique:
 * - One pointer (`left`) tracks the current position in `s`.
 * - The other (`right`) iterates through `t`.
 *
 * If the characters match, we move the `left` pointer forward.
 * If we reach the end of `s`, it means all characters were found in order.
 * Otherwise, if we reach the end of `t` first, `s` is not a subsequence of `t`.
 */
const isSubsequence = (s: string, t: string): boolean => {
  let left = 0,
    right = 0;

  while (right < t.length) {
    if (s[left] === t[right]) {
      left++;
    }
    right++;
  }

  return left === s.length;
};

const s = "abc";
const t = "ahbdc";
const result = isSubsequence(s, t);
console.log(result);
