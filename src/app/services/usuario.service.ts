import { Injectable } from '@angular/core';//OK
import { Usuario } from '../models/usuario';//OK
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({//OK
  providedIn: 'root'//OK
})//OK
export class UsuarioService {//OK
  myAppUrl: string;//OK
  myApiUrl: string;//OK

  constructor(private http: HttpClient) {//OK
    this.myAppUrl = environment.endpoint;//OKK
    this.myApiUrl = '/api/Usuario';//OK
   }//OK
 // http://localhost:5107/api/Usuario -- POST//OKK
  saveUser(usuario: Usuario): Observable<any>{//OKK
    return this.http.post(this.myAppUrl + this.myApiUrl, usuario);//OKK
  }//OKK

  changePassword(changePassword): Observable<any>{//OKKK
    return this.http.put(this.myAppUrl + this.myApiUrl + '/CambiarPassword', changePassword);//OKKK
  }//OKKK
}
