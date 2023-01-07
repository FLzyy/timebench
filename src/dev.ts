import Timer from "./index";

const timer = new Timer();

let i = 0;
while (i < 1000000000) {
  i++;
}

timer.end();

console.log(timer.time);

timer.reset();

timer.start();

let h = 0;
while (h < 1000000000) {
  h++;
}

timer.end();

console.log(timer.time);

console.log(timer.stored);
