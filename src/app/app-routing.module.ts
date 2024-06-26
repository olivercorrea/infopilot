import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { loginGuard } from './guards/login.guard';
<<<<<<< HEAD
import { ChancadoComponent } from './chancado/chancado.component';
import { MoliendaComponent } from './molienda/molienda.component';
import { FlotacionComponent } from './flotacion/flotacion.component';
import { EspesamientoComponent } from './espesamiento/espesamiento.component';
=======
import { ChatComponent } from './chat/chat.component';
>>>>>>> 589ca62ee430dc6cdc6c676a25c3cbc801c63013

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [loginGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'login/register', component: RegisterComponent},
  {path: 'main', component: MainComponent},
<<<<<<< HEAD
  {path: 'chancado', component: ChancadoComponent, canActivate: [loginGuard]},
  {path: 'molienda', component: MoliendaComponent, canActivate: [loginGuard]},
  {path: 'flotacion', component: FlotacionComponent, canActivate: [loginGuard]},
  {path: 'espesamiento', component: EspesamientoComponent, canActivate: [loginGuard]},
  {path: '', redirectTo: 'register', pathMatch: 'full' }
=======
  {path: '', redirectTo: 'register', pathMatch: 'full' },
  {path: 'chat', component: ChatComponent, canActivate: [loginGuard]}
>>>>>>> 589ca62ee430dc6cdc6c676a25c3cbc801c63013
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
