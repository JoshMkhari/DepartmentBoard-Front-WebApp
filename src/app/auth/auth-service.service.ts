import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private token!: string;
  constructor(private http: HttpClient, private  router: Router) { }

  signup(userusername:string, userpassword: string)
  {
    this.http.post('https://localhost:3000/api/users/signup', {username:userusername, password:userpassword})
      .subscribe(response =>{
        this.login(userusername,userpassword)
      });
  }

  login(userusername:string, userpassword: string)
  {
    this.http.post<{token: string}>('https://localhost:3000/api/users/login', {username:userusername, password:userpassword})
      .subscribe(response =>{
        this.token = response.token;
        //https://stackoverflow.com/questions/49986926/how-to-make-login-status-persistent-in-angular-2-3-4-5
        localStorage.setItem('token', response.token);
        this.router.navigate(['']);
      });
  }

  getToken(){
    return this.token;
  }

}
