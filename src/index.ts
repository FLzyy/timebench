interface Times {
  ns: bigint;
  ms: number;
  s: number;
}

export default class Timer {
  stored: Times[];
  private sTime: bigint;
  private eTime: bigint;

  constructor() {
    this.sTime = process.hrtime.bigint();
    this.eTime = 0n;
    this.stored = [];
  }

  start(): Timer {
    if (this.sTime !== 0n) {
      throw new Error("Timer is still currently ongoing.");
    }
    this.sTime = process.hrtime.bigint();

    return this;
  }

  end(): Timer {
    if (this.sTime === 0n) {
      throw new Error("Timer has not been started yet");
    }

    this.eTime = process.hrtime.bigint();

    const all = this.elasped;

    this.stored.push(all);

    return this;
  }

  reset(): Timer {
    this.sTime = 0n;
    this.eTime = 0n;

    return this;
  }

  get elasped(): Times {
    const ns = this.eTime - this.sTime;

    return {
      ns,
      ms: Number(ns / 1000000n),
      s: Number(ns / 1000000000n),
    };
  }
}
