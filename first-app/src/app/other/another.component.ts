import { Component, OnInit } from '@angular/core';
import {PropertingBindingComponent} from './properting-binding.component';
import {TwoWayComponent} from './two-way.component'

@Component({
  selector: 'fa-another',
  template: `
    <article>
    Test
     {{mystring}} | {{mynumber}}
     <input type="text" value="text">
      <input type="text" value="{{mystring}}">
      <input type="text" [value]="mystring">
      <p [ngClass]="{greenBorder: true}">Is this styled?</p>
      <p [ngStyle]="{color: 'brown'}">Is this styled?</p>
    <ng-content></ng-content>

    <h3>Custom Property Binding</h3>
    <app-properting-binding [result] = "10"></app-properting-binding>
    </article>

    <h3>Event Binding</h3>
    <app-event-binding (clicked)="onClicked($event)"></app-event-binding>

    <h4>Two way Binding</h4>
    <app-two-way></app-two-way>
  `,
  styles: [`
    article {
      border: 1px solid black;
    }
    h1 { 
    color: green;
    }
    .greenBorder {
      color: green
    }

  `]
})
export class AnotherComponent implements OnInit {

  mystring = "This is a string"
  mynumber = 2

  constructor() { }

  ngOnInit() {
    this.mystring = "string3"
  }

  onClicked(value: string) {
    alert(value);
  }
}
