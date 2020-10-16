import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CategoryProduct } from '../interfaces/category-product';

@Injectable({
  providedIn: 'root'
})
export class CategoryProductService {

  constructor(private db:AngularFirestore) { }
  private collectionName = 'category-products';

  saveCategoryProduct(category:CategoryProduct){
    return this.db.collection(this.collectionName).add(category);
  }
  getCategoryProduct(): Observable<firebase.firestore.QuerySnapshot>{
    return this.db.collection<CategoryProduct>(this.collectionName,ref => ref.orderBy('name',"asc")).get();
  }
  editCategoryProductFragment(id: string, obj:Object){
    return this.db.collection(this.collectionName).doc(id).update(obj);
  }
  deleteCategoryProduct(id: string){
    return this.db.collection(this.collectionName).doc(id).delete();
  }
}
