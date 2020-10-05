import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  faAddressCard,
  faChild,
  faEnvelope,
  faEye,
  faEyeSlash,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Users } from 'src/app/modules/auth/interfaces/user';
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
  faUser = faUser;
  faDui = faAddressCard;
  faAge = faChild;
  hide1 = true;
  hide2 = true;
  hide3 = true;
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
        Validators.email,
        Validators.maxLength(100),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
    this.registerForm = this.fb.group({
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/
        ),
        Validators.minLength(2),
        Validators.maxLength(60),
      ]),
      lastname: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/
        ),
        Validators.minLength(2),
        Validators.maxLength(60),
      ]),
      dui: new FormControl(null, [
        Validators.required,
        Validators.pattern('[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]-[0-9]'),
      ]),
      age: new FormControl(null, [
        Validators.required,
        Validators.min(18),
        Validators.max(90),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.maxLength(100),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S+$/
        ),
        Validators.minLength(8),
      ]),
      passwordConfirm: new FormControl(null, [Validators.required]),
    });
  }

  //validation with dirty and touched
  isFieldValid1(field: string) {
    const login = this.loginForm.get(field);
    return (login.touched || login.dirty) && !login.valid;
  }
  isFieldValid2(field: string) {
    const register = this.registerForm.get(field);
    return (register.touched || register.dirty) && !register.valid;
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
        if (forms.hasError('minlength')) {
          message = 'Debe contener al menos seis caracteres';
        } else if (forms.hasError('minlength')) {
          message = 'Debe contener como mínimo ocho caracteres';
        }
        break;
      case 'email':
        if (forms.hasError('email')) {
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
        if (forms.hasError('email')) {
          message =
            'El correo ingresado es inválido, debe cumplir este formato: juan@gmail.com';
        } else if (forms.hasError('maxlength')) {
          message = 'Debe contener como máximo cien caracteres';
        }
        break;
      case 'name' || 'lastname':
        if (forms.hasError('pattern')) {
          message = 'Solo se aceptan letras';
        } else if (forms.hasError('minlength')) {
          message = 'Debe contener como mínimo dos caracteres';
        } else if (forms.hasError('maxlength')) {
          message = 'Debe contener como máximo sesenta caracteres';
        }
        break;
      case 'dui':
        if (forms.hasError('pattern')) {
          message = 'Debe tener el formato 00000000-0';
        }
        break;
      case 'age':
        if (forms.hasError('min')) {
          message = 'La edad mínima es 18 años';
        } else if (forms.hasError('max')) {
          message = 'La edad máxima es 90 años';
        }
        break;
    }
    return message;
  }
  onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      try {
        this.authServices
          .login(email, password)
          .then((res) => {
            this.resetLoginForm();
            this.authServices.getRole(res.user.uid).subscribe((respond) => {
              const user = respond.docs[0].data() as Users;
              if (user.disabled) {
                this.createNotification(
                  'warning',
                  'Error al iniciar sesión',
                  'El usuario está inhabilitado contácte al administrador del sitio'
                );
              } else {
                if (res && res.user.emailVerified) {
                  switch (user.role) {
                    case 'Cliente':
                      this.router.navigate(['/client']);
                      break;
                    case 'Administrador':
                      this.router.navigate(['/admin/manage-home']);
                      break;
                    case 'Bodeguero':
                      this.router.navigate(['/grocer']);
                      break;
                    case 'Veterinario':
                      this.router.navigate(['/veterinarian']);
                      break;
                  }
                } else if (res) {
                  this.router.navigate(['/verify']);
                }
              }
            });
          })
          .catch((err) => {
            this.createNotification(
              'warning',
              'Error al iniciar sesión',
              'No existe el usuario en nuestra base de datos o pueda ser que usted haya ingresado mal sus credenciales'
            );
          });
      } catch (ex) {
        this.createNotification(
          'error',
          'Error al iniciar sesión',
          'Compruebe su conexión con internet'
        );
      }
    }
  }
  onLoginGoogle() {
    this.authServices
      .loginGoogle()
      .then((respond) => {})
      .catch((ex) => {
        this.createNotification(
          'warning',
          'Error al registrarse',
          'No hubo conexión a la base de datos'
        );
      });
  }
  createNotification(type: string, title: string, content: string) {
    this.notification.create(type, title, content);
  }
  onRegister() {
    if (this.registerForm.valid) {
      const users = this.registerForm.value;
      const {
        name,
        lastname,
        dui,
        email,
        password,
        passwordConfirm,
      } = this.registerForm.value;
      const reg = new RegExp('^\\s');
      //valid password
      if (password === passwordConfirm) {
        //check the spaces on field name and lastname
        if (reg.test(name) == true || reg.test(lastname) == true) {
          this.createNotification(
            'warning',
            'Advertencia al Enviar',
            'Hay campos vacíos rellenados con espacios o tabulaciones'
          );
        } else {
          try {
            this.authServices.getExistsDUI(dui).subscribe((respond) => {
              const numberArray = respond.docs.length;
              if (numberArray == 0) {
                this.authServices
                  .register(email, password, users)
                  .then((res) => {
                    this.resetRegisterForm();
                    this.authServices
                      .sendVerificationEmail()
                      .then((res) => {
                        this.router.navigate(['/verify']);
                      })
                      .catch((ex) => {
                        this.createNotification(
                          'error',
                          'Error al enviar el correo electrónico',
                          'Compruebe su conexión con internet'
                        );
                      });
                  })
                  .catch((err) => {
                    this.createNotification(
                      'warning',
                      'Error al registrarse',
                      'Ya existe el usuario en nuestra base de datos o pueda ser que usted haya inngresado mal sus credenciales'
                    );
                  });
              } else {
                this.createNotification(
                  'warning',
                  'Error al registrarse',
                  'Ya existe este DUI en nuestra base de datos'
                );
              }
            });
          } catch (ex) {
            this.createNotification(
              'error',
              'Error al registrarse',
              'Compruebe su conexión con internet'
            );
          }
        }
      } else {
        this.createNotification(
          'warning',
          'Error al registrarse',
          'Las contraseñas no coinciden'
        );
      }
    } else {
      console.log('est');
      this.createNotification(
        'error',
        'Error al registrarse',
        'Compruebe su conexión con internet'
      );
    }
  }
  resetRegisterForm() {
    const register = this.registerForm;
    register.reset();
    Object.keys(register.controls).forEach((key) => {
      register.controls[key].setErrors(null);
    });
  }
  resetLoginForm() {
    const login = this.loginForm;
    login.reset();
    Object.keys(login.controls).forEach((key) => {
      login.controls[key].setErrors(null);
    });
  }
}
