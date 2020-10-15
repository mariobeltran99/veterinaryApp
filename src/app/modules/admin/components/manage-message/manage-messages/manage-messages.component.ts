import { Component, OnInit } from '@angular/core';
import { Message } from '../../../interfaces/message';
import { MessageService } from '../../../services/message.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalDeleteComponent } from 'src/app/modules/core/components/modal-delete/modal-delete.component';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ModalMessageComponent } from '../modal-message/modal-message.component';
@Component({
  selector: 'app-manage-messages',
  templateUrl: './manage-messages.component.html',
  styleUrls: ['./manage-messages.component.css'],
  providers: [MessageService],
})
export class ManageMessagesComponent implements OnInit {
  contacts: Message[] = [];
  filter: string = '';
  searchForm: FormGroup;
  constructor(
    private messageServices: MessageService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private message: NzMessageService
  ) {}

  ngOnInit() {
    this.loadContacts();
    this.searchForm = this.fb.group({
      search: new FormControl(null),
    });
    this.searchForm.get('search').valueChanges.subscribe((form) => {
      this.filter = form;
    });
  }
  loadContacts() {
    this.messageServices.getContact().subscribe((respond) => {
      this.contacts = [];
      respond.docs.forEach((value) => {
        const data = value.data();
        const messages: Message = {
          id: value.id,
          name: data.name,
          email: data.email,
          affair: data.affair,
          message: data.message,
          createDate: data.createDate,
        };
        this.contacts.push(messages);
      });
    });
  }
  showMessageModal(data: Message) {
    const dialogRef = this.dialog.open(ModalMessageComponent);
    dialogRef.componentInstance.contact = data;
  }
  deleteMessage(id: string) {
    const dialogRef = this.dialog.open(ModalDeleteComponent);
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.messageServices
          .deleteContact(id)
          .then((res) => {
            this.message.create('success','El registro se ha eliminado exitosamente');
            this.loadContacts();
          })
          .catch((ex) => {
            this.message.create('error', 'Error en la pentición enviada');
          });
      }
    });
  }
}
