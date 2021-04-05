import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KlasyComponent } from './klasy.component';
import { Klasy2Component } from './klasy2.component';



@NgModule({
  declarations: [
    KlasyComponent,
    Klasy2Component
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    KlasyComponent,
    Klasy2Component
  ]
})
export class KlasyModule { }
