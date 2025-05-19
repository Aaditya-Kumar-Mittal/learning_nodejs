const https = require("node:https");

// const crypto = require("node:crypto");

// process.env.UV_THREADPOOL_SIZE = 16;

// By increaseing the tread pool size, we are able to improve the total time taken to run miltiple calls of an asynchronous method like pbkdf2

const start = Date.now();
const MAX_CALLS = 12;

for (let i = 0; i < MAX_CALLS; i++) {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(`Request ${i} took ${Date.now() - start}ms`);
      });
    })
    .end();
}

// https.request method does not seem to use the thread pool, because the average timer remains same for 2,6,12,16 requests of MAX_CALLS
// https.request method is not CPU intensive, so it does not use the thread pool
// https.request method is I/O intensive, so it uses the event loop
// Libuv instead delegates the work to the operating system kernel and whenever possible, it will poll the kernel and see if the request has completed.
// https.request does not seem to be affected by the CPU cores either.