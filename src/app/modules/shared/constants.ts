import { FormControl, Validators, FormGroup } from '@angular/forms';

export const Logo = {
    logoUrl: "https://via.placeholder.com/150x60",
};

export const loginForm = {
    Login_Form_Header: 'Login',
    Forgot_Password: 'Forgot Password',
    SignUp: 'Sign Up',
    Login_Button_Name: 'Login',
    EMAILID_TITLE: 'Email Id',
    PASSWORD_TITLE: 'Enter Password',
}

export const signUpForm = {
    SIGNUP_FORM_HEADER: 'Sign Up',
    SIGNUP_BUTTON_NAME: 'Sign Up',
    CANCEL_BUTTON_NAME: 'Cancel',
    EMAILID_TITLE: 'Email Id',
    PASSWORD_TITLE: 'New Password',
    FIRST_NAME_TITLE: 'First Name',
    LAST_NAME_TITLE: 'Last Name',
    MOBILE_NO_TITLE: 'Mobile No',
    CONFIRM_PASSWORD_TITLE: 'Confirm Password',
    LOGIN_TO_ACCOUNT: 'Login to a Account',
    Login_Name: 'Login',
}

export const forgotPasswordForm = {
    FORGOT_PASSWORD_FORM_HEADER: 'Forgot Password',
    FORGOT_BUTTON_NAME: 'Submit',
    CANCEL_BUTTON_NAME: 'Close',
    EMAILID_TITLE: 'Email Id',
    RESET_PASSWORD_TITLE: 'Enter your Email Id to reset your password .',
    SEND_MAIL_MASSAGE: 'Email has been sent',
    SEND_MAIL_MASSAGE1: 'please follow this instruction to reset your password.',
}

export const resetPasswordForm = {
    RESET_FORM_HEADER: 'Reset Password',
    RESET_BUTTON_NAME: 'Reset Password',
    CANCEL_BUTTON_NAME: 'Cancel',
    PASSWORD_TITLE: 'New Password',
    CONFIRM_PASSWORD_TITLE: 'Confirm Password',
}

export const changePasswordForm = {
    CHANGE_PASSWORD_FORM_HEADER: 'Change Password',
    CHANGE_PASSWORD_BUTTON_NAME: 'Change Password',
    CANCEL_BUTTON_NAME: 'Cancel',
    PASSWORD_TITLE: 'Enter New Password',
    CONFIRM_PASSWORD_TITLE: 'Confirm New Password',
    CURRENT_PASSWORD_TITLE: 'Enter Your Current Password',
}

export const headerName = {
    PROJECT_NAME: 'ACCELERATOR',
    PROFILE: 'My Profile',
    CHANGE_PASSWORD: 'Change Password',
    LOGOUT: 'Logout',
    LOGIN_TITLE: 'My Account',
}

export const profileName = {
    PROFILE_FORM_HEADER: 'My Profile',
    PROFILE_BUTTON_NAME: 'Save',
    CANCEL_BUTTON_NAME: 'Cancel',
    EMAILID_TITLE: 'Email Id',
    FIRST_NAME_TITLE: 'First Name',
    LAST_NAME_TITLE: 'Last Name',
    MOBILE_NO_TITLE: 'Mobile No',
}

export class CustomValidator extends Validators {
    static password(control: FormControl) {
        const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@#$!%*?&])[A-Za-z\d$@$!%*?&].{6,}/g
        if (control.value && !regex.test(control.value)) {
            return { pattern: true };
        }
        return null;
    }

    static email(control: FormControl) {
        const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
        if (control.value && !regex.test(control.value)) {
            return { pattern: true };
        } return null;
    }

}

export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }
        if (control.value && matchingControl.value &&
            control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    };
}

