// cluster.js
const cluster = require('cluster');
const os = require('os');
const http = require('http');

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  const numCPUs = os.cpus().length;

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  console.log(`Worker ${process.pid} started`);

  const server = http.createServer((req, res) => {
    if (req.url === '/') {
      res.end('Home Page');
    } else if (req.url === '/slow') {
      for (let i = 0; i < 1e9; i++) {}
      res.end('Slow Page');
    }
  });

  server.listen(8000, () => {
    console.log(`Server running on port 8000 - PID: ${process.pid}`);
  });
}
