import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Product } from '../../../interfaces/product';
import { ViewCategoryProduct } from '../../../interfaces/view-category-product';
import { ViewProducts } from '../../../interfaces/view-products';
import { ViewProviders } from '../../../interfaces/view-providers';
import { CategoryProductService } from '../../../services/category-product.service';
import { ProductsService } from '../../../services/products.service';
import { ProvidersService } from '../../../services/providers.service';

@Component({
  selector: 'app-modal-edit-product',
  templateUrl: './modal-edit-product.component.html',
  styleUrls: ['./modal-edit-product.component.css'],
})
export class ModalEditProductComponent implements OnInit {
  product: ViewProducts = null;
  productForm: FormGroup;
  category: ViewCategoryProduct[] = [];
  provider: ViewProviders[] = [];
  image: any = null;
  constructor(
    private fb: FormBuilder,
    private messages: NzMessageService,
    private productServices: ProductsService,
    private categoryProductServices: CategoryProductService,
    private providerServices: ProvidersService
  ) {}

  ngOnInit() {
    this.productForm = this.fb.group({
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
      photo: new FormControl(null),
      namePhoto: new FormControl(null),
      description: new FormControl(null),
    });
    this.productForm.get('name').setValue(this.product.name);
    this.productForm.get('category').setValue(this.product.category);
    this.productForm.get('provider').setValue(this.product.provider);
    this.productForm.get('existence').setValue(this.product.existence);
    this.productForm.get('price').setValue(this.product.price);
    this.productForm.get('description').setValue(this.product.description);
    this.loadCategoryProducts();
    this.loadProviders();
  }
  loadCategoryProducts() {
    this.categoryProductServices.getCategoryProduct().subscribe((respond) => {
      this.category = [];
      respond.docs.forEach((value) => {
        const data = value.data();
        const depart: ViewCategoryProduct = {
          id: value.id,
          name: data.name,
          description: data.description,
        };
        this.category.push(depart);
      });
    });
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
  isFieldValid1(field: string) {
    const prod = this.productForm.get(field);
    return (prod.touched || prod.dirty) && !prod.valid;
  }
  getErrorMessage1(field: string): string {
    let message;
    const forms = this.productForm.get(field);
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
          message = 'Como mínimo debe contener 1 existencia para el producto';
        } else if (forms.hasError('max')) {
          message = 'Como máximo solo se aceptan 1000 existencias del producto';
        } else if (forms.hasError('pattern')) {
          message = 'Solo se aceptan números enteros, no decimales';
        }
        break;
      case 'price':
        if (forms.hasError('min')) {
          message = 'Como mínimo debe contener $0.05 para el producto';
        } else if (forms.hasError('max')) {
          message = 'Como máximo solo se aceptan $1000.00 para el producto';
        } else if (forms.hasError('pattern')) {
          message = 'Debe cumplir con el formato $0.00';
        }
        break;
    }
    return message;
  }
  handleImage(e: any) {
    this.image = e.target.files[0];
    this.productForm.get('namePhoto').setValue(this.image.name);
    this.messages.info('Imagen en estado de precarga');
  }
  onEdit(id: string) {
    if (this.productForm.valid) {
      const {
        name,
        category,
        provider,
        existence,
        price,
        description,
      } = this.productForm.value;
      const reg = new RegExp('^\\s');
      if (reg.test(name) == true) {
        this.messages.warning('Existen campos rellenados con espacios');
      } else {
        const product: Product = {
          name: name,
          category: category,
          provider: provider,
          existence: existence,
          price: price,
          description: description,
        };
        if (this.image == null) {
          this.productServices.editProductFragment(id, product);
        } else {
          this.productServices.preEdit(id, this.image, product);
        }
      }
    }
  }
}
