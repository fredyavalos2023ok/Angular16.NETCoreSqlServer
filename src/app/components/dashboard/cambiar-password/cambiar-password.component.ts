import { Component, OnInit } from '@angular/core';//OK
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';//Aquí había { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({//OK
  selector: 'app-cambiar-password',//OK
  templateUrl: './cambiar-password.component.html',//OK
  styleUrls: ['./cambiar-password.component.css']//OK
})//OK
export class CambiarPasswordComponent implements OnInit {//OK
  cambiarPassword: UntypedFormGroup;//Aquí había cambiarPassword: FormGroup
  loading = false;
  constructor(private fb: UntypedFormBuilder,//Aquí había constructor(private fb:Formbuilder,
                                            //.....){
              private usuarioService: UsuarioService,//OKKK
              private toastr: ToastrService,//OKKK
              private router: Router) {//OKKK
    this.cambiarPassword = this.fb.group({//OKK
      passwordAnterior: ['', Validators.required],//OKK
      nuevaPassword: ['', [Validators.required, Validators.minLength(4)]],//OKK
      confirmPassword: ['']//OKK
    }, { validator: this.checkPassword })//OKK
  }

  ngOnInit(): void {//OKK
  }//OKK

  checkPassword(group: UntypedFormGroup): any {//Había checkPassword(group:FormBuilder): any{
    const pass = group.controls.nuevaPassword.value;//OKK
    const confirmPass = group.controls.confirmPassword.value;//OKK
    return pass === confirmPass ? null : { notSame: true};//OKK
  }

  guardarPassword(): void {//OKKK

    const changePassword: any = {//OKKKK
      passwordAnterior: this.cambiarPassword.value.passwordAnterior,//OKKKK
      nuevaPassword: this.cambiarPassword.value.nuevaPassword//OKKKK
    };//OKKKK
    console.log(changePassword);//OKKK
    this.loading = true;//OKKKKKK
    this.usuarioService.changePassword(changePassword).subscribe(data => {//OKKKKK
      this.toastr.info(data.message);//OKKKKK
      this.router.navigate(['/dashboard']);//OKKKKK
    }, error => {//OKKKK
      this.loading = false;//OKKKK
      this.cambiarPassword.reset();//OKKKKKK
      this.toastr.error(error.error.message, 'Error!');//OKKKKKK
    });
  }

}
