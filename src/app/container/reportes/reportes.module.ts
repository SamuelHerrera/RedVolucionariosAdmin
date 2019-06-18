import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SunburstComponent } from './sunburst/sunburst.component';
import { GraphComponent } from './shared/visuals/graph/graph.component';
import { SHARED_VISUALS } from './shared/visuals/graph';
import { RelationsComponent } from './relations/relations.component';
import { D3_DIRECTIVES, D3Service } from './shared/d3';

@NgModule({
  declarations: [
    SunburstComponent,
    GraphComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES,
    RelationsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [D3Service],
  exports: [
    RelationsComponent
  ]
})
export class ReportesModule { }
