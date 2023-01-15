# timebench

[![npm version](https://img.shields.io/npm/v/timebench)](https://www.npmjs.com/package/timebench)
[![npm downloads](https://img.shields.io/npm/dw/timebench.svg)](https://www.npmjs.com/package/timebench)
[![CodeFactor](https://www.codefactor.io/repository/github/flzyy/timebench/badge)](https://www.codefactor.io/repository/github/flzyy/timebench)

Small little helper class for timing and benchmarking things.

## Basic Usage

```js
import Timer from "timebench";

const timer = new Timer();

veryLongToExecuteFunction();

timer.end();

const times = timer.time();

console.log(times.ns, times.ms, times.s); // Nanoseconds, Milliseconds, and Seconds
```

## API

### `new Timer()`

Creates a new Timer object and starts it.

### `<Timer>.start()`

Starts the timer, requires for the timer to have been restarted.

### `<Timer>.end()`

Ends the timer, requires for the timer to have been started. It also stores the time values in
`<Timer>.stored`

### `<Timer>.reset()`

Resets the timer back to 0ns.

### `<Timer>.time`

Returns nanoseconds, millisecond, and seconds
elasped since Timer has been started and ended.

### `<Timer>.stored`

Returns all times timed with the instantiated Class.

### `<Timer>.lap()`

Laps the timer (gets current time elapsed and stores it without stopping).
