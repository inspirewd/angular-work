import { Component, OnInit } from '@angular/core';
import { RxjsService } from './rxjs.service';

export interface Character {
  id: number;
  name: string;
}

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  public characters: Array<Character> = [];

  constructor(private rxjsService: RxjsService) { }

  ngOnInit(): void {
    // this.search("rick");
  }

  public search(name: string): void {
    // console.log("search()");
    this.rxjsService.search(name).subscribe(
      characters => {
        // console.log(characters);
        return this.characters = characters
      }) 
  }

}
