import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardeServiceService {

  IsUserLoggedIn() {
    return !!localStorage.getItem('userToken');
  }

  IsAdminLoggedIn(){
    return !!localStorage.getItem('adminEmail')
  }
  
}
