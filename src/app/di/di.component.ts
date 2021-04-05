import { Component, OnInit } from '@angular/core';
import { DiPrimeService } from './di-prime.service';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.scss']
})
export class DiComponent implements OnInit {

  // wstrzykujemy serwis DiPrime
  constructor(private service: DiPrimeService) { }

  ngOnInit(): void {
    this.service.getMessage();
  }

}
