import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afAuth: AngularFireAuth) { }

  getGoogleAuthProvider(): firebase.auth.GoogleAuthProvider {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    return provider;
  }

  getEmailAuthProvider(): firebase.auth.EmailAuthProvider {
    let provider = new firebase.auth.EmailAuthProvider();
    return provider;
  }

}
