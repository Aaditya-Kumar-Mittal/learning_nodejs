const PizzaShop = require("./pizza-shop");

const pizzaShop = new PizzaShop();

pizzaShop.on("order", (size, toppings) => {
  console.log(`Order received: ${size} with toppings: ${toppings}`);
});

pizzaShop.order("large", "mushrooms"); // emits with args
pizzaShop.displayOrderNumber();

pizzaShop.order("medium", "pepperoni"); // another call with args
pizzaShop.displayOrderNumber();
