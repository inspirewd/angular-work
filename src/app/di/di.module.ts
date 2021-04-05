import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiComponent } from './di.component';
import { DiPrimeService } from './di-prime.service';
import { serviceFactory } from './serviceFactory';
import { whichService } from './serviceCalc';

@NgModule({
  declarations: [DiComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DiComponent
  ],
  // określamy dostawcę jako DiPrimeService, poprzez useFactory wskazujemy na fabrykę, która zarządza tym, który serwis ma aktuanie zostać wskrzyknięty. Za pomocą tokenu 'MYSERVICE' wiążemy ze sobą serviceFactory z whichService dzięki czemu są ze sobą skomunikowane.
  providers: [
    {provide: DiPrimeService, useFactory: serviceFactory, deps: ['MYSERVICE']}, {provide: 'MYSERVICE', useValue: whichService.info}
  ]
})
export class DiModule { }
