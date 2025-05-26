const lodash = require("lodash");

const namesArr = ["ram", "shyam", "aaditya"];

const captializedNames = lodash.map(namesArr, lodash.capitalize);

console.log(captializedNames);
