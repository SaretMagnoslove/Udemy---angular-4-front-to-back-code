import { Customer } from './customer';
import { Component } from '@angular/core';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'sandbox',
    template: `<h1>Hello World</h1>`
})

export class SanboxComponent {
    customer: Customer;
    cutomers: Customer[];

    constructor() {
        this.customer = {
            id: 1,
            name: 'John Sheridan',
            email: 'john@b5.org'
        };

        this.cutomers = [
            {
                id: 1,
                name: 'John Sheridan',
                email: 'john@b5.org'
            },
            {
                id: 2,
                name: 'Susan Ivanova',
                email: 'susan@b5.org'
            },
            {
                id: 3,
                name: 'Ambassador Mollari',
                email: 'mollari@b5.org'
            },

        ];

    }
}




