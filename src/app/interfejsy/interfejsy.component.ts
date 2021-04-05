import { Component, OnInit } from '@angular/core';

type Numerek = 1 | 2 | 3; // definiujemy typ, który przyjmuje jedynie wartości 1, 2 oraz 3

interface Person {
  firstName: string,
  lastName: string,
  age: number;
}

@Component({
  selector: 'app-interfejsy',
  templateUrl: './interfejsy.component.html',
  styleUrls: ['./interfejsy.component.scss']
})
export class InterfejsyComponent implements OnInit {

  liczba: Numerek = 3; // przypisujemy typ do zmiennej i określamy jej wartość, jeżeli jest inna niż wskazana w typie to wywali błąd

  michal: Person = {
    firstName: 'Michał',
    lastName: 'Szczurek',
    age: 33
  }

  constructor() { }

  ngOnInit(): void {
    this.getNumber();
    this.getPerson();
  }

  getNumber() {
    console.log(this.liczba);
  }

  getPerson() {
    console.log(this.michal);
  }

}
