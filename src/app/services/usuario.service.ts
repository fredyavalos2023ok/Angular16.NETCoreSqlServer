import { Injectable } from '@angular/core';//OK
import { Usuario } from '../models/usuario';//OK
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})//OK
export class UsuarioService {
  myAppUrl: string;
  myApiUrl: string;
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/Usuario';
   } 
 // http://localhost:5107/api/Usuario -- POST
  saveUser(usuario: Usuario): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, usuario);
  }
  changePassword(changePassword): Observable<any>{
    return this.http.put(`http://localhost:5107/api/Usuario/CambiarPassword`, changePassword);
  }
}
