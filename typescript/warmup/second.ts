// NOTE: first challenge

// Given a string an a character, find that character in string,
// and return the next character in the string, ignoring all the symbols,
// meaning returning only letters and keeping case for that character,
// example: "are you really learning Ruby?" # => "eenu"
// Solved it in O(n) instead of O(n+m) using regex and replace.

const comesAfter = (str: string, l: string) => {
  let res = "";

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i].toLowerCase() == l.toLowerCase()) {
      const c = str[i + 1].charCodeAt(0);
      // we could actually remove all non alphabetic characters from the string
      // and avoid that if statement
      // but this approach is faster, is no need to store cleaned string, + replace is another loop
      if ((c >= 65 && c <= 90) || (c >= 97 && c <= 122)) res += str[i + 1];
    }
  }
  return res;
};

// NOTE: second challenge

// Create a generic function chain which accepts number and array of functions
// apply each function to number and return the result

const chain = (input: number, fs: ((n: number) => number)[]) => {
  // memoize the result of each function
  let prev = input;
  // just iterate over array and apply function one by one
  for (let f of fs) {
    prev = f(prev);
  }
  return prev;
};

// NOTE: third challenge: this is actually a medium one

// Given number, return string with that is decimal representation of it
// of the number grouped by commas after every 3 digits. 100 -> 100, 1000 -> 1,000

// thb there is actually toLocaleString("en") will ge the needed resault
// "en" is 'cause locale has multiple countries, someone use dot for example.
const groupByCommas = (n: number) => {
  let s = n.toString().split("");
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (i !== 0 && count % 3 === 0) s.splice(i, 0, ",");
  }
  return s.join("");
};
