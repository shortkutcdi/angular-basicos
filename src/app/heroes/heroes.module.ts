import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListadoComponent
  ]

})
export class HeroesModule {

}
