import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ViewAnimals } from '../../../interfaces/view-animals';
import { AnimalsService } from '../../../services/animals.service';

@Component({
  selector: 'app-modal-edit-animal',
  templateUrl: './modal-edit-animal.component.html',
  styleUrls: ['./modal-edit-animal.component.css']
})
export class ModalEditAnimalComponent implements OnInit {

  animal:ViewAnimals;
  animalForm:FormGroup;
  constructor(private animalsServices:AnimalsService,private fb:FormBuilder,private messages:NzMessageService) { }

  ngOnInit(){
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
    this.animalForm.get('name').setValue(this.animal.name);
    this.animalForm.get('description').setValue(this.animal.description);
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
  onEdit(id:string){
    if(this.animalForm.valid){
      const { name, description } = this.animalForm.value;
      const reg = new RegExp('^\\s');
      if( reg.test(name) == true || reg.test(description) == true){
        this.messages.warning('Existen campos rellenados con espacios');
      }else{
        const animalEdit = {
          name: name,
          description: description
        }
        this.animalsServices.editAnimalFragment(id,animalEdit);
      }
    }
  }
}
