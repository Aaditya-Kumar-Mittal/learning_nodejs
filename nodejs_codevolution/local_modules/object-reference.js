const obj1 = {
  name: "Bruce Wayne",
};

// const obj2 = obj1;
// obj2.name = "Clark Kent";

let obj2 = obj1;
obj2 = {
  name: "Clark Kent",
};

console.log(obj1);
console.log(obj2);

// When you assign two objects to one another in javascript, both objects point to the same address in the memory.
// Modifying property of one, automatically means modifying property of another.
// If you use let, and assign a new object, reference is broken.
// This happens because obj1 behaves like module.exports and obj2 is just exports.
// From a module, nodejs returns module.exports and not exports. exports is just a reference to module.exports. Assigning a new object to exports breaks the reference.

console.log(obj1.name);
console.log(obj2.name);
