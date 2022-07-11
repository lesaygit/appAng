import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MunicipiosComponent } from './components/municipios/municipios.component';

const routes: Routes = [
  {path: 'municipios', component: MunicipiosComponent},
  {path: '**', redirectTo: 'municipios', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
