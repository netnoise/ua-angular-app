import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class AuthService {
  constructor(private af: AngularFireAuth) {}

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
}
