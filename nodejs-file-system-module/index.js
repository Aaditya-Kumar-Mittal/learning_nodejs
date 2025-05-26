const fs = require("node:fs");

const path = require("node:path");

const dataFolder = path.join(__dirname, "data1");

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("Data folder created:", dataFolder);
}

const filePath = path.join(dataFolder, "data1.txt");

// Synchronouss File system functions

fs.writeFileSync(
  filePath,
  "This is a test file created using Node.js file system module."
);
console.log("File created:", filePath);

const readFromFile = fs.readFileSync(filePath, "utf-8");

console.log("File content:", readFromFile);

fs.appendFileSync(filePath, "\nThis is a new line appended to the file.");

// Asynchronouss File system functions

const filePath2 = path.join(dataFolder, "data2.txt");

fs.writeFile(filePath2, "Contents for the second file.", "utf-8", (err) => {
  if (err) {
    console.log("Error: occured in creating the file.");
  }

  console.log("File created: successfuly: ", filePath2);

  fs.readFile(filePath2, "utf-8", (err, data) => {
    if (err) {
      console.log("Error occurred in reading the file.");
    }
    console.log("File content:", data);
  });
});

fs.appendFile(
  filePath2,
  "\nThis is a new line appended to the second file.",
  "utf-8",
  (err) => {
    if (err) {
      console.log("Error occurred in appending to the file.");
    }
    console.log("File updated successfully:", filePath2);
  }
);
