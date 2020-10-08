import { Component, OnInit } from '@angular/core';
import { faPaw, faReply } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar-login',
  templateUrl: './navbar-login.component.html',
  styleUrls: ['./navbar-login.component.css']
})
export class NavbarLoginComponent implements OnInit {

  faPaw = faPaw;
  faBack = faReply;
  constructor() { }

  ngOnInit(): void {
  }

}
