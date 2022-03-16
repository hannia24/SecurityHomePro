import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { routes } from "./routes";
import { LoginComponent } from "src/app/paginas/login/login.component";
import { LoginModule } from "src/app/paginas/login/login.module";

@NgModule({
declarations: [],
imports: [
    RouterModule.forRoot(routes,({useHash:true})),
    LoginModule
],
exports: [RouterModule]
})

export class RoutesModule{}