import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rest-api',
  templateUrl: './restapi.component.html',
  styleUrls: ['./restapi.component.scss']
})
export class RestApiComponent implements OnInit {

  constructor(private http: HttpClient) { }

  response : any;
  f: any;

  ngOnInit(): void {
    let obs = this.http.get('https://api.github.com/users/mojombo');
    obs.subscribe((response) => { 
      //console.log(response);
      this.response = response;
    });

    fetch('https://api.github.com/users/mojombo')
    .then(res => { 
      
      this.f = res;
      console.log(this.f);
    })
  }

}
