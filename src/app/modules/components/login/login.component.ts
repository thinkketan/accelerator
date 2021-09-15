import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Logo, loginForm, ValidationMessages, CustomValidator } from '../../shared/constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { CommonService } from '../../shared/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public url: any;
  loginForm!: FormGroup;
  public hide!: Boolean;
  public loginHeader: string;
  public forgotPassword: string;
  public signUp: string;
  public loginButtonName: string;
  public emailIdTitle: string;
  public passwordTitle: string;
  public validationMessages: any;

  constructor(private fb: FormBuilder, private router: Router,
    public dialog: MatDialog, private commonService: CommonService
  ) {
    this.hide = true;
    this.url = Logo.logoUrl;
    this.loginHeader = loginForm.Login_Form_Header;
    this.forgotPassword = loginForm.Forgot_Password;
    this.signUp = loginForm.SignUp;
    this.loginButtonName = loginForm.Login_Button_Name;
    this.emailIdTitle = loginForm.EMAILID_TITLE;
    this.passwordTitle = loginForm.PASSWORD_TITLE;
    this.validationMessages = ValidationMessages.LOGIN
  }

  ngOnInit(): void {
    this.onBuildForm();
  }

  onBuildForm() {
    this.loginForm = this.fb.group({
      EmailId: [, [Validators.required, CustomValidator.email]],
      Password: [, [Validators.required, Validators.minLength(8), Validators.maxLength(24)]],
    });
  }

  onSignUp() {
    this.router.navigate(['/signup']);
  }

  //chek in password validation
  validationSinup() {
    this.commonService.passwordValidation(this.loginForm.controls);
    // const password = this.loginForm.controls['Password']
    // if (/[A-Z]+/.test(password.value)) {
    // } else {
    //   this.loginForm.controls['Password'].setErrors({
    //     upper: true
    //   })
    // }
    // if (/[a-z]+/.test(password.value)) {
    // } else {
    //   this.loginForm.controls['Password'].setErrors({
    //     lower: true
    //   })
    // }
    // if (/[0-9]+/.test(password.value)) {
    // } else {
    //   this.loginForm.controls['Password'].setErrors({
    //     number: true
    //   })
    // }
    // const regex = /[$-/:-?{-~!"^_@#`\[\]]/g;
    // if (regex.test(password.value)) {
    // } else {
    //   this.loginForm.controls['Password'].setErrors({
    //     special: true
    //   })
    // }
  }

  onLogin() {
    //chek valid form
    this.commonService.markAsTouched(this.loginForm.controls);
    //credential set in local storage
    if (this.loginForm.valid) {
      const emailId = this.loginForm.get('EmailId')?.value;
      const password = this.loginForm.get('Password')?.value;
      const userDetail = {
        email: emailId,
        password: password,
      }
      localStorage.setItem("currentUser", JSON.stringify(userDetail));
      this.router.navigate(['/home']);
    } else { }
  }

  //popup open in forgot passowrd
  onForgotPassword() {
    const dialogRef = this.dialog.open(ForgotPasswordComponent,
      { data: {}, width: '450px', disableClose: true });
    dialogRef.afterClosed().subscribe(resp => {
      dialogRef.afterClosed().subscribe(resp => {
        if (!resp) {
          return;
        }
        console.log('afterClosed resp', resp);
      });
    });
  }

}
