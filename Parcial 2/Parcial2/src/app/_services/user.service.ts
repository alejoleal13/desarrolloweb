import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Users } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Users[]>('/api/users');
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id);
    }

    create(user: Users) {
        return this.http.post('http://localhost:8080/api/createUser', user);
    }

    update(user: Users) {
        return this.http.put('/api/users/' + user.IdUser, user);
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }
}