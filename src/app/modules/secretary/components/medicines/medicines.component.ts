import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ViewMedicines } from 'src/app/modules/admin/interfaces/view-medicines';
import { MedicinesService } from 'src/app/modules/admin/services/medicines.service';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {

  searchForm: FormGroup;
  medicine: ViewMedicines[] = [];
  filter: string = '';
  constructor(
    private fb: FormBuilder,
    private medicineServices: MedicinesService,
  ) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: new FormControl(null),
    });
    this.searchForm.get('search').valueChanges.subscribe((inx) => {
      this.filter = inx;
    });
    this.loadMedicines();
  }
  loadMedicines() {
    this.medicineServices.getMedicine().subscribe((respond) => {
      this.medicine = [];
      respond.docs.forEach((value) => {
        const data = value.data();
        const med: ViewMedicines = {
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
        this.medicine.push(med);
      });
    });
  }

}
