import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { loginGuard } from './guards/login.guard';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [loginGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'main', component: MainComponent},
  {path: '', redirectTo: 'register', pathMatch: 'full' },
  {path: 'chat', component: ChatComponent, canActivate: [loginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
