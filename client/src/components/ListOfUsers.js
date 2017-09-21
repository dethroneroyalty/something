import { h, Component } from "preact";

export default class ListOfUsers extends Component {
  render({ users }) {
    return (
      <ul>
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
