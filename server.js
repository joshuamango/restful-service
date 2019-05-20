const express = require("express");
const app = express();

const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const uri = "mongodb+srv://joshua:<password>@challenge-cluster-712i5.mongodb.net/test?retryWrites=true"; // Password has been removed from string

app.get("/customer/:id", (req, res) => {
  // Connect to the database and retrieve customers
  (async function() {
    const client = new MongoClient(uri, {useNewUrlParser: true});

    try {
      await client.connect();
      console.log("Connected to customer database");

      const dataCollection = await client.db("customers").collection("data");
      
      await dataCollection.findOne({id: Number(req.params.id)}, (err, result) => {
        if (err) throw err;
        res.send(result);
      })
    }
    catch (err) {
      console.log(err.stack);
    }

    client.close();
  })();
});

app.delete("/customer/:id", (req, res) => {
  // Connect to the database
  (async function() {
    const client = new MongoClient(uri, {useNewUrlParser: true});

    try {
      await client.connect();
      console.log("Connected to customer database");

      const dataCollection = await client.db("customers").collection("data");

      await dataCollection.deleteOne({id: Number(req.params.id)}, (err, result) => {
        if (err) throw err;
        res.send(result);
      })
    }
    catch (err) {
      console.log(err.stack);
    }

    client.close();
  })();
})

app.post("/customer/:id", (req, res) => {
  // Connect to the database
  (async function() {
    const client = new MongoClient(uri, {useNewUrlParser: true});

    try {
      await client.connect();
      console.log("Connected to customer database");

      const dataCollection = await client.db("customers").collection("data");

      await dataCollection.insertOne(req.body.insert, (err, result) => {
        if (err) throw err;
        res.send(result);
      });
    }
    catch (err) {
      console.log(err.stack);
    }

    client.close();
  })();
});

app.post("/customer/:id", (req, res) => {
  // Connect to the database
  (async function() {
    const client = new MongoClient(uri, {useNewUrlParser: true});

    try {
      await client.connect();
      console.log("Connected to customer database");

      const dataCollection = await client.db("customers").collection("data");

      await dataCollection.updateOne({id: Number(req.params.id)}, {$set: req.body.set}, (err, result) => {
        if (err) throw err;
        res.send(result);
      })
    }
    catch (err) {
      console.log(err.stack);
    }

    client.close();
  })();
})


app.listen(8080, () => console.log(`Listening on port: 8080`));
