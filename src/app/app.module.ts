import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LayoutComponent } from './paginas/layout/layout.component';
import { HomepageModule } from './paginas/homepage/homepage.module';


@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [BrowserModule, HomepageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
