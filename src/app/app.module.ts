import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ItunesService } from './iTunesService.service';
import {InterceptorModule} from './interceptor.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    InterceptorModule,
    BrowserAnimationsModule
  ],
  providers: [ ItunesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
