const url = require('./config/config.js').DB_URL
const dbName = require('./config/config.js').DB_NAME
var MongoClient = require('mongodb').MongoClient

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
  if (err) {
    throw err
  }
  const db = client.db(dbName)
  console.log('Connected to Mongodb successfully')
})
