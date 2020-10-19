import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DepartmentsService } from '../../../services/departments.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  departmentForm:FormGroup;
  constructor(
    private fb: FormBuilder,
    private messages: NzMessageService,
    private departmentServices: DepartmentsService
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
  onSave(){
    if (this.departmentForm.valid) {
      const { name, description } = this.departmentForm.value;
      const reg = new RegExp('^\\s');
      if (reg.test(description) == true || reg.test(name) == true) {
        this.messages.warning('Existen campos rellenados con espacios');
      } else {
        const depart = {
          name: name,
          description: description,
        };
        this.departmentServices.saveDepartment(depart).then(res => {
          this.messages.success('Se guardaron los datos exitosamente');
          this.resetForm();
          this.departmentForm.get('name').setValue('');
        }).catch(ex => {
          this.messages.error('Se produjo un problema con la petición');
        })
      }
    }
  }
  resetForm() {
    const depart = this.departmentForm;
    depart.reset();
    Object.keys(depart.controls).forEach((key) => {
      depart.controls[key].setErrors(null);
    });
  }
}
