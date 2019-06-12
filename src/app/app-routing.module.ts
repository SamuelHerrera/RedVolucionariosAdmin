import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SunburstComponent } from './reportes/sunburst/sunburst.component';
import { RelationsComponent } from './reportes/relations/relations.component';

const routes: Routes = [
  {
    path: 'nodos',
    component: RelationsComponent
  },
  {
    path: 'sunburst',
    component: SunburstComponent
  },
  {
    path: '',
    redirectTo: 'nodos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
