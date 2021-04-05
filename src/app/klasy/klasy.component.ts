import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-klasy',
  templateUrl: './klasy.component.html',
  styleUrls: ['./klasy.component.scss']
})
export class KlasyComponent implements OnInit {

  test = 'dziedziczony element';
  
  constructor() {

  }

  ngOnInit(): void {

  }

  getTest() {
    console.log(this.test);
  
  }

}