export const ValidationMessages = {
    SIGNUP: {
        FirstName: [
            { type: 'required', message: 'First name is required' },
            { type: 'minlength', message: 'First name must be at least 2 characters long' },
            { type: 'maxlength', message: 'First name cannot be more than 25 characters long' },
        ],
        EmailId: [
            { type: 'required', message: 'Email id is required' },
            { type: 'pattern', message: 'Email id is invalid' },
        ],
        LastName: [
            { type: 'required', message: 'Last name is required' },
            { type: 'minlength', message: 'Last name must be at least 2 characters long' },
            { type: 'maxlength', message: 'Last name cannot be more than 25 characters long' },
        ],
        MobileNo: [
            { type: 'required', message: 'Mobile no. is required' },
            { type: 'minlength', message: 'Mobile no. must be 10 digit number' },
            { type: 'maxlength', message: 'Mobile no. must be 10 digit number' },
        ],
        Password: [
            { type: 'required', message: 'Password is required' },
            { type: 'minlength', message: 'Password should be minimum 8 characters' },
            { type: 'maxlength', message: 'Password cannot be more than 24 characters long' },
            { type: 'pattern', message: 'Password should contain at least one upper case char.' },
            { type: 'upper', message: 'Password should contain at least one upper case char.' },
            { type: 'lower', message: 'Password should contain at least one small case char.' },
            { type: 'number', message: 'Password should contain at least one digit.' },
            { type: 'special', message: 'Password should contain at least one Special character.' },
        ],
        ConfirmPassword: [
            { type: 'required', message: 'Confirm Password is required' },
            { type: 'mustMatch', message: 'Confirm Password must match with Password' },
        ],
    },

    LOGIN: {
        EmailId: [
            { type: 'required', message: 'Email id is required' },
            { type: 'pattern', message: 'Email id is invalid' },
        ],
        Password: [
            { type: 'required', message: 'Password is required' },
            { type: 'minlength', message: 'Password should be minimum 8 characters' },
            { type: 'maxlength', message: 'Password cannot be more than 24 characters long' },
            { type: 'pattern', message: 'Password should contain at least one upper case char.' },
            { type: 'upper', message: 'Password should contain at least one upper case char.' },
            { type: 'lower', message: 'Password should contain at least one small case char.' },
            { type: 'number', message: 'Password should contain at least one digit.' },
            { type: 'special', message: 'Password should contain at least one Special character.' },
        ],
    },

    FORGOT_PASSWORD: {
        EmailId: [
            { type: 'required', message: 'Email id is required' },
            { type: 'pattern', message: 'Email id is invalid' },
        ],
    },

    RESET_PASSWORD: {
        Password: [
            { type: 'required', message: 'Password is required' },
            { type: 'minlength', message: 'Password should be minimum 8 characters' },
            { type: 'maxlength', message: 'Password cannot be more than 24 characters long' },
            { type: 'pattern', message: 'Password should contain at least one upper case char.' },
            { type: 'upper', message: 'Password should contain at least one upper case char.' },
            { type: 'lower', message: 'Password should contain at least one small case char.' },
            { type: 'number', message: 'Password should contain at least one digit.' },
            { type: 'special', message: 'Password should contain at least one Special character.' },
        ],
        ConfirmPassword: [
            { type: 'required', message: 'Confirm Password is required' },
            { type: 'mustMatch', message: 'Confirm Password must match with Password' },
        ],
    },


    CHANGE_PASSWORD: {
        Password: [
            { type: 'required', message: 'Password is required' },
            { type: 'minlength', message: 'Password should be minimum 8 characters' },
            { type: 'maxlength', message: 'Password cannot be more than 24 characters long' },
            { type: 'pattern', message: 'Password should contain at least one upper case char.' },
            { type: 'upper', message: 'Password should contain at least one upper case char.' },
            { type: 'lower', message: 'Password should contain at least one small case char.' },
            { type: 'number', message: 'Password should contain at least one digit.' },
            { type: 'special', message: 'Password should contain at least one Special character.' },
        ],
        ConfirmPassword: [
            { type: 'required', message: 'Confirm Password is required' },
            { type: 'mustMatch', message: 'Confirm Password must match with Password' },
        ],
        CurrentPassword: [
            { type: 'required', message: 'Current Password is required' },
            { type: 'minlength', message: 'Current Password should be minimum 8 characters' },
            { type: 'maxlength', message: 'Current Password cannot be more than 24 characters long' },
            { type: 'pattern', message: 'Current Password should contain at least one upper case char.' },
            { type: 'upper', message: 'Current Password should contain at least one upper case char.' },
            { type: 'lower', message: 'Current Password should contain at least one small case char.' },
            { type: 'number', message: 'Current Password should contain at least one digit.' },
            { type: 'special', message: 'Current Password should contain at least one Special character.' },
        ],
    }
}