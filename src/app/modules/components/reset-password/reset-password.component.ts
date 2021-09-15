import { Component, OnInit } from '@angular/core';
import { resetPasswordForm, ValidationMessages, MustMatch } from '../../shared/constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../../shared/services/common.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})

export class ResetPasswordComponent implements OnInit {
  public resetPasswordForm!: FormGroup;
  public hide: Boolean;
  public hideConfirm: boolean;
  public resetPasswordButtonName: string;
  public cancelButtonName: string;
  public validationMessages: any;
  public passwordTitle: any;
  public confirmPasswordTitle: any;
  public resetPasswordHeader: any;

  constructor(private fb: FormBuilder, private router: Router,private commonService: CommonService) {
    this.hide = true;
    this.hideConfirm = true;
    this.validationMessages = ValidationMessages.RESET_PASSWORD;
    this.resetPasswordButtonName = resetPasswordForm.RESET_BUTTON_NAME;
    this.cancelButtonName = resetPasswordForm.CANCEL_BUTTON_NAME;
    this.passwordTitle = resetPasswordForm.PASSWORD_TITLE;
    this.confirmPasswordTitle = resetPasswordForm.CONFIRM_PASSWORD_TITLE;
    this.resetPasswordHeader = resetPasswordForm.RESET_FORM_HEADER;
  }

  ngOnInit(): void {
    this.onBuildForm();
  }

  onBuildForm() {
    this.resetPasswordForm = this.fb.group({
      Password: [, [Validators.required, Validators.minLength(8), Validators.maxLength(24)]],
      ConfirmPassword: [, [Validators.required]],
    },
      {
        validators: [MustMatch('Password', 'ConfirmPassword')],
      });
  }

  validationReset() {
    const password = this.resetPasswordForm.controls['Password']
    if (/[A-Z]+/.test(password.value)) {
    } else {
      this.resetPasswordForm.controls['Password'].setErrors({
        upper: true
      })
    }
    if (/[a-z]+/.test(password.value)) {
    } else {
      this.resetPasswordForm.controls['Password'].setErrors({
        lower: true
      })
    }
    if (/[0-9]+/.test(password.value)) {
    } else {
      this.resetPasswordForm.controls['Password'].setErrors({
        number: true
      })
    }
    const regex = /[$-/:-?{-~!"^_@#`\[\]]/g;
    if (regex.test(password.value)) {
    } else {
      this.resetPasswordForm.controls['Password'].setErrors({
        special: true
      })
    }
  }

  onSave() {
    this.commonService.markAsTouched(this.resetPasswordForm.controls);
  }

  onCancel() {
    this.router.navigate(['/login']);
  }

}
