import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../authentication/services/authentication.service";
import {MyAnimations} from "../../../../shared/animation";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations : MyAnimations
})
export class HomeComponent implements OnInit {

  constructor(public authService:AuthenticationService) { }

  ngOnInit() {
  }

}
