import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HttpService]
})
export class AppComponent implements OnInit {

  items: any[] = [];
  asyncString;

  constructor(private httpService: HttpService){}

  ngOnInit() {
    this.httpService.getData().subscribe(
      (data: Response) => console.log(data)
    );

    this.asyncString = this.httpService.getData();
  }

  onSubmit(username: string, email: string) {
    this.httpService.sendData({username: username, email: email}).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  onGetData() {
    this.httpService.getOwnData().subscribe(
      data => {
        const myArray = [];
        for (let key in data) {
            myArray.push(data[key]);
        }
        this.items = myArray;
      }
    );
  }
} 
