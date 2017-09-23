import { expect } from "chai";
import counter from "../../src/counter";
import deepFreeze from "deep-freeze";

describe("counter", () => {
  it("increment  counter", () => {
    expect(counter(0, { type: "INCREMENT" })).to.equal(1);
    expect(counter(1, { type: "INCREMENT" })).to.equal(2);
  });

  it("decrement counter", () => {
    expect(counter(0, { type: "DECREMENT" })).to.equal(-1);
    expect(counter(-1, { type: "DECREMENT" })).to.equal(-2);
  });

  it("return the same state on `unknown` action type", () => {
    expect(counter(0, { type: "UNKNOWN" })).to.equal(0);
  });

  it("act with default `0` state if state is not passed", () => {
    expect(counter(undefined, { type: "INCREMENT" })).to.equal(1);
  });

  //it("increment counter", () => {
  //  const listBefore = [10, 30, 60];
  //  const listAfter = [10, 31, 60];

  //  deepFreeze(listBefore);
  //  expect(incrementCounter(listBefore, 1)).to.deep.equal(listAfter);
  //});
});
