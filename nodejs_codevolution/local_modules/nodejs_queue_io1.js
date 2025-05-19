const fs = require("node:fs");

fs.readFile(__filename, () => {
  console.log("this is readFile 1");
});

setTimeout(() => {
  console.log("this is setTimeout 1");
  
}, 0);

// process.nextTick(() => {
//   console.log("this is nextTick 1");
// });

// Promise.resolve().then(() => {
//   console.log("this is Promise.relsolve 1");
// });
