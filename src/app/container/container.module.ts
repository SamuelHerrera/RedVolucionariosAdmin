import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { ContainerRoutingModule } from './container-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    ContainerComponent,
  ],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule,
    MatExpansionModule, MatMenuModule
  ]
})
export class ContainerModule { }
