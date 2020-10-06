const childCareRequest = require('./router.config.js')
const url = require('../config/config.js').DB_URL
const dbName = require('../config/config.js').DB_NAME
var MongoClient = require('mongodb').MongoClient
const request= require("superagent")
const idGenerator = require('../functions/idGenerator.js')

childCareRequest.post('/createChildCareRequest',(req,res)=>{
  console.log(req.body);
  var facilityPreference = req.body.facilityPreference
  var requestorName = req.body.requestorName
  var date = req.body.date
  var timeFrom = req.body.timeFrom
  var timeTo = req.body.timeTo
  var nofChildren = req.body.nofChildren
  var ageRange = req.body.ageRange
  var specialNotes = req.body.specialNotes
  var requestorAddress = req.body.requestorAddress
  var city = req.body.city
  var zipCode = req.body.zipCode
  var contactNo = req.body.contactNo
  var dropPreference = req.body.dropPreference
  var request_id=''

MongoClient.connect(url,(err,client)=>{

 const db= client.db(dbName)
 db.collection("childCareRequests").find({}).toArray((err,docs)=>{
   if(docs.length === 0){
     console.log("docs length is 0");
     request_id='CH1000001'
     db.collection("childCareRequests").insert({request_id:request_id,facilityPreference:facilityPreference,requestorName:requestorName,date:date,timeFrom:timeFrom,timeTo:timeTo,nofChildren:nofChildren,ageRange:ageRange,specialNotes:specialNotes,requestorAddress:requestorAddress,city:city,zipCode:zipCode,contactNo:contactNo,dropPreference:dropPreference},(err,result)=>{

         if(err){
           console.log(err,"err in inserting");
           res.send("err in saving")
         } else{
           res.send("insertededd")
         }
     })
   }else{
     var n= docs.length -1
     
     var id = idGenerator(docs[n].request_id.toString())
  db.collection("childCareRequests").insert({request_id:id,facilityPreference:facilityPreference,requestorName:requestorName,date:date,timeFrom:timeFrom,timeTo:timeTo,nofChildren:nofChildren,ageRange:ageRange,specialNotes:specialNotes,requestorAddress:requestorAddress,city:city,zipCode:zipCode,contactNo:contactNo,dropPreference:dropPreference},(err,result)=>{
      if(err){
        console.log(err,"err in inserting");
        res.send("err in saving")
      } else{
        res.send("inserted")
      }
  })
   }
 })

})

})//end of route
childCareRequest.get('/childCareRequests',(req,res)=>{
  MongoClient.connect(url,(err,client)=>{
    const db= client.db(dbName)
    db.collection('childCareRequests').find({}).toArray((err,docs)=>{
      console.log("docs are",docs);
      res.send(docs)
    })
  })
})

module.exports = childCareRequest
