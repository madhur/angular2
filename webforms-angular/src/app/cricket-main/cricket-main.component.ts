import { Component, OnInit } from '@angular/core';
import {CricketService} from '../cricket-service.service';
import {WindowRef} from '../window-ref';

@Component({
  selector: 'app-cricket-main',
  templateUrl: './cricket-main.component.html',
  styleUrls: ['./cricket-main.component.css']
})
export class CricketMainComponent implements OnInit {

  private cricketData:any = {};

  constructor(private cricketService: CricketService, private winRef: WindowRef) { }

  ngOnInit() {

    this.startTimer();

  }

  startTimer()
	{
	

		setInterval(() => {
			
			const url = this.winRef.nativeWindow.document.URL;
    //  debugger;
			const matchId = url.substr(url.lastIndexOf('/') + 1);

      this.cricketService.getCricketData(matchId).subscribe(
        data => {
          this.cricketData = data;
        },
        err => {
            console.log(err);
        }
        
      );

		}, 2000);
	}

}
