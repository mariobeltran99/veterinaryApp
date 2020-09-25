import { Injectable } from '@angular/core';
import { first, switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Observable, of } from 'rxjs';
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
    try{
      return this.afAuth.authState.pipe(first()).toPromise();
    }catch(ex){} 
  }
  async sendVerificationEmail(): Promise<void> {
    try{
      return (await this.afAuth.currentUser).sendEmailVerification();
    }catch(ex){}
  }
  resetPassword(email: string): Promise<void> {
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch (ex) {}
  }
  //create User with Login in Firestore unique Clients
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
  //get Role on the User
  getRole(uid: string): Observable<firebase.firestore.QuerySnapshot> {
    return this.afirestore
      .collection<Users>('users', (ref) => ref.where('uid', '==', uid))
      .get();
  }

}
