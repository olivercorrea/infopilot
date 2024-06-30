import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  showPassword: boolean = false;
  submitted: boolean = false;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  ngOnInit(): void{}
  register() {
    if (this.registerForm.invalid) {
      return;
    }
    let bodyData = {
      "firstname": this.registerForm.value.firstname,
      "lastname": this.registerForm.value.lastname,
      "email": this.registerForm.value.email,
      "password": this.registerForm.value.password,
    };
    this.http.post("http://ec2-3-145-51-160.us-east-2.compute.amazonaws.com:9992/user/create",bodyData).subscribe((resultData: any)=>{
        console.log(resultData);
        alert("User Registered Successfully")
    });
  }
  save() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.register();
    }
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
