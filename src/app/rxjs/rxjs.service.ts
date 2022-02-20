import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from './rxjs.component';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  private api_path: string = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  public search(name: string): Observable<Array<Character>> {

    let params = new HttpParams({fromObject: {name}}); // w sumie chyba niepotrzebne

    return this.http.get<{results: Array<Character>}>(this.api_path, {params})
    .pipe(
      map(response => {
        // console.log(response);
        return response.results
      })
    )

  }
}
