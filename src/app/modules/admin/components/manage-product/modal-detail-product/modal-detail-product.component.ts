import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ViewProducts } from '../../../interfaces/view-products';

@Component({
  selector: 'app-modal-detail-product',
  templateUrl: './modal-detail-product.component.html',
  styleUrls: ['./modal-detail-product.component.css']
})
export class ModalDetailProductComponent implements OnInit {

  product:ViewProducts = null;
  tooltips = ['terrible', 'malo', 'normal', 'bueno', 'maravilloso'];
  rateForm:FormGroup;
  value:number = 0;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.rateForm = this.fb.group({
      rate: new FormControl(null)
    });
    this.loadQualification(this.product.qualification,this.product.sales_quantity);
    this.rateForm.get('rate').setValue(this.value);
  }
  loadQualification(qualification:number,quantity:number){
    let result:number = 0;
    if(quantity === 0){
      result = 0;
    }else{
      result = qualification/quantity;
    }
    this.value = Math.round(result);
  }
  loadDescription(message:string):string{
    let result:string = null;
    if(message == null){
      result = 'N/A';
    }else{
      result = message;
    }
    return result;
  }
  loadExistence(exist:number):string{
    let result:string = null;
    if(exist === 0){
      result = 'Agotado';
    }else{
      result = 'Disponible';
    }
    return result;
  }
}
