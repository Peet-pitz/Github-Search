import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SearchService} from './Search.Service';
import {HttpModule} from '@angular/http';

import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import {RoutingModule} from './routing/routing.module'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RoutingModule,
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
