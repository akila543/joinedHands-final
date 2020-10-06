const requestRoute = require('./router.config.js')
const url = require('../config/config.js').DB_URL
const dbName = require('../config/config.js').DB_NAME
var MongoClient = require('mongodb').MongoClient
const request= require("superagent")
const idGenerator = require('../functions/idGenerator.js')

requestRoute.post('/createRequest',(req,res)=>{
  console.log(req.body);
var name= req.body.requestor_name
var phone_number=req.body.phone_no
var city = req.body.city
var pincode = req.body.pincode
var pickup_date=req.body.pickup_date
var pickup_time=req.body.pickup_time
var no_of_people=req.body.no_of_people
var destination =req.body.destination
var request_id=''

MongoClient.connect(url,(err,client)=>{

 const db= client.db(dbName)
 db.collection("requests").find({}).toArray((err,docs)=>{
   if(docs.length === 0){
     console.log("docs length is 0");
     request_id='RE1000001'
     db.collection("requests").insert({request_id:request_id,requestor_name:name,phone_number:phone_number,city:city,pincode:pincode,pickup_date:pickup_date,pickup_time:pickup_time,no_of_people:no_of_people,destination:destination,status:'open'},(err,result)=>{
         if(err){
           console.log(err,"err in inserting");
           res.send("err in saving")
         } else{
           res.send("insertededd")
         }
     })
   }else{
     var n= docs.length -1
     console.log("length",n,docs[n].request_id);
  var id = idGenerator(docs[n].request_id.toString())
  console.log("id",id,docs[0].request_id);
  db.collection("requests").insert({request_id:id,requestor_name:name,phone_number:phone_number,city:city,pincode:pincode,pickup_date:pickup_date,pickup_time:pickup_time,no_of_people:no_of_people,destination:destination,status:'open'},(err,result)=>{
      if(err){
        console.log(err,"err in inserting");
        res.send("err in saving")
      } else{
        res.send("insertededd")
      }
  })
   }
 })

})

})//end of route

requestRoute.get('/requests',(req,res)=>{
  MongoClient.connect(url,(err,client)=>{
    const db= client.db(dbName)
    db.collection('requests').find({status:"open"}).toArray((err,docs)=>{
      res.send(docs)
    })
  })
})
module.exports = requestRoute
