import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'sandbox',
    template: `
        <h1>hello world</h1>
        <button (click)="changeValue()">Change Value</button>
        <div *ngIf="value">
            <h1>{{ text }}</h1>
        </div>
    `
})

export class SandboxComponent {
    // tslint:disable-next-line:no-inferrable-types
    text: string = 'hello world';
    // tslint:disable-next-line:no-inferrable-types
    value: boolean = true;

    changeValue() {
        // this.value = false;
        this.value = !this.value;
    }
}

