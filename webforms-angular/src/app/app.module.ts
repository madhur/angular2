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
    MdTabsModule
  ],
  providers: [CricketService, WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
