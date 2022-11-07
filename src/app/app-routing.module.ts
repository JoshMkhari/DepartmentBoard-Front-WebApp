import {RouterModule, Routes} from "@angular/router";
import {IssuesDisplayComponent} from "./issues/issues-display/issues-display.component";
import {LoginComponent} from "./auth/login/login/login.component";
import {IssuesCreateComponent} from "./issues/issues-create/issues-create.component";
import {NgModule} from "@angular/core";
import {AuthGuardGuard} from "./auth-guard.guard";
import {SignupComponent} from "./auth/login/signup/signup/signup.component";

const routes: Routes = [
  {path:'', component:IssuesDisplayComponent,canActivate:[AuthGuardGuard]},
  {path:'add', component:IssuesCreateComponent,canActivate:[AuthGuardGuard]},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{ }
