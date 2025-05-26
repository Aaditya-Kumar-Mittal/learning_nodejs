const maths = require("./math_functions");

console.log(maths.add(5, 6));
console.log(maths.subtract(5, 6));
console.log(maths.product(5, 6));

// Every module is wrapped in a function before it runs and it is called the module wrapper function.
// It has some parameters like exports, require, module, and __filename, __dirname.

// module wrapper
/*
(function (exports, require, module, __filename, __dirname) {
  // here goes your module code
})();
*/
