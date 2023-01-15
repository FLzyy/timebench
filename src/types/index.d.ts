interface Times {
    ns: bigint;
    ms: bigint;
    s: bigint;
}
export default class Timer {
    stored: Times[];
    private sTime;
    private eTime;
    start(): this;
    end(): this;
    lap(): this;
    reset(): this;
    get elasped(): Times;
}
export {};
