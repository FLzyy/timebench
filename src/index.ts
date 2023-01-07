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

  start(): void {
    if (this.sTime !== 0n) {
      throw new Error("Timer is still currently ongoing.");
    }
    this.sTime = process.hrtime.bigint();
  }

  end(): void {
    this.eTime = process.hrtime.bigint();
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

  reset(): void {
    this.sTime = 0n;
    this.eTime = 0n;
  }
}
