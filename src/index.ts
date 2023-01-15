interface Times {
  ns: bigint;
  ms: bigint;
  s: bigint;
}

/**
 * Creates a new Timer object and starts it.
 *
 * @export
 * @class Timer
 * @typedef {Timer}
 */
export default class Timer {
  /**
   * Contains saved times from lapping.
   *
   * @type {Times[]}
   */
  stored: Times[] = [];
  private sTime: bigint = process.hrtime.bigint();
  private eTime: bigint = 0n;

  /**
   * Starts the timer only if it is not ongoing and has been reset.
   */
  start(): this {
    if (this.sTime !== 0n) {
      throw new Error("Timer is still currently ongoing.");
    }
    if (this.eTime !== 0n) {
      throw new Error("Timer has not be reset.");
    }
    this.sTime = process.hrtime.bigint();

    return this;
  }

  /**
   * Ends the timer, requires for the timer to have been started.
   */
  end(): this {
    if (this.sTime === 0n) {
      throw new Error("Timer has not been started yet.");
    }

    this.eTime = process.hrtime.bigint();

    return this;
  }

  /**
   * Saves the current time in the `stored` property.
   */
  lap(): this {
    const ns = process.hrtime.bigint() - this.sTime;

    this.stored.push({
      ns,
      ms: ns / 1000000n,
      s: ns / 1000000000n,
    });

    return this;
  }

  /**
   * Resets the timer back to 0ns
   */
  reset(): this {
    this.sTime = this.eTime = 0n;

    return this;
  }

  /**
   * Returns the elapsed time, requires for the timer to have been ended.
   *
   * @readonly
   * @type {Times}
   */
  get elasped(): Times {
    if (this.eTime === 0n) {
      throw new Error("Timer has not ended.");
    }

    const ns = this.eTime - this.sTime;

    return {
      ns,
      ms: ns / 1000000n,
      s: ns / 1000000000n,
    };
  }
}
