const http = require("http");

http
  .createServer((req, res) => {
    const superHero = {
      name: "Superman",
      age: 30,
      powers: ["flying", "super strength", "x-ray vision"],
    };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(superHero));
  })
  .listen(8080);
