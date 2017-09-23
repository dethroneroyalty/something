import { expect } from "chai";
import deepFreeze from "deep-freeze";

function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo(undefined, action)];
    case "TOGGLE_TODO":
      return state.map(el => todo(el, action));
    default:
      return state;
  }
}

function todo(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case "TOGGLE_TODO":
      return action.id === state.id
        ? { ...state, completed: !state.completed }
        : state;
    default:
      return state;
  }
}

describe("Todo list", () => {
  it("add todos", () => {
    const stateBefore = [];
    const action = {
      type: "ADD_TODO",
      id: 0,
      text: "Learn Redux"
    };
    const stateAfter = [
      {
        id: 0,
        text: "Learn Redux",
        completed: false
      }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(todos(stateBefore, action)).to.deep.equal(stateAfter);
  });

  it("toggle todo", () => {
    const stateBefore = [
      {
        id: 0,
        text: "Learn Redux",
        completed: false
      },
      {
        id: 1,
        text: "Go Shopping",
        completed: false
      }
    ];
    const stateAfter = [
      {
        id: 0,
        text: "Learn Redux",
        completed: false
      },
      {
        id: 1,
        text: "Go Shopping",
        completed: true
      }
    ];
    const action = {
      type: "TOGGLE_TODO",
      id: 1
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(todos(stateBefore, action)).to.deep.equal(stateAfter);
  });
});
