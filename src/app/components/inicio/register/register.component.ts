import { Component, OnInit } from '@angular/core';//OK
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';//Aquí había { FormGroup, FormBuilder, Valdiators }
import { Router } from '@angular/router';//OKKK
import { ToastrService } from 'ngx-toastr';//OKKK
import { Usuario } from 'src/app/models/usuario';//OKK
import { UsuarioService } from 'src/app/services/usuario.service';//OKK

@Component({//OK
  selector: 'app-register',//OK
  templateUrl: './register.component.html',//OK
  styleUrls: ['./register.component.css']//OK
})//OK
export class RegisterComponent implements OnInit {//OK
  register: UntypedFormGroup;//Aquí estaba register: FormGroup;
  loading = false;

  constructor(private fb: UntypedFormBuilder, //OK Aquí había private fb: FormBuilder
              private usuarioService: UsuarioService,//OKK
              private router: Router,///OKKK
              private toastr: ToastrService) { //OKKK
    this.register = this.fb.group({//OK
      usuario: ['', Validators.required],//OK
      password: ['', [Validators.required, Validators.minLength(4)]],//OK
      confirmPassword: ['']//OK
    }, { validator: this.checkPassword });//OK
  }

  ngOnInit(): void {//OK
  }//OK

  registrarUsuario(): void{//OK
    console.log(this.register);//OK

    const usuario: Usuario ={//OKK
      nombreUsuario: this.register.value.usuario,//OKK
      password: this.register.value.password//OKK
    };
    this.loading = true;//OKKK
    this.usuarioService.saveUser(usuario).subscribe(data => {//OKK
      console.log(data);//OKK
      this.toastr.success('El usuario ' + usuario.nombreUsuario + ' fue registrado con exito!', 'Usuario Registrado!');///OKKK
      this.router.navigate(['/inicio/login']);//OKKK
      this.loading = false;//OKKK
    }, error => {//OKKK
      this.loading = false;//OKKK
      console.log(error);//OKKKK
      this.toastr.error(error.error.message, 'Error!');//OKKKK
      this.register.reset();//OKKK

    });//OKKKK
  }

  checkPassword(group: UntypedFormGroup): any {//OK
    const pass = group.controls.password.value;//OK
    const confirmPass = group.controls.confirmPassword.value;//OK
    return pass === confirmPass ? null : { notSame: true};//OK
  }//OK

}
