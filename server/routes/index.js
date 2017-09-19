const { Router } = require("express");
const users = require("./users");

module.exports = function setRoutes(app) {
  const router = Router();

  router.use("/users", users);

  app.use("/api", router);
};
