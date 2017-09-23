import { h, render } from "preact";
import { createStore } from "redux";

import App from "./App";
import Counter from "./components/Counter";
import counter from "./counter";

const store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function doRender() {
  render(
    <Counter
      value={store.getState()}
      onIncrement={() => {
        store.dispatch({ type: "INCREMENT" });
      }}
      onDecrement={() => {
        store.dispatch({ type: "DECREMENT" });
      }}
    />,
    document.body,
    document.getElementById("root")
  );
}
doRender();
store.subscribe(doRender);

if (module.hot) {
  console.log("FUCK THE `HOT` POLICE");
  module.hot.accept("./App", () => {
    let nextApp = require("./App");
    render(<NextApp />, document.body);
  });
}
