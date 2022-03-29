import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PaginasModule } from '../paginas.module';
import { routes } from 'src/routes/routes';
import { HomepageComponent } from './homepage.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class HomepageModule { }
