import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Character } from './rxjs.component';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  private api_path: string = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  public search(name$: Subject<string>) {
    return name$
    .pipe(
      filter(query => query.length >= 3), // filtr dla zapytania o minimum 3 znakach
      debounceTime(500), // umożliwia opóźnienie w wywołaniu subskrypcji
      distinctUntilChanged(), // emituje wartość gdy jest ona inna od poprzedniej
      switchMap(name => this.searchCharacter(name))
    )
    
  }

  private searchCharacter(name: string): Observable<Array<Character>> {
    let params = new HttpParams({fromObject: {name}}); // dzięki temu dostajemy response z query parametru character?name=string

    return this.http.get<{results: Array<Character>}>(this.api_path, {params})
      .pipe(map(response => response.results)
    )

  }
}
