import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AuthModule } from './auth/auth.module';
// @ts-ignore
import { Store } from 'store';
import { AppNavComponent } from './core/components/app-nav/app-nav.component';
import { AppHeaderComponent } from './core/components/app-header/app-header.component';

@NgModule({
  declarations: [AppComponent, AppNavComponent, AppHeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    AuthModule,
  ],
  providers: [Store],
  bootstrap: [AppComponent],
})
export class AppModule {}
