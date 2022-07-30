import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { tap } from 'rxjs';
import { Producto } from 'src/app/interfaces/productos.interface';
import { ProductosService } from 'src/app/services/productos.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'price', 'stock', 'operaciones'];
  dataSource = new MatTableDataSource<Producto>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(public productosService: ProductosService) { }

  ngOnInit(): void {
    this.productosService.getProductos().pipe(
      tap(
        data => {
          this.dataSource.data = data;
        }
      ) 
    ).subscribe(
      {error:err => alert(err)}
    )
  }
}