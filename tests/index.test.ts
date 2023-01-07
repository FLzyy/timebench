/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { describe, it } from "node:test";
import { equal, throws } from "node:assert/strict";
import Timer from "../src/index";

describe("Basic Functionality", { concurrency: true }, () => {
  it("should throw when started without restarting", () => {
    throws(new Timer().start);
  });

  it("should return with all properties", () => {
    const compareAgainst = new Timer().end().time;

    if (
      !("ns" in compareAgainst && "ms" in compareAgainst &&
        "s" in compareAgainst)
    ) {
      throw new Error("Property is missing");
    }
  });

  it("stored should have at least two elements", () => {
    const timer = new Timer();
    timer.end();
    timer.time;
    timer.reset();
    timer.start();
    timer.end();
    timer.time;

    equal(timer.stored.length, 2);
  });
});
