const fs = require("node:fs");

console.log("first");

const fileContents = fs.readFileSync("./file1.txt", "utf-8");
console.log(fileContents);

console.log("second");

const fileContents2 = fs.readFile("./file1.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

console.log("third");

fs.writeFileSync("./file2.txt", "New content for file2.txt");

fs.writeFile("./file3.txt", "New content for file3.txt", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("file3.txt has been written");
});
