import { Component, OnInit } from '@angular/core';
import { Message } from '../../../interfaces/message';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.css']
})
export class ModalMessageComponent implements OnInit {

  contact:Message;
  constructor() { }

  ngOnInit(): void {
  }

}
