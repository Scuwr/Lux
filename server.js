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
    usernames: 'usernames', // set (usernames) -> users:userid(hash)
    assignments: 'assignments', // assignments:userid(int) -> storyids(set)
    stories: 'stories', // stories:storyid(int) -> storytext(str) update(bool)
    annotations: 'annotations', // annotations:userid:storyid -> dateassigned(date) datemodified(date) priority(int) annotations(jsongraph) update(bool)
    counters: 'counters', // counters -> nextuserid(int) nextstoryid(int)
    telemetry: 'telemetry', // list (log user data)
}
Object.entries(TABLES).forEach(([k, v]) => {TABLES[k] = DB_VERSION + ':' + v})

const API = {
    usersAdd: '/api/usersAdd',
    usersGet: '/api/usersGet',
    usersLogin: '/api/usersLogin',

    storyAdd: '/api/storyAdd',
    storyGet: '/api/storyGet',
    storyGetAssigned: '/api/storyGetAssigned',
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
    client.hset(TABLES.annotations + ':' + key, field, data)
    client.hset(TABLES.annotations + ':' + key, 'datemodified', Date.now())
    res.send({ 
        resp: true 
    })
})

app.post(API.annotationsGet, (req, res) => {
    const key = req.body.userid + ':' + req.body.storyid;
    const field = req.body.field;
    client.hget(TABLES.annotations + ':' + key, field, (err, data) => {
        res.send({ 
            resp: data 
        })
    })
})

app.post(API.annotationsGetAllUsers, (req, res) => {
    const key = ':' + req.body.storyid;
    client.keys(TABLES.annotations + '*', async (err, allKeys) => {
        const keys = allKeys.filter(v => v.endsWith(key))
        if (keys.length == 0) {
            res.send({ 
                keys: [],
                data: [],
            })
            return
        }

        let users = await Promise.all(keys.map(async (key) => {
            const key_array = key.split(':')
            const userid = key_array[2]
            return new Promise((resolve, reject) => {
                client.hget(TABLES.users + ':' + userid, 'username', (err, data) => {
                    if (err) reject(err)
                    else resolve(data)
                })
            })
            
        }))

        let graph = await Promise.all(keys.map(async (key) => {
            return new Promise((resolve, reject) => {
                client.hget(key, 'annotation', (err, data) => {
                    if (err) reject(err)
                    else resolve(data)
                })
            })
        }))

        res.send({ 
            keys: users,
            data: graph,
        })
    })
})

// USERS
//TODO
app.post(API.usersAdd, (req, res) => {
    client.hget(TABLES.counters, 'nextuserid', (err, userid) => {
        client.hset(TABLES.users, userid, TABLES.users + ':' + userid)
        client.hset(TABLES.users + ':' + userid, 'username', req.body.username)
        client.hset(TABLES.users + ':' + userid, 'password', req.body.password)
        client.hset(TABLES.users + ':' + userid, 'privilege', 0)
        client.hset(TABLES.users + ':' + userid, 'update', 0)
    })
    client.sadd(TABLES.usernames + ':' + req.body.username, (err, userid) => {
        res.send({
            data: userid
        })
    })
    client.hincrby(TABLES.counters, 'nextuserid', 1)
})

app.post(API.usersLogin, (req, res) => {
    client.smembers(TABLES.usernames + ':' + req.body.username, (err, userkey) => {
        if (userkey.length != 0) {
            client.hget(userkey[0], 'password', (err, password) => {
                if (req.body.password == password){
                    res.send({
                        resp: userkey[0]
                    })
                    return
                }
            })
        }
        else {
            res.send({
                resp: []
            })
            return
        }
    })
})

app.post(API.usersGet, (req, res) => {
    let userdata = []
    client.hkey(TABELS.users, (err, keys) => {
        for (const key in keys){
            client.hget(TABLES.user + ':' + keys[key], req.body.field, (err, data) => {
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
        client.hset(TABLES.stories, storyid, TABLES.users + ':' + storyid)
        client.hset(TABLES.stories + ':' + storyid, 'storytext', req.body.storytext)
        client.hset(TABLES.stories + ':' + storyid, 'update', 0)
    })

    client.hincrby(TABLES.counters, 'nextstoryid', 1)
})

app.post(API.storyGet, (req, res) => {
    client.hget(TABLES.stories + ':' + req.body.storyid, 'storytext', (err, story) => {
        res.send({ 
            resp: story 
        })
    })
})

app.post(API.storyGetAssigned, (req, res) => {
    let stories = []
    client.smembers(TABLES.assignments + ':' + req.body.userid, async (err, storyids) => {
        res.send({
            key: storyids,
            data: await getStories(storyids),
        })
    })
})

app.post(API.storyGetAll, (req, res) => {
    let stories = []
    client.hkeys(TABLES.stories, async (err, storyids) => {
        res.send({ 
            key: storyids,
            data: await getStories(storyids),
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

async function getStories(storyids){
    let stories = await Promise.all(storyids.map(async (storyid) => {
        return new Promise((resolve, reject) => {
            client.hget(TABLES.stories + ':' + storyid, 'storytext', (err, data) => {
                if (err) reject(err);
                else resolve(data);
            })
        })
    }))

    return stories 
}
