// The task is to find the maximum number in the array and subtract the minimum from it.
// Repeat this process until all the elements of the array are equal.
// This solution works perfectly, but I need to optimize it.
function solution2(numbers: number[]) {
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

// Optimized Solution
function solution(numbers: number[]) {
  if (numbers.length === 0) return 0;

  // Eucledean Algorithm
  const gcd = (a: number, b: number) => {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  // calculate gcd for every element in the array
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    result = gcd(result, numbers[i]);
  }

  // as all elements of the array should be the same - we multiply one element
  // on the array length so no need to use reduce
  return result * numbers.length;
}

const arr = [6, 9, 21];
const res = solution(arr);

console.log(res);

// After struggling for some time, 
// I realized that it’s possible to solve the problem using the GCD. 
// In fact, this approach offers the best performance optimization.

// Also found that people actually solve it like that, which i'm not even gonna try to understand 
// additionaly, i think my solution is better. no recursion is better then with and it's hard ( maybe ) to read
// const solution = N  => N.length * N.reduce(gcd = (a, b) => !b ? a : gcd(b, a % b))

