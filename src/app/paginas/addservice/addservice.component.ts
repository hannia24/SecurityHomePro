import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servicio } from 'src/app/models/servicio';
import { SecurityserviceService } from 'src/app/service/securityservice.service';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})
export class AddserviceComponent implements OnInit {

  addservice:Servicio = new Servicio();

  servicio: Servicio[]= [];

  constructor(private servicioService:SecurityserviceService, private router:Router) { }

  ngOnInit(): void {
    this.servicioService.servicios().subscribe(
      servicios => this.servicio=servicios
      )
  }

  agregar():void{
    this.servicioService.agregarservicio(this.addservice).subscribe(
      result => {
        console.log(result)
      },
      error => {
        console.error(error);
        this.router.navigate(['error'])
      },
      () => {
        this.router.navigate(['success'])
      }
    )
  }

}
