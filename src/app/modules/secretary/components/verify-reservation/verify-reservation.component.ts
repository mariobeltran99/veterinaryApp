import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-verify-reservation',
  templateUrl: './verify-reservation.component.html',
  styleUrls: ['./verify-reservation.component.css']
})
export class VerifyReservationComponent implements OnInit {

  searchForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: new FormControl(null, [Validators.required]),
    });
  }
  isFieldValid(field: string) {
    const login = this.searchForm.get(field);
    return (login.touched || login.dirty) && !login.valid;
  }
  getErrorMessage(field: string): string {
    let message;
    const forms = this.searchForm.get(field);
    if (forms.hasError('required')) {
      message = 'El campo es requerido.';
    }
    return message;
  }
  validateCode(){
    if(this.searchForm.valid){
      
    }
  }
}
