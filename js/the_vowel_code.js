const test = require("./test");

/**
 * Create functions to encode and decode all lowercase vowels in a given string.
 * code is : a: 1, e:2, i:3, o:4, u:5
 * example: hello -> h2ll4
 */

const encode = (s) => {
  let r = "";
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "a": {
        r += "1";
        continue;
      }
      case "e": {
        r += "2";
        continue;
      }
      case "i": {
        r += "3";
        continue;
      }
      case "o": {
        r += "4";
        continue;
      }
      case "u": {
        r += "5";
        continue;
      }
      default: {
        r += s[i];
      }
    }
  }
  return r;
};

const decode = (s) => {
  let r = "";
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "1": {
        r += "a";
        continue;
      }
      case "2": {
        r += "e";
        continue;
      }
      case "3": {
        r += "i";
        continue;
      }
      case "4": {
        r += "o";
        continue;
      }
      case "5": {
        r += "u";
        continue;
      }
      default: {
        r += s[i];
      }
    }
  }
  return r;
};

test(() => encode("hello"), "h2ll4", "Encode string");
test(() => decode("h2ll4"), "hello", "Decode string");
test(() => encode("How are you today?"), "H4w 1r2 y45 t4d1y?", "Encode string");
test(
  () => decode("Th3s 3s 1n 2nc4d3ng t2st."),
  "This is an encoding test.",
  "Decode string"
);

/**
 * It also can be solved used replace + indexOf
 * as in replace we can use callback, so here we can return index of vowel in array
 * vowels = "aeiou"
 * s.replace(/[vowels]/g, (c) => vowels.indexOf +1)
 * and for decode we could use characterAt, should work
 */
