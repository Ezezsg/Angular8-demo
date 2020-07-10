import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Vehiculo from '../models/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  
  private url = "http://localhost:3000/vehiculos"

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Vehiculo[]>{
    return this.httpClient.get<Vehiculo[]>(this.url);
  }

  get(id:number):Observable<Vehiculo>{
  	return this.httpClient.get<Vehiculo>(this.url + "/" + id);
  }

  update(vehiculo:Vehiculo):Observable<any>{
    return this.httpClient.put(this.url + "/" + vehiculo.id, vehiculo);
  }

  insert(vehiculo:Vehiculo):Observable<any>{
  	return this.httpClient.post(this.url, vehiculo);
  }

  delete(id:number):Observable<any>{
  	return this.httpClient.delete(this.url + "/" + id);
  }
}
