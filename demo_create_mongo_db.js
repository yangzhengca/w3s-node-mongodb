const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/w3s-mydb";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("Datebase Created!");
  db.close();
})