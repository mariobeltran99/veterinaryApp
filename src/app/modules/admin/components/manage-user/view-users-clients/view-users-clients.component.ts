import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ViewUsers } from '../../../interfaces/view-users';
import { UsersService } from '../../../services/users.service';
import { ModalDetailUserComponent } from '../modal-detail-user/modal-detail-user.component';
import { ModalEditDisabledComponent } from '../modal-edit-disabled/modal-edit-disabled.component';

@Component({
  selector: 'app-view-users-clients',
  templateUrl: './view-users-clients.component.html',
  styleUrls: ['./view-users-clients.component.css'],
})
export class ViewUsersClientsComponent implements OnInit {
  searchForm: FormGroup;
  users: ViewUsers[] = [];
  filter: string = '';
  constructor(
    private fb: FormBuilder,
    private messages: NzMessageService,
    private usersServices: UsersService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: new FormControl(null),
    });
    this.searchForm.get('search').valueChanges.subscribe((inx) => {
      this.filter = inx;
    });
    this.loadUsersClients();
  }
  loadUsersClients() {
    this.usersServices.getUsersClients().subscribe((respond) => {
      this.users = [];
      respond.docs.forEach((value) => {
        const data = value.data();
        const prov: ViewUsers = {
          id: value.id,
          name: data.name,
          lastname: data.lastname,
          displayName: data.displayName,
          email:data.email,
          dui: data.dui,
          age: data.age,
          role:data.role,
          photoURL: data.photoURL,
          disabled: data.disabled,
          createDate: data.createDate,
        };
        this.users.push(prov);
      });
    });
  }
  disableUser(data: ViewUsers) {
    const dialogRef = this.dialog.open(ModalEditDisabledComponent);
    dialogRef.componentInstance.user = data;
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        let state: boolean;
        if (data.disabled == false) {
          state = true;
        } else {
          state = false;
        }
        const disUser = { disabled: state };
        this.usersServices
          .editUsersFragment(data.id, disUser)
          .then((res) => {
            this.messages.create(
              'success',
              'Se han modificado los permisos de acceso exitosamente'
            );
            this.loadUsersClients();
          })
          .catch((ex) => {
            this.messages.create('error', 'Error en la pentición enviada');
          });
      }else{
        this.loadUsersClients();
      }
    });
  }
  showDetailModal(data:ViewUsers){
    const dialogRef = this.dialog.open(ModalDetailUserComponent);
    dialogRef.componentInstance.user = data;
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {

      }
    });
  }
}
