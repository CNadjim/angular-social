import { Injectable } from '@angular/core';
import {MatDrawer} from "@angular/material";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  drawer: MatDrawer;

  constructor() { }
}
