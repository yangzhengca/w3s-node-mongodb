const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

// orders
// [
//   { _id: 1, product_id: 154, status: 1 }
// ]

// products
// [
//   { _id: 154, name: 'Chocolate Heaven' },
//   { _id: 155, name: 'Tasty Lemons' },
//   { _id: 156, name: 'Vanilla Dreams' }
// ]


MongoClient.connect(url, (err, db) => {
  if (err) throw err;

  const dbo = db.db("w3s-mydb");

  dbo.collection("orders").aggregate([
    {
      $lookup:{
        from: 'products',
        localField: "product_id",
        foreignField: "_id",
        as: 'orderdetails'
      }
    }
  ]).toArray((err, res) => {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  })
})