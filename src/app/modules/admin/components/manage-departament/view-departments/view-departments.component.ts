import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ModalDeleteComponent } from 'src/app/modules/core/components/modal-delete/modal-delete.component';
import { ViewDepartments } from '../../../interfaces/view-departments';
import { DepartmentsService } from '../../../services/departments.service';
import { ModalEditDepartmentComponent } from '../modal-edit-department/modal-edit-department.component';

@Component({
  selector: 'app-view-departments',
  templateUrl: './view-departments.component.html',
  styleUrls: ['./view-departments.component.css']
})
export class ViewDepartmentsComponent implements OnInit {

  searchForm:FormGroup;
  department:ViewDepartments[] = [];
  filter:string = '';
  constructor(
    private fb: FormBuilder,
    private messages: NzMessageService,
    private departmentsServices:DepartmentsService,
    private dialog: MatDialog
  ) { }

  ngOnInit(){
    this.searchForm = this.fb.group({
      search: new FormControl(null),
    });
    this.searchForm.get('search').valueChanges.subscribe((inx) => {
      this.filter = inx;
    });
    this.loadDepartments();
  }
  loadDepartments(){
    this.departmentsServices.getDepartment().subscribe((respond) => {
      this.department = [];
      respond.docs.forEach((value) => {
        const data = value.data();
        const depart: ViewDepartments = {
          id: value.id,
          name: data.name,
          description: data.description,
        };
        this.department.push(depart);
      });
    });
  }
  showEditModal(data: ViewDepartments) {
    const dialogRef = this.dialog.open(ModalEditDepartmentComponent);
    dialogRef.componentInstance.depart = data;
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.messages.success('El registro se ha modificado correctamente');
        this.loadDepartments();
      }else{
        this.messages.info('Se canceló la modificación del registro');
      }
    });
  }
  deleteDepartment(id: string) {
    const dialogRef = this.dialog.open(ModalDeleteComponent);
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.departmentsServices
          .deleteDepartment(id)
          .then((res) => {
            this.messages.create(
              'success',
              'El registro se ha eliminado exitosamente'
            );
            this.loadDepartments();
          })
          .catch((ex) => {
            this.messages.create('error', 'Error en la pentición enviada');
          });
      }
    });
  }


}
