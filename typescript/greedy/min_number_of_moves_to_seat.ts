/*
 * There are n availabe seats and n students standing in a room. You are given an array seats of length n, where seats[i] is the position of the ith seat. You are also given the array students of length n, where students[j] is the position of the jth student.
 *
 * You may perform the following move any number of times:
 *
 * Increase or decrease the position of the ith student by 1 (i.e., moving the ith student from position x to x + 1 or x - 1)
 * Return the minimum number of moves required to move each student to a seat such that no two students are in the same seat.
 * Note that there may be multiple seats or students in the same position at the beginning.
 *
 * Greedy algorightm.
 *
 * As we need to actually return only numbers and no need to track or keep positions,
 * we can freely sort arrays.
 *
 * And then find the difference between students and seats
 * by choosing optimap solution, which why it is actually greedy
 *
 * initialy I  solved it using first variant, but after some time i re-doit using Math.abs
 *
 * as single for is O(n) but due to sort it was O(n log n) = O(n log n) + O(n)
 *
 * There is a very small diff between thoose two. Use second all the time,
 * but if speed is the concern and need more control - then first variant is way to go
 * */

const minMovesToSeat = (seats: number[], students: number[]) => {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  let count = 0;
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === students[i]) continue;
    if (seats[i] < students[i]) {
      count += students[i] - seats[i];
    } else {
      count += seats[i] - students[i];
    }
  }
  return count;
};

const minMovesToSeat2 = (seats: number[], students: number[]) => {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  // count how many moves
  let count = 0;
  for (let i = 0; i < seats.length; i++) {
    count += Math.abs(seats[i] - students[i]);
  }

  return count;
};
