import { vitest, it, describe, expect, beforeEach } from "vitest";
import { getPromise, updateSumValue } from "../exercises/e3.js";

describe("getPromise", () => {
  it("Function should exist", () => {
    expect(getPromise).toBeInstanceOf(Function);
  });

  it("Function return value constructor should have a name of Promise", () => {
    expect(getPromise(9).constructor.name).toEqual("Promise");
  });

  it("Promise should resolve with a value of 'Promise resolved'", async () => {
    expect(await getPromise(9)).toEqual(9);
    expect(await getPromise(80)).toEqual(80);
  });

  it("Function returns 0 if the argument is not a whole number or is not a number", () => {
    expect(getPromise("abc")).toEqual(0);
    expect(getPromise(9.1)).toEqual(0);
  });
});

describe("logSyncAndAsyncMessages", () => {
  it("Function should exist", () => {
    expect(updateSumValue).toBeInstanceOf(Function);
  });

  it("Function logs the resolved promise value last", async () => {
    expect(updateSumValue(Promise.resolve(121))).toBe(10);
  });
});
