import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddserviceModule } from './addservice/addservice.module';
import { ContraolvidadaModule } from './contraolvidada/contraolvidada.module';
import { RegisterModule } from './register/register.module';
import { InicioModule } from './inicio/inicio.module';
import { HomepageModule } from './homepage/homepage.module';
import { PerfilModule } from './perfil/perfil.module';
import { VisitaModule } from './visita/visita.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    AddserviceModule,
    ContraolvidadaModule,
    PerfilModule,
    RegisterModule,
    InicioModule,
    HomepageModule,
    VisitaModule
  ]
})
export class PaginasModule { }
