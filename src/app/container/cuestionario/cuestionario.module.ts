import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuestionarioRoutingModule } from './cuestionario-routing.module';
import { VistaComponent } from './vista/vista.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [VistaComponent],
  imports: [
    CommonModule,
    CuestionarioRoutingModule,MatSlideToggleModule,MatIconModule,MatFormFieldModule,
    MatInputModule,
  ]
})
export class CuestionarioModule { }
