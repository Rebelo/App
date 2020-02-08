const dotenv = require('dotenv');
const path = require('path')


module.exports = {
    host: process.env.MONGODB_HOST,
    username: process.env.MONGODB_USER,
    password: process.env.MONGODB_PASS,
    port: process.env.MONGODB_PORT,
}


/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://leo:lsr230588@devcluster-hlvh8.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/