const user = require('./router.config.js')
const url = require('../config/config.js').DB_URL
const dbName = require('../config/config.js').DB_NAME
var MongoClient = require('mongodb').MongoClient
const api_key=require('../config/config.js').API_KEY
const request= require("superagent")

user.post('/register',(req,res)=>{
var name= req.body.name
var phone_number=req.body.phone_number
var address = req.body.address
var city = req.body.city
var pincode = req.body.pincode
var cooridinates=[
]
cooridinates.push({
  "lat":0.0,
  "lng":0.0
})
var userType=req.body.userType
var serviceType=req.body.serviceType
var password=req.body.password

MongoClient.connect(url,(err,client)=>{

 const db= client.db(dbName)
  db.collection("users").insert({name:name,phone_number:phone_number,address:address,city:city,pincode:pincode,password:password,userType:userType,serviceType:serviceType,cooridinates:cooridinates},(err,result)=>{
      if(err){
        console.log(err,"err in inserting");
        res.send("err in saving")
      } else{
        res.send("insertededd")
      }
  })
})

})//end of route

user.get('/validate',(req,res)=>{
  var uname=req.query.name;
  var upassword=req.query.password;
  var finalResult={}
  MongoClient.connect(url,(err,client)=>{
    const db= client.db(dbName)
     db.collection("users").find({name:uname}).toArray((err,result)=>{
       if(result[0].password === upassword){
         finalResult.userType=result[0].userType
         finalResult.statuscode=200
         res.send(finalResult)
       }else{
         res.send("Incorrect password")
       }
     })
  })
})
module.exports = user
