import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AuthModule } from './auth/auth.module';
// @ts-ignore
import { Store } from 'store';
import { CoreModule } from './core/core.module';
import { AppNavComponent } from './core/components/app-nav/app-nav.component';

@NgModule({
  declarations: [AppComponent, AppNavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    AuthModule,
    CoreModule,
  ],
  providers: [Store],
  bootstrap: [AppComponent],
})
export class AppModule {}
