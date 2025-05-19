const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter {
  constructor() {
    super(); // Allows us to use PizzaShop class as EventEmitter
    this.orderNumber = 0;
  }

  order(size, toppings) {
    this.orderNumber++;
    this.emit("order", size, toppings);
  }

  displayOrderNumber() {
    console.log(`Order number: ${this.orderNumber}`);
  }
}

module.exports = PizzaShop;
