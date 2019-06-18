import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: 'administradores',
        loadChildren: './administradores/administradores.module#AdministradoresModule',
      }, {
        path: 'afiliados',
        loadChildren: './afiliados/afiliados.module#AfiliadosModule',
      }, {
        path: 'cuestionario',
        loadChildren: './cuestionario/cuestionario.module#CuestionarioModule',
      }, {
        path: 'notas',
        loadChildren: './notas/notas.module#NotasModule',
      }, {
        path: 'eventos',
        loadChildren: './eventos/eventos.module#EventosModule',
      }, {
        path: 'promociones',
        loadChildren: './promociones/promociones.module#PromocionesModule',
      }, {
        path: 'retos',
        loadChildren: './retos/retos.module#RetosModule',
      }, {
        path: '',
        pathMatch: 'full',
        redirectTo: 'administradores'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
