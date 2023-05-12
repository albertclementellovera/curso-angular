import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { BotonimagenComponent } from './botonimagen/botonimagen.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';
import { Formulario2Component } from './formulario2/formulario2.component';
import { Formulario3Component } from './formulario3/formulario3.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ChildrenComponent } from './children/children.component';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    BotonesComponent,
    BotonimagenComponent,
    FormularioComponent,
    BuclesComponent,
    SwitchComponent,
    Formulario2Component,
    Formulario3Component,
    ChildrenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
