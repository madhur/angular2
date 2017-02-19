import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  template: `
     <input type="text" [(ngModel)]="person.name">
     <input type="text" [(ngModel)]="person.name">
  `
})
export class TwoWayComponent {

 person = {
   name: 'Madhur',
   age: 30
 };

}
