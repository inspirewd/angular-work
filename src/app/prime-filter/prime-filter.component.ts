import { Component, OnInit } from '@angular/core';

import { SelectItem, FilterService, FilterMatchMode } from "primeng/api";
import { Car } from "./car";
import { CarService } from "./carservice";

@Component({
  selector: 'app-prime-filter',
  templateUrl: './prime-filter.component.html',
  styleUrls: ['./prime-filter.component.scss']
})
export class PrimeFilterComponent implements OnInit {

  cars!: Car[];

  cols!: any[];

  matchModeOptions!: SelectItem[];

  constructor(
    private carService: CarService,
    private filterService: FilterService
  ) {}

  ngOnInit() {
    const customFilterName = "custom-equals";

    this.filterService.register(
      customFilterName,
      (value, filter): boolean => {
        // console.log(value, filter);
        if (filter === undefined || filter === null || filter.trim() === "") {
          return true;
        }

        if (value === undefined || value === null) {
          return false;
        }

        return value.toString() === filter.toString();
      }
    );

    this.cols = [
      { field: "year", header: "Year", filter: "year" },
      { field: "brand", header: "Brand", filter: "brand" },
      { field: "color", header: "Color", filter: "color" },
      { field: "vin", header: "Vin", filter: "vin" }
    ];

    this.matchModeOptions = [
      { label: "Custom Equals", value: customFilterName },
      { label: "Starts With", value: FilterMatchMode.STARTS_WITH },
      { label: "Contains", value: FilterMatchMode.CONTAINS }
    ];

    this.carService.getCarsMedium().then(cars => (this.cars = cars));
  }
}
