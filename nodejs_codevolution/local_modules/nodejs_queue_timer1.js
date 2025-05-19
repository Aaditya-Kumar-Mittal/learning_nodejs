setTimeout(() => {
  console.log("this is setTimeout 1");
}, 0);

setTimeout(() => {
  console.log("this is setTimeout 2");
  process.nextTick(() => {
    console.log("this is inner next tick inside setTimeout 2");
  });
}, 0);

setTimeout(() => {
  console.log("this is setTimeout 3");
}, 0);

process.nextTick(() => {
  console.log("this is nextTick 1");
});

process.nextTick(() => {
  console.log("this is nextTick 2");
  process.nextTick(() => {
    console.log("this is inner next tick inside next tick 2");
  });
});

process.nextTick(() => {
  console.log("this is nextTick 3");
});

Promise.resolve().then(() => {
  console.log("this is Promise.relsolve 1");
});

Promise.resolve().then(() => {
  console.log("this is Promise.relsolve 2");
  process.nextTick(() => {
    console.log("this is inner next tick inside Promise.resolve 2");
  });
});

Promise.resolve().then(() => {
  console.log("this is Promise.relsolve 3");
});

/*
Promise.resolve().then(() => {
  console.log("this is Promise.relsolve 1");
});

console.log("Log Statement 1");
process.nextTick(() => {
  console.log("This is process.nextTick 1");
});
console.log("Log Statement 2");
*/

// All callbacks in nextTick Queue are executed before callbacksin promise queue

// Use of process.nextTick() is discouraged as it can cause the rest of the event loop to starve

// if you can endlessly call process.nextTick() in a loop, the control will never make it past the microtask queue
