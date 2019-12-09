import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //  application-wide singleton
})
export class DataService {
  private mCounter = 0;

  constructor() {}

  get counter(): number {
    return this.mCounter;
  }

  set counter(val: number) {
    if (val > 0) {
      this.mCounter = val;
    } else {
      console.log('Unacceptable value');
    }
  }
}
