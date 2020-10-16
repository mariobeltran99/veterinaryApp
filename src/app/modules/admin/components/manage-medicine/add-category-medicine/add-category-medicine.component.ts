import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CategoryMedicineService } from '../../../services/category-medicine.service';

@Component({
  selector: 'app-add-category-medicine',
  templateUrl: './add-category-medicine.component.html',
  styleUrls: ['./add-category-medicine.component.css']
})
export class AddCategoryMedicineComponent implements OnInit {

  categoryMedicineForm:FormGroup;
  constructor(
    private fb: FormBuilder,
    private messages: NzMessageService,
    private categoryMedicineServices: CategoryMedicineService
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
  onSave(){
    if (this.categoryMedicineForm.valid) {
      const { name, description } = this.categoryMedicineForm.value;
      const reg = new RegExp('^\\s');
      if (reg.test(description) == true || reg.test(name) == true) {
        this.messages.warning('Existen campos rellenados con espacios');
      } else {
        const category = {
          name: name,
          description: description,
        };
        this.categoryMedicineServices.saveCategoryMedicine(category).then(res => {
          this.messages.success('Se guardaron los datos exitosamente');
          this.resetForm();
          this.categoryMedicineForm.get('name').setValue('');
        }).catch(ex => {
          this.messages.error('Se produjo un problema con la petición');
        })
      }
    }
  }
  resetForm() {
    const category = this.categoryMedicineForm;
    category.reset();
    Object.keys(category.controls).forEach((key) => {
      category.controls[key].setErrors(null);
    });
  }
}
