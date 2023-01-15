import Timer from "./index";

/**
 * Helper sleep function, accurate to a few ms.
 * @param {number} ms
 */
const sleep = (ms: number): void => {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
};

const timer = new Timer();

sleep(3000);

timer.lap();

sleep(2000);

timer.end();

console.log(timer.elasped);
console.log(timer.stored);

timer.reset();
