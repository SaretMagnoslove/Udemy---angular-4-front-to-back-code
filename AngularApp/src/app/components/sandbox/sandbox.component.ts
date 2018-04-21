import { DataService } from './../../services/data.service';
import { Component } from '@angular/core';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'sandbox',
    template: `
        <h1>hello world</h1>
        <ul class="list-group">
            <li class="list-group-item" *ngFor="let d of data">{{ d }}</li>
        </ul>
     `
})

export class SandboxComponent {
    data: any[] = [];

    constructor(public dataservice: DataService) {
        this.dataservice.getData().subscribe(data => {
            // console.log(data);
            this.data.push(data);
        });
    }
}

