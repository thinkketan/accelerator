import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from '../app/modules/shared/header/header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from '../app/modules/components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from '../app/modules/components/forgot-password/forgot-password.component';
import { LoginComponent } from '../app/modules/components/login/login.component';
import { MaterialModule } from '../app/modules/shared/material/material.module'
import { MatFormFieldModule } from '@angular/material/form-field';
import { ResetPasswordComponent } from './modules/components/reset-password/reset-password.component';
import { HomeComponent } from './modules/components/home/home.component';
import { ProfileComponent } from './modules/components/profile/profile.component';
import { ChangePasswordComponent } from '../app/modules/components/change-password/change-password.component';
import { AuthGuard } from './modules/auth.guard'
import { AvatarModule } from 'ngx-avatar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent, SignUpComponent, ForgotPasswordComponent, ResetPasswordComponent, HomeComponent, ProfileComponent, ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    BrowserModule /* or CommonModule */,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    AvatarModule,
    MaterialModule, MatFormFieldModule,
  ],
  entryComponents: [
    SignUpComponent
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
