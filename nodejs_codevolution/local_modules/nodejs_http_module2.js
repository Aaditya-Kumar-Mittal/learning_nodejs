const http = require("http");
const fs = require("node:fs");

http
  .createServer((req, res) => {
    const superHero = {
      name: "Superman",
      age: 30,
      powers: ["flying", "super strength", "x-ray vision"],
    };
    //const contents = fs.readFileSync("./index1.html", "utf-8");
    // res.end(contents)
    // it readds the entire file contents at once. leads to buffer population and unecessary use of memory

    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/index1.html", "utf-8").pipe(res);
  })
  .listen(8080);
