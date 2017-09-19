import { h, Component } from "preact";
import { Link, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Route path="/" exact render={() => <h1>Home</h1>} />
      <Route path="/about" render={() => <h1>About</h1>} />
    </div>
  );
}
