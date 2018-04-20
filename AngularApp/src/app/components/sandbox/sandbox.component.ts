import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'sandbox',
    template: `
        <h1>hello world</h1>
        <!--
        <!-- 3 ways to bind properties -->
        <div><img src = "{{ imageUrl }}"></div>
        <div><img [src]="imageUrl"></div>
        <div><img bind-src="imageUrl"></div>
.,
        <h4>Image location: <span [textContent]="imageUrl"></span></h4>
        -->
        <hr>
        <h2>Create Post</h2>
        <p [hidden]="isUnchanged">please save</p>
        <button [disabled]="isUnchanged">Save</button>

    `
})

export class SandboxComponent {
    // tslint:disable-next-line:no-inferrable-types
    imageUrl: string =  'https://loremflickr.com/320/240';
    // tslint:disable-next-line:no-inferrable-types
    isUnchanged: boolean = false;

}
