import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Department } from '../interfaces/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private db:AngularFirestore) { }
  private collectionName = 'departments';

  saveDepartment(depart:Department){
    return this.db.collection(this.collectionName).add(depart);
  }
  getDepartment(): Observable<firebase.firestore.QuerySnapshot>{
    return this.db.collection<Department>(this.collectionName,ref => ref.orderBy('name',"asc")).get();
  }
  editDepartmentFragment(id: string, obj:Object){
    return this.db.collection(this.collectionName).doc(id).update(obj);
  }
  deleteDepartment(id: string){
    return this.db.collection(this.collectionName).doc(id).delete();
  }
}
