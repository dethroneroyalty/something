const mongodb = require("./mongodb");

module.exports = function setMiddlewares(app) {
  app.use("/api", mongodb(app));
};
