import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { faPaw } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  faPaw = faPaw;
  location:Location;
  constructor() {  }

  ngOnInit(): void {
  }

  returnPage(){
    this.location.back();
  }

}
