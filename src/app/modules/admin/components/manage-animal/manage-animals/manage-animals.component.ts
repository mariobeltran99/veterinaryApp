import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-animals',
  templateUrl: './manage-animals.component.html',
  styleUrls: ['./manage-animals.component.css']
})
export class ManageAnimalsComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(){
  }
  showCreateAnimal(){
    this.router.navigate(['add-animals'], { relativeTo: this.route });
  }
  showViewAnimals(){
    this.router.navigate(['view-animals'], { relativeTo: this.route });
  }
}
