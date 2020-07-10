import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import Vehiculo from 'src/app/models/vehiculo';

@Component({
  selector: 'app-vehiculo-edit',
  templateUrl: '../shared/vehiculo-form.component.html',
  styleUrls: ['../shared/vehiculo-form.component.css']
})
export class VehiculoEditComponent implements OnInit {
  
  mainForm : FormGroup;
  vehiculo : Vehiculo; 
  marcas = ["Abarth", "Alfa Romeo", "Alpine", "Aston Martin", "Audi",
           "Bentley", "BMW", "Borgward", "Bugatti", "BYD",
           "Cadillac", "Caterham", "Chevrolet", "Citroën", "Cupra",
           "Dacia", "Dodge", "DS Automobiles",
           "Faraday Future", "Ferrari", "Fiat", "Ford", "Fornasari",
           "GTA Motor",
           "Honda", "Hurtan", "Hyundai",
           "Infiniti", "Isuzu", "Iveco",
           "Jaguar", "Jeep",
           "KIA Motors", "Koenigsegg", "KTM",
           "Lada", "Lamborghini", "Lancia", "Land Rover", "Lexus", "Lotus",
           "Mahindra", "Maserati", "Mazda", "McLaren", "Mercedes-Benz", "Mini", "Mitsubishi", "Morgan",
           "Nissan",
           "Opel",
           "Pagani", "Peugeot", "Piaggio", "Polaris", "Polestar", "Porsche",
           "Renault", "Rolls-Royce",
           "Saab", "SEAT", "Škoda", "Smart", "SsangYong", "Subaru", "Suzuki",
           "TATA", "Tesla", "Toyota", "Tramontana",
           "UROVESA",
           "Volkswagen", "Volvo", "W Motors"];

  constructor(private formBuilder:FormBuilder,
              private activatedRoute:ActivatedRoute,
              private vehiculoService:VehiculoService,
              private router: Router  
  			  ){
    this.mainForm = formBuilder.group({
    	marca : ["", Validators.required],
    	modelo : ["", Validators.required],
    	year : ["", Validators.required],
    	hp : ["", Validators.required],
    }) 
  }

  ngOnInit(): void {
  	this.activatedRoute.params.subscribe( (params) =>{
  		var id = params["id"];
      //console.log(id);
  		this.vehiculoService.get(id).subscribe( (data:Vehiculo) => {
  			this.vehiculo = data;
        //console.dir(this.vehiculo);
  			//this.mainForm.setValue({"marca" : this.vehiculo.marca});
  			this.mainForm.patchValue(data);
  		});
  	})
  }

  submitForm(){
  	this.vehiculo.marca = this.mainForm.get("marca").value;
  	this.vehiculo.modelo = this.mainForm.get("modelo").value;
  	this.vehiculo.year = this.mainForm.get("year").value;
  	this.vehiculo.hp = this.mainForm.get("hp").value;
  	this.vehiculoService.update(this.vehiculo).subscribe((resp)=>{
  		this.router.navigate(["vehiculo"]);
  	})
  }

}
