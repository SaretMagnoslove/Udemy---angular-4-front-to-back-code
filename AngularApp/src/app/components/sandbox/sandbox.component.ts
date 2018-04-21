import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'sandbox',
    template: `
        <h1>hello world</h1>
        <button id="click" (click)="fireEvent($event)">Click Event</button>
        <br>
        <button id="mouseover" (mouseover)="fireEvent($event)">Mouseover</button>
        <br>
        <button id="mousedown" (mousedown)="fireEvent($event)">Mousedown</button>
        <br>
        <button id="mouseup" (mouseup)="fireEvent($event)">Mouseup</button>
        <br>
        <button id="doubleClick" (dblclick)="fireEvent($event)">Double Click</button>
        <br>
        <button id="drag" (drag)="fireEvent($event)">Drag</button>
        <br>
        <button id="dragOver" (dragover)="fireEvent($event)">Drag Over</button>
    `
})

export class SandboxComponent {
    fireEvent(e) {
        console.log('Button Clicked');
        console.log(e.type);
        // alert('id: ' + e.target.id);

    }
}
