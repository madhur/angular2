import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class CricketService {

  constructor(private http: Http) { }


  getCricketData(matchId) {
    return this.http.get('/cricket-api/' + matchId ).map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
