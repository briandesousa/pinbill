import { Component, OnInit } from '@angular/core';
import { UserService } from './user/user.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pinbill';
  $isLoggedIn: Observable<boolean>;
  $user: Observable<User>;

  constructor(
    private userService: UserService,
    private router: Router) {}

  ngOnInit() {
    this.$isLoggedIn = this.userService.isLoggedIn();
    this.$user = this.userService.getUser();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['user', 'login']);
  }
}
