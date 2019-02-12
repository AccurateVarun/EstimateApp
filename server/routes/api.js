const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const Mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectID;

const connectionStringCloud = "mongodb://accurateit:accurateit136@estimateapp-shard-00-00-7b8bd.mongodb.net:27017,estimateapp-shard-00-01-7b8bd.mongodb.net:27017,estimateapp-shard-00-02-7b8bd.mongodb.net:27017/EstimateApp?ssl=true&replicaSet=EstimateApp-shard-0&authSource=admin&retryWrites=true";



// connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/EstimateApp',(err,client)=>{
        if(err) return console.log(err);
        closure(client);
    })
}

// Mongoose.connect('mongodb://localhost:27017/EstimateApp', {useNewUrlParser: true});
Mongoose.connect(connectionStringCloud, {useNewUrlParser: true});
var UserInfo = require("../../src/app/models/userinfo").UserInfo;

const connectionMongoose = (closure) => {
    return Mongoose.connect('mongodb://localhost:27017/EstimateApp',(err,client)=>{
        if(err) return console.log(err);
        closure(client);
    })
}

//error handling
const sendError =  (err,res) => {
    response.status = 501;
    response.message =  type.err == "object" ? err.message :err,
    res.status(501).json.response();
}

// Response handling
let response = {
    status:200,
    data:[],
    message:null
};

// //get userInfo
// router.get('/userinfo',(req,res) => {
//     connection((client) => {
//         client.db('EstimateApp').collection('UserInfo')
//         .find()
//         .toArray()
//         .then((userInfo) => {
//             response.data = userInfo;
//             res.json(response);
//         })
//         .catch((err)=>{
//             sendError(err,res);
//         });
//     });
// });

//get userInfo
router.get('/userinfo',(req,res) => {
    UserInfo.find({}, function(err, userinfo) {
        if(err){
            sendError(err,res);
            next;
        }
        response.data = userinfo;
        res.json(response);  
      });
});

module.exports = router;