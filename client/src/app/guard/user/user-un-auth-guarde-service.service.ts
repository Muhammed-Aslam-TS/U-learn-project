import { Injectable } from '@angular/core';
import { AuthGuardeServiceService } from '../auth-guarde-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserUnAuthGuardeServiceService {

  constructor(private auth: AuthGuardeServiceService, private router: Router) { }

  canActivate(): boolean {

    if (!this.auth.IsUserLoggedIn()) {
      return true;
    }
    
    this.router.navigate(['/login'])
    return false;
  }
}
