import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLoggedIn: firebase.User = null;

  constructor(private firebaseAuth: AngularFireAuth) { 
    this.firebaseAuth.authState.subscribe((user) => {
      this.userLoggedIn = user;
    });
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

  logout() {
    this.firebaseAuth.auth.signOut()
      .then(value => {
        console.log('logged out');
      })
      .catch(value => {
        console.log('error logging out');
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
