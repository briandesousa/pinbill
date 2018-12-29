import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  registrationForm = new FormGroup({
    emailAddress: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });

  private unsubscribe: Subject<void> = new Subject();
  
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router) { }

  ngOnInit() {
    this.afAuth.authState
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((user: firebase.User) => {
        if(user) {
          // user is already logged in
          this.router.navigate(['home']);
        } 
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onRegistrationSubmit() { 
    let email = this.registrationForm.value.emailAddress;
    let password = this.registrationForm.value.password;

    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then( (value: firebase.auth.UserCredential) => {

      })
      .catch( reason => {
        let errorCode = reason.code;
        let errorMessage = reason.message;
        console.log(`Error Code: ${errorCode}, Message: ${errorMessage}`);
      });
  }
}
