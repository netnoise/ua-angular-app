import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from 'store';
import { tap } from 'rxjs/operators';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class AuthService {
  auth$ = this.af.authState.pipe(
    tap((next) => {
      if (!next) {
        this.store.set('user', null);
        return;
      }
      const user: User = {
        email: next.email,
        uid: next.uid,
        authenticated: true,
      };
      this.store.set('user', user);
    })
  );

  constructor(private store: Store, private af: AngularFireAuth) {}

  // tslint:disable-next-line:no-any
  get user(): Promise<any> {
    return this.af.currentUser;
  }

  // tslint:disable-next-line:no-any
  get authState(): Observable<any> {
    return this.af.authState;
  }

  createUser(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return this.af.createUserWithEmailAndPassword(email, password);
  }

  loginUser(
    email: string,
    password: string
  ): ReturnType<firebase.auth.Auth['signInWithEmailAndPassword']> {
    return this.af.signInWithEmailAndPassword(email, password);
  }

  async logoutUser(): Promise<void> {
    return this.af.signOut();
  }
}
