import { Component, OnInit } from '@angular/core';//OK
import { Router } from '@angular/router';//OKKK
import { LoginService } from 'src/app/services/login.service';//OKK

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginSerice: LoginService,//OKK
              private router: Router) { }//OKKK

  ngOnInit(): void {
  }

  logOut(): void{
    this.loginSerice.removeLocalStorge();//OKK
    this.router.navigate(['/inicio']);//OKKK
  }

}
