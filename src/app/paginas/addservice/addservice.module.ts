import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddserviceComponent } from './addservice.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddserviceComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class AddserviceModule { }
