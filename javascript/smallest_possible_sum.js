// The task is to find the maximum number in the array and subtract the minimum from it.
// Repeat this process until all the elements of the array are equal.
// This solution works perfectly, but I need to optimize it.
function solution(numbers) {
  while (true) {
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    if (max > min) {
      const res = max - min;
      const index = numbers.indexOf(max);
      numbers[index] = res;
    } else {
      break;
    }
  }

  return numbers.reduce((acc, n) => acc + n, 0);
}

const arr = [1, 55, 21];
const res = solution(arr);
console.log(res);

// TODO: optimize it. Possible solution is to use sort and then loop while they all not equal
