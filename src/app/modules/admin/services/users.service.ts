import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ViewUsers } from '../interfaces/view-users';
import { AngularFireAuth } from '@angular/fire/auth';
import { Roles, Users } from '../../auth/interfaces/user';
import { User } from 'firebase';
import { Vets } from '../interfaces/vets';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private db: AngularFirestore, private auth:AngularFireAuth) {}
  collectionName = 'users';
  getUsersClients(): Observable<firebase.firestore.QuerySnapshot> {
    return this.db
      .collection<ViewUsers>(this.collectionName, (ref) =>
        ref.where('role', '==', 'Cliente').orderBy('createDate', 'desc')
      )
      .get();
  }
  getUsers(): Observable<firebase.firestore.QuerySnapshot> {
    return this.db
      .collection<ViewUsers>(this.collectionName, (ref) =>
        ref.orderBy('createDate', 'desc')
      )
      .get();
  }
  editUsersFragment(id: string, obj: Object) {
    return this.db.collection(this.collectionName).doc(id).update(obj);
  }
  registerUser(email: string, password: string, users: Users, role:string, dataVet?:Vets) {
    try {
      const result = this.auth
        .createUserWithEmailAndPassword(email, password)
        .then((respond) => {
          this.createUser(respond.user, users, role)
            .then((res) => {
              if(role == 'Veterinario'){
                this.createVet(respond.user,dataVet);
              }
            })
            .catch((ex) => {});
        })
        .catch((ex) => {});
      return result;
    } catch (ex) {}
  }
  createUser(user:User, users:Users, roles:string){
    const userRef: AngularFirestoreDocument<Users> = this.db.doc(
      `users/${user.uid}`
    );
    let role:Roles;
    if(roles == 'Administrador'){
      role = 'Administrador';
    }else if(roles == 'Veterinario'){
      role = 'Veterinario';
    }else if(roles == 'Secretaria'){
      role = 'Secretaria';
    }else if(roles == 'Bodeguero'){
      role = 'Bodeguero';
    }
    const data: Users = {
      uid: user.uid,
      email: user.email,
      name: users.name,
      lastname: users.lastname,
      dui: users.dui,
      age: users.age,
      displayName: users.name + ' ' + users.lastname,
      photoURL: null,
      createDate: new Date(),
      role: role,
      disabled: false,
    };
    return userRef.set(data, { merge: true });
  }
  createVet(user:User,vet:Vets){
    const userRef: AngularFirestoreDocument<Vets> = this.db.doc(
      `vets/${user.uid}`
    );
    const data: Vets = {
      id: user.uid,
      specialty: vet.specialty,
      department: vet.department,
      description: null,
      qualification:0,
      quantity:0
    };
    return userRef.set(data, { merge: true });
  }

}
