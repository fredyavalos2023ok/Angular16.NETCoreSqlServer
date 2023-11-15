import { HttpClient } from '@angular/common/http';//OK
import { Injectable } from '@angular/core';//OK
import { Observable } from 'rxjs';//OKKK
import { environment } from '../../environments/environment';//OKK
import { Usuario } from '../models/usuario';//OKK

@Injectable({//OK
  providedIn: 'root'//OK
})//OK
export class LoginService {//OKK
  myAppUrl: string;//OKK
  myApiUrl: string;//OKK

  constructor(private http: HttpClient) {//OKK
    this.myAppUrl = environment.endpoint;//OKK
    this.myApiUrl = '/api/Login';//OKK
  }//OKK

  login(usuario: Usuario): Observable<any>{//OKKK
    return this.http.post(this.myAppUrl + this.myApiUrl, usuario);//OKKK
  }//OKKK

  setLocalStorage(data): void {//OKKKKK
    localStorage.setItem('nombreUsuario', data);//OKKKKK
  }//OKKKKK

  getNombreUsuario(): string{//OKKKKKK
    return localStorage.getItem('nombreUsuario');//OKKKKKK
  }//OKKKKKK

  removeLocalStorge(): void {//OKKKKKKK
    localStorage.removeItem('nombreUsuario');//OKKKKKKK
  }//OKKKKKKK
}
