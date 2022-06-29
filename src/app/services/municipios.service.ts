import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Municipio } from '../interfaces/municipios.interface';

@Injectable({
  providedIn: 'root'
})
export class MunicipiosService {

  private URL_BASE = "http://localhost:3000/";
  private RUTA = "mun";

  constructor(private http: HttpClient) {}

  getMunicipios(): Observable<Municipio []> {
    return this.http.get<Municipio []>(this.URL_BASE+this.RUTA);
  }
}
