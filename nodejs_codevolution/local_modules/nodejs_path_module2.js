const path = require("node:path");

console.log("Using Path Join: ", path.join("folder1", "folder2", "index.html"));

// The demiiliter used will be platform specific.

console.log("Using Path Join: ", path.join(__dirname, "index.html"));

//Normalizing

console.log(
  "Using Path Join: ",
  path.join("folder1", "//folder2", "index.html")
);
console.log(
  "Using Path Join: ",
  path.join("folder1", "//folder2", "../index.html")
);

console.log(
  "Using Path Join: ",
  path.resolve("folder1", "folder2", "index.html")
);
console.log("Using Path Join: ", path.resolve(__dirname, "index.html"));
console.log(
  "Using Path Join: ",
  path.resolve("folder1", "//folder2", "index.html")
);
console.log(
  "Using Path Join: ",
  path.resolve("folder1", "//folder2", "../index.html")
);
console.log(path.resolve("folder1", "folder2", "index.html"));
