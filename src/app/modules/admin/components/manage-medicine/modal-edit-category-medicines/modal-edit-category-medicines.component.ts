import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ViewCategoryMedicine } from '../../../interfaces/view-category-medicine';
import { CategoryMedicineService } from '../../../services/category-medicine.service';

@Component({
  selector: 'app-modal-edit-category-medicines',
  templateUrl: './modal-edit-category-medicines.component.html',
  styleUrls: ['./modal-edit-category-medicines.component.css']
})
export class ModalEditCategoryMedicinesComponent implements OnInit {

  categoryMedicineForm:FormGroup;
  categoryMedicine:ViewCategoryMedicine = null;
  constructor(
    private categoryMedicineServices:CategoryMedicineService,private fb:FormBuilder,private messages:NzMessageService
  ) { }

  ngOnInit() {
    this.categoryMedicineForm = this.fb.group({
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
    this.categoryMedicineForm.get('name').setValue(this.categoryMedicine.name);
    this.categoryMedicineForm.get('description').setValue(this.categoryMedicine.description);
  }
  onEdit(id:string){
    if(this.categoryMedicineForm.valid){
      const { name, description } = this.categoryMedicineForm.value;
      const reg = new RegExp('^\\s');
      if( reg.test(name) == true || reg.test(description) == true){
        this.messages.warning('Existen campos rellenados con espacios');
      }else{
        const category = {
          name: name,
          description: description
        }
        this.categoryMedicineServices.editCategoryMedicineFragment(id,category);
      }
    }
  }
  isFieldValid1(field: string) {
    const category = this.categoryMedicineForm.get(field);
    return (category.touched || category.dirty) && !category.valid;
  }
  getErrorMessage1(field: string): string {
    let message;
    const forms = this.categoryMedicineForm.get(field);
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
