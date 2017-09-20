const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const bodyParser = require("body-parser");

const { setConfig } = require("./utils");
const setRoutes = require("./routes");
const setMiddlewares = require("./middlewares");
const getMongoClient = require("./mongodb");

const app = express();

module.exports = init();

async function init() {
  setConfig(app, require("config"));

  // uncomment after placing your favicon in /public
  //app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
  app.use(logger("dev"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static(path.resolve(__dirname, "../public")));

  let mongoClient = await getMongoClient(app.get("mongourl"));
  app.set("mongoClient", mongoClient);

  setMiddlewares(app);
  setRoutes(app);

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
  });

  return app;
}
