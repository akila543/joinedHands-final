const url = require('./config/config.js').DB_URL
const dbName = require('./config/config.js').DB_NAME
var MongoClient = require('mongodb').MongoClient
var data=[
  {
	"name" : "akila",
	"phone_number" : 9113046785,
	"address" : "s.k comforts",
	"city" : "electronic city",
	"pincode" : 560100,
	"password" : "aki@123",
	"userType" : "volunteer",
	"serviceType" : "cab",
	"cooridinates" : [
		{
			"lat" : 12.912381,
			"lng" : 77.637377
		}
	]
},
{
  "name" : "Sruthy",
  "phone_number" : 9092616334,
  "address" : "J&M villas",
  "city" : "electronic city",
  "pincode" : 560100,
  "password" : "sruthy@123",
  "userType" : "volunteer",
  "serviceType" : "cab",
  "cooridinates" : [
    {
      "lat" : 12.842264,
      "lng" : 77.681580
    }
  ]
},
{
  "name" : "John",
  "phone_number" : 9909234244,
  "address" : "concord manhattans",
  "city" : "madiwala",
  "pincode" : 560100,
  "password" : "12345",
  "userType" : "caregiver",
  "serviceType" : "cab",
  "cooridinates" : [
    {
      "lat" : 12.921918,
      "lng" : 77.616692
    }
  ]
},
{
  "name" : "Amritha",
  "phone_number" : 8809756321,
  "address" : "uniworld",
  "city" : "Bommanahalli",
  "pincode" : 560100,
  "password" : "amru@123",
  "userType" : "volunteer",
  "serviceType" : "cab",
  "cooridinates" : [
    {
      "lat" : 12.909202,
      "lng" : 77.625275
    }
  ]
},
{
  "name" : "Devika",
  "phone_number" : 7908765433,
  "address" : "uniworld",
  "city" : "silk board",
  "pincode" : 560100,
  "password" : "devu@123",
  "userType" : "volunteer",
  "serviceType" : "cab",
  "cooridinates" : [
    {
      "lat" : 12.915142,
      "lng" : 77.620726
    }
  ]
},
{
"name" : "Mike",
"phone_number" : 9113046785,
"address" : "s.k comforts",
"city" : "electronic city",
"pincode" : 560100,
"password" : "12345",
"userType" : "volunteer",
"serviceType" : "cab",
"cooridinates" : [
  {
    "lat" : 12.912381,
    "lng" : 77.637377
  }
]
},
{
"name" : "Jane",
"phone_number" : 9113046785,
"address" : "s.k comforts",
"city" : "electronic city",
"pincode" : 560100,
"password" : "12345",
"userType" : "Doctor",
"serviceType" : "medical",
"cooridinates" : [
  {
    "lat" : 12.912381,
    "lng" : 77.637377
  }
]
},
]
MongoClient.connect(url,(err,client)=>{
  const db= client.db(dbName)

db.collection("users").insertMany(data,(err,result)=>{
  if(err){
    console.log("err in inserting");
  }else{
    console.log("inserted successfully");
  }
})
})
