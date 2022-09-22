import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | undefined;

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', { validators: [Validators.required]})
    })
  }

  onSubmit() {

    this.authService.login({
      // @ts-ignore
      email: this.loginForm.value.email,
      // @ts-ignore
      password: this.loginForm.value.password
    })
  }

}
