import { Component, OnInit } from '@angular/core';
import { ValidationMessages, forgotPasswordForm, CustomValidator } from '../../shared/constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit {
  forgotForm!: FormGroup;
  public hide: Boolean;
  public validationMessages: any;
  public forgotPasswordHeader: string;
  public forgotSaveButtonName: string;
  public cancelButtonName: string;
  public emailIdTitle: string;
  public restPasswordTitle: string;
  public forgotFormHide: boolean;
  public saveUsername: boolean;
  public SEND_MAIL_MASSAGE: string;
  public SEND_MAIL_MASSAGE1: string;
  public emailId: string;

  constructor(private fb: FormBuilder, private router: Router,
    public dialogRef: MatDialogRef<any>
  ) {
    this.hide = true;
    this.forgotPasswordHeader = forgotPasswordForm.FORGOT_PASSWORD_FORM_HEADER;
    this.forgotSaveButtonName = forgotPasswordForm.FORGOT_BUTTON_NAME;
    this.cancelButtonName = forgotPasswordForm.CANCEL_BUTTON_NAME;
    this.validationMessages = ValidationMessages.FORGOT_PASSWORD;
    this.emailIdTitle = forgotPasswordForm.EMAILID_TITLE;
    this.restPasswordTitle = forgotPasswordForm.RESET_PASSWORD_TITLE;
    this.forgotFormHide = true;
    this.saveUsername = true;
    this.SEND_MAIL_MASSAGE = forgotPasswordForm.SEND_MAIL_MASSAGE;
    this.SEND_MAIL_MASSAGE1 = forgotPasswordForm.SEND_MAIL_MASSAGE1;
    this.emailId = '';
  }

  ngOnInit(): void {
    this.onBuildForm();
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.forgotForm.controls[controlName].hasError(errorName);
  }

  onBuildForm() {
    this.forgotForm = this.fb.group({
      EmailId: [, [Validators.required, CustomValidator.email]],
    });
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

  onCancel() {
    this.dialogRef.close();
    this.router.navigate(['/login']);
  }

  onCancelReset() {
    this.dialogRef.close();
    this.router.navigate(['/login']);
  }

  onSave() {
    this.markAsTouched(this.forgotForm.controls);
    if (this.forgotForm.valid) {
      this.emailId = this.forgotForm.get('EmailId')?.value;
      this.forgotFormHide = false;
    } else { }
  }

}
