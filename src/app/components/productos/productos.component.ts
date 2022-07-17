import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/productos.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos!: Producto [];
  displayedColumns = ['id', 'name', 'description', 'price', 'stock'];

  constructor(public productosService: ProductosService) { }

  ngOnInit(): void {
    this.productosService.getProductos().subscribe(prod => {
      this.productos = prod;
    });
  }
}
