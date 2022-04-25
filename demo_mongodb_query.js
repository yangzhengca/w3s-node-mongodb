const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/"

// MongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   const dbo = db.db("w3s-mydb");

//   const query = {address: "Park Lane 38"};



//   dbo.collection("customers").find(query).toArray((err, result) => {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   })

// })

// use RegExp
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("w3s-mydb");
  var query = { address: /^S/ };//start with "S"
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});