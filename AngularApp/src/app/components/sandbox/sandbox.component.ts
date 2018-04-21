import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'sandbox',
    template: `
        <h1>hello world</h1>
        <div class="container">
            <form>
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" [(ngModel)]="name" name="name" class="form-control">
                </div>
                <div class="form-group">
                    <label>age</label>
                    <input type="number" [(ngModel)]="age" name="age" class="form-control">
                </div>
                <input type="submit" value="submit" class="btn btn-success">
            </form>
            <h4>{{ name }}</h4>
            <h4>{{ age }}</h4>
        </div>

    `
})

export class SandboxComponent {
    // tslint:disable-next-line:no-inferrable-types
    name: string = '';
    // tslint:disable-next-line:no-inferrable-types
    age: number = 0;
}

