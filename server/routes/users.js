const { Transform } = require("stream");
const JSONStream = require("JSONStream");
const express = require("express");

const router = express.Router();

module.exports = function(db) {
  const User = db.collection("users");

  // GET users listing.
  router
    .route("/")
    .get(function(req, res) {
      res.status(200);
      res.type("json");

      User.find()
        .limit(30)
        .pipe(JSONStream.stringify())
        .pipe(res);
    })
    .post(async function(req, res) {
      let result, valid, slug;
      let { name, age } = req.body;

      age = parseInt(age);

      valid =
        name &&
        /^[A-Z][a-z]+/.test(name) &&
        (age && typeof age === "number" && age > 12);

      slug = name
        .split(/ /g)
        .map(n => n.toLowerCase())
        .join("_");

      if (!valid) {
        res.status(422);
        res.send({
          type: "error",
          message: "User data is not valid"
        });
        return;
      }

      await User.insertOne({ name, age, slug }, { w: 1, wtimeout: 100 }).catch(
        console.error
      );

      res.status(200);
      res.send({
        type: "ok",
        slug
      });
    });

  router.route("/:slug").get(async function(req, res, next) {
    let slug = req.params.slug;
    let user = await User.findOne({ slug }).catch(next);
    res.send(user);
  });

  return router;
};
