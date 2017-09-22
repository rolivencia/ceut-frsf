import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RoutingModule } from './app-routing.module';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './not-found.component';

import {MdButton, MdButtonModule, MdCard, MdGridList, MdGridTile, MdToolbarModule} from '@angular/material';
import {MdTable, MdTableModule} from "@angular/material/typings/table";

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
    'swipe': {velocity: 0.4, threshold: 20} // override default settings
  };
}

@NgModule({
  imports: [BrowserModule, FormsModule, RoutingModule, MdToolbarModule, MdButtonModule, MdTableModule],
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    EstudiantesComponent,
    PageNotFoundComponent,
    PrestamosComponent,
    UsuariosComponent,
    MdCard,
    MdGridList,
    MdGridTile,
    MdGridList,
    MdTable
  ],
  bootstrap: [AppComponent],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: MyHammerConfig
  }]
})
export class AppModule { }