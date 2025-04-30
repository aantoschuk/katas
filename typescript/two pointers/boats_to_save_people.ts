/*
 * Given an array `people`, where each element represents a person's weight, and an infinite number of boats,
 * each boat can carry at most two people and has a weight limit `limit`.
 * The task is to return the minimum number of boats required to rescue everyone.
 *
 * I used the two-pointer technique: sort the array first, then try to pair the lightest (`people[l]`)
 * and heaviest (`people[r]`) person together. If their combined weight is within the limit,
 * they can share a boat. Otherwise, the heavier person goes alone.
 * In both cases, we increment the boat count and move the pointers accordingly.
 */
const boatsToSave = (people: number[], limit: number): number => {
  let boats = 0,
    l = 0,
    r = people.length - 1;

  // Sort to enable pairing lightest with heaviest
  people.sort((a, b) => a - b);

  while (l <= r) {
    if (people[l] + people[r] <= limit) {
      l++; // pair successful, move left pointer
    }
    boats++;
    r--; // always move right pointer (heaviest person is placed)
  }
  return boats;
};

