import { Component, OnInit } from '@angular/core';
import { Municipio } from 'src/app/interfaces/municipios.interface';
import { MunicipiosService } from 'src/app/services/municipios.service';

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['./municipios.component.scss']
})
export class MunicipiosComponent implements OnInit {

  municipios!: Municipio[];

  constructor(public municipiosService: MunicipiosService) { }

  ngOnInit() {
    this.municipiosService.getMunicipios().subscribe(mun => {
      this.municipios = mun;
    });
  }
}
