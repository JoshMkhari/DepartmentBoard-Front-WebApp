import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { IssuesCreateComponent } from './issues/issues-create/issues-create.component';
import { IssuesDisplayComponent } from './issues/issues-display/issues-display.component';
import {AuthInterceptor} from "./auth/auth.interceptor";
import { LoginComponent } from './auth/login/login/login.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    IssuesCreateComponent,
    IssuesDisplayComponent,
    LoginComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
