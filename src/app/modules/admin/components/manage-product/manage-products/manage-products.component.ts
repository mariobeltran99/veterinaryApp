import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css'],
})
export class ManageProductsComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  showCreateProduct() {
    this.router.navigate(['add-product'], { relativeTo: this.route });
  }
  showViewProducts() {
    this.router.navigate(['view-products'], { relativeTo: this.route });
  }
  showCreateCategoryProduct() {
    this.router.navigate(['add-category-product'], { relativeTo: this.route });
  }
  showViewCategoryProduct() {
    this.router.navigate(['view-category-products'], {
      relativeTo: this.route,
    });
  }
}
