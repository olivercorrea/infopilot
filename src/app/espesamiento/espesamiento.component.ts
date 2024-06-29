import { Component } from '@angular/core';
import { AuthGoogleService } from '../auth-google.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-espesamiento',
  templateUrl: './espesamiento.component.html',
  styleUrls: ['./espesamiento.component.css']
})
export class EspesamientoComponent {
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
