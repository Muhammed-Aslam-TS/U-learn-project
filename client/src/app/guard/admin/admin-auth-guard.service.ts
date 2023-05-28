import { Injectable } from '@angular/core';
import { AuthGuardeServiceService } from '../auth-guarde-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService {

  constructor(private auth: AuthGuardeServiceService, private router: Router) { }

  canActivate(): boolean {
    if (this.auth.IsAdminLoggedIn()) {
      return true
    }
    this.router.navigate(['admin/login']);
    return false;
  }
}
