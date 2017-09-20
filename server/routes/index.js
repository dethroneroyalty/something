const { Router } = require("express");
const users = require("./users");

module.exports = function setRoutes(app) {
  const router = Router();
  const mongoClient = app.get("mongoClient");

  router.use("/users", users(mongoClient));

  app.use("/api", router);
};
