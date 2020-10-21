import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ViewProducts } from 'src/app/modules/admin/interfaces/view-products';
import { ProductsService } from 'src/app/modules/admin/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  searchForm: FormGroup;
  product: ViewProducts[] = [];
  filter: string = '';
  constructor(
    private fb: FormBuilder,
    private productServices: ProductsService,
  ) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: new FormControl(null),
    });
    this.searchForm.get('search').valueChanges.subscribe((inx) => {
      this.filter = inx;
    });
    this.loadProducts();
  }
  loadProducts() {
    this.productServices.getProduct().subscribe((respond) => {
      this.product = [];
      respond.docs.forEach((value) => {
        const data = value.data();
        const depart: ViewProducts = {
          id: value.id,
          name: data.name,
          category: data.category,
          provider: data.provider,
          existence: data.existence,
          price: data.price,
          photo: data.photo,
          qualification: data.qualification,
          sales_quantity: data.sales_quantity,
          description: data.description,
        };
        this.product.push(depart);
      });
    });
  }

}
