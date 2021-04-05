import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from './../data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  data = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // this.data = this.dataService.getData();
    this.dataService.printToConsole('test');
  }

}
