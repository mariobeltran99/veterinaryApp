import { Component, OnInit } from '@angular/core';
import { ViewUsers } from '../../../interfaces/view-users';

@Component({
  selector: 'app-modal-detail-user',
  templateUrl: './modal-detail-user.component.html',
  styleUrls: ['./modal-detail-user.component.css']
})
export class ModalDetailUserComponent implements OnInit {

  user:ViewUsers = null;
  constructor() { }

  ngOnInit(): void {
    
  }

}
