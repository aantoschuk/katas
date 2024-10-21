const test = (fn, expected, desc) => {
  console.log();
  console.log(desc);
  const res = fn();
  if (res === expected) {
    console.log("SUCCESS");
  } else {
    console.log(`FAIL: Expected ${expected}, but got ${res}`);
  }
  console.log();
};

module.exports = test;
