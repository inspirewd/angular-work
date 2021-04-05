import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-klasy',
  templateUrl: './klasy.component.html',
  styleUrls: ['./klasy.component.scss']
})
export class KlasyComponent implements OnInit {

  test = 'klasy.component';
  
  constructor() {

  }

  ngOnInit(): void {
    this.getTest();
  }

  getTest() {
    console.log(this.test);
  
  }

}
