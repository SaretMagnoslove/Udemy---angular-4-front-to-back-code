import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    users: string[];

    constructor() {
        this.users = ['Sheldon', 'Penny', 'Leonard', 'Howard'];
    }

    getUsers() {
        return this.users;
    }
}
