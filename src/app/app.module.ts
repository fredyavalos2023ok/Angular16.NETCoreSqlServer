import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos
import { AppRoutingModule } from './app-routing.module';//OK
import { ReactiveFormsModule } from '@angular/forms';//OKK
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//OKKK
import { ToastrModule } from 'ngx-toastr';//OKKK
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';//OK
import { InicioComponent } from './components/inicio/inicio.component';//OK
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';//OK
import { LoginComponent } from './components/inicio/login/login.component';//OK
import { RegisterComponent } from './components/inicio/register/register.component';//OK
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CambiarPasswordComponent } from './components/dashboard/cambiar-password/cambiar-password.component';
import { CuestionariosComponent } from './components/dashboard/cuestionarios/cuestionarios.component';
import { LoadingComponent } from './shared/loading/loading.component';

@NgModule({//OKK
  declarations: [//OKK
    AppComponent,//OK
    InicioComponent,//OK
    BienvenidaComponent,//OK
    LoginComponent,//OK
    RegisterComponent,//OK
    NavbarComponent,//OKK
    DashboardComponent,//OKK
    CambiarPasswordComponent,//OKK
    CuestionariosComponent,//OKK
    LoadingComponent
  ],
  imports: [
    BrowserModule,//OK
    AppRoutingModule,//OK
    ReactiveFormsModule,//OKK
    BrowserAnimationsModule, // required animations module      //OKKK
    ToastrModule.forRoot(), // ToastrModule added               //OKKK
    HttpClientModule
  ],
  providers: [],//OK
  bootstrap: [AppComponent]
})
export class AppModule { }
