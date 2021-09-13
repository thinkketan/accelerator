import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { changePasswordForm, ValidationMessages, MustMatch } from '../../shared/constants';
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

  constructor(private fb: FormBuilder, private router: Router) {
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

  public hasError = (controlName: string, errorName: string) => {
    return this.changePasswordForm.controls[controlName].hasError(errorName);
  }

  validationChangePassword() {
    const password = this.changePasswordForm.controls['CurrentPassword']
    if (/[A-Z]+/.test(password.value)) {
    } else {
      this.changePasswordForm.controls['CurrentPassword'].setErrors({
        upper: true
      })
    }
    if (/[a-z]+/.test(password.value)) {
    } else {
      this.changePasswordForm.controls['CurrentPassword'].setErrors({
        lower: true
      })
    }
    if (/[0-9]+/.test(password.value)) {
    } else {
      this.changePasswordForm.controls['CurrentPassword'].setErrors({
        number: true
      })
    }
    const regex = /[$-/:-?{-~!"^_@#`\[\]]/g;
    if (regex.test(password.value)) {
    } else {
      this.changePasswordForm.controls['CurrentPassword'].setErrors({
        special: true
      })
    }
  }

  public markAsTouched(objectControl: any) {
    Object.keys(objectControl).forEach(controlName => {
      if (objectControl[controlName].hasOwnProperty('controls')) {
        this.markAsTouched(objectControl[controlName].controls);
      } else {
        objectControl[controlName].markAsTouched();
      }
    });
  }

  validationReset() {
    const password = this.changePasswordForm.controls['Password']
    if (/[A-Z]+/.test(password.value)) {
    } else {
      this.changePasswordForm.controls['Password'].setErrors({
        upper: true
      })
    }
    if (/[a-z]+/.test(password.value)) {
    } else {
      this.changePasswordForm.controls['Password'].setErrors({
        lower: true
      })
    }
    if (/[0-9]+/.test(password.value)) {
    } else {
      this.changePasswordForm.controls['Password'].setErrors({
        number: true
      })
    }
    const regex = /[$-/:-?{-~!"^_@#`\[\]]/g;
    if (regex.test(password.value)) {
    } else {
      this.changePasswordForm.controls['Password'].setErrors({
        special: true
      })
    }
  }

  onSave() {
    this.markAsTouched(this.changePasswordForm.controls);
    if (this.changePasswordForm.valid) {
      Swal.fire('Success!', 'Password has been changed successfully. Please login with your new password!', 'success')
      // Swal.fire('Password has been changed successfully. please login with your new password')
      localStorage.clear();
      this.router.navigate(['/login']);
    } else { }
  }

  onCancel() {
    this.router.navigate(['/home']);
  }

}
