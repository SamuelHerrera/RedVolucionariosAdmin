import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { trigger, state, style, transition, animate } from '@angular/animations';

export interface Administrador {
  nombre: string;
  email?: string;
  estado?: string;
  distrito?: string;
  seccional?: string;
  estatus?: string;
  editable?: boolean;
}

const ELEMENT_DATA: Administrador[] = [
  { nombre: 'Alberto Ramos Sois', email: 'beto.ramos@hotmail.com', estado: 'Zacatecas', distrito: '21', seccional: '305', estatus: 'Activo' },
  { nombre: 'Ana Paredes Perez', email: 'anitapape@gmail.com', estado: 'Yuctan', distrito: '05', seccional: '033', estatus: 'Activo' },
  { nombre: 'Hugo Ortiz Flores', email: 'hugof@gmail.com', estado: 'Guerrero', distrito: '03', seccional: '86', estatus: 'Activo' },
  { nombre: 'Juan Perez Lopez', email: 'jpl88@gmail.com', estado: 'Jalisco', distrito: '66', seccional: '553', estatus: 'Activo' },
  { nombre: 'Roberto Puig Alvarez', email: 'alprob@gmail.com', estado: 'Nayarit', distrito: '34', seccional: '67', estatus: 'Inactivo' },
  { nombre: 'Carmen Hernandez Fonseca', email: 'ch53@gmail.com', estado: 'San Luis Potosi', distrito: '2354', seccional: '31', estatus: 'Activo' },
  { nombre: 'Juan Adrian Mireles Rodriguez', email: 'juan_4511@gmail.com', estado: 'Queretaro', distrito: '9879', seccional: '22', estatus: 'Inactivo' },
  { nombre: 'Maria Luisa Perez Mondragon', email: 'mapm@hotmail.com', estado: 'Yucatan', distrito: '324', seccional: '114', estatus: 'Activo' },
  { nombre: 'Pamela Gonzalez Torres', email: 'pame7721@hotmail.com', estado: 'Quintana Roo', distrito: '123', seccional: '98', estatus: 'Inactivo' },
  { nombre: 'Raul Gongra Morelos', email: 'raulg_m2@hotmail.com', estado: 'Nayarit', distrito: '799', seccional: '02', estatus: 'Activo' },
  { nombre: 'Jose Antonio Solis Gomez', email: 'tonosg89@hotmail.com', estado: 'Oaxaca', distrito: '4354', seccional: '456', estatus: 'Activo' },
  { nombre: 'Juan Carlos Sosa Herrera', email: 'jsoma@hotmail.com', estado: 'Estado de Mexico', distrito: '683', seccional: '06', estatus: 'Inactivo' },
  { nombre: 'Jhonatan Flota Mena', email: 'flota32@hotmail.com', estado: 'Ciudad de Mexico', distrito: '3342', seccional: '223', estatus: 'Activo' },
  { nombre: 'Alexa Ramirez Torres', email: 'alertemail@gmail.com:', estado: 'Nuevo Leon', distrito: '8523', seccional: '77', estatus: 'Inactivo' }
];

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '50px', minHeight: '50px' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class VistaComponent implements OnInit {

  displayedColumns: string[] = [
    'nombre',
    'email',
    'estado',
    'distrito',
    'seccional',
    'estatus',
    'acciones'
  ];

  tabs = ['Buscar'];
  tabsData = [];
  selected = new FormControl(0);
  dataSource: MatTableDataSource<Administrador>;
  aux: Administrador[] = ELEMENT_DATA;
  expandedElement: Administrador | null;


  constructor(public dialog: MatDialog, private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Administrador>(ELEMENT_DATA);
  }

  addTab(item: Administrador, editable: boolean) {
    item.editable = editable;
    console.log(item);
    this.tabsData.splice(0, 0, item);
    this.tabs.splice(1, 0, item.nombre);
    this.selected.setValue(1);
    event.stopPropagation();
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
    this.tabsData.splice(index - 1, 1);
  }

  saveTabData(item: Administrador, newItem?: boolean) {
    if (newItem) {
      //
    } else {
      this.editarRegistro(item);
    }
  }


  editarRegistro(item: Administrador) {
    this.aux.map((returnableObjects: Administrador, index: number, array: Administrador[]) => {
      if (returnableObjects.nombre === item.nombre) {
        this.aux[index] = item;
      }
    });
    this.dataSource = new MatTableDataSource<Administrador>(this.aux);
    this.changeDetectorRefs.detectChanges();
    console.log(this.aux);
  }

  borraRegistro(item: Administrador) {
    this.aux = this.aux.filter((returnableObjects: Administrador) => {
      return returnableObjects.nombre !== item.nombre;
    });
    this.dataSource = new MatTableDataSource<Administrador>(this.aux);
  }

  changeKey(obj, newKey) {
    obj = newKey;
  }

}
