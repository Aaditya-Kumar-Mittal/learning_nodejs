const http = require("http");
const fs = require("node:fs");

http
  .createServer((req, res) => {
    const name = "Aaditya Kumar Mittal";

    res.writeHead(200, { "Content-Type": "text/html" });
    let contents = fs.readFileSync("./index2.html", "utf-8");

    // Using HTML templates to send dynamic values as RESPONSE to HTML file.
    contents = contents.replace("{{name}}", name);
    res.end(contents);
    // it readds the entire file contents at once. leads to buffer population and unecessary use of memory
  })
  .listen(8080);
