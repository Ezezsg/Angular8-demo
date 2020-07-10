import { Component, OnInit } from '@angular/core';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import Vehiculo from 'src/app/models/vehiculo';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {

  data:string; 
  vehiculos: Vehiculo[];
  
  constructor(private vehiculoService:VehiculoService) { }

  ngOnInit(): void {
  	this.cargarDatos();
  }

  cargarDatos(){
    this.vehiculoService.getAll().subscribe( (data : Vehiculo[]) => {
      this.vehiculos = data;
    })
  }
  
  /*borrar(id:number){
    this.vehiculoService.delete(id).subscribe( (resp) =>{
    this.cargarDatos(); 
    });
  }*/
}
