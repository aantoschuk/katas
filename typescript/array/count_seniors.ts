/*
 * Leetcode 2678: Number of Senior Citizens
 *
 * Given an array of strings, where each string contains details about a passenger:
 *
 * - The first 10 characters represent the phone number.
 * - The 11th character indicates the gender.
 * - The 12th and 13th characters represent the passenger's age.
 * - The last two characters represent the seat number.
 *
 * To solve this, I extract the age from indices 11 and 12 (0-based), convert it to a number,
 * and check if it's greater than 60. If so, I increment the counter of senior passengers.
 *
 * Time complexity: O(n), where n is the number of passengers (details.length).
 */

const countSenior = (details: string): number => {
  let count = 0;
  for (let p of details) {
    const age = +`${p[11]}${p[12]}`;
    if (age > 60) count++;
  }
  return count;
};
