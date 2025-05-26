// NOTE: first challange

//Count substrings in string
//Basically use match to get all substrings in string and return lenght of that array

const countSubstrings = (fullText: string, search: string) => {
  const regex = new RegExp(search, "g");
  const match = fullText.match(regex);
  return match?.length || 0;
};

/* NOTE: second challenge

* Mumbling 
*
* accum("abcd") -> "A-Bb-Ccc-Dddd"
* accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
* accum("cwAt") -> "C-Ww-Aaa-Tttt"
*
* So basically repeat every character by index, starting from Upper Case
* pushing to the array would be optimized a bit but i'm to lazy to rewrite it 
* as concatinating can cause to copying whole string, so using array.join("-") 
* is better
* */

const mumbling = (s: string) => {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    // set first character
    let t = s[i].toUpperCase();

    // repeat based on index + 1 as we have first character
    t += s[i].toLowerCase().repeat(i);
    res += t;
    // add delimiter - at the end only if it's not the last character
    if (i !== s.length - 1) res += "-";
  }
  return res;
};

// better version
const accum = (s: string) =>
  [...s]
    .map((ch, i) => ch.toUpperCase() + ch.toLowerCase().repeat(i))
    .join("-");


