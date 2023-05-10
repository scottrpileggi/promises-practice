import { vitest, it, describe, expect, beforeEach } from "vitest";
import { attachTitle, getPromise } from "../exercises/e5.js";

describe("Promise variable test", () => {
  it("Promise variable should exist", () => {
    expect(getPromise).toBeInstanceOf(Object);
  });
  it("Promise constructor should have a name of Promise", () => {
    expect(getPromise().constructor.name).toEqual("Promise");
  });
});

describe("attachTitle test", () => {
  it("The attachTitle function should return the name after 'DR.'", () => {
    expect(attachTitle("SomeName")).toEqual("DR. SomeName");
  });
});

describe("Promise is settled as resolved", () => {
  it("Promise should resolve with a message of 'DR. MANHATTAN'", async () => {
    const logSpy = vitest.spyOn(console, "log");
    await getPromise().then((d) => console.log(d));
    expect(logSpy).toHaveBeenCalledWith("DR. MANHATTAN");
  });
});
