import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Visita } from '../models/visita';
import { Servicio } from '../models/servicio';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SecurityserviceService {

  private url:string='https://e6bd-187-252-207-214.ngrok.io/api/';

  constructor(private http:HttpClient) { }

  visitas():Observable<Visita[]>{
    return this.http.get<Visita[]>(this.url + 'visita')
  }

  servicios():Observable<Servicio[]>{
    return this.http.get<Servicio[]>(this.url + 'servicios')
  }

  agregarvisita(visita:Visita):Observable<Visita>{
    return this.http.post<Visita>(this.url + 'agregarvisita', visita)
  }

  agregarservicio(servicio:Servicio):Observable<Servicio>{
    return this.http.post<Servicio>(this.url + 'agregarservicio', servicio)
  }

  login(user:User):Observable<User>{
    return this.http.post<User>(this.url + 'login', user)
  }
}
