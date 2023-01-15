interface Times {
  ns: bigint;
  ms: bigint;
  s: bigint;
}

export default class Timer {
  stored: Times[] = [];
  private sTime: bigint = process.hrtime.bigint();
  private eTime: bigint = 0n;

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

  end(): this {
    if (this.sTime === 0n) {
      throw new Error("Timer has not been started yet");
    }

    this.eTime = process.hrtime.bigint();

    this.stored.push(this.elasped);

    return this;
  }

  lap(): this {
    if (this.sTime === 0n) {
      throw new Error("Timer has not been started yet");
    }

    const ns = process.hrtime.bigint() - this.sTime;

    this.stored.push({
      ns,
      ms: ns / 1000000n,
      s: ns / 1000000000n,
    });

    return this;
  }

  reset(): this {
    this.sTime = this.eTime = 0n;

    return this;
  }

  get elasped(): Times {
    const ns = this.eTime - this.sTime;

    return {
      ns,
      ms: ns / 1000000n,
      s: ns / 1000000000n,
    };
  }
}
