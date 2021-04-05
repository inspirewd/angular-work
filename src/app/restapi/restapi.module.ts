import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestApiComponent } from './restapi.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    RestApiComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    RestApiComponent
  ]
})
export class RestApiModule { }
