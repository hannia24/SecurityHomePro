import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD:src/app/paginas/layout/layout.module.ts
import { Router, RouterModule } from '@angular/router';
=======
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
>>>>>>> Catzin:src/app/layout/layout.module.ts



@NgModule({
<<<<<<< HEAD:src/app/paginas/layout/layout.module.ts
  declarations: [],
=======
  declarations: [LayoutComponent],
>>>>>>> Catzin:src/app/layout/layout.module.ts
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
