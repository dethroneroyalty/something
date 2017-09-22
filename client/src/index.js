import { h, render } from "preact";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

render(
  <Router>
    <App />
  </Router>,
  document.body
);

if (module.hot) {
  console.log("SUCK THE `HOT` POLICE");
  module.hot.accept("./App", () => {
    let nextApp = require("./App");
    render(<NextApp />, document.body);
  });
}
