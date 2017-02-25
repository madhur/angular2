import { Component } from '@angular/core';

@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dir works!';
  private items = [1,2,3,4,5];

  private value = 10;

  private switch = true;

  onSwitch() {
  	this.switch = !this.switch;
  }
}
