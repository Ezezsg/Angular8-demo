import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import Vehiculo from 'src/app/models/vehiculo';

@Component({
  selector: 'app-vehiculo-add',
  templateUrl: '../shared/vehiculo-form.component.html',
  styleUrls: ['../shared/vehiculo-form.component.css']
})
export class VehiculoAddComponent implements OnInit {
  
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
  }

  submitForm(){
  	this.vehiculo = {
  		id:null,
  		marca:this.mainForm.get("marca").value,
  		modelo:this.mainForm.get("modelo").value,
  		year:this.mainForm.get("year").value,
  		hp:this.mainForm.get("hp").value
  	}

  	this.vehiculoService.insert(this.vehiculo).subscribe((resp) =>{
  		this.router.navigate(["/vehiculo"]);
  	})
  }

}
