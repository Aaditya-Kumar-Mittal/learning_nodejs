const PizzaShop = require("./pizza-shop");
const DrinkMachine = require("./drink-machine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, toppings) => {
  console.log(`Order received: ${size} with toppings: ${toppings}`);
  drinkMachine.serverDrink("large");
});

pizzaShop.order("large", "mushrooms"); // emits with args
pizzaShop.displayOrderNumber();

pizzaShop.order("medium", "pepperoni"); // another call with args
pizzaShop.displayOrderNumber();
