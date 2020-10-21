import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ViewUsers } from '../../../interfaces/view-users';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-modal-edit-user',
  templateUrl: './modal-edit-user.component.html',
  styleUrls: ['./modal-edit-user.component.css']
})
export class ModalEditUserComponent implements OnInit {

  user:ViewUsers = null;
  userForm:FormGroup;
  constructor(private fb:FormBuilder,private messages:NzMessageService, private usersServices:UsersService) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/
        ),
        Validators.minLength(2),
        Validators.maxLength(60),
      ]),
      lastname: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/
        ),
        Validators.minLength(2),
        Validators.maxLength(60),
      ]),
      age: new FormControl(null, [
        Validators.required,
        Validators.min(18),
        Validators.max(90),
      ]),
     
    });
    this.userForm.get('name').setValue(this.user.name);
    this.userForm.get('lastname').setValue(this.user.lastname);
    this.userForm.get('age').setValue(this.user.age);
  }
  isFieldValid1(field: string) {
    const user = this.userForm.get(field);
    return (user.touched || user.dirty) && !user.valid;
  }
  getErrorMessage1(field: string): string {
    let message;
    const forms = this.userForm.get(field);
    if (forms.hasError('required')) {
      message = 'El campo es requerido.';
    }
    switch (field) {
      case 'name' || 'lastname':
        if (forms.hasError('pattern')) {
          message = 'Solo se aceptan letras';
        } else if (forms.hasError('minlength')) {
          message = 'Debe contener como mínimo 2 caracteres';
        } else if (forms.hasError('maxlength')) {
          message = 'Debe contener como máximo 60 caracteres';
        }
        break;
      case 'age':
        if (forms.hasError('min')) {
          message = 'La edad mínima es 18 años';
        } else if (forms.hasError('max')) {
          message = 'La edad máxima es 90 años';
        }
        break;
    }
    return message;
  }
  onEdit(id:string){
    if(this.userForm.valid){
      const { name, lastname, age } = this.userForm.value;
      const reg = new RegExp('^\\s');
      if(reg.test(name) == true || reg.test(lastname)){
        this.messages.warning('Existen campos vacíos rellenados con espacios');
      }else{
        const obj = {
          name:name,
          lastname:lastname,
          displayName: name + ' ' + lastname,
          age:age
        }
        this.usersServices.editUsersFragment(id,obj);
      }
    }
  }

}
