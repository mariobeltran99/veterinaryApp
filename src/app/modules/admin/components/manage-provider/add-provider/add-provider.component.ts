import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ProvidersService } from '../../../services/providers.service';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent implements OnInit {

  providerForm:FormGroup;
  constructor(
    private fb: FormBuilder,
    private messages: NzMessageService,
    private providerServices: ProvidersService
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
  onSave(){
    if (this.providerForm.valid) {
      const { name, description } = this.providerForm.value;
      const reg = new RegExp('^\\s');
      if (reg.test(description) == true || reg.test(name) == true) {
        this.messages.warning('Existen campos rellenados con espacios');
      } else {
        const provider = {
          name: name,
          description: description,
        };
        this.providerServices.saveProvider(provider).then(res => {
          this.messages.success('Se guardaron los datos exitosamente');
          this.resetForm();
          this.providerForm.get('name').setValue('');
        }).catch(ex => {
          this.messages.error('Se produjo un problema con la petición');
        })
      }
    }
  }
  resetForm() {
    const prov = this.providerForm;
    prov.reset();
    Object.keys(prov.controls).forEach((key) => {
      prov.controls[key].setErrors(null);
    });
  }
}
