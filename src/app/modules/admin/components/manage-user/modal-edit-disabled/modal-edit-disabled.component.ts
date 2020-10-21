import { Component, OnInit } from '@angular/core';
import { ViewUsers } from '../../../interfaces/view-users';

@Component({
  selector: 'app-modal-edit-disabled',
  templateUrl: './modal-edit-disabled.component.html',
  styleUrls: ['./modal-edit-disabled.component.css']
})
export class ModalEditDisabledComponent implements OnInit {

  user:ViewUsers = null;
  constructor() { }

  ngOnInit(): void {
  }

}
