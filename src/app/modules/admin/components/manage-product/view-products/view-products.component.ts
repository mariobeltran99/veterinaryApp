import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NzMessageService } from 'ng-zorro-antd/message';
import { concatMap} from 'rxjs/operators';
import { ModalDeleteComponent } from 'src/app/modules/core/components/modal-delete/modal-delete.component';
import { ViewProducts } from '../../../interfaces/view-products';
import { ProductsService } from '../../../services/products.service';
import { ModalDetailProductComponent } from '../modal-detail-product/modal-detail-product.component';
import { ModalEditProductComponent } from '../modal-edit-product/modal-edit-product.component';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css'],
})
export class ViewProductsComponent implements OnInit {
  searchForm: FormGroup;
  product: ViewProducts[] = [];
  filter: string = '';
  constructor(
    private fb: FormBuilder,
    private messages: NzMessageService,
    private productServices: ProductsService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: new FormControl(null),
    });
    this.searchForm.get('search').valueChanges.subscribe((inx) => {
      this.filter = inx;
    });
    this.loadProducts();
  }
  loadProducts() {
    this.productServices.getProduct().subscribe((respond) => {
      this.product = [];
      respond.docs.forEach((value) => {
        const data = value.data();
        const depart: ViewProducts = {
          id: value.id,
          name: data.name,
          category: data.category,
          provider: data.provider,
          existence: data.existence,
          price: data.price,
          photo: data.photo,
          qualification: data.qualification,
          sales_quantity: data.sales_quantity,
          description: data.description,
        };
        this.product.push(depart);
      });
    });
  }
  showProductModal(data: ViewProducts) {
    const dialogRef = this.dialog.open(ModalDetailProductComponent);
    dialogRef.componentInstance.product = data;
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.loadProducts();
      }
    });
  }
  showEditModal(data: ViewProducts) {
    const dialogRef = this.dialog.open(ModalEditProductComponent);
    dialogRef.componentInstance.product = data;
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.messages
          .loading('Espera un momento al procesar la solicitud...', {
            nzDuration: 5000,
          })
          .onClose!.pipe(
            concatMap(
              () =>
                this.messages.success(
                  'El registro se ha modificado correctamente',
                  { nzDuration: 2500 }
                ).onClose!
            )
          )
          .subscribe(rest => {
            this.loadProducts();
          });
      } else {
        this.messages.info('Se canceló la modificación del registro');
      }
    });
  }
  deleteProduct(id: string) {
    const dialogRef = this.dialog.open(ModalDeleteComponent);
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.productServices
          .deleteProduct(id)
          .then((res) => {
            this.messages.create(
              'success',
              'El registro se ha eliminado exitosamente'
            );
            this.loadProducts();
          })
          .catch((ex) => {
            this.messages.create('error', 'Error en la pentición enviada');
          });
      }
    });
  }
  loadExistence(exist: number): string {
    let result: string = null;
    if (exist === 0) {
      result = 'Agotado';
    } else {
      result = 'Disponible';
    }
    return result;
  }
}
