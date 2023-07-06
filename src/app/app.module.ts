import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreComponent } from './components/padre/padre.component';
import HijoMenorComponent from './components/hijo-menor/hijo-menor.component';
import { HijoMedianoComponent } from './components/hijo-mediano/hijo-mediano.component';
import { HijoMayorComponent } from './components/hijo-mayor/hijo-mayor.component';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoMenorComponent,
    HijoMedianoComponent,
    HijoMayorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
