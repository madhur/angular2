import { Component, OnInit, Input } from '@angular/core';
import {CricketService} from '../cricket-service.service';
import {WindowRef} from '../window-ref';
import { select, NgRedux } from  '@angular-redux/store';
import {CricketActions} from '../actions';

@Component({
  selector: 'app-cricket-main',
  templateUrl: './cricket-main.component.html',
  styleUrls: ['./cricket-main.component.css']
})
export class CricketMainComponent implements OnInit {

  //private  cricketData:any = {};
  @select(state => state.data) matchData;

  constructor(private cricketService: CricketService, private winRef: WindowRef, private redux: NgRedux<any>, private cricketActions: CricketActions) { }

  ngOnInit() {

    this.startTimer();
   // console.log(this.cricketData);

    // this.matchData.subscribe(
    //  data=> {
    //     this.cricketData = data;
    //   }
    // );
  }

  startTimer()
	{
	

		setInterval(() => {
			
			const url = this.winRef.nativeWindow.document.URL;
    //  debugger;
			const matchId = url.substr(url.lastIndexOf('/') + 1);

       this.redux.dispatch(<any>this.cricketActions.getCricket(matchId));
      
      // this.cricketService.getCricketData(matchId).subscribe(
      //   data => {
      //     this.cricketData = data;
      //   },
      //   err => {
      //       console.log(err);
      //   }
        
      // );

		}, 2000);
	}

}
