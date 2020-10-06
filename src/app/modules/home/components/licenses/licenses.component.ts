import { Component, OnInit } from '@angular/core';
import { faPaw, faReply } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-licenses',
  templateUrl: './licenses.component.html',
  styleUrls: ['./licenses.component.css'],
})
export class LicensesComponent implements OnInit {
  faBack = faReply;
  faPaw = faPaw;
  constructor() {}

  ngOnInit(): void {}
}
