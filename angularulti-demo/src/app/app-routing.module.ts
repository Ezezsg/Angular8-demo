import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiculoListComponent } from './components/vehiculo-list/vehiculo-list.component';
import { VehiculoAddComponent } from './components/vehiculo-add/vehiculo-add.component';
import { VehiculoEditComponent } from './components/vehiculo-edit/vehiculo-edit.component';
import { VehiculoDeleteComponent } from './components/vehiculo-delete/vehiculo-delete.component';

const routes: Routes = [
	{ 
		path : 'vehiculo/agregar',
	    component : VehiculoAddComponent	
	},
	{ 
		path : 'vehiculo/editar/:id',
 		component : VehiculoEditComponent
	},
	{ 
		path : 'vehiculo/borrar/:id',
 		component : VehiculoDeleteComponent
	},
	{ 
		path : 'vehiculo',
		component : VehiculoListComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
