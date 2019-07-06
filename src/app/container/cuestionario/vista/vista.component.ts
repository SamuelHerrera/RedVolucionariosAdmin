import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.scss']
})
export class VistaComponent implements OnInit {

  preguntas: any[] = [
    {
      pregunta:"¿Cual es tu color favorito?",
      r1:"amarillo",
      r2:"rojo",
      r3:"verde",
      r4:"morado",
    },


  ];

  constructor() { }

  ngOnInit() {
  }

}
