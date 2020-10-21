import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CategoryMedicine } from '../interfaces/category-medicine';

@Injectable({
  providedIn: 'root'
})
export class CategoryMedicineService {

  constructor(private db:AngularFirestore) { }
  private collectionName = 'category-medicines';

  saveCategoryMedicine(category:CategoryMedicine){
    return this.db.collection(this.collectionName).add(category);
  }
  getCategoryMedicine(): Observable<firebase.firestore.QuerySnapshot>{
    return this.db.collection<CategoryMedicine>(this.collectionName,ref => ref.orderBy('name',"asc")).get();
  }
  editCategoryMedicineFragment(id: string, obj:Object){
    return this.db.collection(this.collectionName).doc(id).update(obj);
  }
  deleteCategoryMedicine(id: string){
    return this.db.collection(this.collectionName).doc(id).delete();
  }
}
