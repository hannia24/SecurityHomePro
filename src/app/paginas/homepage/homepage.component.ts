import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { SecurityserviceService } from 'src/app/service/securityservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  user:User = new User();

  constructor(private loginService:SecurityserviceService, private router:Router) { }

  ngOnInit(): void {
  }

  login():void{
    this.loginService.login(this.user).subscribe(
      result => {
        console.log(result)
      },
        error => {
          console.error(error);
          this.router.navigate([''])
        },
        () => {
          this.router.navigate(['home'])
        })
  }

}
