import { Injectable } from '@angular/core';
import { Contact } from 'src/app/home/interfaces/contact';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private db: AngularFirestore) { }
  private contactCollectionName = 'contact';

  saveContact(contact:Contact): Promise<DocumentReference>{
    return this.db.collection(this.contactCollectionName).add(contact)
  }
}
