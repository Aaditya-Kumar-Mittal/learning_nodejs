const crypto = require("node:crypto");

// Provides an asynchronous Password-Based Key Derivation Function 2 (PBKDF2) implementation.
// It is a CPU intensive operation, so it is recommended to use the synchronous version of this function in a worker thread.

const start = Date.now();
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
console.log("Password Derivation Time:", Date.now() - start, "ms");
