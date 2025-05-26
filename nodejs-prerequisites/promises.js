function delayFunc(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

console.log("Promises in Javascript");

delayFunc(2000).then(() => {
  console.log("This message is displayed after 2 seconds");
});

console.log("End of Promise file");

function divideFunction(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject("Cannot perfomr division by zero");
    } else {
      resolve(num1 / num2);
    }
  });
}

divideFunction(10, 2);
divideFunction(10, 0)
  .then((result) => {
    console.log("Result of division:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });