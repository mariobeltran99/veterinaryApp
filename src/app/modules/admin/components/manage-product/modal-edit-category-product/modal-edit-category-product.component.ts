import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ViewCategoryProduct } from '../../../interfaces/view-category-product';
import { CategoryProductService } from '../../../services/category-product.service';

@Component({
  selector: 'app-modal-edit-category-product',
  templateUrl: './modal-edit-category-product.component.html',
  styleUrls: ['./modal-edit-category-product.component.css']
})
export class ModalEditCategoryProductComponent implements OnInit {

  categoryProduct:ViewCategoryProduct = null;
  categoryProductForm:FormGroup;
  constructor(
    private categoryProductServices:CategoryProductService,private fb:FormBuilder,private messages:NzMessageService
  ) { }

  ngOnInit(){
    this.categoryProductForm = this.fb.group({
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
    this.categoryProductForm.get('name').setValue(this.categoryProduct.name);
    this.categoryProductForm.get('description').setValue(this.categoryProduct.description);
  }
  onEdit(id:string){
    if(this.categoryProductForm.valid){
      const { name, description } = this.categoryProductForm.value;
      const reg = new RegExp('^\\s');
      if( reg.test(name) == true || reg.test(description) == true){
        this.messages.warning('Existen campos rellenados con espacios');
      }else{
        const category = {
          name: name,
          description: description
        }
        this.categoryProductServices.editCategoryProductFragment(id,category);
      }
    }
  }
  isFieldValid1(field: string) {
    const category = this.categoryProductForm.get(field);
    return (category.touched || category.dirty) && !category.valid;
  }
  getErrorMessage1(field: string): string {
    let message;
    const forms = this.categoryProductForm.get(field);
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
