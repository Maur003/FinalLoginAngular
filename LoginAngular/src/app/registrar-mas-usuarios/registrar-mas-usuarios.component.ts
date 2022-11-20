import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registrar-mas-usuarios',
  templateUrl: './registrar-mas-usuarios.component.html',
  styleUrls: ['./registrar-mas-usuarios.component.css']
})
export class RegistrarMasUsuariosComponent implements OnInit {
  registerUser: any;
  loading: boolean | undefined;
  afAuth: any;
  FireBaseErrorService: any;

  constructor(
    private fb : FormBuilder,
    private toastr : ToastrService,
    private router : Router,
    
  ) {
    
  }

  ngOnInit(): void {
  }

  validarForm():boolean{

    if(!this.registerUser.valid){
      this.toastr.error('All forms must be filled');
      return false;
    }
    return true;
  }

  signUp() {
    const email = this.registerUser.value.email;
    const password = this.registerUser.value.password;

    if (this.validarForm()){

      this.loading = true;

    
      this.loading = false;
      this.toastr.success('The user has been successfully registered!', 'Registered User');
      
      this.router.navigate(['/Login']);
    }
  
    }

    }
    
  


