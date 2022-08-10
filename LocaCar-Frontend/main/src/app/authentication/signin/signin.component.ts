import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { LoginService } from '../services/login.service';
import { Usuario } from 'src/app/models/usuario.model';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  loginForm: FormGroup;
  submitted = false;
  error = '';
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
  ) {
    super();
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      password: ['', Validators.required]
    });
  }
  
  get f() {
    return this.loginForm.controls;
  }

  

  onSubmit() {
    this.submitted = true;
    this.error = '';
    if (this.loginForm.invalid) {
      this.error = 'Usuário e senha inválidos !';
      return;
    } else {
       this.loginService
        .login(this.f.email.value, this.f.password.value)
        .subscribe(
          (result) => {
            if (result['success']) {
              
              localStorage.setItem("usuario_logado", JSON.stringify(result['data']));
              this.router.navigate(['dashboard/main']); 
              this.submitted = false;
            } else {
              this.error = 'Invalid Login';
              this.submitted = false;
            }
          });
    }
  }
}
