import App from "./App";
import ListOfUsers from "./components/ListOfUsers";
import CreateUserForm from "./components/CreateUserForm";

const routes = [
  {
    component: App,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home
      },
      {
        path: "/users/new",
        component: CreateUserForm
      },
      {
        path: "/users",
        component: ListOfUsers
      }
    ]
  }
];

export default routes;
