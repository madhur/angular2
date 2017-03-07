import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CricketMainComponent } from './cricket-main/cricket-main.component';
import { CricketTabsComponent } from './cricket-tabs/cricket-tabs.component';
import { CricketTabItemComponent } from './cricket-tab-item/cricket-tab-item.component';
import { CricketDescComponent } from './cricket-desc/cricket-desc.component';
import {CricketService} from './cricket-service.service';
import {WindowRef} from './window-ref';
import { MdTabsModule } from '@angular2-material/tabs';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import {
  applyMiddleware,
  Store,
  combineReducers,
  compose,
  createStore
} from 'redux';
//import {reduxLogger} from 'redux-logger';
import { cricketReducer } from './reducers';
import {CricketActions} from './actions';
import thunk from "redux-thunk";

interface IAppState { /* ... */ };

const composeArgs = [
	applyMiddleware(thunk)
];
composeArgs.push((<any>window).devToolsExtension())



const enhancer = compose.apply(compose, composeArgs);
const store: Store<any> = createStore(cricketReducer, {}, enhancer); 


@NgModule({
  declarations: [
    AppComponent,
    CricketMainComponent,
    CricketTabsComponent,
    CricketTabItemComponent,
    CricketDescComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdTabsModule,
    NgReduxModule
  ],
  providers: [CricketService, WindowRef, CricketActions],
  bootstrap: [AppComponent]
})

export class AppModule {
constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }

 }
