import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) { 
    this.user = firebaseAuth.authState;
  }

  login(email:string, password:string) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('logged in');
      })
      .catch(value => {
        console.log('error logging in');
      });
  }

  register(email:string, password:string) {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('registered');
      })
      .catch(value => {
        console.log('error registering');
      });
  }
}
