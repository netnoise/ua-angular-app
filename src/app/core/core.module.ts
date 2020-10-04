import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './app-store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { RouterModule } from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [AppHeaderComponent, AppFooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot(),
  ],
  exports: [AppFooterComponent, AppHeaderComponent],
})
export class CoreModule {
  /*static forRoot(): ModuleWithProviders<{}> {
    return {
      ngModule: CoreModule,
    };
  }*/
}
