import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-menu',
  imports: [MaterialModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
imageAnticuchoUrl='/img/anticucho.jpg'

descripcions=[
  {
    imgUrl:"/img/platos.jpg",
    descripcion:"Ofrecemos platos que combinan tradición y modernidad, diseñados para deleitar tu paladar."
  },
  {
    imgUrl:"/img/restaurante.jpg",
    descripcion:"Disfruta de un ambiente acogedor mientras degustas nuestros sabrosos platos."
  },
  {
    imgUrl:"/img/chefs.jpg",
    descripcion:"La excelencia de la cocina peruana se refleja en nuestros platos."
  },
]
}
