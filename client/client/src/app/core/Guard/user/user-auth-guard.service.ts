import { Injectable } from '@angular/core';
import { AuthGuardService } from '../auth-guard.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuardService {

  constructor(private auth: AuthGuardService, private router: Router) { }
  canActivate(): boolean {
    if (this.auth.IsUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}
