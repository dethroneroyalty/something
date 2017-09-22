import { h, Component } from "preact";

import "./List.css";

export default class ListOfUsers extends Component {
  render({ users }) {
    return (
      <ul class="List">
        {users.map(({ name, age, slug }) => (
          <li>
            <div>{name}</div>
            <div>{age}</div>
            <div>{slug}</div>
          </li>
        ))}
      </ul>
    );
  }
}
