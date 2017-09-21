import { h, Component } from "preact";

export default class CreateUserForm extends Component {
  handleSubmit = ev => {
    ev.preventDefault();

    let name = this.nameField.value;
    let age = this.ageField.value;

    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("POST", "/api/users");
    xhr.setRequestHeader("Content-Type", "application/json");
    let res = new Promise((resolve, reject) => {
      xhr.onload = resolve;
      xhr.onerror = reject;
    });
    xhr.send(JSON.stringify({ name, age }));
    return res.then(() => {
      let slug = xhr.response.slug;
      return { name, age, slug };
    });
  };

  render({ addUser }) {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e).then(addUser)}>
          <div class="field">
            <label>
              Name:
              <input type="text" ref={el => (this.nameField = el)} />
            </label>
          </div>
          <div class="field">
            <label>
              Age:
              <input type="number" ref={el => (this.ageField = el)} />
            </label>
          </div>
          <div class="field">
            <button type="submit">Create user</button>
          </div>
        </form>
      </div>
    );
  }
}
