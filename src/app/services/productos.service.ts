import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/productos.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto []> {
    const urlGetProductos = environment.url+'products';
    return this.http.get<Producto []>(urlGetProductos)
  }
}
