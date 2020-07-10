import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import Vehiculo from 'src/app/models/vehiculo';

@Component({
  selector: 'app-vehiculo-delete',
  templateUrl: './vehiculo-delete.component.html',
  styleUrls: ['./vehiculo-delete.component.css']
})
export class VehiculoDeleteComponent implements OnInit {

  vehiculo : Vehiculo;	

  constructor(private activatedRoute:ActivatedRoute,
  			  private vehiculoService:VehiculoService,
              private router: Router) 
  {

  }

  ngOnInit(): void {
  	this.activatedRoute.params.subscribe( (params) =>{
  		var id = params["id"];
      //console.log(id);
  		this.vehiculoService.get(id).subscribe( (data:Vehiculo) => {
  			this.vehiculo = data;
  		});
  	})
  }

  borrar(){
    this.vehiculoService.delete(this.vehiculo.id).subscribe( (resp) =>{
    	this.router.navigate(["/vehiculo"]);
    });
  }
}
