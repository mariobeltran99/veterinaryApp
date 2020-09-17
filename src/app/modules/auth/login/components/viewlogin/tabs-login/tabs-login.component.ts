import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  faEnvelope,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { NzNotificationService } from 'ng-zorro-antd/notification';

import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-tabs-login',
  templateUrl: './tabs-login.component.html',
  styleUrls: ['./tabs-login.component.css'],
  providers: [AuthService],
})
export class TabsLoginComponent implements OnInit {
  faEnvelope = faEnvelope;
  faVisibilityOff = faEyeSlash;
  faVisibility = faEye;
  hide1 = true;
  hide2 = true;
  loginForm: FormGroup;
  registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authServices: AuthService,
    private notification: NzNotificationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
        ),
        Validators.maxLength(100),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S+$/
        ),
        Validators.minLength(8),
      ]),
    });
    this.registerForm = this.fb.group({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
        ),
        Validators.maxLength(100),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S+$/
        ),
        Validators.minLength(8),
      ]),
    });
  }
  //validation with dirty and touched
  isFieldValid1(field: string) {
    return (
      (this.loginForm.get(field).touched || this.loginForm.get(field).dirty) &&
      !this.loginForm.get(field).valid
    );
  }
  isFieldValid2(field: string) {
    return (
      (this.registerForm.get(field).touched ||
        this.registerForm.get(field).dirty) &&
      !this.registerForm.get(field).valid
    );
  }
  //get message errors
  getErrorMessage1(field: string): string {
    let message;
    const forms = this.loginForm.get(field);
    if (forms.hasError('required')) {
      message = 'El campo es requerido.';
    }
    switch (field) {
      case 'password':
        if (forms.hasError('pattern')) {
          message =
            'Debe contener al menos un dígito, una minúscula, una mayúscula y un caracter no alfanumérico.';
        } else if (forms.hasError('minlength')) {
          message = 'Debe contener como mínimo ocho caracteres';
        }
        break;
      case 'email':
        if (forms.hasError('pattern')) {
          message =
            'El correo ingresado es inválido, debe cumplir este formato: juan@gmail.com';
        } else if (forms.hasError('maxlength')) {
          message = 'Debe contener como máximo cien caracteres';
        }
        break;
    }
    return message;
  }
  getErrorMessage2(field: string): string {
    let message;
    const forms = this.registerForm.get(field);
    if (forms.hasError('required')) {
      message = 'El campo es requerido.';
    }
    switch (field) {
      case 'password':
        if (forms.hasError('pattern')) {
          message =
            'Debe contener al menos un dígito, una minúscula, una mayúscula y un caracter no alfanumérico.';
        } else if (forms.hasError('minlength')) {
          message = 'Debe contener como mínimo ocho caracteres';
        }
        break;
      case 'email':
        if (forms.hasError('pattern')) {
          message =
            'El correo ingresado es inválido, debe cumplir este formato: juan@gmail.com';
        } else if (forms.hasError('maxlength')) {
          message = 'Debe contener como máximo cien caracteres';
        }
        break;
    }
    return message;
  }
  onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      try {
        this.authServices.login(email, password).then((res) => {
          this.resetLoginForm();
          if(res && res.user.emailVerified){
            this.router.navigate(['/client']);
          }else if(res){
            this.router.navigate(['/verify']);
          } 
        }).catch(err => {
          this.createNotification(
            'warning',
            'Error al iniciar sesión',
            'No existe el usuario en nuestra base de datos o pueda ser que usted haya inngresado mal sus credenciales'
          );
        })
      } catch (ex) {
        this.createNotification(
          'error',
          'Error al iniciar sesión',
          'Compruebe su conexión con internet'
        );
      }
    }
  }

  createNotification(type: string, title: string, content: string) {
    this.notification.create(type, title, content);
  }
  onRegister() {
    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;
      try {
        this.authServices.register(email, password).then((res) =>{
          this.resetRegisterForm();
          this.authServices.sendVerificationEmail();
          this.router.navigate(['/verify']);
        }).catch(err => {
          this.createNotification(
            'warning',
            'Error al registrarse',
            'Ya existe el usuario en nuestra base de datos o pueda ser que usted haya inngresado mal sus credenciales'
          );
        })
      } catch (ex) {
        this.createNotification(
          'error',
          'Error al registrarse',
          'Compruebe su conexión con internet'
        );
      }
    }
  }
  resetRegisterForm() {
    this.registerForm.reset();
    Object.keys(this.registerForm.controls).forEach((key) => {
      this.registerForm.controls[key].setErrors(null);
    });
  }
  resetLoginForm() {
    this.loginForm.reset();
    Object.keys(this.loginForm.controls).forEach((key) => {
      this.loginForm.controls[key].setErrors(null);
    });
  }
}
