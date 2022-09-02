import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  dateMax: Date | undefined;

  constructor() { }

  ngOnInit(): void {
    this.dateMax = new Date();
    this.dateMax.setFullYear(this.dateMax.getFullYear() - 18);

  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
