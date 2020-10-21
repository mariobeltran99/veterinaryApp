import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ViewDepartments } from '../../../interfaces/view-departments';
import { DepartmentsService } from '../../../services/departments.service';

@Component({
  selector: 'app-modal-edit-department',
  templateUrl: './modal-edit-department.component.html',
  styleUrls: ['./modal-edit-department.component.css']
})
export class ModalEditDepartmentComponent implements OnInit {

  depart:ViewDepartments = null;
  departmentForm:FormGroup;
  constructor(
    private departmentsServices:DepartmentsService,private fb:FormBuilder,private messages:NzMessageService
  ) { }

  ngOnInit() {
    this.departmentForm = this.fb.group({
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
    this.departmentForm.get('name').setValue(this.depart.name);
    this.departmentForm.get('description').setValue(this.depart.description);
  }
  onEdit(id:string){
    if(this.departmentForm.valid){
      const { name, description } = this.departmentForm.value;
      const reg = new RegExp('^\\s');
      if( reg.test(name) == true || reg.test(description) == true){
        this.messages.warning('Existen campos rellenados con espacios');
      }else{
        const animalEdit = {
          name: name,
          description: description
        }
        this.departmentsServices.editDepartmentFragment(id,animalEdit);
      }
    }
  }
  isFieldValid1(field: string) {
    const depart = this.departmentForm.get(field);
    return (depart.touched || depart.dirty) && !depart.valid;
  }
  getErrorMessage1(field: string): string {
    let message;
    const forms = this.departmentForm.get(field);
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
}
