const fs = require("node:fs");

const readableStream = fs.createReadStream("file1.txt", { encoding: "utf-8" });

const writableStream = fs.createWriteStream("file4.txt", { encoding: "utf-8" });

readableStream.on("data", (chunk) => {
  console.log("New chunk received:");
  console.log(chunk);
  writableStream.write(chunk);
});
