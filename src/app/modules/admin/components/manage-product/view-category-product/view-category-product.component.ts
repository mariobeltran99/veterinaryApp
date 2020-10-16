import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ModalDeleteComponent } from 'src/app/modules/core/components/modal-delete/modal-delete.component';
import { ViewCategoryProduct } from '../../../interfaces/view-category-product';
import { CategoryProductService } from '../../../services/category-product.service';
import { ModalEditCategoryProductComponent } from '../modal-edit-category-product/modal-edit-category-product.component';

@Component({
  selector: 'app-view-category-product',
  templateUrl: './view-category-product.component.html',
  styleUrls: ['./view-category-product.component.css']
})
export class ViewCategoryProductComponent implements OnInit {

  searchForm:FormGroup;
  categoryProduct:ViewCategoryProduct[] = [];
  filter:string = '';
  constructor(
    private fb: FormBuilder,
    private messages: NzMessageService,
    private categoryProductServices:CategoryProductService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: new FormControl(null),
    });
    this.searchForm.get('search').valueChanges.subscribe((inx) => {
      this.filter = inx;
    });
    this.loadCategoryProducts();
  }
  loadCategoryProducts(){
    this.categoryProductServices.getCategoryProduct().subscribe((respond) => {
      this.categoryProduct = [];
      respond.docs.forEach((value) => {
        const data = value.data();
        const depart: ViewCategoryProduct = {
          id: value.id,
          name: data.name,
          description: data.description,
        };
        this.categoryProduct.push(depart);
      });
    });
  }
  showEditModal(data: ViewCategoryProduct) {
    const dialogRef = this.dialog.open(ModalEditCategoryProductComponent);
    dialogRef.componentInstance.categoryProduct = data;
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.messages.success('El registro se ha modificado correctamente');
        this.loadCategoryProducts();
      }else{
        this.messages.info('Se canceló la modificación del registro');
      }
    });
  }
  deleteCategoryProduct(id: string) {
    const dialogRef = this.dialog.open(ModalDeleteComponent);
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.categoryProductServices
          .deleteCategoryProduct(id)
          .then((res) => {
            this.messages.create(
              'success',
              'El registro se ha eliminado exitosamente'
            );
            this.loadCategoryProducts();
          })
          .catch((ex) => {
            this.messages.create('error', 'Error en la pentición enviada');
          });
      }
    });
  }

}
