import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Visita } from 'src/app/models/visita';
import { SecurityserviceService } from 'src/app/service/securityservice.service';

@Component({
  selector: 'app-visita',
  templateUrl: './visita.component.html',
  styleUrls: ['./visita.component.css']
})
export class VisitaComponent implements OnInit {

  addvisita: Visita = new Visita();

  visita: Visita[]= [];

  constructor(private visitaService:SecurityserviceService, private router:Router) { }

  ngOnInit(): void {
    this.visitaService.visitas().subscribe(
      visitas => this.visita=visitas
    )
  }

  agregar():void{
    this.visitaService.agregarvisita(this.addvisita).subscribe(
      result => {
        console.log(result)
      },
      error => {
        console.error(error);
        this.router.navigate(['error'])
      },
      () => {
        this.router.navigate(['/visita'])
      }
    )
  }

}
