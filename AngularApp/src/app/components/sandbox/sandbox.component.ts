import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'sandbox',
    template: `
        <h1>hello world</h1>
        <div [style.font-size]="isSpecial ? 'x-large' : 'smaller'">font size is dependable on isSpecial</div>

        <div [ngStyle]="currentStyles">special and savable</div>
    `
})

export class SandboxComponent {
    isSpecial = true;
    canSave = true;
    currentStyles = {};

    constructor() {
        this.setCurrentStyles();
    }

    setCurrentStyles() {
        this.currentStyles = {
            'font-style': this.canSave ? 'italic' : 'normal',
            'font-size': this.isSpecial ? '24px' : '12px'
        };
    }
}
