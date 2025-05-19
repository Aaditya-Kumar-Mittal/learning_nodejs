const crypto = require("crypto");

const start = Date.now();
const MAX_CALLS = 5;

// pbkdf2 has 4 threads, for 5th thread we need to free one of the thread and then it runs, hence twice the time for the 5th thread
for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log(`${i + 1}:`, Date.now() - start);
  });
}
