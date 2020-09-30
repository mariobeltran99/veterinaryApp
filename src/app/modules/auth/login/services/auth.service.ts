import { Injectable } from '@angular/core';
import { first, switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase';
import { Observable, of } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Users } from '../../interfaces/user';
import { RoleValidator } from '../../helpers/roleValidator';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
@Injectable({
  providedIn: 'root',
})
export class AuthService extends RoleValidator {
  public user$: Observable<User>;
  constructor(
    public afAuth: AngularFireAuth,
    private afirestore: AngularFirestore,
    private router: Router,
    private notification: NzNotificationService
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
  //open session
  login(email: string, password: string) {
    try {
      const result = this.afAuth.signInWithEmailAndPassword(email, password);
      return result;
    } catch (ex) {}
  }
  //register and login user with account Google
  loginGoogle() {
    try {
      return this.afAuth
        .signInWithPopup(new auth.GoogleAuthProvider())
        .then((res) => {
          this.getExistsUserWithGoogle(res.user.uid).subscribe((respond) => {
            const ust = respond.docs.length;
            if (ust == 0) {
              this.createUserDataWithGoogle(res.user)
                .then((rest) => {
                  this.router.navigate(['/steps-register']);
                })
                .catch((err) => {});
            } else {
              const userdata = respond.docs[0].data() as Users;
              if (userdata.disabled == false) {
                this.router.navigate(['/client']);
              } else {
                this.notification.create(
                  'warning',
                  'Error al iniciar sesión',
                  'El usuario está inhabilitado contácte al administrador del sitio'
                );
              }
            }
          });
        })
        .catch((ex) => {});
    } catch (ex) {}
  }
  //register user with email and password
  register(email: string, password: string, users: Users) {
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
  //close session
  logout() {
    try {
      this.afAuth.signOut();
    } catch (ex) {}
  }
  //user is logged
  getCurrentUser() {
    try {
      return this.afAuth.authState.pipe(first()).toPromise();
    } catch (ex) {}
  }
  //send email verification
  async sendVerificationEmail(): Promise<void> {
    try {
      return (await this.afAuth.currentUser).sendEmailVerification();
    } catch (ex) {}
  }
  //reset Password this user
  resetPassword(email: string) {
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
  //create data with account Google
  createUserDataWithGoogle(user: User) {
    const userRef: AngularFirestoreDocument<Users> = this.afirestore.doc(
      `users/${user.uid}`
    );
    const data: Users = {
      uid: user.uid,
      email: user.email,
      name: null,
      lastname: null,
      dui: null,
      age: null,
      displayName: user.displayName,
      photoURL: user.photoURL,
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
  //Exist User with AccountGoogle
  getExistsUserWithGoogle(
    id: string
  ): Observable<firebase.firestore.QuerySnapshot> {
    return this.afirestore
      .collection<Users>('users', (ref) => ref.where('uid', '==', id))
      .get();
  }
  //get Role on the User
  getRole(uid: string): Observable<firebase.firestore.QuerySnapshot> {
    return this.afirestore
      .collection<Users>('users', (ref) => ref.where('uid', '==', uid))
      .get();
  }
  //update user with account Google
  updateUserWithGoogle(id: string, obj: Object) {
    const collectionName = 'users';
    return this.afirestore.collection(collectionName).doc(id).update(obj);
  }
}
