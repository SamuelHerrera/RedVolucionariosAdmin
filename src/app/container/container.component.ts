import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  menu = [
    {
      titulo: 'Administradores',
      ruta: 'administradores'
    }, {
      titulo: 'Afiliados',
      ruta: 'afiliados'
    }, {
      titulo: 'Cuestionario',
      ruta: 'cuestionario'
    }, {
      titulo: 'Notas',
      ruta: 'notas'
    }, {
      titulo: 'Eventos',
      ruta: 'eventos'
    }, {
      titulo: 'Promociones',
      ruta: 'promociones'
    }, {
      titulo: 'Retos',
      ruta: 'retos'
    },
  ];

  @ViewChild('sidenav', { static: false }) public sidenav: MatSidenav;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.sidenav.open();
    }, 1500);
  }

}
