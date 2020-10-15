import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AnimalsService } from '../../../services/animals.service';

@Component({
  selector: 'app-add-animals',
  templateUrl: './add-animals.component.html',
  styleUrls: ['./add-animals.component.css'],
})
export class AddAnimalsComponent implements OnInit {
  animalForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private messages: NzMessageService,
    private animalServices: AnimalsService
  ) {}

  ngOnInit() {
    this.animalForm = this.fb.group({
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/
        ),
        Validators.minLength(2),
        Validators.maxLength(60),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(60),
      ]),
    });
    
  }
  isFieldValid1(field: string) {
    const animal = this.animalForm.get(field);
    return (animal.touched || animal.dirty) && !animal.valid;
  }
  getErrorMessage1(field: string): string {
    let message;
    const forms = this.animalForm.get(field);
    if (forms.hasError('required')) {
      message = 'El campo es requerido.';
    }
    switch (field) {
      case 'name':
        if (forms.hasError('pattern')) {
          message = 'Solo se aceptan letras';
        } else if (forms.hasError('minlength')) {
          message = 'Debe contener como mínimo 2 caracteres';
        } else if (forms.hasError('maxlength')) {
          message = 'Debe contener como máximo 60 caracteres';
        }
        break;
      case 'description':
        if (forms.hasError('minlength')) {
          message = 'Debe contener como mínimo 2 caracteres';
        } else if (forms.hasError('maxlength')) {
          message = 'Debe contener como máximo 60 caracteres';
        }
        break;
    }
    return message;
  }
  onSave() {
    if (this.animalForm.valid) {
      const { name, description } = this.animalForm.value;
      const reg = new RegExp('^\\s');
      if (reg.test(description) == true || reg.test(name) == true) {
        this.messages.warning('Existen campos rellenados con espacios');
      } else {
        const animal = {
          name: name,
          description: description,
        };
        this.animalServices.saveAnimal(animal).then(res => {
          this.messages.success('Se guardaron los datos exitosamente');
          this.resetForm();
          this.animalForm.get('name').setValue('');
        }).catch(ex => {
          this.messages.error('Se produjo un problema con la petición');
        })
      }
    }
  }
  resetForm() {
    const animal = this.animalForm;
    animal.reset();
    Object.keys(animal.controls).forEach((key) => {
      animal.controls[key].setErrors(null);
    });
  }
}
