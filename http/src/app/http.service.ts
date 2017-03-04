import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http:Http) { }

  getData() {
    return this.http.get('https://angular2-33705.firebaseio.com/title.json')
    .map((response: Response) => response.json());
  }

  sendData(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('https://angular2-33705.firebaseio.com/data.json', body, {
      headers: headers
    }).map((data: Response) => data.json());
  }

}
