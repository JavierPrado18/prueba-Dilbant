import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-home',
  imports: [MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  //imagen
  restauranteUrl = '/img/restaurante_peruano.jpg';
  recetasUrls = [
    {
      name: 'Postres Peruanos',
      url: '/img/postre_peruano.jpg',
    },
    {
      name: 'Causa Rellena',
      url: '/img/causa_rellena.jpg',
    },
    {
      name: 'Lomo Saltado',
      url: '/img/lomo_saltado.jpg',
    },
    {
      name: 'Pisco Sour',
      url: '/img/pisco_sour.jpg',
    },
    {
      name: 'Ceviche',
      url: '/img/ceviche.jpg',
    },
  ];
}
