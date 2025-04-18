/*
 * In array find majority element, the element which is occur more then length / 2
*
* Hash map solution, just keep track of already encountered elements in array
 * */

const majorityElement = (arr: number[]) => {
  const map: Record<string, number> = {};
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    // basically initialize with 1 or if it already in the map increment
    map[n] = (map[n] || 0) + 1;
    // check for result already
    if (map[n] > nums.length / 2) {
      return n;
    }
  }
};

// There is also Boyer-Moore Voting Algorithm, need to check it later


