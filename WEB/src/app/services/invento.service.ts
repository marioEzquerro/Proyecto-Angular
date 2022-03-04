import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Invento } from '../models/invento.model';
import { Puja } from '../models/puja.model';

@Injectable()
export class InventoService {
  constructor(private http: HttpClient) {}
  
  getInventoData() : Observable<Invento[]> {
    return this.http.get<Invento[]>(environment.API_URL + 'inventos');
  }

  getInventoDataID(id: number) : Observable<Invento> {
    return this.http.get<Invento>(environment.API_URL + 'inventos/'+ id);
  }

  getInventoPujas(id: number) : Observable<Puja[]> {
    return this.http.get<Puja[]>(environment.API_URL + 'inventos/'+ id + "/pujas");
  }


  // postInventoData(body : any) : Invento {
  //   let bodyData = new Invento();
  //   bodyData.nombre = body.invento.nombre;
  //   bodyData.descr = body.descr;
  //   bodyData.longDesc = body.longDesc;
  //   bodyData.img = body.img;


  //   let result =new Invento();
  //   this.http.post<Invento>(environment.API_URL + 'inventos', bodyData)
  //   .subscribe(
  //     (response) => {                           
  //       console.log('response received')
  //       result = response;
  //     },
  //     (error) => {                            
  //       console.error('error caught in component')
  //     }
  //   )
  //   return result;
  // }
}
