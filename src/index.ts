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
