import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, TwitterAuthProvider } from 'firebase/auth';
import { ToastrService } from 'ngx-toastr';
import { FireBaseErrorService } from "../services/fire-base-error.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading : boolean = false;
  userLogin : FormGroup;

  constructor(
    private afAuth : AngularFireAuth,
    private fb : FormBuilder,
    private toastr : ToastrService,
    private router : Router,
    private FireBaseError : FireBaseErrorService,
  ) {
    this.userLogin = this.fb.group({
      email : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  validarForm():boolean{

    if(!this.userLogin.valid){
      this.toastr.error('All forms must be filled');
      return false;
    }
    return true;
  }

  signIn() {
    const email = this.userLogin.value.email;
    const password = this.userLogin.value.password;


    if (this.validarForm()) {
      
      this.loading = true;
      this.afAuth.signInWithEmailAndPassword(email, password).then((user) => {
        this.loading = false;
        this.toastr.success('The user has been successfully registered!', 'Registered User');
        this.router.navigate(['/DashBoard'])
        localStorage.setItem('token', JSON.stringify(user.user?.uid));
      }).catch((error) => {
        this.toastr.error(this.FireBaseError.codeError(error.code), 'Error')
        this.loading = false;
      })
    }
  }

  signInWithGoogle() {
    this.loading = true;


    this.afAuth.signInWithPopup( new GoogleAuthProvider).then((user) => {
      this.loading = false;
      console.log(user);

      this.toastr.success('User has been successfully logged in with Google', 'User registered');
      this.router.navigate(['/DashBoard']);
      localStorage.setItem('token', JSON.stringify(user.user?.uid));
    }).catch((error) => {
      this.toastr.error(this.FireBaseError.codeError(error.code), 'Error')
      this.loading = false;
    })
  }

  signInWithFacebook() {
    this.loading = true;

    this.afAuth.signInWithPopup( new FacebookAuthProvider).then((user) => {
      this.loading = false;
      this.toastr.success('The user has been successfully logged in with Facebook', 'User registered');
      this.router.navigate(['/DashBoard']);
      localStorage.setItem('token', JSON.stringify(user.user?.uid));
    }).catch((error) => {
      this.toastr.error(this.FireBaseError.codeError(error.code), 'Error')
      this.loading = false;
    })
  }

  signInWithTwitter() {
    this.loading = true;

    this.afAuth.signInWithPopup( new TwitterAuthProvider).then((user) => {
      this.loading = false;
      this.toastr.success('User has been successfully logged in with Twitter', 'User registered');
      this.router.navigate(['/DashBoard']);
      console.log(user.user);
      localStorage.setItem('token', JSON.stringify(user.user?.uid));
    }).catch((error) => {
      this.toastr.error(this.FireBaseError.codeError(error.code), 'Error')
      this.loading = false;
    })
  }

  signInWithGithub() {
    this.loading = true;

    this.afAuth.signInWithPopup( new GithubAuthProvider).then((user) => {
      this.loading = false;
      this.toastr.success('User has been successfully logged in with GitHub', 'User registered.');
      this.router.navigate(['/DashBoard']);
      console.log(user.user);
      localStorage.setItem('token', JSON.stringify(user.user?.uid));
    }).catch((error) => {
      this.toastr.error(this.FireBaseError.codeError(error.code), 'Error')
      this.loading = false;
    })
  }

  

}
