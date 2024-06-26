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
<<<<<<< HEAD
import { ChancadoComponent } from './chancado/chancado.component';
import { MoliendaComponent } from './molienda/molienda.component';
import { FlotacionComponent } from './flotacion/flotacion.component';
import { EspesamientoComponent } from './espesamiento/espesamiento.component';
=======
import { ChatComponent } from './chat/chat.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
>>>>>>> 589ca62ee430dc6cdc6c676a25c3cbc801c63013

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent,
    HomeComponent,
<<<<<<< HEAD
    ChancadoComponent,
    MoliendaComponent,
    FlotacionComponent,
    EspesamientoComponent
=======
    ChatComponent,
>>>>>>> 589ca62ee430dc6cdc6c676a25c3cbc801c63013
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    OAuthModule.forRoot(),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
