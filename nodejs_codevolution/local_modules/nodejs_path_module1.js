const path = require("node:path");

console.log("File Name: ", __filename);
console.log("Directory Name: ", __dirname);

console.log("Base File Name: ", path.basename(__filename));
console.log("Base Directory Name: ", path.basename(__dirname));

console.log("Extension File Name: ", path.extname(__filename));
console.log("Extension Directory Name: ", path.extname(__dirname));

console.log("File Parse: ", path.parse(__filename));
console.log("Original Path: ", path.format(path.parse(__filename)));

console.log("Path Separator: ", path.sep);
console.log("Path Delimiter: ", path.delimiter);
console.log("Path Absolute: ", path.isAbsolute(__filename));
console.log("Path Absolute: ", path.isAbsolute('./data1.json'));
