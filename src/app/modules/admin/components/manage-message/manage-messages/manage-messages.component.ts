import { Component, OnInit } from '@angular/core';
import { Message } from '../../../interfaces/message';
import { MessageService } from '../../../services/message.service';
import { FormGroup,FormBuilder,FormControl} from '@angular/forms'
@Component({
  selector: 'app-manage-messages',
  templateUrl: './manage-messages.component.html',
  styleUrls: ['./manage-messages.component.css'],
  providers:[MessageService]
})
export class ManageMessagesComponent implements OnInit {

  contacts:Message[] = [];
  filter:string = '';
  searchForm:FormGroup;
  constructor(private messageServices: MessageService, private fb:FormBuilder) { }

  ngOnInit() {
    this.loadContacts();
    this.searchForm = this.fb.group({
      search: new FormControl(null)
    })
    this.searchForm.get('search').valueChanges.subscribe(form => {
      this.filter = form;
    });
  }
  loadContacts(){
    this.messageServices.getContact().subscribe(respond => {
      this.contacts = [];
      respond.docs.forEach((value) => {
        const data = value.data();
        const messages: Message = {
          id: value.id,
          name: data.name,
          email: data.email,
          affair: data.affair,
          message: data.message,
          createDate: data.createDate
        };
        this.contacts.push(messages);
      });
    });
  }
  showMessageModal(data:Message){

  }
  deleteMessage(id:string){
    
  }
}
