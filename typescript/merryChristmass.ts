/*
* `funcs` is an array of functions, each of which returns a single letter.
* The task is to return a string containing the names of the functions, separated by commas,
* such that calling them in order will generate the string "Merry Christmas!".
*
* This task is interesting because a hash table is the only approach that can be used here.
* Due to the recurring letters in the word, we cannot simply match and filter them out.
*
* Solved in O(n+m) time complexity.
*/

const word = "Merry Christmas!";

const merryChristmass = (funcs: (() => string)[]) => {
    const result = [];
    const map: Record<string, string> = {};

    // Create a hash table where the keys are letters and the values are function name
    for (let i = 0; i < funcs.length; i++) {
        const func = funcs[i];
        const value = func();
        map[value] = func.name;
    };

    // Check if the hash contains a letter from the word.
    for (let i = 0; i < word.length; i++) {
        const ch = word[i];
        if(map[ch]) {
            result.push(map[ch]);
        };
    };
    // Return string separated by commas
    return result.join(",");
};
