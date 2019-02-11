// server.js

let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');
    http = require('http');
    const app = express();


    //api file to interact with mongo db
    const api = require('./server/routes/api')

    //parsers
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));

    //angular dis output folder
    app.use(express.static(path.join(__dirname,'dist')))

    //api location
    app.use('/api',api);

    //send all other request to angular app
    app.get("*",(req,res)=>{
        res.sendfile(path.join(__dirname,"dist/EstimateApp/index.html"))
    });

    var port = process.env.PORT || 3000;

    app.set('port',port);

    const server = http.createServer(app);

    server.listen(port,()=>console.log(`Running on local host ${port}`));   