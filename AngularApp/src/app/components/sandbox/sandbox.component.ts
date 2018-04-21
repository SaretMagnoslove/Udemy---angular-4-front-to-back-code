import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'sandbox',
    template: `
        <h1>hello world</h1>
        <form (submit)="onSubmit()">
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" [(ngModel)]="name" name="name">
            </div>
        <input type="submit" class="btn btn-success" value="submit">
        </form>
        <hr>
        <ul class="list-group">
            <li class="list-group-item" *ngFor="let user of users">{{ user }}</li>
        </ul>

    `
})

export class SandboxComponent {
    // tslint:disable-next-line:no-inferrable-types
    name: string = '';
    users: string[] = ['Sheldon Cooper', 'John Nash', 'Albert Einstein'];

    onSubmit() {
        this.users.push(this.name);
        this.name = '';
    }
}

