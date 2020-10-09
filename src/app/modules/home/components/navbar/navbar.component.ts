import { Component, OnInit } from '@angular/core';
import { faEllipsisV, faPaw } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  fapaw = faPaw;
  faMenu = faEllipsisV;
  constructor() {}

  ngOnInit(): void {
    
  }
}
