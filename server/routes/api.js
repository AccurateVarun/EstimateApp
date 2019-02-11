const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/EstimateApp',(err,client)=>{
        if(err) return console.log(err);
        closure(client);
    })
}

//error handling
const sendError =  (err,res) => {
    response.status = 501;
    response.message = type.err == "object" ? err.message :err,
    res.status(501).json.response();
}

// Response handling
let response = {
    status:200,
    data:[],
    message:null
};

//get userInfo
router.get('/userinfo',(req,res) => {
    connection((client) => {
        client.db('EstimateApp').collection('UserInfo')
        .find()
        .toArray()
        .then((userInfo) => {
            response.data = userInfo;
            res.json(response);
        })
        .catch((err)=>{
            sendError(err,res);
        });
    });
});

module.exports = router;