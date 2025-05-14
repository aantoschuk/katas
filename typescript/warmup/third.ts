/* NOTE: first challange:
 *
 * Create a Mexican wave, that thing like in a stadium.
 * return array of that wave, example: ["Wave", wAve",...] ignoring all non
 * alphabetical characters like spaces, numbers etc as they cannot be capitalized.
 * */

// linear string transformation, O(n) as it only loops oonce, where n is the lenght of the string
const wave = (str: string) => {
  const res = [];
  for (let i = 0; i < str.length; i++) {
    if (!/[^A-Za-z]$/.test(str[i])) continue;
    const t = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
    res.push(t);
  }
  return res;
};

/*
 * NOTE: second ( third actually ) challange, harder then any previously ones.
 *
 * color codes for 4 pin transistors, where the last one is gold.
 * */

const colorCodes = [
  "black ",
  "brown ",
  "red ",
  "orange ",
  "yellow ",
  "green ",
  "blue ",
  "violet ",
  "gray ",
  "white ",
];

// return string converted to represent actuall number
const convert = (ohmsString: string) => {
  // find the number of ohms
  let values = ohmsString.split(" ")[0];
  const last = values[values.length - 1];
  const decimalIndex = values.indexOf(".");
  let count = 0;

  // determine if there is a decimal point, how many numbers after it
  if (decimalIndex !== -1) {
    count = values.slice(decimalIndex + 1).length;
  }

  // based on the last character add needed amount of 0s
  switch (last) {
    case "k": {
      values = values.replace(/k$/, "000");
      break;
    }
    case "M": {
      values = values.replace(/M$/, "000000");
      break;
    }
  }

  // if we have numbers after decimal point, remove excess 0
  if (count !== 0) {
    values = values.slice(0, -count + 1);
  }

  // remove decimal point
  return values.replace(".", "");
};

const encodeResistorColors = (ohmsString: string) => {
  let str = convert(ohmsString);

  let res = "";

  // as we need to convert first two numbers
  for (let i = 0; i < 2; i++) {
    res += colorCodes[+str[i]];
  }
  // calculate how many 0s left, find the diff and get needed power
  res += colorCodes[str.length - 2];
  // add 5%
  return res + "gold";
};

/*
* NOTE: fourth ( fifth ) challenge 

* You're about to go on a trip around the world! 
* On this trip you're bringing your trusted backpack, 
* that anything fits into. The bad news is that the airline has informed you that your luggage cannot exceed a certain amount of weight.
* To make sure you're bringing your most valuable items on this journey
* you've decided to give all your items a score that represents how valuable this item is to you.
* It's your job to pack your bag so that you get the most value out of the items that you decide to bring.

* Your input will consist of two arrays, one for the scores and one for the weights.
* Your input will always be valid lists of equal length, so you don't have to worry about verifying your input.
*
* Typical backpack problem
* */

const packBagpack = (scores: number[], weights: number[], capacity: number) => {
  // create array with all possible soultions
  const arr = new Array(capacity + 1).fill(0);
  for (let i = 0; i < scores.length; i++) {
    const weight = weights[i];
    // if weight is more than the capacity
    if (weight > capacity) continue;
    // then find the better capacity, and add score
    for (let w = capacity; w >= weights[i]; w--) {
      arr[w] = Math.max(arr[w], arr[w - weights[i]] + scores[i]);
    }
  }
  return arr[capacity];
};
