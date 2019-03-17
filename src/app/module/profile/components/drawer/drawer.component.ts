import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../../services/profile.service";
import {AuthenticationService} from "../../../authentication/services/authentication.service";
import {Router} from "@angular/router";
import {TokenStorage} from "../../../authentication/services/token.storage";

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

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

  location(url : string){
    window.location.href = url;
  }

}
