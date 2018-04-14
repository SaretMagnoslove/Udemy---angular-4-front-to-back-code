import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'sandbox',
    template: `<h1>Hello {{ name }}</h1>`
})

export class SanboxComponent {
    // tslint:disable-next-line:no-inferrable-types
    name: string = 'Susan Ivanova';
    // tslint:disable-next-line:no-inferrable-types
    age: number = 35;
    hasChildren: Boolean = true;
    city: any = 'B5';
    myNumbersArray: number[] = [1, 2, 3];
    myStringsArray: string[] = ['hello', 'world'];
    myAnyArray: any[] = ['hello', 'world', 2];
    myTuple: [string, number] = ['hello', 3];
    unusable: void = undefined;
    u: undefined = undefined;
    n: null = null;

    constructor() {
     this.hasChildren = false;
    }

}
