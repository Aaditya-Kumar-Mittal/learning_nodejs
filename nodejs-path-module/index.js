const path = require("node:path");

console.log("Directory Name: ", path.dirname(__filename));

console.log("File Base Name: ", path.basename(__filename));

console.log("File Extension: ", path.extname(__filename));

const joinPath = path.join(
  "/user",
  "documents",
  "personal_documents",
  "aadhar_documents",
  "copy1.pdf"
);

console.log("Joined Paths: ", joinPath);

const resolvePath = path.resolve(
  "user",
  "documents",
  "personal_documents",
  "aadhar_documents",
  "copy1.pdf"
);

console.log("Resolved Path: ", resolvePath);

const normalizePath = path.normalize(
  "/user/.documents/../personal_documents/aadhar_documents/copy1.pdf"
);

console.log("Normalized Path: ", normalizePath);

