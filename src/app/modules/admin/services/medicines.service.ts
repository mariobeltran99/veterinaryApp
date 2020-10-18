import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FileImage } from '../interfaces/file-image';
import { Medicine } from '../interfaces/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {

  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage
  ) { }
  private collectionName = 'medicines';
  private filePath: string;
  private downloadURL: Observable<string>;

  private saveMedicine(medicine: Medicine) {
    return this.db.collection(this.collectionName).add(medicine);
  }
  getMedicine(): Observable<firebase.firestore.QuerySnapshot> {
    return this.db
      .collection<Medicine>(this.collectionName, (ref) =>
        ref.orderBy('name', 'asc')
      )
      .get();
  }
  editMedicineFragment(id: string, obj: Object) {
    return this.db.collection(this.collectionName).doc(id).update(obj);
  }
  deleteMedicine(id: string) {
    return this.db.collection(this.collectionName).doc(id).delete();
  }
  preEdit(id: string, image: FileImage, produc: Medicine) {
    this.uploadImageEditMedicine(id, image, produc);
  }
  preAdd(medicine: Medicine, image: FileImage) {
    this.uploadImageCreateMedicine(medicine, image);
  }
  private uploadImageCreateMedicine(medicine: Medicine, image: FileImage) {
    const id = Math.random().toString(36).substring(2);
    this.filePath = `medicines_images/${image.name + id}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task
      .snapshotChanges()
      .pipe(
        finalize(() =>
          fileRef.getDownloadURL().subscribe((urlImage) => {
            this.downloadURL = urlImage;
            const med: Medicine = {
              name: medicine.name,
              category: medicine.category,
              provider: medicine.provider,
              existence: medicine.existence,
              price: medicine.price,
              photo: this.downloadURL,
              description: medicine.description,
              qualification: medicine.qualification,
              sales_quantity: medicine.sales_quantity,
            };
            this.saveMedicine(med);
          })
        )
      )
      .subscribe();
  }
  private uploadImageEditMedicine(
    id: string,
    image: FileImage,
    medicine: Medicine
  ) {
    const ids = Math.random().toString(36).substring(2);
    this.filePath = `medicines_images/${image.name + ids}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task
      .snapshotChanges()
      .pipe(
        finalize(() =>
          fileRef.getDownloadURL().subscribe((urlImage) => {
            this.downloadURL = urlImage;
            const med = {
              name: medicine.name,
              category: medicine.category,
              provider: medicine.provider,
              existence: medicine.existence,
              price: medicine.price,
              photo: this.downloadURL,
            };
            this.editMedicineFragment(id, med);
          })
        )
      )
      .subscribe();
  }
}
