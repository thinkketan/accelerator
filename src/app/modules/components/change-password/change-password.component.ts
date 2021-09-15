import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { changePasswordForm, ValidationMessages, MustMatch } from '../../shared/constants';
import { CommonService } from '../../shared/services/common.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  public changePasswordForm!: FormGroup;
  public hide: boolean;
  public hideConfirm: boolean;
  public hideCurrent: boolean;
  public validationMessages: any;
  public changePasswordHeader: string;
  public changePasswordButton: string;
  public cancelButton: string;
  public currentPasswordName: string;
  public passwordName: string;
  public confirmPasswordName: string;

  constructor(private fb: FormBuilder, private router: Router,
    private commonService: CommonService) {
    this.hide = true;
    this.hideConfirm = true;
    this.hideCurrent = true;
    this.validationMessages = ValidationMessages.CHANGE_PASSWORD;
    this.changePasswordHeader = changePasswordForm.CHANGE_PASSWORD_FORM_HEADER;
    this.changePasswordButton = changePasswordForm.CHANGE_PASSWORD_BUTTON_NAME;
    this.cancelButton = changePasswordForm.CANCEL_BUTTON_NAME;
    this.currentPasswordName = changePasswordForm.CURRENT_PASSWORD_TITLE;
    this.passwordName = changePasswordForm.PASSWORD_TITLE;
    this.confirmPasswordName = changePasswordForm.CONFIRM_PASSWORD_TITLE;
  }

  ngOnInit(): void {
    this.onBuildForm();
  }

  onBuildForm() {
    this.changePasswordForm = this.fb.group({
      CurrentPassword: [, [Validators.required, Validators.minLength(8), Validators.maxLength(24)]],
      Password: [, [Validators.required, Validators.minLength(8), Validators.maxLength(24)]],
      ConfirmPassword: [, [Validators.required]],
    },
      {
        validators: [MustMatch('Password', 'ConfirmPassword')],
      });
  }

  //chek Current password validation
  validationChangePassword() {
    this.commonService.currentPasswordValidation(this.changePasswordForm.controls);
  }

  //chek password validation
  validationReset() {
    this.commonService.passwordValidation(this.changePasswordForm.controls);
  }

  onSave() {
    //chek valid form
    this.commonService.markAsTouched(this.changePasswordForm.controls);
    if (this.changePasswordForm.valid) {
      Swal.fire('Success!', 'Password has been changed successfully. Please login with your new password!', 'success')
      localStorage.clear();
      this.router.navigate(['/login']);
    } else { }
  }

  onCancel() {
    this.router.navigate(['/home']);
  }

}
