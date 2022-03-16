import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LayoutComponent } from './paginas/layout/layout.component';
import { HomepageComponent } from './paginas/homepage/homepage.component';
import { LoginComponent } from './paginas/login/login.component';
import { LoginModule } from './paginas/login/login.module';


@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [BrowserModule, LoginModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
