const fs = require("node:fs/promises");

// Uses promises version for clean code and maximum performance at any time, efficient for memory allocation

fs.readFile("file1.txt", "utf-8")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

async function readFile() {
  try {
    const data = await fs.readFile("file1.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

readFile();