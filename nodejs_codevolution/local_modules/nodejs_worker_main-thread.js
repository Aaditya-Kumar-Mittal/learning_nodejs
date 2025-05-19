// main-thread.js
const http = require("http");
const { Worker } = require("node:worker_threads");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/slow-page") {
    const worker = new Worker(
      path.resolve(__dirname, "./nodejs_worker_thread1.js")
    );

    worker.on("message", (data) => {
      res.end(`Slow Page Result: ${data}`);
    });

    worker.on("error", (err) => {
      console.error("Worker error:", err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Something went wrong");
    });
  }
});

server.listen(8000, () => console.log("Server listening on port 8000"));
