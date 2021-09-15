import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  public markAsTouched(objectControl: any) {
    Object.keys(objectControl).forEach(controlName => {
      if (objectControl[controlName].hasOwnProperty('controls')) {
        this.markAsTouched(objectControl[controlName].controls);
      } else {
        objectControl[controlName].markAsTouched();
      }
    });
  }

}
