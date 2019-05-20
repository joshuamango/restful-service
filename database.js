// Import customer data from "customers.json" file
let json = require('./customers.json')
const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://joshua:<password>@challenge-cluster-712i5.mongodb.net/test?retryWrites=true"; // Password has been removed from string

/* Anonymous, asynchronous function that connects to mongoDB Atlas cluster and
and inserts customer data*/
(async function() {
  const client = new MongoClient(uri, {useNewUrlParser: true});

  try {
    await client.connect();
    console.log("Connected to customer database");

    const dataCollection = await client.db("customers").collection("data");
    
    await dataCollection.insertMany(json, (err, result) => {
      if (err) throw err;
      console.log(`Number of documents inserted: ${result.insertedCount}`)
      assert(2000, result.insertedCount);
    })
  }
  catch (err) {
    console.log(err.stack);
  }

  client.close();
})();