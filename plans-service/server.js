const express = require("express");
const dotenv = require("dotenv");
const Middleware = require("./middleware/middleware");
const ErrorHandlingMiddleware = require("./middleware/error-handling");

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

const PlansController = require("./controllers/plans-controller");
const SubscriptionsController = require("./controllers/subscriptions-controller");

Middleware(app);

app.use("/api/plans", PlansController);
app.use("/api/subscriptions", SubscriptionsController);

// Error middleware must be defined after all other middleware/routes
ErrorHandlingMiddleware(app);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
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