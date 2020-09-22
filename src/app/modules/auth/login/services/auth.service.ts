import { Injectable } from '@angular/core';
import { first, map, switchMap } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Observable, of, Subject } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Users } from '../../interfaces/user';
import { RoleValidator } from '../../helpers/roleValidator';
@Injectable({
  providedIn: 'root',
})
export class AuthService extends RoleValidator {
  public user$: Observable<User>;
  constructor(
    public afAuth: AngularFireAuth,
    private afirestore: AngularFirestore
  ) {
    super();
    this.user$ = afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afirestore.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    );
  }
  login(email: string, password: string) {
    try {
      const result = this.afAuth.signInWithEmailAndPassword(email, password);
      return result;
    } catch (ex) {}
  }
  register(email: string, password: string, users: Users): Promise<any> {
    try {
      const result = this.afAuth
        .createUserWithEmailAndPassword(email, password)
        .then((respond) => {
          this.createUserData(respond.user, users)
            .then((res) => {})
            .catch((ex) => {});
        })
        .catch((ex) => {});
      return result;
    } catch (ex) {}
  }
  logout() {
    try {
      this.afAuth.signOut();
    } catch (ex) {}
  }
  getCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }
  async sendVerificationEmail(): Promise<void> {
    return (await this.afAuth.currentUser).sendEmailVerification();
  }
  resetPassword(email: string): Promise<void> {
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch (ex) {}
  }
  //create User with Login in Firestore
  createUserData(user: User, users: Users) {
    const userRef: AngularFirestoreDocument<Users> = this.afirestore.doc(
      `users/${user.uid}`
    );
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
      role: 'Cliente',
      disabled: false,
    };
    return userRef.set(data, { merge: true });
  }
  //Exists DUI or NOT -- query
  getExistsDUI(dui: string): Observable<firebase.firestore.QuerySnapshot> {
    return this.afirestore
      .collection<Users>('users', (ref) => ref.where('dui', '==', dui))
      .get();
  }
  public usersElements:Array<Users> = [];
  //pass the data in the array
  loadElementsExistsDUI(duis: string){ 
    this.getExistsDUI(duis).subscribe((respond) => {
      respond.docs.forEach((value) => {
        const data = value.data();
        const id = value.id;
        const users: Users = {
          uid: id,
          email: data.email,
          name: data.name,
          lastname: data.lastname,
          dui: data.dui,
          age: data.age,
          displayName: data.displayName,
          photoURL: data.photoURL,
          createDate: data.createDate.toDate(),
          role: data.role,
          disabled: data.disabled,
        };
        this.usersElements.push(users);
      });
    });
  }
  getRole(uid: string): Observable<firebase.firestore.QuerySnapshot> {
    return this.afirestore
      .collection<Users>('users', (ref) => ref.where('uid', '==', uid))
      .get();
  }

}
