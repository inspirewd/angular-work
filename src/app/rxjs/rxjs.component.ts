import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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
export class RxjsComponent {

  public characters$: Observable<Array<Character>>;
  public name$ = new Subject<string>(); // subject do specjalny typ observabla, który pozwala multicastować wartości do wielu observerów

  constructor(private rxjsService: RxjsService) {
    this.characters$ = this.rxjsService.search(this.name$);
  }

  // funkcja do trackBy, dzięki której rozpoznajemy po id, który element w strumieniu uległ zmianie
  public identifyCharacter(character: any): number {
    return character.id;
  }

}
