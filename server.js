"use strict";

const _port = 4100;
const _redis_port = 6397;
const _app_folder = './dist';

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







const DB_VERSION = 'v1';
const TABLES = {
    users: 'users', // users:userid(int) -> username(str) password(str) privilege(int) update(bool)
    assignments: 'assignement', // assignments:userid(int) -> storyids(set)
    stories: 'stories', // stories:storyid(int) -> storytext(str) update(bool)
    annotations: 'annotations', // annotations:userid:storyid -> dateassigned(date) datemodified(date) priority(int) annotations(jsongraph) update(bool)
    counters: 'counters', // counters -> nextuserid(int) nextstoryid(int)
    telemetry: 'telemetry', // list (log user data)
}
Object.entries(TABLES).forEach(([k, v]) => {TABLES[k] = DB_VERSION + ':' + v})

const API = {
    usersAdd: '/api/usersAdd/',
    usersGet: '/api/usersGet/',

    storyAdd: '/api/storyAdd',
    storyGet: '/api/storyGet',
    storyGetAll: '/api/storyGetAll',

    annotationsAdd: '/api/annotationsAdd',
    annotationsGet: '/api/annotationsGet',
    annotationsGetAllUsers: '/api/annotationsGetAllUsers',

    telemetryAdd: '/api/telemetryAdd'
}

console.log('TABLES:', TABLES);

// USER ANNOTATIONS
app.post(API.annotationsAdd, (req, res) => {
    const key = req.body.userid + ':' + req.body.storyid;
    const field = req.body.field
    const data = req.body.data
    const pipe = client.pipeline()
    pipe.hset(TABLES.annotations + ':' + key, field, data)
    pipe.hset(TABLES.annotations + ':' + key, 'datemodified', Date.now())
    await pipe.exec()
    res.send({ 
        resp: true 
    })
})

app.post(API.annotationsGet, (req, res) => {
    const key = req.body.userid + ':' + req.body.storyid;
    const field = req.body.field
    client.hget(TABLES.userAnnotations + ':' + key, field, (err, data) => {
        res.send({ 
            resp: data 
        })
    })
})

app.post(API.annotationsGetAllUsers, (req, res) => {
    const key = ':' + req.body.storyid;
    client.keys(TABLES.annotations + '*', (err, allKeys) => {
        const keys = allKeys.filter(v => v.endsWith(key))
        if (keys.length == 0) {
            res.send({ 
                keys: [],
                data: [],
            })
            return
        }
        let users = []
        for (key in keys){
            const key_array = key.split(':')
            const userid = key_array[2]
            client.hget(DB_VERSION + ':' + users + ':' + userid, 'username', (err, data) => {
                users.push(data)
            })
        }

        res.send({ 
            keys: keys,
            data: users,
        })
    })
})

// USERS
app.post(API.usersAdd, (req, res) => {
    client.hget(TABLES.counters, 'nextuserid', (err, userid) => {
        const pipe = client.pipeline()
        pipe.hset(TABLES.users, userid, TABLES.users + ':' + userid)
        pipe.hset(TABLES.users + ':' + userid, 'username', req.body.username)
        pipe.hset(TABLES.users + ':' + userid, 'password', 'asrs')
        pipe.hset(TABLES.users + ':' + userid, 'privilege', 0)
        pipe.hset(TABLES.users + ':' + userid, 'update', 0)
        await pipe.exec()
    })

    client.hincrby(TABLES.counters, 'nextuserid', 1)
})

app.post(API.usersGet, (req, res) => {
    let userdata = []
    client.hkey(TABELS.users, (err, keys) => {
        for (key in keys){
            client.hget(TABLES.user + ':' + key, req.body.field, (err, data) => {
                userdata.push(data)
            })
        }

        res.send({ 
            keys: keys,
            data: users,
        })
    })
})


// STORIES
app.post(API.storyAdd, (req, res) => {
    client.hget(TABLES.counters, 'nextstoryid', (err, storyid) => {
        const pipe = client.pipeline()
        pipe.hset(TABLES.stories, storyid, TABLES.users + ':' + storyid)
        pipe.hset(TABLES.stories + ':' + storyid, 'storytext', req.body.storytext)
        pipe.hset(TABLES.stories + ':' + storyid, 'update', 0)
        await pipe.exec()
    })

    client.hincrby(TABLES.counters, 'nextstoryid', 1)
})

app.post(API.storyGet, (req, res) => {
    client.hget(TABLES.story + ':' + req.body.storyid, 'storytext', (err, story) => {
        res.send({ 
            resp: story 
        })
    })
})

app.post(API.storyGetAll, (req, res) => {
    let stories = []
    client.hkey(TABELS.story, (err, keys) => {
        for (key in keys){
            client.hget(TABLES.story + ':' + key, 'storytext', (err, data) => {
                stories.push(data)
            })
        }

        res.send({ 
            resp: stories,
        })
    })
})

//TELEMETRY
app.post(API.telemetryAdd, (req, res) => {
    const val = {
        timestamp: Date.now(),
        user: req.body.user,
        data: req.body.data
    }
    console.log(val);
    client.rpush(TABLES.telemetry, JSON.stringify(val))
    res.send({ 
        resp: true 
    })
})


// ---- START UP THE NODE SERVER  ----
app.listen(_port, function () {
    console.log("Node Express server for " + app.name + " listening on http://localhost:" + _port);
});
