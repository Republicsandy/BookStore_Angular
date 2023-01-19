import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { AuthguardService } from '../Services/Auth-Guard/authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthanticationGuard implements CanActivate {
  constructor(private authGuardService:AuthguardService,private router:Router){}
  canActivate(): boolean {
    if(!this.authGuardService.GetToken()){
      this.router.navigateByUrl("/login");
    }
      return this.authGuardService.GetToken();
  }
  
}
