// an async function alwasys return a promise

function delayFunc(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

async function delayedGreet(name) {
  await delayFunc(2000);
  console.log(`Hello, ${name}!`);
}

delayedGreet("Aaditya Kumar Mittal");
