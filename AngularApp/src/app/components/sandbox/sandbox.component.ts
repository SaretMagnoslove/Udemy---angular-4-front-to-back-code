import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'sandbox',
    template:
     `<h1>Hello
         <!--
        <span *ngIf="showName">{{ name }}</span>
        <span *ngIf="!showName">World</span>
        -->
        <span *ngIf="showName; else noName">{{ name }}</span>
        <ng-template #noName>World</ng-template>

        <p>Hello {{ showName ? name : 'world' }}</p>

        <hr>

        <div [ngSwitch]="greeting">
            <div *ngSwitchCase="'1'">Hello world</div>
            <div *ngSwitchCase="'2'">Hi there</div>
            <div *ngSwitchCase="'3'">What's up</div>
            <div *ngSwitchDefault>Hello</div>
        </div>
     </h1>`
})

export class SandboxComponent {
  // tslint:disable-next-line:no-inferrable-types
  name: string = 'John Sheridan';
  // tslint:disable-next-line:no-inferrable-types
  showName: boolean = true;
  // tslint:disable-next-line:no-inferrable-types
  greeting: number = 88;
}
