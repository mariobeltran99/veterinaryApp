import { Injectable } from '@angular/core';
import { first, switchMap } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Observable, of, Subject } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Users } from '../../interfaces/user';
import { RoleValidator } from '../../helpers/roleValidator';
@Injectable({
  providedIn: 'root',
})
export class AuthService extends RoleValidator{
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
    const userRef:AngularFirestoreDocument<Users> = this.afirestore.doc(`users/${user.uid}`);
    const data: Users = {
      uid: user.uid,
      email: user.email,
      name: users.name,
      lastname: users.lastname,
      dui: users.dui,
      age: users.age,
      displayName: users.name + " " +  users.lastname,
      photoURL: null,
      createDate: new Date(),
      role: 'Administrador',
      disabled: false,
    };
    return userRef.set(data,{merge:true});
  }
  //Exists DUI or NOT
  existsDUI(dui:string){
    
  }
}
