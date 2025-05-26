const EventEmitter = require("node:events");

const myFirstEmitter = new EventEmitter();

// Register a listener
myFirstEmitter.on("greet", (name) => {
  console.log(`Hello ${name}`);
});

// Emit the event
myFirstEmitter.emit("greet", "Alice");