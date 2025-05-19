const EventEmitter = require("node:events");
const emitter = new EventEmitter();

emitter.on("orderPizza", (size, topping) => {
  console.log(`Baking a ${size} pizza with ${topping}`);
});


emitter.emit("orderPizza", "large", "mushroom");

