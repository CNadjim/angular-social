import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../authentication/services/authentication.service";
import {Router} from "@angular/router";
import {TokenStorage} from "../../../authentication/services/token.storage";
import {ProfileService} from "../../services/profile.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
              private tokenStorage: TokenStorage,
              private profileService: ProfileService,
              private authService: AuthenticationService) { }

  ngOnInit() {
  }

  logout(){
    this.router.navigate(['/auth/login']);
    this.tokenStorage.removeToken();
    this.authService.currentUser = null;
  }

  toggleDrawer(){
    this.profileService.drawer.toggle();
  }

}
