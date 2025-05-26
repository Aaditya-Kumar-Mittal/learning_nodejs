const EventEmitter = require("node:events");

class myEmitter extends EventEmitter {
  constructor() {
    super();
    this.greeting = "Hello";
  }

  greet(name) {
    this.emit("greet", `${this.greeting} ${name}`);
  }
}

myCustomEmitter = new myEmitter();

myCustomEmitter.on("greet", (input) => {
  console.log("Greeting Event: ", input);
});

myCustomEmitter.greet("Alice");