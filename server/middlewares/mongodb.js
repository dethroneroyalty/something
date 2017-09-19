const { MongoClient } = require("mongodb");

let db;

module.exports = function(app) {
  return function addMongo(req, res, next) {
    if (db) return (req.mongodb = db);

    let url = app.get("mongodb");
    MongoClient.connect(url, (err, db) => {
      if (err) {
        console.error(err.message);
        process.exit(1);
        return;
      }
      req.mongodb = db;
      next();
    });
  };
};
