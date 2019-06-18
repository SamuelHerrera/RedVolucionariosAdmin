import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradoresRoutingModule } from './administradores-routing.module';
import { VistaComponent } from './vista/vista.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { DetalleComponent } from './detalle/detalle.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { ReportesModule } from '../reportes/reportes.module';

@NgModule({
  declarations: [VistaComponent, DetalleComponent],
  imports: [
    CommonModule,
    AdministradoresRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule,
    ReportesModule
  ],
  entryComponents: [DetalleComponent]
})
export class AdministradoresModule { }
