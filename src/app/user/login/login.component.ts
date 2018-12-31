import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, Validators, AbstractControl, FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../user';
import { validatePasswordComplexity } from '../user-validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  identifyEmailForm: FormGroup;
  signInEmailForm: FormGroup;
  registerEmailForm: FormGroup;

  get email() { return this.identifyEmailForm.get('email'); }
  get signInEmail() { return this.signInEmailForm.get('signInEmail'); }
  get signInPassword() { return this.signInEmailForm.get('signInPassword'); }
  get registerEmail() { return this.registerEmailForm.get('registerEmail'); }
  get registerPassword() { return this.registerEmailForm.get('registerPassword'); }
  get registerConfirmPassword() { return this.registerEmailForm.get('registerConfirmPassword'); }

  showIdentifyEmailForm = true;
  showPasswordSignIn = false;
  showGoogleSignIn = false;
  showRegisterWithPassword = false;
  showRegisterWithGoogle = false;

  backendAuthError: string;

  $user: Observable<User>;

  constructor(
    private userService: UserService, 
    private formBuilder: FormBuilder,
    private router: Router) {

    this.identifyEmailForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]]
    }, {
      updateOn: 'blur'
    });

    this.signInEmailForm = this.formBuilder.group({
      'signInEmail': ['', [Validators.required, Validators.email]],
      'signInPassword': ['', [Validators.required, validatePasswordComplexity()]]
    }, {
      updateOn: 'blur'
    });

    this.registerEmailForm = this.formBuilder.group({
      'registerEmail': ['', [Validators.required, Validators.email]],
      'registerPassword': ['', [Validators.required, validatePasswordComplexity()]],
      'registerConfirmPassword': ['', []]
    }, {
      updateOn: 'blur'
    });

    //TODO add custom validator to compare password folds at registerEmailForm level
  }

  ngOnInit() {
    this.$user = this.userService.getUser();
  }

  isInvalid(control: AbstractControl) {
    return control.invalid && (control.dirty || control.touched);
  }

  navigateToDashboard() {
    this.router.navigate(['dashboard']);
  }

  identifySignInMethods() {
    if(this.identifyEmailForm.valid) {
      this.userService.getAuthenticationMethods(this.email.value)
        .then((authMethods: string[]) => {
          this.showIdentifyEmailForm = false;

          // determine whether to show login or register UI
          if(authMethods && authMethods.length > 0) {
            if(authMethods.includes('password')) {
              this.showPasswordSignIn = true;
              this.signInEmail.setValue(this.email.value);
            }
            this.showGoogleSignIn = authMethods.includes('google.com');
          } else {
            this.showRegisterWithGoogle = true;
            this.showRegisterWithPassword = true;
          }
        })
        .catch(reason => this.backendAuthError = `Email address verification failed (${reason})`);
    } else {
      this.email.markAsTouched();
    }
  }

  signInWithEmail() {
    if(this.signInEmailForm.dirty && this.signInEmailForm.valid) {
      this.userService.loginWithEmail(this.signInEmail.value, this.signInPassword.value)
        .then(result => this.navigateToDashboard())
        .catch((reason: string) => this.backendAuthError = `Sign in with email failed (${reason})`);
    } else {
      // force validation
      this.signInEmail.markAsTouched();
      this.signInPassword.markAsTouched();
    }
  }

  signInWithGoogle() {
    this.userService.loginWithGoogle()
      .then(result => this.navigateToDashboard())
      .catch((reason: string) => this.backendAuthError = `Sign in with Google failed (${reason})`);
  }

  regiserWithEmail() {

  }

  registerWithGoogle() {
    this.userService.loginWithGoogle()
      .then(result => this.navigateToDashboard())
      .catch((reason: string) => this.backendAuthError = `Registering with Google failed (${reason})`);
  }

  signOut() {
    this.userService.logout();
  }

}
