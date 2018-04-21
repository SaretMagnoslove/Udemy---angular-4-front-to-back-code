import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'sandbox',
    template: `
        <h1>hello world</h1>
        <form novalidate #f="ngForm" (ngSubmit)="onSubmit(f)">
            <div class="form-group">
                <label>Name</label>
                <input
                    type="text"
                    class="form-control"
                    [(ngModel)]="user.name"
                    name="name"
                    #userName="ngModel"
                    minlength="2"
                    required
                >
                <div *ngIf="userName.errors?.required && userName.touched" class="alert alert-danger">name is required</div>
                <div *ngIf="userName.errors?.minlength && userName.touched" class="alert alert-danger">at least 2 charecters</div>
            </div>
            <div class="form-group">
                <label>shemail</label>
                <input
                    type="text"
                    class="form-control"
                    [(ngModel)]="user.shemail"
                    name="shemail"
                    #userShemail="ngModel"
                     required
                >
                <div *ngIf="userShemail.errors?.required && userShemail.touched" class="alert alert-danger">shemail is required</div>
            </div>
            <div class="form-group">
                <label>phone</label>
                <input
                    type="text"
                    class="form-control"
                    [(ngModel)]="user.phone"
                    name="phone"
                    #userPhone="ngModel"
                    minlength="10"
                >
                <div *ngIf="userPhone.errors?.minlength && userPhone.touched" class="alert alert-danger">at least 10 charecters</div>
            </div>
            <input type="submit" class="btn btn-success" value="submit">

    `
})

export class SandboxComponent {
    user = {
        name: '',
        shemail: '',
        phone: '',
    };

    onSubmit({value, valid}) {
        if(valid) {
            console.log(value);
        } else {
            console.log('form is invalid');
        }
    }
}

