import { DataService } from './../../services/data.service';
import { Component } from '@angular/core';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'sandbox',
    template: `
        <h1>hello world</h1>
        <div *ngFor="let user of users">
            <div class="well">
                <ul class="list-group">
                    <li class="list-group-item">Name: {{ user.name }} </li>
                    <li class="list-group-item">Email: {{ user.email }} </li>
                    <li class="list-group-item">Phone: {{ user.phone }} </li>
                </ul>
                <br>
            </div>
        </div>
     `
})

export class SandboxComponent {
    users: any[];
    constructor(public dataservice: DataService) {
        this.dataservice.getUsers().subscribe(users => {
            // console.log(users);
            this.users = users;
        });
    }
}

