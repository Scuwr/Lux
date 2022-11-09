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







const DB_VERSION = 'v0';
const TABLES = {
    users: 'users', // set (usernames)
    story: 'story', // hash (storyNum -> storyText)
    storyCounter: 'storyCounter', // int (storyNum counter)
    userAnnotations: 'userAnnotations', // hash (user:story -> jsongraph)
}
Object.entries(TABLES).forEach(([k, v]) => {TABLES[k] = DB_VERSION + ':' + v})

const API = {
    usersAdd: '/api/usersAdd/',
    usersGet: '/api/usersGet/',

    storyAdd: '/api/storyAdd',
    storyGet: '/api/storyGet',
    storyGetAll: '/api/storyGetAll',

    userAnnotationAdd: '/api/userAnnotationAdd',
    userAnnotationGet: '/api/userAnnotationGet',
}

console.log('TABLES:', TABLES);

// USER ANNOTATIONS
app.post(API.userAnnotationAdd, (req, res) => {
    const key = req.body.user + ':' + req.body.storyNum;
    const val = req.body.data
    console.log(key, val);
    client.hset(TABLES.userAnnotations, key, val)
    res.send({ 
        resp: true 
    })
})
app.post(API.userAnnotationGet, (req, res) => {
    const key = req.body.user + ':' + req.body.storyNum;
    client.hget(TABLES.userAnnotations, key, (err, data) => {
        res.send({ 
            resp: data 
        })
    })
})


// USERS
app.post(API.usersAdd, (req, res) => {
    client.sadd(TABLES.users, req.body.data)
    client.smembers(TABLES.users, (err, users) => {
        res.send({ 
            resp: users 
        })
    })
})
app.post(API.usersGet, (req, res) => {
    client.smembers(TABLES.users, (err, users) => {
        res.send({ 
            resp: users 
        })
    })
})


// STORIES
// RESET STORY COUNTER: redis-cli -p 6397 set v1:storyCounter 10000
app.post(API.storyAdd, (req, res) => {
    client.incr(TABLES.storyCounter, (err, storyNum) => {
        client.hset(TABLES.story, storyNum, req.body.data)
        res.send({ 
            resp: storyNum 
        })
    })
})
app.post(API.storyGet, (req, res) => {
    client.hget(TABLES.story, req.body.data, (err, story) => {
        res.send({ 
            resp: story 
        })
    })
})
app.post(API.storyGetAll, (req, res) => {
    client.hgetall(TABLES.story, (err, story) => {
        res.send({ 
            resp: story 
        })
    })
})


// ---- START UP THE NODE SERVER  ----
app.listen(_port, function () {
    console.log("Node Express server for " + app.name + " listening on http://localhost:" + _port);
});
