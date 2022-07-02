import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Municipio } from '../interfaces/municipios.interface';

@Injectable({
  providedIn: 'root'
})
export class MunicipiosService {

  private URL = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  getMunicipios(): Observable<Municipio []> {
    const urlGetMunicipios = this.URL+'mun';
    return this.http.get<Municipio []>(urlGetMunicipios);
  }
}
