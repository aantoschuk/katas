/*
 * Leetcode 1941. Check If All Characters Have Equal Number of Occurrences
 *
 * Determine if all characters in the given string have equal occurrences.
 * Return true if they do, otherwise return false.
 *
 * This is a simple task: use a hash map to count the occurrences of each character
 * in the string and check if all occurrences are equal.
 */

const areOccurrencesEqual = (s: string) => {
  // Create HashMap and calculate occurrences.
  const hash: Record<string, number> = {};
  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) {
      hash[s[i]] = 1;
    } else {
      hash[s[i]]++;
    }
  }

  // Check if numbers of occurrences is the same for all characters.
  const result = Object.values(hash);
  for (let i = 1; i < result.length; i++) {
    if (result[i] !== result[0]) {
      return false;
    }
  }
  return true;
};
