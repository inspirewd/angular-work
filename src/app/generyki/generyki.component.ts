import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generyki',
  templateUrl: './generyki.component.html',
  styleUrls: ['./generyki.component.scss']
})
export class GenerykiComponent implements OnInit {
  
  constructor() {}

  echo<T>(args: T): T {
    return args;
  }

  echo2(args) {
    return args;
  }

  ngOnInit(): void {
    console.log(this.echo('echoooo'));
    console.log(this.echo2('echoooo'));


    let test = this.echo(1); // rozpoznaje typ number dzięki typowy generycznemu: 
    let test2 = this.echo2(1); // bez deklaracji typu gen. rozpoznaje typ jako any
  }

}

export class Admin extends GenerykiComponent implements OnInit {
  //let admin = new GenerykiComponent;


}

