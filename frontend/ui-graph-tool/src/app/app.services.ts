import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const API = {
    'usersGet': '/api/users/',
}

@Injectable()
export class AppService {
    constructor(private http: HttpClient) { }

    addUser(user) {
        return this.http.post(API.usersGet, {'user': user});
    }
    
}
