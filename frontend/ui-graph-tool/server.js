"use strict";

const _port = 4100;
const _redis_port = 6397;
const _app_folder = './dist/ui-graph-tool';

const express = require("express");
const compression = require("compression");
const bodyParser = require('body-parser');

const redis = require('redis')
var client = redis.createClient(_redis_port)


const app = express();
app.use(compression());
app.use(bodyParser.json());

// ---- SERVE STATIC FILES ---- //
app.get('*.*', express.static(_app_folder, {maxAge: '1y'}));

// ---- SERVE APLICATION PATHS ---- //
app.get('*', function (req, res) {
    res.status(200).sendFile(`/`, {root: _app_folder});
});








// users (set): 
// 

const API = {
    'usersGet': '/api/users/',
}

app.post(API['usersGet'], (req, res) => {
    console.log('Got body:', req.body, client.get('hello'));

    client.sadd('v1:users', req.body.user)
    client.smembers('v1:users', (err, users) => {
        res.send({ 
            resp: users 
        })
    })
})







// ---- START UP THE NODE SERVER  ----
app.listen(_port, function () {
    console.log("Node Express server for " + app.name + " listening on http://localhost:" + _port);
});
