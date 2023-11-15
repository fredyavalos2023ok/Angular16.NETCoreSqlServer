import { NgModule } from '@angular/core';//OK
import { Routes, RouterModule } from '@angular/router';//OK
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';//OK
import { RegisterComponent } from './components/inicio/register/register.component';//OK
import { LoginComponent } from './components/inicio/login/login.component';//OK
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CuestionariosComponent } from './components/dashboard/cuestionarios/cuestionarios.component';
import { CambiarPasswordComponent } from './components/dashboard/cambiar-password/cambiar-password.component';

const routes: Routes = [//OK
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },//OKK
  { path: 'inicio', component: InicioComponent, children: [//OKK
      { path: '', component: BienvenidaComponent },//OKK
      { path: 'login', component: LoginComponent },//OK
      { path: 'register', component: RegisterComponent },//OK
    ]},
    { path: 'dashboard', component: DashboardComponent, children: [//OKK
      { path: '', component: CuestionariosComponent },//OKK
      { path: 'cambiarPassword', component: CambiarPasswordComponent }//OKKK
    ]},
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }//OK
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]//OK
})
export class AppRoutingModule { }//OK
