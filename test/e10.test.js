import { vitest, it, describe, expect, beforeEach } from "vitest";
import { result1, result2, result3, result4 } from "../exercises/e10.js";

describe("Result1 variable test", () => {
  it("Promise1 variable should exist", () => {
    expect(result1).toBeInstanceOf(Object);
  });

  it("Promise1 constructor should have a name of Promise", () => {
    expect(result1.constructor.name).toEqual("Promise");
  });
});

describe("Result2 variable test", () => {
  it("Promise2 variable should exist", () => {
    expect(result2).toBeInstanceOf(Object);
  });

  it("Promise2 constructor should have a name of Promise", () => {
    expect(result2.constructor.name).toEqual("Promise");
  });
});

describe("Result3 variable test", () => {
  it("Result3 variable should exist", () => {
    expect(result3).toBeInstanceOf(Object);
  });

  it("Result3 constructor should have a name of Promise", () => {
    expect(result3.constructor.name).toEqual("Promise");
  });
});

describe("Result4 variable test", () => {
  it("Result4 variable should exist", () => {
    expect(result3).toBeInstanceOf(Object);
  });

  it("Result4 constructor should have a name of Promise", () => {
    expect(result3.constructor.name).toEqual("Promise");
  });
});

describe("Result1 promise test", () => {
  it("Result1 should return a resolved value of 'Promise 2 REJECTED'", async () => {
    expect(await result1).toEqual("Promise 2 REJECTED");
  });
});

describe("Result2 promise test", () => {
  it("Result2 should return a resolved value of 'Promise 3 RESOLVED'", async () => {
    expect(await result2).toEqual("Promise 3 RESOLVED");
  });
});

describe("Result3 promise test", () => {
  beforeEach(() => {
    vitest.clearAllMocks();
    vitest.clearAllTimers();
    vitest.useFakeTimers();
  });

  const sampleData = [
    { status: "fulfilled", value: "RESOLVED AGAIN" },
    { status: "rejected", reason: "Promise 2 REJECTED" },
    { status: "fulfilled", value: "Promise 3 RESOLVED" },
    { status: "fulfilled", value: "RESOLVED AGAIN" },
  ];

  it("Result3 should return a resolved value of the array of all promises status and value", async () => {
    expect(await result3).toEqual(sampleData);
  });
});

describe("Result4 promise test", () => {
  it("Result4 should return a resolved value of 'RESOLVED AGAIN'", async () => {
    expect(await result4).toEqual("RESOLVED AGAIN");
  });
});
