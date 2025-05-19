const crypto = require("crypto");

const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 5;

// By increaseing the tread pool size, we are able to improve the total time taken to run miltiple calls of an asynchronous method like pbkdf2
const MAX_CALLS = 6;

for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log(`${i + 1}:`, Date.now() - start);
  });
}
