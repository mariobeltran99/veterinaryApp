import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faAddressCard,
  faChild,
  faPaw,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Observable } from 'rxjs';
import { AuthService } from '../login/services/auth.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-steps-initial',
  templateUrl: './steps-initial.component.html',
  styleUrls: ['./steps-initial.component.css'],
})
export class StepsInitialComponent implements OnInit {
  faPaw = faPaw;
  faUser = faUser;
  faDui = faAddressCard;
  faAge = faChild;
  constructor(
    private authServices: AuthService,
    private router: Router,
    private notification: NzNotificationService,
    private fb: FormBuilder
  ) {}
  public user$: Observable<any> = this.authServices.afAuth.user;
  nameForm: FormGroup;
  infoForm: FormGroup;
  ngOnInit() {
    this.nameForm = this.fb.group({
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
    });
    this.infoForm = this.fb.group({
      dui: new FormControl(null, [
        Validators.required,
        Validators.pattern('[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]-[0-9]'),
      ]),
      age: new FormControl(null, [
        Validators.required,
        Validators.min(18),
        Validators.max(90),
      ]),
    });
  }

  isFieldValid(field: string) {
    const info1 = this.nameForm.get(field);
    return (info1.touched || info1.dirty) && !info1.valid;
  }
  getErrorMessage(field: string): string {
    let message;
    const forms = this.nameForm.get(field);
    if (forms.hasError('required')) {
      message = 'El campo es requerido.';
    }
    switch (field) {
      case 'name' || 'lastname':
        if (forms.hasError('pattern')) {
          message = 'Solo se aceptan letras';
        } else if (forms.hasError('minlength')) {
          message = 'Debe contener como mínimo dos caracteres';
        } else if (forms.hasError('maxlength')) {
          message = 'Debe contener como máximo sesenta caracteres';
        }
        break;
    }
    return message;
  }
  isFieldValid2(field: string) {
    const info2 = this.infoForm.get(field);
    return (info2.touched || info2.dirty) && !info2.valid;
  }
  getErrorMessage2(field: string): string {
    let message;
    const forms = this.infoForm.get(field);
    if (forms.hasError('required')) {
      message = 'El campo es requerido.';
    }
    switch (field) {
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
  onUpdateUserGoogle(id: string) {
    if (this.nameForm.valid && this.infoForm.valid) {
      const { name, lastname } = this.nameForm.value;
      const { dui, age } = this.infoForm.value;
      const reg = new RegExp('^\\s');
      if (reg.test(name) == true && reg.test(lastname) == true) {
        this.notification.create(
          'warning',
          'Advertencia al Enviar',
          'Hay campos vacíos rellenados con espacios o tabulaciones'
        );
      } else {
        this.authServices.getExistsDUI(dui).subscribe((res) => {
          const countDui = res.docs.length;
          if (countDui == 0) {
            const obj = {
              name: name,
              lastname: lastname,
              dui: dui,
              age: age,
            };
            this.authServices
              .updateUserWithGoogle(id, obj)
              .then((respond) => {
                this.router.navigate(['/client']);
              })
              .catch((ex) => {
                this.notification.create(
                  'error',
                  'Advertencia al Enviar',
                  'Hubo un error en la petición hacia el servidor'
                );
              });
          } else {
            this.notification.create(
              'warning',
              'Advertencia al Enviar',
              'Ya existe este DUI en nuestra base de datos'
            );
          }
        });
      }
    }
  }
}
