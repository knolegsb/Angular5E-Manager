import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './scm-main/navbar/navbar.component';
import { ScmMainModule } from './scm-main/scm-main.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { ToastModule, ToastOptions } from 'ng2-toastr';
import { CustomToastOptions } from './custom-toast-options';

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
    AppRoutingModule,
    RouterModule,

    /* app modules */
    ScmMainModule,
    ProductModule,
    CategoryModule,
    AppRoutingModule,
    
    /* 3rd party modules */
    ToastModule.forRoot()
  ],
  providers: [
    { provide: ToastOptions, useClass: CustomToastOptions }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
