import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { ViewDepartments } from '../../../interfaces/view-departments';
import { DepartmentsService } from '../../../services/departments.service';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  roleForm: FormGroup;
  userForm: FormGroup;
  vetForm: FormGroup;
  department: ViewDepartments[] = [];
  role: string = null;
  constructor(
    private fb: FormBuilder,
    private departmentServices: DepartmentsService,
    private messages: NzMessageService,
    private authServices: AuthService,
    private userServices: UsersService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.roleForm = this.fb.group({
      role: new FormControl(null, [Validators.required]),
    });
    this.roleForm.valueChanges.subscribe((rest) => {
      this.role = this.roleForm.get('role').value;
    });
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
      dui: new FormControl(null, [
        Validators.required,
        Validators.pattern('[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]-[0-9]'),
      ]),
      age: new FormControl(null, [
        Validators.required,
        Validators.min(18),
        Validators.max(90),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.maxLength(100),
      ]),
    });
    this.vetForm = this.fb.group({
      specialty: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/
        ),
        Validators.minLength(2),
        Validators.maxLength(60),
      ]),
      department: new FormControl(null, [Validators.required]),
    });
    this.loadDepartment();
  }
  isFieldValid(field: string) {
    const role = this.roleForm.get(field);
    return (role.touched || role.dirty) && !role.valid;
  }
  isFieldValid1(field: string) {
    const user = this.userForm.get(field);
    return (user.touched || user.dirty) && !user.valid;
  }
  isFieldValid2(field: string) {
    const vet = this.vetForm.get(field);
    return (vet.touched || vet.dirty) && !vet.valid;
  }
  getErrorMessage(field: string): string {
    let message;
    const forms = this.roleForm.get(field);
    if (forms.hasError('required')) {
      message = 'El campo es requerido.';
    }
    return message;
  }
  getErrorMessage2(field: string): string {
    let message;
    const forms = this.vetForm.get(field);
    if (forms.hasError('required')) {
      message = 'El campo es requerido.';
    }
    switch (field) {
      case 'specialty':
        if (forms.hasError('pattern')) {
          message = 'Solo se aceptan letras';
        } else if (forms.hasError('minlength')) {
          message = 'Debe contener como mínimo 2 caracteres';
        } else if (forms.hasError('maxlength')) {
          message = 'Debe contener como máximo 60 caracteres';
        }
        break;
    }
    return message;
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
      case 'email':
        if (forms.hasError('email')) {
          message =
            'El correo ingresado es inválido, debe cumplir este formato: juan@gmail.com';
        } else if (forms.hasError('maxlength')) {
          message = 'Debe contener como máximo cien caracteres';
        }
        break;
      case 'dui':
        if (forms.hasError('pattern')) {
          message = 'Debe tener el formato 00000000-0';
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
  loadDepartment() {
    this.departmentServices.getDepartment().subscribe((respond) => {
      this.department = [];
      respond.docs.forEach((value) => {
        const data = value.data();
        const depart: ViewDepartments = {
          id: value.id,
          name: data.name,
          description: data.description,
        };
        this.department.push(depart);
      });
    });
  }
  onSave() {
    if (this.roleForm.valid && this.userForm.valid) {
      const { name, lastname, dui, age, email } = this.userForm.value;
      const { role } = this.roleForm.value;
      const users = this.userForm.value;
      const dataVet = this.vetForm.value;
      const password = 'P@ssw0rd'; 
      const reg = new RegExp('^\\s');
      this.authServices.getExistsDUI(dui).subscribe(res => {
        const exist = res.docs.length;
        if(exist === 0){
          if(reg.test(name) == true || reg.test(lastname) == true){
            this.messages.warning('Existen campos vacíos rellanados con espacios');
          }else{
            if (role == 'Veterinario') {
              if (this.vetForm.valid) {
                const { specialty } = this.vetForm.value;
                if(reg.test(specialty)==true){
                  this.messages.warning('Existen campos vacíos rellanados con espacios');
                }else{
                  this.userServices.registerUser(email,password,users,role,dataVet).then(respond => {
                    this.router.navigate(['/login/verify']);
                    this.resetRoleForm();
                    this.resetUserForm();
                    this.resetVetForm();
                  }).catch(ex => {
                    this.messages.error('Error en la petición');
                  })
                }
              }
            } else {
              this.userServices.registerUser(email,password,users,role).then(respond => {
                this.router.navigate(['/login/verify']);
                this.resetRoleForm();
                this.resetUserForm();
                this.resetVetForm();
              }).catch(ex => {
                this.messages.error('Error en la petición');
              })
            }
          }
        }else{
          this.messages.warning('Ya existe este DUI');
        }
      });
    }
  }
  resetRoleForm() {
    const med = this.roleForm;
    med.reset();
    Object.keys(med.controls).forEach((key) => {
      med.controls[key].setErrors(null);
    });
  }
  resetUserForm() {
    const med = this.userForm;
    med.reset();
    Object.keys(med.controls).forEach((key) => {
      med.controls[key].setErrors(null);
    });
  }
  resetVetForm() {
    const med = this.vetForm;
    med.reset();
    Object.keys(med.controls).forEach((key) => {
      med.controls[key].setErrors(null);
    });
  }
}
