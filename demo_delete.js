const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";

// delete one
// MongoClient.connect(url, (err, db) => {
//   if(err) throw err;
//   const dbo = db.db("w3s-mydb");
//   const myquery = {
//     address: "Mountain 21"
//   }

//   dbo.collection("customers").deleteOne(myquery, (err, obj) => {
//     if (err) throw err;
//     console.log("1 document deleted");
//     db.close()
//   }
// )})


// delete many
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  const dbo= db.db("w3s-mydb");
  const myquery = {
    address: /^O/
  };

  dbo.collection("customers").deleteMany(myquery, (err, obj) => {
    if (err) throw err;

    console.log(obj.deletedCount + " document(s) deleted!"); //w3school error
    db.close();
  })
})