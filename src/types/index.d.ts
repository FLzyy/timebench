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
    stored: Times[];
    private sTime;
    private eTime;
    /**
     * Starts the timer only if it is not ongoing and has been reset.
     */
    start(): this;
    /**
     * Ends the timer, requires for the timer to have been started.
     */
    end(): this;
    /**
     * Saves the current time in the `stored` property.
     */
    lap(): this;
    /**
     * Resets the timer back to 0ns
     */
    reset(): this;
    /**
     * Returns the elapsed time, requires for the timer to have been ended.
     *
     * @readonly
     * @type {Times}
     */
    get elasped(): Times;
}
export {};
