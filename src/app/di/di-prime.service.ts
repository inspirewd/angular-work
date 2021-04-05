import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiPrimeService {

  constructor() { }

  getMessage(): void {
    console.log('prime service');
  }
}
