const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  const dbo = db.db("w3s-mydb");

  // find one
  // dbo.collection("customers").findOne({}, (err, result) => {
  //   if(err) throw err;
  //   console.log(result.name);
  //   db.close();
  // })

  // find all
  // dbo.collection("customers").find({}).toArray((err, result) => {
  //   if(err) throw err;
  //   console.log(result);
  //   db.close();
  // })

  // find_fields,
  dbo.collection("customers").find({},{
    projection: {
      _id: 0, 
      name:1,
      // address: 1
    }
  }).toArray((err, result) => {
    if(err) throw err;
    console.log(result);
    db.close();
  })

  
})