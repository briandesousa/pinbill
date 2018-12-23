import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string;
  password: string;

  constructor(
    public afAuth: AngularFireAuth,
    private userService: UserService) { }

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(this.userService.getGoogleAuthProvider());
  }

  loginWithEmail() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
