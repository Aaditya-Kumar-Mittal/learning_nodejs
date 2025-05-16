console.log("Hello from local_modules/index.js");

const add = require("./add");
const add2 = require("./addition");

const mySum = add2(15, 20);
console.log(mySum);

require("./batman");
require("./superman");
