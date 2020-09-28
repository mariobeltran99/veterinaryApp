import { Component, OnInit } from '@angular/core';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css'],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
})
export class PagenotfoundComponent implements OnInit {
  faPaw = faPaw;
  location: Location;
  constructor(location: Location) {
    this.location = location;
  }

  ngOnInit(): void {}

  returnPage() {
    this.location.back();
  }
}
