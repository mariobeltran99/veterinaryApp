import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-pet',
  templateUrl: './manage-pet.component.html',
  styleUrls: ['./manage-pet.component.css']
})
export class ManagePetComponent implements OnInit {

  pets:string[] = ["1"]
  constructor() { }

  ngOnInit(): void {
  }

}
