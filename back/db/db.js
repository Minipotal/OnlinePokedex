const { MongoClient } = require("mongodb");
const connectionString =
  "mongodb+srv://Riuck:WAjcVIXbW0G736Xp@cluster0.i0l3rt2.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return err;
      }
      dbConnection = db.db("PasSQL");
      console.log("Successfully connected to MongoDB.");
    });
  },

  getDb: function () {
    return dbConnection;
  },
};