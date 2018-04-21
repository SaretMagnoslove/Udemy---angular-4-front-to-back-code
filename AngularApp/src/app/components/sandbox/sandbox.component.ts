import { DataService } from './../../services/data.service';
import { Component } from '@angular/core';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'sandbox',
    template: `
        <h1>hello world</h1>
        <ul class="list-group">
            <li class="list-group-item" *ngFor="let user of users">{{ user }}</li>
        </ul>
     `
})

export class SandboxComponent {
    users: string[];

    constructor(public dataService: DataService) {
        this.users = (this.dataService.getUsers());
    }
}

