import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-medicines',
  templateUrl: './manage-medicines.component.html',
  styleUrls: ['./manage-medicines.component.css'],
})
export class ManageMedicinesComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
  showCreateMedicine() {
    this.router.navigate(['add-medicine'], { relativeTo: this.route });
  }
  showViewMedicine() {
    this.router.navigate(['view-medicines'], { relativeTo: this.route });
  }
  showCreateCategoryMedicine() {
    this.router.navigate(['add-category-medicine'], { relativeTo: this.route });
  }
  showViewCategoryMedicine() {
    this.router.navigate(['view-category-medicines'], {
      relativeTo: this.route,
    });
  }
}
