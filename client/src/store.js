// import { createStore } from "redux";
import counter from "./counter";

const store = createStore(counter);

store.subscribe(render);
render();

document.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});

function render() {
  document.body.innerText = store.getState();
}

// function createStore(reducer) {
//   let state;
//   let listeners = [];
//
//   function getState() { return state }
//
//   function dispatch(action) {
//     state = reducer(state, action);
//     listeners.forEach(l => l());
//   }
//
//   function subscribe(listener) {
//     listeners.push(listener);
//     return () => {
//       listeners = listeners.filter(l => l === listener);
//     }
//   }
//
//   dispatch({});
//
//   return {getState, dispatch, subscribe};
// }
