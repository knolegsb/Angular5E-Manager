import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    /* angular modules */
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,

    /* app modules */
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
