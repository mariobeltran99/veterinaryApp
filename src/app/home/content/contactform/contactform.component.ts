import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import {
  faComment,
  faEnvelope,
  faEnvelopeOpenText,
  faPaperPlane,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css'],
})
export class ContactformComponent implements OnInit {
  faUser = faUser;
  faEnvelope = faEnvelope;
  faAffair = faEnvelopeOpenText;
  faComment = faComment;
  faPaperP = faPaperPlane;
  contactForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/
        ),
        Validators.maxLength(70),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
        ),
        Validators.maxLength(100)
      ]),
      affair: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(70),
      ]),
      message: new FormControl(null, [
        Validators.required,
        Validators.minLength(10)
      ]),
    });
  }

  //validation with dirty and touched
  isFieldValid(field: string) {
    return (
      (this.contactForm.get(field).touched ||
        this.contactForm.get(field).dirty) &&
      !this.contactForm.get(field).valid
    );
  }
  //get message errors
  getErrorMessage(field: string): string {
    let message;
    const forms = this.contactForm.get(field);
    if (forms.hasError('required')) {
      message = 'El campo es requerido.';
    }
    switch (field) {
      case 'name':
        if (forms.hasError('pattern')) {
          message =
            'Solo se permiten letras, además se necesita un nombre y un apellido';
        } else if (forms.hasError('maxlength')) {
          message = 'Debe contener como máximo setenta caracteres';
        }
        break;
      case 'email':
        if (forms.hasError('pattern')) {
          message = 'El correo ingresado es inválido, debe cumplir este formato: juan@gmail.com';
        } else if (forms.hasError('maxlength')) {
          message = 'Debe contener como máximo cien caracteres';
        }
        break;
      case 'affair':
        if (forms.hasError('minlength')) {
          message = 'Debe contener como mínimo cinco caracteres';
        } else if (forms.hasError('maxlength')) {
          message = 'Debe contener como máximo setenta caracteres';
        }
        break;
      case 'message':
        if (forms.hasError('minlength')) {
          message = 'Debe contener como mínimo diez caracteres';
        }
        break;
    }
    return message;
  }
  //send contact
  send(){
    if(this.contactForm.valid){
      
    }
  }
}
