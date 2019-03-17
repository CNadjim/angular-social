import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./module/authentication/services/token.interceptor";
import {AuthenticationService} from "./module/authentication/services/authentication.service";
import {TokenStorage} from "./module/authentication/services/token.storage";

export function init_app(authService: AuthenticationService,tokenStorage : TokenStorage) {
  return () => tokenStorage.getToken() ? authService.initUser() : null;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [AuthenticationService,TokenStorage],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
