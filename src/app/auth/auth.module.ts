import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from './shared/shared.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
})
export class AuthModule {}
