import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

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

@Injectable()
export class MainService {
    constructor(private http: HttpClient) { }

    usersAdd(username) {
        return this.http.post(API.usersAdd, {'username': username});
    }

    usersGet(field) {
        return this.http.post(API.usersGet, {'field': field});
    }

    storyAdd(storytext) {
        return this.http.post(API.storyAdd, {'storytext': storytext});
    }

    storyGet(storyid) {
        return this.http.post(API.storyGet, {'storyid': storyid});
    }

    storyGetAll() {
        return this.http.post(API.storyGetAll, {});
    }

    // TODO
    userAnnotationAdd(userid, field='annotation', jsonGraph) {
        return this.http.post(API.annotationsAdd, {'userid': userid, 'field': field, 'data': jsonGraph});
    }

    userAnnotationGet(userid, storyid, field='annotation') {
        return this.http.post(API.annotationsGet, {'userid': userid, 'storyid': storyid, 'field': field});
    }

    userAnnotationGetAllUsers(storyid) {
        return this.http.post(API.annotationsGetAllUsers, {'storyid': storyid});
    }

    telemetryAdd(user, data) {
        return this.http.post(API.telemetryAdd, {'user': user, 'data': data});
    }
}
