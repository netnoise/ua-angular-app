import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';

@NgModule({
  declarations: [AppNavComponent, AppHeaderComponent, AppFooterComponent],
  imports: [CommonModule],
  exports: [AppFooterComponent, AppNavComponent, AppHeaderComponent],
})
export class CoreModule {}
