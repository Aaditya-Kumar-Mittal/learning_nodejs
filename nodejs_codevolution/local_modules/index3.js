// Using destructuring
const math = require("./math.js");

const { add, subtract } = require("./math");
console.log(add(2, 3));
console.log(subtract(5, 3));

/*
// Here, we invoke the functions on the math object

console.log(math.add(2, 3));
console.log(math.subtract(5, 3));
*/
