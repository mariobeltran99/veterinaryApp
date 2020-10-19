import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ModalDeleteComponent } from 'src/app/modules/core/components/modal-delete/modal-delete.component';
import { ViewCategoryMedicine } from '../../../interfaces/view-category-medicine';
import { CategoryMedicineService } from '../../../services/category-medicine.service';
import { ModalEditCategoryMedicinesComponent } from '../modal-edit-category-medicines/modal-edit-category-medicines.component';

@Component({
  selector: 'app-view-category-medicines',
  templateUrl: './view-category-medicines.component.html',
  styleUrls: ['./view-category-medicines.component.css'],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
})
export class ViewCategoryMedicinesComponent implements OnInit {
  searchForm: FormGroup;
  categoryMedicine: ViewCategoryMedicine[] = [];
  filter: string = '';
  location: Location;
  constructor(
    private fb: FormBuilder,
    private messages: NzMessageService,
    private categoryMedicineServices: CategoryMedicineService,
    private dialog: MatDialog,
    location: Location
  ) {
    this.location = location;
  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: new FormControl(null),
    });
    this.searchForm.get('search').valueChanges.subscribe((inx) => {
      this.filter = inx;
    });
    this.loadCategoryMedicines();
  }
  loadCategoryMedicines() {
    this.categoryMedicineServices.getCategoryMedicine().subscribe((respond) => {
      this.categoryMedicine = [];
      respond.docs.forEach((value) => {
        const data = value.data();
        const category: ViewCategoryMedicine = {
          id: value.id,
          name: data.name,
          description: data.description,
        };
        this.categoryMedicine.push(category);
      });
    });
  }
  showEditModal(data: ViewCategoryMedicine) {
    const dialogRef = this.dialog.open(ModalEditCategoryMedicinesComponent);
    dialogRef.componentInstance.categoryMedicine = data;
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.messages.success('El registro se ha modificado correctamente');
        this.loadCategoryMedicines();
      } else {
        this.messages.info('Se canceló la modificación del registro');
      }
    });
  }
  deleteCategoryMedicine(id: string) {
    const dialogRef = this.dialog.open(ModalDeleteComponent);
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.categoryMedicineServices
          .deleteCategoryMedicine(id)
          .then((res) => {
            this.messages.create(
              'success',
              'El registro se ha eliminado exitosamente'
            );
            this.loadCategoryMedicines();
          })
          .catch((ex) => {
            this.messages.create('error', 'Error en la pentición enviada');
          });
      }
    });
  }
  backView() {
    this.location.back();
  }
}
