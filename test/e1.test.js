import { vitest, it, describe, expect, beforeEach } from "vitest";
import { getPromise } from "../exercises/e1.js";

describe("Promise variable test", () => {
  beforeEach(() => {
    vitest.clearAllMocks();
    vitest.clearAllTimers();
    vitest.useFakeTimers();
  });
  it("Promise variable should exist", () => {
    expect(getPromise).toBeInstanceOf(Object);
  });
  it("Promise variable constructor should have a name of Promise", () => {
    expect(getPromise.constructor.name).toEqual("Promise");
  });
  it("Promise should log a resolved message in the console in 1 second", async () => {
    const logSpy = vitest.spyOn(console, "log");
    await getPromise;
    expect(logSpy).toHaveBeenLastCalledWith("The PROMISE was RESOLVED");
  });
  it("Promise should return a resolved string value in 1 second", async () => {
    const result = await getPromise;
    vitest.advanceTimersByTime(1000);
    expect(result).toEqual("The PROMISE was RESOLVED");
  });
});
