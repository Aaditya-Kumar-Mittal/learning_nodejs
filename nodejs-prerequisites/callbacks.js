// callbacks are functions that are passed as arguments to other functions

const fs = require("node:fs");

function person(personName, calllbackFnc) {
  console.log(`Hello fronm ${personName}`);
  calllbackFnc();
}

function address() {
  console.log("India");
}

person("Aaditya", address);

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error occurred in reading the file.");
  }

  console.log("File contents are: ", data);
});
