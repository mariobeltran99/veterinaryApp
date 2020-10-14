import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Message } from '../interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private db:AngularFirestore) { }
  private collectionName = 'contact';

  getContact(): Observable<firebase.firestore.QuerySnapshot>{
    return this.db.collection<Message>(this.collectionName,ref => ref.orderBy('email',"asc")).get();
  }
}
