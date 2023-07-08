import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {UserComponent} from "./user/user.component";
import {AdminComponent} from "./admin/admin.component";
import {ForbiddenComponent} from "./forbidden/forbidden.component";


const routes: Routes = [
  { path:'home' , component:HomeComponent },
  { path:'user' , component:UserComponent },
  { path:'admin' , component:AdminComponent },
  { path:'login' , component:LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
