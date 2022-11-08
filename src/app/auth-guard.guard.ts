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
    let token = localStorage.getItem('token')? localStorage.getItem('token') : null;
    if(token==null)
    {
      this._router.navigate(['login']);
      return false;
    }else
    {
      return true;
    }
  }

}
