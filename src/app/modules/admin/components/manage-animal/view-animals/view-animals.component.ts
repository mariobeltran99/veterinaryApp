import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ModalDeleteComponent } from 'src/app/modules/core/components/modal-delete/modal-delete.component';
import { ViewAnimals } from '../../../interfaces/view-animals';
import { AnimalsService } from '../../../services/animals.service';
import { ModalEditAnimalComponent } from '../modal-edit-animal/modal-edit-animal.component';

@Component({
  selector: 'app-view-animals',
  templateUrl: './view-animals.component.html',
  styleUrls: ['./view-animals.component.css'],
})
export class ViewAnimalsComponent implements OnInit {
  animals: ViewAnimals[] = [];
  filter: string = '';
  searchForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private messages: NzMessageService,
    private animalServices: AnimalsService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: new FormControl(null),
    });
    this.searchForm.get('search').valueChanges.subscribe((inx) => {
      this.filter = inx;
    });
    this.loadAnimals();
  }
  loadAnimals() {
    this.animalServices.getAnimals().subscribe((respond) => {
      this.animals = [];
      respond.docs.forEach((value) => {
        const data = value.data();
        const animal: ViewAnimals = {
          id: value.id,
          name: data.name,
          description: data.description,
        };
        this.animals.push(animal);
      });
    });
  }
  showEditModal(data: ViewAnimals) {
    const dialogRef = this.dialog.open(ModalEditAnimalComponent);
    dialogRef.componentInstance.animal = data;
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.messages.success('El registro se ha modificado correctamente');
        this.loadAnimals();
      }else{
        this.messages.info('Se canceló la modificación del registro');
      }
    });
  }
  deleteAnimal(id: string) {
    const dialogRef = this.dialog.open(ModalDeleteComponent);
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.animalServices
          .deleteAnimal(id)
          .then((res) => {
            this.messages.create(
              'success',
              'El registro se ha eliminado exitosamente'
            );
            this.loadAnimals();
          })
          .catch((ex) => {
            this.messages.create('error', 'Error en la pentición enviada');
          });
      }
    });
  }
}
