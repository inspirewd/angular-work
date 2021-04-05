import { Injectable, Inject } from '@angular/core';
// import sampleData from './sample.data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  // constructor(@Inject('SampleData') sampleData) {
  //   this.data = sampleData
  //  }
  //  data = [];

  //  getData() {
  //    return this.data;
  //  }

  printToConsole(arg) {
    console.log(arg);
  }
}
