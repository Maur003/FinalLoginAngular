import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FireBaseErrorService } from "../services/fire-base-error.service";
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  registerUser : FormGroup;
  loading : boolean = true;

  constructor(
    private fb : FormBuilder,
    private afAuth : AngularFireAuth,
    private toastr : ToastrService,
    private router : Router,
    private FireBaseErrorService : FireBaseErrorService
  ) {
    this.registerUser = this.fb.group({
      Name: ['', [Validators.required]],
      LName : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(7), Validators.min(7), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],
      confirmPassword : ['',[]]
      
    })
  }

  ngOnInit(): void {
  }

  validarForm():boolean{
    const password1 = this.registerUser.value.password;
    const password2 = this.registerUser.value.confirmPassword;
  
    if (password1 != password2 ) {

      this.toastr.error('Passwords are not the same');
      return false;   
    }


    else if(!this.registerUser.valid){
      this.toastr.error('All forms must be filled');
      return false;

    }

    else if(!this.registerUser.controls['password'].valid){
      this.toastr.error('Password must contain at least one digit from 0-9, one letter a-z/A-Z and a special character(@$!%*?&)');
      return false;

    }

    return true;
  }

  sendEmailVerification( user: any ){
    user.sendEmailVerification().then( ( res: any ) =>{
      this.toastr.info('We have sent you a verification email, please check it before logging in', 'Verify Mail')
      this.router.navigate(['/Login'])
    })
    .catch( (err: any) =>{
      this.toastr.error("Error sending verification email, please try again", 'Verify Mail error')
     })
  }

  signUp() {
    
    const email = this.registerUser.value.email;
    const password = this.registerUser.value.password;
    const confirmPassword = this.registerUser.value.confirmPassword

    if (this.validarForm()) {

      this.loading = true;
    
      this.afAuth.createUserWithEmailAndPassword(email, password).then(( user ) => {
        this.loading = false;
        this.toastr.success('The user has been successfully registered!', 'Registered User');
        
        this.sendEmailVerification( user.user );
  
      }).catch((error) => {
        this.loading = false;
        this.toastr.error(this.FireBaseErrorService.codeError(error.code), 'Error')
      })

      
    }

    
  }

}
