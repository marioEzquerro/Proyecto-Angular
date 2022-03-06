import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Puja } from '../models/puja.model';

@Injectable()
export class PujaService {
  constructor(private http: HttpClient) {}
  
  getPujaData() : Observable<Puja[]> {
    return this.http.get<Puja[]>(environment.API_URL + 'pujas');
  }

  postPujaData(body : any) : Puja {
    let bodyData = new Puja();
    bodyData.idInvento = body.id;
    bodyData.cantidad = body.cantidad;

    let result =new Puja();
    this.http.post<Puja>(environment.API_URL + 'pujas', bodyData)
    .subscribe(
      (response) => {                           
        console.log('response received')
        result = response;
      },
      (error) => {                            
        console.error('error caught in component')
      }
    )
    return result;
  }
}
