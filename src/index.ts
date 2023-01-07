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
    this.eTime = process.hrtime.bigint();

    return this;
  }

  reset(): Timer {
    this.sTime = 0n;
    this.eTime = 0n;

    return this;
  }

  get time(): Times {
    const ns = this.eTime - this.sTime;
    const all = {
      ns,
      ms: Number(ns / 1000000n),
      s: Number(ns / 1000000000n),
    };

    this.stored.push(all);

    return all;
  }
}
