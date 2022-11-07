import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthServiceService} from "../../../auth-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public  authservice: AuthServiceService, private  router: Router) { }

  ngOnInit(): void {
  }

  onsignup(signupForm: NgForm)
  {
    if (signupForm.invalid){
      {
        return;
      }
    }
    this.authservice.signup(signupForm.value.enteredusername, signupForm.value.enteredpassword)
    this.router.navigate(['']);

  }
}
