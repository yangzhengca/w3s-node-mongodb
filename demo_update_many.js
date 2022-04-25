var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("w3s-mydb");
  var myquery = { address: /^S/ };
  var newvalues = {$set: {name: "Minnie"} };
  dbo.collection("customers").updateMany(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.modifiedCount + " document(s) updated"); //w3school error

    db.close();
  });
});


// {
//   acknowledged: true,
//   modifiedCount: 0,
//   upsertedId: null,
//   upsertedCount: 0,
//   matchedCount: 2
// }