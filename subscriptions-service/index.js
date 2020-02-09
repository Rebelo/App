const express = require("express");
const dotenv = require("dotenv");
const Middleware = require("./plans-service/middleware/middleware");
const ErrorHandlingMiddleware = require("./plans-service/middleware/error-handling");

dotenv.config();
const PORT = process.env.PORT;

const app = express();

const SubscriptionsController = require("./controllers/subscriptions-controller");

Middleware(app);

app.use("", SubscriptionsController);

// Error middleware must be defined after all other middleware/routes
ErrorHandlingMiddleware(app);

app.listen(PORT, () => {
    console.log(`Subscriptions service listening on port ${PORT}`);
});


/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://"+"rebelo"+":"+password+"@" + host + ":" + port + "/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/