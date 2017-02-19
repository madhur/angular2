 import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-properting-binding',
  template: `
    {{result}}
  `,
  styles: []
})
export class PropertingBindingComponent {
   @Input() result: number = 0;

}
