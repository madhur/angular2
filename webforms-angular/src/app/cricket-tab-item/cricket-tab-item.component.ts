import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cricket-tab-item',
  templateUrl: './cricket-tab-item.component.html',
  styleUrls: ['./cricket-tab-item.component.css']
})
export class CricketTabItemComponent implements OnInit {

  @Input() private inning;
  
  constructor() { }

  ngOnInit() {
  }

}
