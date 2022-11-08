import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../auth-service.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public  authservice: AuthServiceService, private  router: Router) { }

  // this method may not be the best
  option: string = this.router.url

  ngOnInit(): void {
  }

  onlogin(loginform: NgForm)
  {
    if (loginform.invalid){
      {
        return;
      }
    }
    this.authservice.login(loginform.value.enteredusername, loginform.value.enteredpassword)
  }
}
