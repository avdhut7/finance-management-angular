import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {ProductsComponent} from './products/products.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { TermsandconditionComponent } from './termsandcondition/termsandcondition.component';
import { IndexPageComponent } from './index-page/index-page.component';

const routes: Routes = [
  {path:'login' ,component: LoginComponent},
  { path:'register',component:RegistrationComponent},
  { path:'dashboard',component:DashboardComponent},
  { path:'adminlogin',component:AdminloginComponent},
  { path:'userdetails',component:UserDetailsComponent},
  { path: 'product',component:ProductsComponent},
  {path:"product-info",component:ProductInfoComponent},
  {path:"payment",component:PaymentGatewayComponent},
  {path:"forgotpassword",component:ForgotpasswordComponent},
  {path:"termsandcondition",component:TermsandconditionComponent},
  {path:"index",component:IndexPageComponent}



    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
