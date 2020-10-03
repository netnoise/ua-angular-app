import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainerComponent } from './containers/login-container/login-container.component';
import { SharedModule } from '../shared/shared.module';

export const ROUTES: Routes = [
  { path: '', component: LoginContainerComponent },
];

@NgModule({
  declarations: [LoginContainerComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES), SharedModule],
})
export class LoginModule {}
