import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGoogleService } from '../auth-google.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  isLogin: boolean = true;
  erroMessage: string = "";

  constructor(private router: Router, private http: HttpClient, private authGoogleService: AuthGoogleService) {}

  login() {
    if (!this.email || !this.password) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    console.log(this.email);
    console.log(this.password);
    let bodyData = {
      email: this.email,
      password: this.password,
    };

    this.http.post("http://ec2-18-191-147-77.us-east-2.compute.amazonaws.com:9992/user/login", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      if (resultData.status) {
        if (resultData.token) {
          localStorage.setItem('token', resultData.token);
          this.router.navigateByUrl('/home');
        }
      } else {
        alert("Correo electrónico o contraseña incorrectos.");
        console.log("Error en el login");
      }
    });
  }

  googlelogin() {
    this.authGoogleService.login();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
