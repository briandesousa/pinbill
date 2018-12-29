import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  $user: Observable<User>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.$user = this.userService.getUser();
  }

  loginWithGoogle() {
    this.userService.loginWithGoogle();
  }

  loginWithEmail() {
    this.userService.loginWithEmail(this.loginForm.value.email, this.loginForm.value.password);
  }

  logout() {
    this.userService.logout();
  }

}
