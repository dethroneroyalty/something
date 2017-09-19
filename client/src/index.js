import { h, render } from "preact";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

render(
  <Router>
    <App />
  </Router>,
  document.body
);
