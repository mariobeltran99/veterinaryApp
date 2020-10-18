import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Medicine } from '../../../interfaces/medicine';
import { ViewCategoryMedicine } from '../../../interfaces/view-category-medicine';
import { ViewProviders } from '../../../interfaces/view-providers';
import { CategoryMedicineService } from '../../../services/category-medicine.service';
import { MedicinesService } from '../../../services/medicines.service';
import { ProvidersService } from '../../../services/providers.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {

  medicineForm: FormGroup;
  category: ViewCategoryMedicine[] = [];
  provider: ViewProviders[] = [];
  image: any;
  constructor(
    private fb: FormBuilder,
    private messages: NzMessageService,
    private medicineServices: MedicinesService,
    private categoryMedicineServices: CategoryMedicineService,
    private providerServices: ProvidersService
  ) { }

  ngOnInit(): void {
    this.medicineForm = this.fb.group({
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/
        ),
        Validators.minLength(2),
        Validators.maxLength(60),
      ]),
      category: new FormControl(null, [Validators.required]),
      provider: new FormControl(null, [Validators.required]),
      existence: new FormControl(null, [
        Validators.required,
        Validators.min(1),
        Validators.max(1000),
        Validators.pattern(/^\d+$/),
      ]),
      price: new FormControl(null, [
        Validators.required,
        Validators.min(0.05),
        Validators.max(1000.0),
        Validators.pattern('^([0-9]+(.?[0-9]?[0-9]?)?)'),
      ]),
      photo: new FormControl(null, [Validators.required]),
      namePhoto: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
    });
    this.loadCategoryMedicines();
    this.loadProviders();
  }
  loadProviders() {
    this.providerServices.getProvider().subscribe((respond) => {
      this.provider = [];
      respond.docs.forEach((value) => {
        const data = value.data();
        const prov: ViewProviders = {
          id: value.id,
          name: data.name,
          description: data.description,
        };
        this.provider.push(prov);
      });
    });
  }
  loadCategoryMedicines(){
    this.categoryMedicineServices.getCategoryMedicine().subscribe((respond) => {
      this.category= [];
      respond.docs.forEach((value) => {
        const data = value.data();
        const category: ViewCategoryMedicine = {
          id: value.id,
          name: data.name,
          description: data.description,
        };
        this.category.push(category);
      });
    });
  }
  isFieldValid1(field: string) {
    const med = this.medicineForm.get(field);
    return (med.touched || med.dirty) && !med.valid;
  }
  getErrorMessage1(field: string): string {
    let message;
    const forms = this.medicineForm.get(field);
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
      case 'existence':
        if (forms.hasError('min')) {
          message = 'Como mínimo debe contener 1 existencia para el medicamento';
        } else if (forms.hasError('max')) {
          message = 'Como máximo solo se aceptan 1000 existencias del medicamento';
        } else if (forms.hasError('pattern')) {
          message = 'Solo se aceptan números enteros, no decimales';
        }
        break;
      case 'price':
        if (forms.hasError('min')) {
          message = 'Como mínimo debe contener $0.05 para el medicamento';
        } else if (forms.hasError('max')) {
          message = 'Como máximo solo se aceptan $1000.00 para el medicamento';
        } else if (forms.hasError('pattern')) {
          message = 'Debe cumplir con el formato $0.00';
        }
        break;
    }
    return message;
  }
  handleImage(e: any) {
    this.image = e.target.files[0];
    this.medicineForm.get('namePhoto').setValue(this.image.name);
    this.messages.info('Imagen en estado de precarga');
  }
  resetForm() {
    const med = this.medicineForm;
    med.reset();
    Object.keys(med.controls).forEach((key) => {
      med.controls[key].setErrors(null);
    });
  }
  onSave() {
    if (this.medicineForm.valid) {
      const {
        name,
        category,
        provider,
        existence,
        price,
        description,
      } = this.medicineForm.value;
      const reg = new RegExp('^\\s');
      if (reg.test(name) == true) {
        this.messages.warning('Existen campos rellenados con espacios');
      } else {
        const medicine:Medicine = {
          name: name,
          category: category,
          provider: provider,
          existence:existence,
          price:price,
          description: description,
          qualification:0,
          sales_quantity:0
        };
        this.medicineServices.preAdd(medicine, this.image);
        this.messages.success('Se guardaron los datos exitosamente');
        this.resetForm();
        this.medicineForm.get('name').setValue('');
      }
    }
  }
}
