import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/modules/components/login/login.component';
import { SignUpComponent } from '../app/modules/components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from '../app/modules/components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from '../app/modules/components/reset-password/reset-password.component';
import { HomeComponent } from '../app/modules/components/home/home.component';
import { ProfileComponent } from '../app/modules/components/profile/profile.component';
import { ChangePasswordComponent } from '../app/modules/components/change-password/change-password.component';
import { AuthGuard } from './modules/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'resetpassword', component: ResetPasswordComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'changepassword', component: ChangePasswordComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
