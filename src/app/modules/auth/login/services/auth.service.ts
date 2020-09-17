import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user:User;
  constructor(public afAuth: AngularFireAuth) { }
  login(email:string, password:string){
    try{
      const result = this.afAuth.signInWithEmailAndPassword(email,password);
      return result;
    }catch (ex){

    }
  }
  register(email:string,password:string){
    try{
      const result = this.afAuth.createUserWithEmailAndPassword(email,password);
      return result;
    }catch(ex){
    }
  }
  logout(){
    try{
      this.afAuth.signOut();
    }catch(ex){

    }
  }
  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }
  async sendVerificationEmail(): Promise<void>{
     return (await this.afAuth.currentUser).sendEmailVerification();
  }
  resetPassword(email:string):Promise<void>{
    try{
      return this.afAuth.sendPasswordResetEmail(email);
    }catch(ex){
      console.log(ex);
    }
  }
}
