import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { profileName, ValidationMessages, CustomValidator } from '../../shared/constants';
import profile from '../../../modules/shared/profile.json';
import { from } from 'rxjs';
import { CommonService } from '../../shared/services/common.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  public validationMessages: any;
  public profileHeader: string;
  public profileButtonName: string;
  public cancelButtonName: string;
  public emailIdTitle: string;
  public firstNameTitle: string;
  public lastNameTitle: string;
  public mobileNoTitle: string;
  public editprofile: boolean;
  public hideButton: boolean;
  public myProfile: { FirstName: number, LastName: string, MobileNo: number, EmailId: string };

  constructor(private fb: FormBuilder, private router: Router, private commonService: CommonService) {
    this.validationMessages = ValidationMessages.SIGNUP;
    this.profileHeader = profileName.PROFILE_FORM_HEADER;
    this.profileButtonName = profileName.PROFILE_BUTTON_NAME;
    this.cancelButtonName = profileName.CANCEL_BUTTON_NAME;
    this.emailIdTitle = profileName.EMAILID_TITLE;
    this.firstNameTitle = profileName.FIRST_NAME_TITLE;
    this.lastNameTitle = profileName.LAST_NAME_TITLE;
    this.mobileNoTitle = profileName.MOBILE_NO_TITLE;
    this.myProfile = profile;
    this.editprofile = true;
    this.hideButton = true;
  }

  ngOnInit(): void {
    this.onBuildForm();
  }

  onBuildForm() {
    this.profileForm = this.fb.group({
      FirstName: [this.myProfile.FirstName, [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      LastName: [this.myProfile.LastName, [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      MobileNo: [this.myProfile.MobileNo, [Validators.required, Validators.minLength(10),
      Validators.maxLength(10)]],
      EmailId: [this.myProfile.EmailId, [Validators.required, CustomValidator.email]],
    });
  }

  onCancel() {
    this.router.navigate(['/home']);
  }

  onSave() {
    //chek valid form
    this.commonService.markAsTouched(this.profileForm.controls);
    if (this.profileForm.valid) {
      this.hideButton = true;
      this.editprofile = true;
    } else { }
  }

  //edit profile
  onEdit() {
    this.hideButton = false;
    this.editprofile = false;
  }

}
