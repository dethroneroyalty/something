import { h, Component } from "preact";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import "./App.css";

import CreateUserForm from "./components/CreateUserForm";
import ListOfUsers from "./components/ListOfUsers";

export default class App extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", "/api/users");
    xhr.onload = () => {
      this.setState({ users: xhr.response });
    };
    xhr.send();
  }

  addUser = user => {
    this.setState(prev => ({
      users: prev.users.concat(user)
    }));
    this.context.router.history.push("/users");
  };

  render(_, { users }) {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/users/new">New User</Link>
            </li>
          </ul>
          <Route
            path="/users"
            exact
            render={props => <ListOfUsers {...props} users={users} />}
          />
          <Route
            path="/users/new"
            render={props => (
              <CreateUserForm {...props} addUser={this.addUser} />
            )}
          />
        </div>
      </Router>
    );
  }
}
