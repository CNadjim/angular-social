import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {SharedModule} from "../../shared/shared.module";
import { IntroComponent } from './components/intro/intro.component';
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {
    path        : 'login',
    component: LoginComponent
  },
  {
    path        : 'register',
    component: RegisterComponent
  },
  {
    path      : '**',
    redirectTo: 'login'
  }
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent, IntroComponent],
  imports: [
    SharedModule,
    FlexLayoutModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthenticationModule { }
