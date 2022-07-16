import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MunicipiosComponent } from './components/municipios/municipios.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  {path: 'municipios', component: MunicipiosComponent},
  {path: 'productos', component: ProductosComponent},
//  {path: '**', redirectTo: 'municipios', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
