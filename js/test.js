const test = (fn, expected, desc) => {
  console.log();
  console.log(desc);
  let res = fn();
  if (Array.isArray(expected) && Array.isArray(res)) {
    res = res.join("");
    expected = expected.join("");
  }
  if (res === expected) {
    console.log("SUCCESS");
  } else {
    console.log(`FAIL: Expected ${expected}, but got ${res}`);
  }
  console.log();
};

module.exports = test;
