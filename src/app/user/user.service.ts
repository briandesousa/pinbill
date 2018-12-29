import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, Subscriber } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private emailAuthProvider: firebase.auth.EmailAuthProvider;
  private googleAuthProvider: firebase.auth.GoogleAuthProvider;

  constructor(private afAuth: AngularFireAuth) { 
    // configure firebase provider for logging in with Google account
    this.googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    this.googleAuthProvider.addScope('profile');
    this.googleAuthProvider.addScope('email');

    // configure firebase provider for logging in with email address and password
    this.emailAuthProvider = new firebase.auth.EmailAuthProvider();    
  }

  /**
   * Initiate Google account login flow
   */
  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(this.googleAuthProvider)
      .then((userCredential: firebase.auth.UserCredential) => {

      })
      .catch((reason: any) => {
        console.log(`Google login failed: ${JSON.stringify(reason)}`);
      });
  }

  /**
   * Login with an email address and password
   * @param emailAddress as registered in PinBill auth database
   * @param password as defined in PinBill auth database
   */
  loginWithEmail(emailAddress: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(emailAddress, password)
      .then((userCredential: firebase.auth.UserCredential) => {
        
      })
      .catch((reason: any) => {
        console.log(`Email login failed: ${JSON.stringify(reason)}`);
      });
  }

  /**
   * Retrieve firebase.User and maps to PinBill User.
   * @returns Observable emiting a User instance if user is signed in, otherwise emits null
   */
  getUser() : Observable<User|null> {
    return this.afAuth.user.pipe(
      map<firebase.User, User>(firebaseUser => {
        let user: User = null;
        if(firebaseUser) {
          user = new User(firebaseUser.email, firebaseUser.displayName);

          // use Google photo URL if user account is linked to Google account otherwise use generic icon
          let googleProviderData = firebaseUser.providerData
            .filter((value: firebase.UserInfo) => value.providerId == 'google.com');

          if(googleProviderData.length === 1) {
            user.photoURL = googleProviderData[0].photoURL;
          } else {
            user.photoURL = "https://img.icons8.com/color/48/000000/gender-neutral-user.png";
          }

          // if there is no displayName, add something clever
          if(!user.displayName) {
            user.displayName = "Nameless User";
          }
        }
        return user;
      }));
  }

  /**
   * Convienence method for checkng user login status.
   * @return Observable emitting true if this.getUser() returns a User instance, otherwise emits false
   */
  isLoggedIn() : Observable<boolean> {
    return this.getUser().pipe(
      map<User, boolean>(user => user ? true : false));
  }

  /**
   * Logout the user via firebase.auth.Auth.
   */
  logout() {
    this.afAuth.auth.signOut();
  }

}
