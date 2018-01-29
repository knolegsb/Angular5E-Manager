import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './scm-main/navbar/navbar.component';
import { ScmMainModule } from './scm-main/scm-main.module';


@NgModule({
  declarations: [
    AppComponent,
    //NavbarComponent
  ],
  imports: [
    /* angular modules */
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,

    /* app modules */
    ScmMainModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
