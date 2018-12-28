import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm = new FormGroup({
    emailAddress: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });
  
  constructor() { }

  ngOnInit() { }

  onRegistrationSubmit() { }
}
