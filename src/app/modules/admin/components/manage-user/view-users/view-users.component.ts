import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { ViewUsers } from '../../../interfaces/view-users';
import { UsersService } from '../../../services/users.service';
import { ModalDetailUserComponent } from '../modal-detail-user/modal-detail-user.component';
import { ModalEditDisabledComponent } from '../modal-edit-disabled/modal-edit-disabled.component';
import { ModalEditUserComponent } from '../modal-edit-user/modal-edit-user.component';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css'],
})
export class ViewUsersComponent implements OnInit {
  searchForm: FormGroup;
  users: ViewUsers[] = [];
  filter: string = '';
  constructor(
    private fb: FormBuilder,
    private messages: NzMessageService,
    private usersServices: UsersService,
    private authService: AuthService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: new FormControl(null),
    });
    this.searchForm.get('search').valueChanges.subscribe((inx) => {
      this.filter = inx;
    });
    this.loadUsers();
  }
  loadUsers() {
    this.usersServices.getUsers().subscribe((respond) => {
      this.users = [];
      respond.docs.forEach((value) => {
        const data = value.data();
        const prov: ViewUsers = {
          id: value.id,
          name: data.name,
          lastname: data.lastname,
          displayName: data.displayName,
          email: data.email,
          dui: data.dui,
          age: data.age,
          role: data.role,
          photoURL: data.photoURL,
          disabled: data.disabled,
          createDate: data.createDate,
        };
        this.users.push(prov);
      });
      this.authService.afAuth.currentUser.then(res => {
        let filterUsers = this.users.filter(x => x.id != res.uid && x.role != 'Cliente');
        this.users = filterUsers;
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
            this.loadUsers();
          })
          .catch((ex) => {
            this.messages.create('error', 'Error en la pentición enviada');
          });
      } else {
        this.loadUsers();
      }
    });
  }
  showDetailModal(data: ViewUsers) {
    const dialogRef = this.dialog.open(ModalDetailUserComponent);
    dialogRef.componentInstance.user = data;
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
      }
    });
  }
  showEditModal(data: ViewUsers) {
    const dialogRef = this.dialog.open(ModalEditUserComponent);
    dialogRef.componentInstance.user = data;
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.messages.success('Se realizó la modificación del registro exitosamente');
        this.loadUsers();
      } else {
        this.messages.info('Se canceló la modificación del registro');
      }
    });
  }
}
