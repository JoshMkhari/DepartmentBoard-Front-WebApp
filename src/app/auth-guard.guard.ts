import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthServiceService} from "./auth/auth-service.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor( private _authService : AuthServiceService,
               private _router : Router){}

  canActivate () : boolean{
    if(this._authService.loggedIn()){
      return true
    } else{
      return false
    }
  }

}
