import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'template-driven',
  templateUrl: 'template-driven.component.html',
  styles: [
    `
      .ng-invalid {
        border: 1px solid red;
      }
    `
  ]
})
export class TemplateDrivenComponent {

  user= {
    username: 'Madhur',
    email: 'ahuja.madhur@gmail.com',
    password: 'test'
  };

  onSubmit(form: NgForm) {
    console.log("It works");
    console.log(this.user);
  }
}
