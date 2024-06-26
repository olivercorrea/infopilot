import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { loginGuard } from './guards/login.guard';
import { ChancadoComponent } from './chancado/chancado.component';
import { MoliendaComponent } from './molienda/molienda.component';
import { FlotacionComponent } from './flotacion/flotacion.component';
import { EspesamientoComponent } from './espesamiento/espesamiento.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [loginGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'login/register', component: RegisterComponent},
  {path: 'main', component: MainComponent},
  {path: 'chancado', component: ChancadoComponent, canActivate: [loginGuard]},
  {path: 'molienda', component: MoliendaComponent, canActivate: [loginGuard]},
  {path: 'flotacion', component: FlotacionComponent, canActivate: [loginGuard]},
  {path: 'espesamiento', component: EspesamientoComponent, canActivate: [loginGuard]},
  {path: '', redirectTo: 'register', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
