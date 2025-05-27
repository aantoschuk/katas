/* Leetcode: 3. Longest Substring Without Repeating Characters
 *
 * Given a string n, find the lenght of  the longest substring
 * without duplicate characters
 *
 * this is the sliding window + hash proble.
 * O(n) as move pointer as n times
 * */
const lenghtOfLongestSubstring = (s: string) => {
  let left = 0,
    right = 1,
    maxLen = 0;
  const seen = new Set();

  while (right < s.length) {
    // if in current substring this is unique character, add to seen
    if (!seen.has(s[right])) {
      seen.add(s[right]);
      // calculate current size
      maxLen = Math.max(maxLen, right - left + 1);
      // move pointer forward, to the end of the string
      right++;
    } else {
      // is already exists, then remove that character from seen,
      seen.delete(s[left]);
      // and shrink the window ( substring )
      left++;
    }
  }
  return maxLen;
};
