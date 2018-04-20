import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'sandbox',
    template: `
        <h1>hello world</h1>
        <h4 [class.special]="isSpecial">This is a special class binding</h4>
        <h4 [ngClass]="currentClasses">special and savable</h4>
    `,
    styles: [
        `
            .special{
                color: green
            }
            .savable{
                text-transform: uppercase
            }
        `
    ]

})

export class SandboxComponent {
    isSpecial = true;
    canSave = true;
    currentClasses = {};

    constructor() {
        this.setCurrentClasses();
    }

    setCurrentClasses() {
        this.currentClasses = {
            savable: this.canSave,
            special: this.isSpecial
        };
    }
}
