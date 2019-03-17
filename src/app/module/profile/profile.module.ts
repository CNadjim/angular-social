import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {RouterModule, Routes} from "@angular/router";
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {SharedModule} from "../../shared/shared.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import { DrawerComponent } from './components/drawer/drawer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/account/home',
    pathMatch: 'full'
  },
  {
    path        : '',
    component: ProfileComponent,
    children:[
      {
        path : 'home',
        component: HomeComponent,
      }
    ]
  },
];

@NgModule({
  declarations: [HomeComponent, ProfileComponent, HeaderComponent, FooterComponent, DrawerComponent],
  imports: [
    SharedModule,
    FlexLayoutModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfileModule { }
