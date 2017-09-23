import { expect } from "chai";
import { h, render } from "preact";

import "../../src/store";
import Counter from "../../src/components/Counter";

describe("store actions", () => {
  before("attach react app to `root` div", () => {
    let root = document.createElement("div");
    root.id = "root";
    document.body.appendChild(root);

    render(<Counter />, root);
  });

  it("I see initial state", () => {
    expect(document.body.innerText).to.equal("0");
  });

  context("when click on `body`", () => {
    before(function clickOnBody() {
      document.body.click();
    });
    it("state equal 1", () => {
      expect(document.body.innerText).to.equal("1");
    });
  });
});
