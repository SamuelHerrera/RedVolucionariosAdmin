import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { ContainerRoutingModule } from './container-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SunburstComponent } from './reportes/sunburst/sunburst.component';
import { GraphComponent } from './shared/visuals/graph/graph.component';
import { SHARED_VISUALS } from './shared/visuals/graph';
import { D3_DIRECTIVES, D3Service } from './shared/d3';
import { RelationsComponent } from './reportes/relations/relations.component';

@NgModule({
  declarations: [
    ContainerComponent,
    SunburstComponent,
    GraphComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES,
    RelationsComponent
  ],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule,
  ],
  providers: [D3Service],
})
export class ContainerModule { }
