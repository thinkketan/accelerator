import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  //touch any field show validation massage functionlity
  public markAsTouched(objectControl: any) {
    Object.keys(objectControl).forEach(controlName => {
      if (objectControl[controlName].hasOwnProperty('controls')) {
        this.markAsTouched(objectControl[controlName].controls);
      } else {
        objectControl[controlName].markAsTouched();
      }
    });
  }

  public passwordValidation(objdatacontrol: any) {
    const password = objdatacontrol['Password']
    if (/[A-Z]+/.test(password.value)) {
    } else {
      objdatacontrol['Password'].setErrors({
        upper: true
      })
    }
    if (/[a-z]+/.test(password.value)) {
    } else {
      objdatacontrol['Password'].setErrors({
        lower: true
      })
    }
    if (/[0-9]+/.test(password.value)) {
    } else {
      objdatacontrol['Password'].setErrors({
        number: true
      })
    }
    const regex = /[$-/:-?{-~!"^_@#`\[\]]/g;
    if (regex.test(password.value)) {
    } else {
      objdatacontrol['Password'].setErrors({
        special: true
      })
    }
  }

  public currentPasswordValidation(objdatacontrol: any) {
    const password = objdatacontrol['CurrentPassword']
    if (/[A-Z]+/.test(password.value)) {
    } else {
      objdatacontrol['CurrentPassword'].setErrors({
        upper: true
      })
    }
    if (/[a-z]+/.test(password.value)) {
    } else {
      objdatacontrol['CurrentPassword'].setErrors({
        lower: true
      })
    }
    if (/[0-9]+/.test(password.value)) {
    } else {
      objdatacontrol['CurrentPassword'].setErrors({
        number: true
      })
    }
    const regex = /[$-/:-?{-~!"^_@#`\[\]]/g;
    if (regex.test(password.value)) {
    } else {
      objdatacontrol['CurrentPassword'].setErrors({
        special: true
      })
    }
  }


}
