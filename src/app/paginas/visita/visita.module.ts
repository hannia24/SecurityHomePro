import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VisitaComponent } from './visita.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [VisitaComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class VisitaModule { }
