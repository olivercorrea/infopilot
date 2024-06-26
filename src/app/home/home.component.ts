import { Component } from '@angular/core';
import { AuthGoogleService } from '../auth-google.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private authGoogleService: AuthGoogleService, private router: Router) {

  }

  showData() {
    const data = JSON.stringify(this.authGoogleService.getProfile())

    console.log(data);
  }

  logOut(){
    localStorage.removeItem('token');
    this.authGoogleService.logout();
    this.router.navigate(['login']);
  }
}
