import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    public afAuth: AngularFireAuth,
    private userService: UserService) { }

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(this.userService.getGoogleAuthProvider());
  }

  loginWithEmail() {
    this.afAuth.auth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
