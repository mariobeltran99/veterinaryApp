import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  array = [1, 2, 3, 4];
  dotPosition = 'right';
  constructor() { }

  ngOnInit(): void {
  }

}
