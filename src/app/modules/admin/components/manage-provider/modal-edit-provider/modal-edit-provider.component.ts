import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ViewProviders } from '../../../interfaces/view-providers';
import { ProvidersService } from '../../../services/providers.service';

@Component({
  selector: 'app-modal-edit-provider',
  templateUrl: './modal-edit-provider.component.html',
  styleUrls: ['./modal-edit-provider.component.css']
})
export class ModalEditProviderComponent implements OnInit {

  providerForm:FormGroup;
  provider:ViewProviders = null;
  constructor(
    private providersServices:ProvidersService,private fb:FormBuilder,private messages:NzMessageService
  ) { }

  ngOnInit() {
    this.providerForm = this.fb.group({
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/
        ),
        Validators.minLength(2),
        Validators.maxLength(60),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(60),
      ]),
    });
    this.providerForm.get('name').setValue(this.provider.name);
    this.providerForm.get('description').setValue(this.provider.description);
  }

  onEdit(id:string){
    if(this.providerForm.valid){
      const { name, description } = this.providerForm.value;
      const reg = new RegExp('^\\s');
      if( reg.test(name) == true || reg.test(description) == true){
        this.messages.warning('Existen campos rellenados con espacios');
      }else{
        const provider = {
          name: name,
          description: description
        }
        this.providersServices.editProviderFragment(id,provider);
      }
    }
  }
  isFieldValid1(field: string) {
    const prov = this.providerForm.get(field);
    return (prov.touched || prov.dirty) && !prov.valid;
  }
  getErrorMessage1(field: string): string {
    let message;
    const forms = this.providerForm.get(field);
    if (forms.hasError('required')) {
      message = 'El campo es requerido.';
    }
    switch (field) {
      case 'name':
        if (forms.hasError('pattern')) {
          message = 'Solo se aceptan letras';
        } else if (forms.hasError('minlength')) {
          message = 'Debe contener como mínimo 2 caracteres';
        } else if (forms.hasError('maxlength')) {
          message = 'Debe contener como máximo 60 caracteres';
        }
        break;
      case 'description':
        if (forms.hasError('minlength')) {
          message = 'Debe contener como mínimo 2 caracteres';
        } else if (forms.hasError('maxlength')) {
          message = 'Debe contener como máximo 60 caracteres';
        }
        break;
    }
    return message;
  }
}
