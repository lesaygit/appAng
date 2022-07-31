import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Municipio } from '../interfaces/municipios.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MunicipiosService {

  constructor(private http: HttpClient) {}

  getMunicipios(): Observable<Municipio []> {
    const urlGetMunicipios = environment.url+'mun';
    return this.http.get<Municipio []>(urlGetMunicipios);
  }
}
