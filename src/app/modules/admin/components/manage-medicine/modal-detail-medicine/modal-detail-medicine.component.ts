import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ViewMedicines } from '../../../interfaces/view-medicines';

@Component({
  selector: 'app-modal-detail-medicine',
  templateUrl: './modal-detail-medicine.component.html',
  styleUrls: ['./modal-detail-medicine.component.css']
})
export class ModalDetailMedicineComponent implements OnInit {

  medicine:ViewMedicines = null;
  rateForm:FormGroup;
  tooltips = ['terrible', 'malo', 'normal', 'bueno', 'maravilloso'];
  value:number = 0;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.rateForm = this.fb.group({
      rate: new FormControl(null)
    });
    this.loadQualification(this.medicine.qualification,this.medicine.sales_quantity);
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
