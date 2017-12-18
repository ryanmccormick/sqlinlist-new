import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LayoutModule } from './layout/layout.module';
import { SqlinlistModule } from './sqlinlist/sqlinlist.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    SqlinlistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
