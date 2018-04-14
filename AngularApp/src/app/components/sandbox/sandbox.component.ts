import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'sandbox',
    template: `
        <h1>Hello World</h1>
        {{ people }}
        <ul>
            <li *ngFor="let person of people">
                {{person}}
            </li>
        </ul>
        <ul>
            <li *ngFor="let person of people; let i = index">
                {{i+1}} {{person}}
            </li>
        </ul>
        <ul>
            <li *ngFor="let person of people2">
                {{person.firstName}} {{person.lastName}}
            </li>
        </ul>
        `,
})

export class SandboxComponent {
    people = ['Londo Mollari', 'Lyta Alexander', 'Marcus Cole', 'Vir Cotto'];

    people2 = [
        {
            firstName: 'Rick',
            lastName: 'Grimes'
        },
        {
            firstName: 'Daryl',
            lastName: 'Dixon'
        },
        {
            firstName: 'Carl',
            lastName: 'Grimes'
        },
        {
            firstName: 'Glenn',
            lastName: 'Rhee'
        },
    ];

    constructor() {
        this.people [2] = 'Lyta Alexander';
        this.people [1] = 'Marcus Cole';
    }

}
