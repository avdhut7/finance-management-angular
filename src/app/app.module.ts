import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ProductsComponent } from './products/products.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationService } from './registration.service';
import { ProductReviewComponent } from './product-review/product-review.component';
import { ProductsService } from './products.service';
import { AdminLogin, AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductInfoComponent } from './product-info/product-info.component';
import { InstallmentListComponent } from './installment-list/installment-list.component';
import { from } from 'rxjs';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { CommonModule } from '@angular/common';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { TermsandconditionComponent } from './termsandcondition/termsandcondition.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { AdminloginService } from './adminlogin.service';
import { AdminLoginService } from './admin-login.service';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    UserDetailsComponent,
    ProductsComponent,
    TestComponent,
    DashboardComponent,
    ProductReviewComponent,
    AdminloginComponent,
    ProductInfoComponent,
    InstallmentListComponent,
    PaymentGatewayComponent,
    ForgotpasswordComponent,
    TermsandconditionComponent,
    HeaderComponent,
    FooterComponent,
    IndexPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [RegistrationService,ProductsService, AdminloginService, AdminLoginService, AdminLogin],
  bootstrap: [AppComponent]
})
export class AppModule { }
