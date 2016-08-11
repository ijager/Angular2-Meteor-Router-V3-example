import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_ROUTER_PROVIDERS } from './app.routes';

import { AppComponent }  from './app.component';
import { StartComponent, 
          ListAComponent, 
          ListBComponent, 
          ChildAComponent, 
          ChildBComponent } from './';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, 
                  StartComponent, 
                  ListAComponent, 
                  ListBComponent, 
                  ChildAComponent, 
                  ChildBComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ APP_ROUTER_PROVIDERS ]
})
export class AppModule { }