import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GuestGuard} from "./guard/guest.guard";
import {UserGuard} from "./guard/user.guard";

const routes: Routes = [
  {
    path      : '',
    redirectTo : 'auth',
    pathMatch: 'full'
  },
  {
    path        : 'auth',
    loadChildren: './module/authentication/authentication.module#AuthenticationModule',
    canActivate: [GuestGuard]
  },
  {
    path        : 'account',
    loadChildren: './module/profile/profile.module#ProfileModule',
    canActivate: [UserGuard]
  },
  {
    path        : 'error',
    loadChildren: './module/error/error.module#ErrorModule'
  },
  {
    path      : '**',
    redirectTo: 'error/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
