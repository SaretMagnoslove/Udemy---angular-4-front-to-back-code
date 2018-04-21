import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'sandbox',
    template: `
        <h1>hello world</h1>
        <p>his birthday is {{ birthDay | date }}</p>
        <p>another format {{ birthDay | date:"MM-dd-yy" }}</p>
        <p>only year: {{ birthDay | date:"yyyy" }}</p>
        <p>I love {{ 'cake' | uppercase }}</p>
        <p>I LOVE {{ 'CATS' | lowercase }}</p>
        <p>2 piples {{ birthDay | date | uppercase}}</p>
        <p>your total is {{ total | currency:"GBP":"1"}}
        <p>his fee is {{ fee | percent }}</p>
    `
})

export class SandboxComponent {
    birthDay = new Date(1981, 1, 15);
    total = 500;
    fee = .05;
}
