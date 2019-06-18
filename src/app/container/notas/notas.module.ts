import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotasRoutingModule } from './notas-routing.module';
import { NotasComponent } from './notas.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NotasComponent],
  imports: [
    CommonModule,
    NotasRoutingModule,
    EditorModule,
    MatButtonModule
  ]
})
export class NotasModule { }
