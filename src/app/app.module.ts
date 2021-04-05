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

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    InterfejsyComponent,
    GenerykiComponent,
  ],
  imports: [
    BrowserModule,
    ViewModule, 
    RestApiModule,
    KlasyModule
  ],
  providers: [
    DataService,
    {
      provide: 'SampleData', useValue: sampleData
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
