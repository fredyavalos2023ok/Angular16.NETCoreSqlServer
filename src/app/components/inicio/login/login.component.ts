import { Component, OnInit } from '@angular/core';//OK
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';//Aquí estaba { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Usuario } from '../../../models/usuario';//OK
import { ToastrService } from 'ngx-toastr';//OKK
import { Router } from '@angular/router';//OKK
import { LoginService } from 'src/app/services/login.service';//OKKK

@Component({//OK
  selector: 'app-login',//OK
  templateUrl: './login.component.html',//OK
  styleUrls: ['./login.component.css']//OK
})
export class LoginComponent implements OnInit {//OK
  loading = false;
  login: UntypedFormGroup;//Aquí estaba login: FormGroup;

  constructor(private fb: UntypedFormBuilder,//OK
              private toastr: ToastrService,//OKK
              private router: Router,//OKK
              private loginService: LoginService) {//OKKK
    this.login = this.fb.group({//OK
      usuario: ['', Validators.required],//OK
      password: ['', Validators.required]//OK
    });
  }

  ngOnInit(): void {//OK
  }

  log(): void{//OK
    const usuario: Usuario = {//OK
      nombreUsuario: this.login.value.usuario,//OK
      password: this.login.value.password//OK
    };//OK
    this.loading = true;//OKK
    this.loginService.login(usuario).subscribe(data => {//OKKK
      console.log(data);//OKKK
      this.loading = false;//OKKK
      this.loginService.setLocalStorage(data.usuario);//OKKKKK
      this.router.navigate(['/dashboard']);//OKKKK
    }, error => {//OKKK
      console.log(error);//OKKK
      this.loading = false;//OKKK
      this.toastr.error(error.error.message, 'Error');//OKKKK
      this.login.reset();//OKKKK
    });
    /* setTimeout(() => {
      if (usuario.nombreUsuario === 'truizdiaz' && usuario.password === 'admin123'){
        this.login.reset();
        this.router.navigate(['/dashboard']);
      } else {
        this.toastr.error('Usuario o contraseña incorrecto', 'Error');
        this.login.reset();
      }
      this.loading = false;
    } , 3000); */
  }
}
