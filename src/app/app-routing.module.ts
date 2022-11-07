import {RouterModule, Routes} from "@angular/router";
import {IssuesDisplayComponent} from "./issues/issues-display/issues-display.component";
import {LoginComponent} from "./auth/login/login/login.component";
import {IssuesCreateComponent} from "./issues/issues-create/issues-create.component";
import {NgModule} from "@angular/core";
import {AuthGuardGuard} from "./auth-guard.guard";

const routes: Routes = [
  {path:'', component:IssuesDisplayComponent,canActivate:[AuthGuardGuard]},
  {path:'add', component:IssuesCreateComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{ }
