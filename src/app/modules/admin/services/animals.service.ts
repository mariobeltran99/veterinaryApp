import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Animal } from '../interfaces/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private db: AngularFirestore) { }
  private collectionName = 'animals';

  saveAnimal(animal:Animal){
    return this.db.collection(this.collectionName).add(animal);
  }
  getAnimals(): Observable<firebase.firestore.QuerySnapshot>{
    return this.db.collection<Animal>(this.collectionName,ref => ref.orderBy('name',"asc")).get();
  }
  editAnimalFragment(id: string, obj:Object){
    return this.db.collection(this.collectionName).doc(id).update(obj);
  }
  deleteAnimal(id: string){
    return this.db.collection(this.collectionName).doc(id).delete();
  }
}
