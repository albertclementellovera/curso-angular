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
import { AddMessagesComponent } from './add-messages/add-messages.component';
import { ListMessagesComponent } from './list-messages/list-messages.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { ContactInfoComponent } from './contact/contact-info/contact-info.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent,
    children:[
     {path: '',component: ContactInfoComponent},
     {path: 'details', component: ContactDetailComponent}
    ]
  },
  {path: 'about', component: AboutComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'courses/:course/:id', component: CoursesDetailComponent}
];
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
    ChildrenComponent,
    AddMessagesComponent,
    ListMessagesComponent,
    CoursesComponent,
    CoursesDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
