import { Component, OnInit } from '@angular/core';
import { signUpForm, ValidationMessages, CustomValidator, MustMatch } from '../../shared/constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonService } from '../../shared/services/common.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public password: boolean | undefined;
  signupForm!: FormGroup;
  public hide: Boolean;
  public signUpHeader: string;
  public signUpButtonName: string;
  public cancelButtonName: string;
  public emailIdTitle: string;
  public passwordTitle: string;
  public firstNameTitle: string;
  public lastNameTitle: string;
  public mobileNoTitle: string;
  public validationMessages: any;
  public hideConfirm: boolean;
  public confirmPasswordTitle: string;
  public LoginToAccount: string;
  public Login: string;

  constructor(private fb: FormBuilder, private router: Router, private commonService: CommonService) {
    this.hide = true;
    this.signUpHeader = signUpForm.SIGNUP_FORM_HEADER;
    this.signUpButtonName = signUpForm.SIGNUP_BUTTON_NAME;
    this.cancelButtonName = signUpForm.CANCEL_BUTTON_NAME;
    this.emailIdTitle = signUpForm.EMAILID_TITLE;
    this.passwordTitle = signUpForm.PASSWORD_TITLE;
    this.firstNameTitle = signUpForm.FIRST_NAME_TITLE;
    this.lastNameTitle = signUpForm.LAST_NAME_TITLE;
    this.mobileNoTitle = signUpForm.MOBILE_NO_TITLE;
    this.validationMessages = ValidationMessages.SIGNUP;
    this.confirmPasswordTitle = signUpForm.CONFIRM_PASSWORD_TITLE;
    this.hideConfirm = true;
    this.LoginToAccount = signUpForm.LOGIN_TO_ACCOUNT;
    this.Login = signUpForm.Login_Name
  }

  ngOnInit(): void {
    this.onBuildForm();
  }

  onBuildForm() {
    this.signupForm = this.fb.group({
      FirstName: [, [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      LastName: [, [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      MobileNo: [, [Validators.required, Validators.minLength(10),
      Validators.maxLength(10)]],
      EmailId: [, [Validators.required, CustomValidator.email]],
      Password: [, [Validators.required, Validators.minLength(8), Validators.maxLength(24)]],
      ConfirmPassword: [, [Validators.required]],
    },
      {
        validators: [MustMatch('Password', 'ConfirmPassword')],
      });
  }

  //chek password validation
  validationSinup() {
    this.commonService.passwordValidation(this.signupForm.controls);
  }

  onSave() {
    //chek valid form
    this.commonService.markAsTouched(this.signupForm.controls);
    if (this.signupForm.valid) {
      Swal.fire('successfully. please login')
      this.router.navigate(['/login']);
    } else { }
  }

  onCancel() {
    this.router.navigate(['/login']);
  }

}
