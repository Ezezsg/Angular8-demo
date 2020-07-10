import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculoListComponent } from './components/vehiculo-list/vehiculo-list.component';
import { VehiculoAddComponent } from './components/vehiculo-add/vehiculo-add.component';
import { VehiculoEditComponent } from './components/vehiculo-edit/vehiculo-edit.component';
import { VehiculoDeleteComponent } from './components/vehiculo-delete/vehiculo-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculoListComponent,
    VehiculoAddComponent,
    VehiculoEditComponent,
    VehiculoDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
