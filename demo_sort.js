const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";


MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  const dbo = db.db("w3s-mydb");

  // const mysort = {name: 1};//asc
  const mysort = {name: -1};//desc

  dbo.collection("customers").find({}).sort(mysort).toArray((err, result) => {
    if (err) throw err;
    console.log(result);
    db.close();
  })
})