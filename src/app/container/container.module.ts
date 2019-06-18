import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { ContainerRoutingModule } from './container-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    ContainerComponent,
  ],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule,
    MatExpansionModule
  ]
})
export class ContainerModule { }
