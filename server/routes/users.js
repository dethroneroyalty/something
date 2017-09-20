const { Transform } = require("stream");
const JSONStream = require("JSONStream");
const express = require("express");

const router = express.Router();

module.exports = function(db) {
  // GET users listing.
  router.route("/").get(function(req, res, next) {
    const User = db.collection("users");

    res.status(200);
    res.type("json");

    User.find()
      .limit(10)
      .pipe(JSONStream.stringify())
      .pipe(res);
  });

  return router;
};
