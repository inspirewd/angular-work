import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import sampleData from './sample.data';
import { DataService } from './data.service'; 
import { ViewModule } from './view/view.module';
import { RestApiModule } from './restapi/restapi.module';
import { KlasyModule } from './klasy/klasy.module';
import { InterfejsyComponent } from './interfejsy/interfejsy.component';
import { GenerykiComponent } from './generyki/generyki.component';
import { DiModule } from './di/di.module';
import { MasterComponentComponent } from './master-component/master-component.component';
import { PrimeFilterComponent } from './prime-filter/prime-filter.component';
import {TableModule} from 'primeng/table';
import { CarService } from './prime-filter/carservice';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    InterfejsyComponent,
    GenerykiComponent,
    MasterComponentComponent,
    PrimeFilterComponent,

  ],
  imports: [
    BrowserModule,
    ViewModule, 
    RestApiModule,
    KlasyModule,
    DiModule,
    TableModule,
    BrowserAnimationsModule
  ],
  providers: [
    DataService,
    {
      provide: 'SampleData', useValue: sampleData
    },
    CarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
