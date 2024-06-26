import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ChancadoComponent } from './chancado/chancado.component';
import { MoliendaComponent } from './molienda/molienda.component';
import { FlotacionComponent } from './flotacion/flotacion.component';
import { EspesamientoComponent } from './espesamiento/espesamiento.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent,
    HomeComponent,
    ChancadoComponent,
    MoliendaComponent,
    FlotacionComponent,
    EspesamientoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    OAuthModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
