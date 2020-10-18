import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NzMessageService } from 'ng-zorro-antd/message';
import { concatMap } from 'rxjs/operators';
import { ModalDeleteComponent } from 'src/app/modules/core/components/modal-delete/modal-delete.component';
import { ViewMedicines } from '../../../interfaces/view-medicines';
import { MedicinesService } from '../../../services/medicines.service';
import { ModalDetailMedicineComponent } from '../modal-detail-medicine/modal-detail-medicine.component';
import { ModalEditMedicinesComponent } from '../modal-edit-medicines/modal-edit-medicines.component';

@Component({
  selector: 'app-view-medicines',
  templateUrl: './view-medicines.component.html',
  styleUrls: ['./view-medicines.component.css']
})
export class ViewMedicinesComponent implements OnInit {

  searchForm: FormGroup;
  medicine: ViewMedicines[] = [];
  filter: string = '';
  constructor(
    private fb: FormBuilder,
    private messages: NzMessageService,
    private medicineServices: MedicinesService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: new FormControl(null),
    });
    this.searchForm.get('search').valueChanges.subscribe((inx) => {
      this.filter = inx;
    });
    this.loadMedicines();
  }
  loadMedicines() {
    this.medicineServices.getMedicine().subscribe((respond) => {
      this.medicine = [];
      respond.docs.forEach((value) => {
        const data = value.data();
        const med: ViewMedicines = {
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
        this.medicine.push(med);
      });
    });
  }
  showEditModal(data: ViewMedicines) {
    const dialogRef = this.dialog.open(ModalEditMedicinesComponent);
    dialogRef.componentInstance.medicine = data;
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
            this.loadMedicines();
          });
      } else {
        this.messages.info('Se canceló la modificación del registro');
      }
    });
  }
  showMedicineModal(data: ViewMedicines) {
    const dialogRef = this.dialog.open(ModalDetailMedicineComponent);
    dialogRef.componentInstance.medicine = data;
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.loadMedicines();
      }
    });
  }
  deleteMedine(id: string) {
    const dialogRef = this.dialog.open(ModalDeleteComponent);
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.medicineServices
          .deleteMedicine(id)
          .then((res) => {
            this.messages.create(
              'success',
              'El registro se ha eliminado exitosamente'
            );
            this.loadMedicines();
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
