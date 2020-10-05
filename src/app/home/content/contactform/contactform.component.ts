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
import { Contact } from 'src/app/home/interfaces/contact';
import { ContactService } from 'src/app/home/services/contact.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
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
  constructor(
    private fb: FormBuilder,
    private contactServices: ContactService,
    private notification: NzNotificationService
  ) {}

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
        Validators.email,
        Validators.maxLength(100),
      ]),
      affair: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(70),
      ]),
      message: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  //validation with dirty and touched
  isFieldValid(field: string) {
    const contact = this.contactForm.get(field);
    return (contact.touched || contact.dirty) && !contact.valid;
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
        if (forms.hasError('email')) {
          message =
            'El correo ingresado es inválido, debe cumplir este formato: juan@gmail.com';
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
  sendContact() {
    if (this.contactForm.valid) {
      const reg = new RegExp('^\\s');
      if (
        reg.test(this.contactForm.get('affair').value) == true ||
        reg.test(this.contactForm.get('message').value) == true
      ) {
        this.createNotification(
          'warning',
          'Advertencia al Enviar',
          'Hay campos vacíos rellenados con espacios o tabulaciones'
        );
      } else {
        let contact: Contact = this.contactForm.value;
        contact.createdDate = new Date();
        this.contactServices.saveContact(contact);
        this.resetForm();
        this.createNotification(
          'success',
          'Enviado Exitosamente',
          'Le brindaremos su respuesta a su correo electrónico dado'
        );
      }
    } else {
      this.createNotification(
        'error',
        'Enviado Fallido',
        'Hubo problema en la conexión'
      );
    }
  }
  createNotification(type: string, title: string, content: string) {
    this.notification.create(type, title, content);
  }
  resetForm() {
    const contact = this.contactForm;
    contact.reset();
    Object.keys(contact.controls).forEach((key) => {
      contact.controls[key].setErrors(null);
    });
  }
}
