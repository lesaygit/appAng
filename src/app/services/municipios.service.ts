import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { municipio } from '../interfaces/municipios.interface';

@Injectable({
  providedIn: 'root'
})
export class MunicipiosService {

  private URL = "http://localhost:3000/mun";

  constructor(private http: HttpClient) {}

  getMunicipios(): Observable<municipio []> {
    return this.http.get<municipio []>(this.URL);
  }
}
