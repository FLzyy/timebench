interface Times {
    ns: bigint;
    ms: number;
    s: number;
}
export default class Timer {
    stored: Times[];
    private sTime;
    private eTime;
    constructor();
    start(): Timer;
    end(): Timer;
    reset(): Timer;
    get elasped(): Times;
}
export {};
