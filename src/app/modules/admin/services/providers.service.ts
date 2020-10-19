import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Provider } from '../interfaces/provider';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  constructor(private db:AngularFirestore) { }
  private collectionName = 'providers';

  saveProvider(depart:Provider){
    return this.db.collection(this.collectionName).add(depart);
  }
  getProvider(): Observable<firebase.firestore.QuerySnapshot>{
    return this.db.collection<Provider>(this.collectionName,ref => ref.orderBy('name',"asc")).get();
  }
  editProviderFragment(id: string, obj:Object){
    return this.db.collection(this.collectionName).doc(id).update(obj);
  }
  deleteProvider(id: string){
    return this.db.collection(this.collectionName).doc(id).delete();
  }
}
