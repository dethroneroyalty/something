const { MongoClient } = require("mongodb");

let DB;

module.exports = function mongoClient(url) {
  if (DB) return Promise.resolve(DB);

  DB = MongoClient.connect(url).catch(err => {
    console.error(err.stack);
    process.exit(1);
  });
  return DB;
};
