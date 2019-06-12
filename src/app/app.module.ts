import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SunburstComponent } from './reportes/sunburst/sunburst.component';

import { D3Service, D3_DIRECTIVES } from './shared/d3';
import { GraphComponent } from './shared/visuals/graph/graph.component';
import { SHARED_VISUALS } from './shared/visuals/graph';
import { RelationsComponent } from './reportes/relations/relations.component';

@NgModule({
  declarations: [
    AppComponent,
    SunburstComponent,
    GraphComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES,
    RelationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, MatSidenavModule,
    MatToolbarModule, MatButtonModule, MatIconModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
