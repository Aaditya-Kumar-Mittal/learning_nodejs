const http = require("http");
const fs = require("node:fs");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Home Page");
    } else if (req.url === "/about") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("About Page");
    } else if (req.url === "/api") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ name: "John", age: 30 }));
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    }
  })
  .listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
  });
