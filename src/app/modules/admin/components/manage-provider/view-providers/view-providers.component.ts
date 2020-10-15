import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ModalDeleteComponent } from 'src/app/modules/core/components/modal-delete/modal-delete.component';
import { ViewProviders } from '../../../interfaces/view-providers';
import { ProvidersService } from '../../../services/providers.service';
import { ModalEditProviderComponent } from '../modal-edit-provider/modal-edit-provider.component';

@Component({
  selector: 'app-view-providers',
  templateUrl: './view-providers.component.html',
  styleUrls: ['./view-providers.component.css']
})
export class ViewProvidersComponent implements OnInit {

  searchForm:FormGroup;
  providers:ViewProviders[] = [];
  filter:string = '';
  constructor(
    private fb: FormBuilder,
    private messages: NzMessageService,
    private providersServices:ProvidersService,
    private dialog: MatDialog
  ) { }

  ngOnInit(){
    this.searchForm = this.fb.group({
      search: new FormControl(null),
    });
    this.searchForm.get('search').valueChanges.subscribe((inx) => {
      this.filter = inx;
    });
    this.loadProviders();
  }
  loadProviders(){
    this.providersServices.getProvider().subscribe((respond) => {
      this.providers = [];
      respond.docs.forEach((value) => {
        const data = value.data();
        const prov: ViewProviders = {
          id: value.id,
          name: data.name,
          description: data.description,
        };
        this.providers.push(prov);
      });
    });
  }
  showEditModal(data: ViewProviders) {
    const dialogRef = this.dialog.open(ModalEditProviderComponent);
    dialogRef.componentInstance.provider = data;
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.messages.success('El registro se ha modificado correctamente');
        this.loadProviders();
      }else{
        this.messages.info('Se canceló la modificación del registro');
      }
    });
  }
  deleteProvider(id: string) {
    const dialogRef = this.dialog.open(ModalDeleteComponent);
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.providersServices
          .deleteProvider(id)
          .then((res) => {
            this.messages.create(
              'success',
              'El registro se ha eliminado exitosamente'
            );
            this.loadProviders();
          })
          .catch((ex) => {
            this.messages.create('error', 'Error en la pentición enviada');
          });
      }
    });
  }

}
