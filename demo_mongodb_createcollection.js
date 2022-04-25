const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  const dbo = db.db("w3s-mydb");
  dbo.createCollection("customers", (err, res) => {
    if (err) throw err;
    console.log("Collection Created!");
    db.close();
  })

  
})