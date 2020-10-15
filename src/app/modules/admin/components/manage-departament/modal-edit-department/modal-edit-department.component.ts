import { Component, OnInit } from '@angular/core';
import { ViewDepartments } from '../../../interfaces/view-departments';

@Component({
  selector: 'app-modal-edit-department',
  templateUrl: './modal-edit-department.component.html',
  styleUrls: ['./modal-edit-department.component.css']
})
export class ModalEditDepartmentComponent implements OnInit {

  depart:ViewDepartments = null;
  constructor() { }

  ngOnInit(): void {
  }

}
