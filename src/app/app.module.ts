import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PaginasModule } from './paginas/paginas.module';
import { RoutesModule } from 'src/routes/routes.module';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SuccessComponent } from './success/success.component';



@NgModule({
  declarations: [AppComponent, SuccessComponent],
  imports: [
    BrowserModule, 
    PaginasModule, 
    RoutesModule, 
    RouterModule, 
    LayoutModule, 
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
