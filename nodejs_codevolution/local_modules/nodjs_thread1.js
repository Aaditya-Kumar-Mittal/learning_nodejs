const fs = require("fs");

console.log("First");

fs.readFile("./file1.txt", "utf-8", (err, data) => {
  console.log("File Contents:", data);
});

console.log("Second");
