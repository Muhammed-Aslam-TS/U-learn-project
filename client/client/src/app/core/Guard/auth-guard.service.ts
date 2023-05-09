import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { }

  IsUserLoggedIn() {
    return !!localStorage.getItem('userToken');
  }

}
