import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiMockService {

  constructor() { }

  getMessage(): void {
    console.log('mock service');
  }
}
