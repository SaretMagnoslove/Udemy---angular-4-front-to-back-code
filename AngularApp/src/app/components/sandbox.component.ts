import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'sandbox',
    template: `
    <h1>{{ name }} is {{ age }} years old</h1>
    <h2>His name is {{ person.firstName }} {{ person.lastName }}</h2>
    <ul>
        <li> {{ 'Hello World' }} </li>
        <li> {{ 1+1 }} </li>
        <li> {{ showAge() }} </li>
    </ul>
    `
})

export class SanboxComponent {
    name = 'Sheridan';
    age = 40;
    person = {firstName: 'John', lastName: 'Sheridan'};

    constructor() {
        console.log('constructor ran...');
        // this.age = 35;
        this.hasBirthday();
        this.hasBirthday();
    }

    hasBirthday() {
        this.age += 1;
    }

    showAge() {
        return this.age;
    }
}
