import { Component, OnInit } from '@angular/core';
import { faEnvelope, faPaw } from '@fortawesome/free-solid-svg-icons';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from '../../services/auth.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css'],
  providers: [AuthService],
})
export class ForgotComponent implements OnInit {
  faPaw = faPaw;
  faEnvelope = faEnvelope;
  forgotForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authServices: AuthService,
    private notification: NzNotificationService
  ) {}

  ngOnInit() {
    this.forgotForm = this.fb.group({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.maxLength(100),
      ]),
    });
  }
  isFieldValid1(field: string) {
    const forgot = this.forgotForm.get(field);
    return (forgot.touched || forgot.dirty) && !forgot.valid;
  }
  getErrorMessage1(field: string): string {
    let message;
    const forms = this.forgotForm.get(field);
    if (forms.hasError('required')) {
      message = 'El campo es requerido.';
    } else if (forms.hasError('email')) {
      message =
        'El correo ingresado es inválido, debe cumplir este formato: juan@gmail.com';
    } else if (forms.hasError('maxlength')) {
      message = 'Debe contener como máximo cien caracteres';
    }
    return message;
  }
  onReset() {
    try {
      const { email } = this.forgotForm.value;
      this.authServices
        .resetPassword(email)
        .then((res) => {
          this.notification.create(
            'success',
            'Exito se envió a su correo electrónico',
            'Por favor, revise su bandeja de entrada'
          );
          this.resetForgotForm();
        })
        .catch((err) => {
          this.notification.create(
            'warning',
            'Error al enviar el correo electrónico',
            'El correo no existe o se escribió erróneamente'
          );
        });
    } catch (ex) {
      this.notification.create(
        'error',
        'Error fallido',
        'Problemas con la conexión a internet'
      );
    }
  }
  resetForgotForm() {
    const forgot = this.forgotForm;
    forgot.reset();
    Object.keys(forgot.controls).forEach((key) => {
      forgot.controls[key].setErrors(null);
    });
  }
}
