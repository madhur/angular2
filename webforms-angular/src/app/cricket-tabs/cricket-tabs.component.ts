import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cricket-tabs',
  templateUrl: './cricket-tabs.component.html',
  styleUrls: ['./cricket-tabs.component.css']
})
export class CricketTabsComponent implements OnInit {

  @Input() private matchData = {};

  constructor() { }

  ngOnInit() {
    console.log(this.matchData);
  }

}
