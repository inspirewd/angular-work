import { Component, OnInit } from '@angular/core';
import { KlasyComponent } from './klasy.component';

@Component({
  selector: 'app-klasy2',
  templateUrl: './klasy2.component.html',
  styleUrls: ['./klasy2.component.scss']
})
export class Klasy2Component extends KlasyComponent implements OnInit { // deklaracja extends

  constructor() { 
    super(); // odwołujemy się poprzez super() do konstruktora klasy bazowej
  }

  ngOnInit(): void {
    this.getTest(); // możemy wywołać metody klasy bazowej
  }

}
