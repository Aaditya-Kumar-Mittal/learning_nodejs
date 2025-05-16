console.log("math.js loaded"); // or inside the `add()` function

// Since exports is a reference to module.exports, we can use exports too, 5th method
exports.add = (a, b) => {
  return a + b;
};
exports.subtract = (a, b) => {
  return a - b;
};

/*
// 4th method
module.exports.add = (a, b) => {
  return a + b;
};
module.exports.subtract = (a, b) => {
  return a - b;
};
*/

/*
// 3rd method
const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};

module.exports = {
  add,
  subtract,
};
*/

/*// 2nd method
module.exports = (a, b) => {
  return a + b;
};
*/

/*
// 1st Methid
const add = (a, b) => {
  return a + b;
};

module.exports = add;
*/
