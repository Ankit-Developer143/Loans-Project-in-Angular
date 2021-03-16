import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { NewUserComponent } from './auth/new-user/new-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//use this syntax to create routes
//ng g module loans --route loans --module app.module

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:NewUserComponent},
  {path:'forgot-password',component:ForgotComponent},
  {path:'logout',component:LogoutComponent}, 
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  {path:'**',component:PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
