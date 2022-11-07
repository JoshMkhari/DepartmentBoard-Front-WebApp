import {Injectable} from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import {AuthServiceService} from "./auth-service.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  constructor(private authservice: AuthServiceService) {}

  //this adds the token to the headers on the outgoing call to the api
  intercept(request: HttpRequest<unknown>, next: HttpHandler){
    let authToken = this.authservice.getToken();
    //https://stackoverflow.com/questions/3390396/how-can-i-check-for-undefined-in-javascript
    if(authToken)
    {
      alert("this is token " + authToken)
    }else
    {
      let token = localStorage.getItem('token')? localStorage.getItem('token') : null;
      if(token != null)
      {
        authToken = token;
      }
    }
    const authRequest = request.clone({headers:request.headers.set("Authorization", "Bearer " + authToken)})
    return next.handle(authRequest);
  }
}
