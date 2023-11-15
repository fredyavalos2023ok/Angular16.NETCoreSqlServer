import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-cuestionarios',
  templateUrl: './cuestionarios.component.html',
  styleUrls: ['./cuestionarios.component.css']
})
export class CuestionariosComponent implements OnInit {
  nombreUsuario: string;//OKK

  constructor(private loginService: LoginService) { }//OKK

  ngOnInit(): void {//OKKK
    this.getNombreUsuario();//OKKK
  }//OKKK

  getNombreUsuario(): void{//OKK que en realidad es el OKKKKKK del servicio login
    this.nombreUsuario = this.loginService.getNombreUsuario();//OKK
  }//OKK

}
